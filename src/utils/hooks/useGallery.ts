import client from "../supabaseClient"
import { PostgrestError } from "@supabase/supabase-js"
import { Dispatch, useEffect, useState } from "react"

export interface Category {
	id: number
	name: string
	bucket: string
	photos: string[]
}

type SelectedCategory = Category & {
	noMorePhoto?: boolean
}

type ReturnGalleryType = {
	loading: boolean
	categories?: Category[]
	selected?: SelectedCategory
	setSelected: Dispatch<Category>
	error?: PostgrestError
	more: (limit: number) => void
}

function useGallery(limit: number): ReturnGalleryType {
	const [loading, setLoading] = useState(false)
	const [error, setError] = useState<PostgrestError>()
	const [categories, setCategories] = useState<Category[]>()
	const [selected, setSelected] = useState<SelectedCategory>()

	const getPhotos = async (
		bucket: string,
		limit?: number,
		offset?: number
	): Promise<PostgrestError | Array<string> | undefined> => {
		const photos = await client.storage.from("gallery").list(bucket, {
			limit,
			offset,
			sortBy: { column: "name", order: "asc" }
		})

		if (error) return error

		if (photos.data) {
			return await Promise.all(
				photos.data.map(
					async (p) =>
						await client.storage
							.from("gallery")
							.getPublicUrl(`${bucket}/${p.name}`).data.publicUrl
				)
			)
		}
	}

	const fetcher = async (): Promise<void> => {
		setLoading(true)
		const categories = await client.from("gallery-category").select()
		const map = new Map<string, Array<string>>()

		if (categories.error) {
			setError(categories.error)
			return
		}

		for (const item of categories.data) {
			const photos = await getPhotos(item.bucket, limit)

			if (Array.isArray(photos)) map.set(item.bucket, photos)

			const result = categories.data.map((c) => ({
				...c,
				photos: map.get(c.bucket) ?? []
			}))

			setCategories(result)
			setSelected(result[0])
		}

		setLoading(false)
	}

	const more = async (limit: number): Promise<void> => {
		setLoading(true)

		if (selected) {
			const newPhotos = await getPhotos(
				selected.bucket,
				limit,
				selected.photos.length
			)

			if (Array.isArray(newPhotos)) {
				setSelected((previous) =>
					previous
						? {
								...previous,
								photos: [...previous.photos, ...newPhotos],
								noMorePhoto: newPhotos.length < limit
						  }
						: previous
				)
			}
		}

		setLoading(false)
	}

	useEffect(() => {
		fetcher()
	}, [])

	return {
		categories,
		loading,
		error,
		more,
		setSelected,
		selected
	}
}

export default useGallery

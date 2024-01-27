import client from "../supabaseClient"
import { PostgrestError } from "@supabase/supabase-js"
import { useEffect, useState } from "react"

export interface Category {
	id: number
	name: string
	bucket: string
	photos: string[]
}

type ReturnGalleryType = {
	loading: boolean
	categories?: Category[]
	error?: PostgrestError
}

function useGallery(limit = 9): ReturnGalleryType {
	const [loading, setLoading] = useState(false)
	const [categories, setCategories] = useState<Category[]>()
	const [error, setError] = useState<PostgrestError>()

	const fetcher = async (): Promise<void> => {
		setLoading(true)
		const categories = await client.from("gallery-category").select()
		const map = new Map<string, string[]>()
		if (categories.error) {
			setError(categories.error)
			return
		}

		for (const item of categories.data) {
			const photos = await client.storage.from("gallery").list(item.bucket, {
				limit: limit
			})

			if (photos.data && !error) {
				const publicPhotos = await Promise.all(
					photos.data.map(
						async (p) =>
							await client.storage
								.from("gallery")
								.getPublicUrl(`${item.bucket}/${p.name}`)
					)
				)

				map.set(
					item.bucket,
					publicPhotos.map((p) => p.data.publicUrl)
				)
			}
		}

		setCategories(
			categories.data.map((c) => ({
				...c,
				photos: map.get(c.bucket) ?? []
			}))
		)
		setLoading(false)
	}

	useEffect(() => {
		fetcher()
	}, [])

	return {
		categories,
		loading,
		error
	}
}

export default useGallery

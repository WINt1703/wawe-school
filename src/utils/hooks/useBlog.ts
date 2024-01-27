import client from "../supabaseClient"
import { Database } from "../types/supabase"
import { PostgrestError } from "@supabase/supabase-js"
import { useEffect, useState } from "react"

export type Slide = Database["public"]["Tables"]["blog"]["Row"]

export type ReturnBlogType = {
	slides?: Array<Slide>
	loading: boolean
	error?: PostgrestError
}

function useBlog(): ReturnBlogType {
	const [loading, setLoading] = useState(false)
	const [error, setError] = useState<PostgrestError>()
	const [slides, setSlides] = useState<Array<Slide> | undefined>()

	const fetcher = async (): Promise<void> => {
		setLoading(true)

		const { data, error } = await client.from("blog").select()

		if (error) {
			setError(error)
		}

		setSlides(data ?? undefined)
		setLoading(false)
	}

	useEffect(() => {
		fetcher()
	}, [])

	return {
		error,
		slides,
		loading
	}
}

export default useBlog

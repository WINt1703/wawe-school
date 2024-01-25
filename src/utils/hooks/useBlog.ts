import fetcher from "./fetcher"
import useSWR, { SWRResponse } from "swr"

export interface Slide {
	id: number
	photo: string
	theme: string
	description: string
}

export type ReturnBlogType = Omit<SWRResponse, "data"> & {
	slides?: Array<Slide>
}

function useBlog(): ReturnBlogType {
	const { data, error, isLoading, isValidating, mutate } = useSWR<Array<Slide>>(
		"blog_slides",
		fetcher
	)

	return {
		error: error,
		slides: data,
		isLoading: isLoading,
		isValidating: isValidating,
		mutate: mutate
	}
}

export default useBlog

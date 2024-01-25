import fetcher from "./fetcher"
import useSWR, { SWRResponse } from "swr"

interface Gallery {
	currentCategory: string
	categories: Category[]
}

export interface Category {
	name: string
	photos: string[]
}

type ReturnGalleryType = Omit<SWRResponse<Gallery>, "data"> & {
	gallery?: Gallery
}

function useGallery(): ReturnGalleryType {
	const { data, error, isLoading, isValidating, mutate } = useSWR<Gallery>(
		"gallery",
		fetcher
	)

	return {
		error: error,
		gallery: data,
		isLoading: isLoading,
		isValidating: isValidating,
		mutate: mutate
	}
}

export default useGallery

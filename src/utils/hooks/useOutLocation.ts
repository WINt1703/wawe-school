import fetcher from "./fetcher"
import useSWR, { SWRResponse } from "swr"

interface OurLocation {
	zoomCenter: Location
	ourLocation: Location
	surfingHousePhoto: string
}

interface Location {
	lat: number
	lng: number
}

type ReturnLocationType = Omit<SWRResponse, "data"> & { location?: OurLocation }

function useOutLocation(): ReturnLocationType {
	const { data, error, isLoading, isValidating, mutate } = useSWR<OurLocation>(
		"location",
		fetcher
	)

	return {
		error: error,
		location: data,
		isLoading: isLoading,
		isValidating: isValidating,
		mutate: mutate
	}
}

export default useOutLocation

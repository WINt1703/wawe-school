import client from "../supabaseClient"
import ArrayElement from "../types/arrayElement"
import { Database } from "../types/supabase"
import { PostgrestError } from "@supabase/supabase-js"
import { useEffect, useState } from "react"

type GetMapReturnType = ArrayElement<
	Database["public"]["Functions"]["get_map"]["Returns"]
>

export type Map = Pick<GetMapReturnType, "id" | "photo"> & {
	zoom: [number, number]
	location: [number, number]
}

type ReturnMapType = {
	loading: boolean
	error?: PostgrestError
	map?: Map
}

function useOurLocation(): ReturnMapType {
	const [map, setMap] = useState<Map | undefined>()
	const [loading, setLoading] = useState(false)
	const [error, setError] = useState<PostgrestError>()

	const fetcher = async (): Promise<void> => {
		setLoading(true)

		const { data, error } = await client.rpc("get_map").select()

		if (error) setError(error)

		setMap(
			data && data[0].zoom && data[0].location
				? {
						...data[0],
						zoom: data[0].zoom as [number, number],
						location: data[0].location as [number, number]
				  }
				: undefined
		)
		setLoading(false)
	}

	useEffect(() => {
		fetcher()
	}, [])

	return {
		map,
		loading,
		error
	}
}

export default useOurLocation

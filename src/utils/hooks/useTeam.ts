import client from "../supabaseClient"
import { Database } from "../types/supabase"
import { PostgrestError } from "@supabase/supabase-js"
import { useEffect, useState } from "react"

export type Employee = Database["public"]["Tables"]["employee"]["Row"]

type ReturnTeamType = {
	loading: boolean
	error?: PostgrestError
	employee?: Array<Employee>
}

function useTeam(): ReturnTeamType {
	const [employee, setEmployee] = useState<Array<Employee> | undefined>()
	const [loading, setLoading] = useState(false)
	const [error, setError] = useState<PostgrestError>()

	const fetcher = async (): Promise<void> => {
		setLoading(true)

		const { data, error } = await client.from("employee").select()

		if (error) setError(error)

		setEmployee(data ?? undefined)
		setLoading(false)
	}

	useEffect(() => {
		fetcher()
	}, [])

	return {
		employee,
		loading,
		error
	}
}

export default useTeam

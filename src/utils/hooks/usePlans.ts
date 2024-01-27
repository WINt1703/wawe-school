import client from "../supabaseClient"
import { Database } from "../types/supabase"
import { PostgrestError } from "@supabase/supabase-js"
import { useEffect, useState } from "react"

export type Plan = Database["public"]["Tables"]["plan"]["Row"]

type ReturnPlansType = {
	loading: boolean
	error?: PostgrestError
	plans?: Array<Plan>
}

function usePlans(): ReturnPlansType {
	const [plans, setPlans] = useState<Array<Plan> | undefined>()
	const [loading, setLoading] = useState(false)
	const [error, setError] = useState<PostgrestError>()

	const fetcher = async (): Promise<void> => {
		setLoading(true)

		const { data, error } = await client.from("plan").select()

		if (error) setError(error)

		setPlans(data ?? undefined)
		setLoading(false)
	}

	useEffect(() => {
		fetcher()
	}, [])

	return {
		plans,
		loading,
		error
	}
}

export default usePlans

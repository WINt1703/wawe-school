import client from "../supabaseClient"
import { Database } from "../types/supabase"
import { PostgrestError } from "@supabase/supabase-js"
import { useState } from "react"

export type Slide = Database["public"]["Tables"]["blog"]["Row"]

type FormInputs = {
	name: string
	phone: string
	feedback: string
}

export type ReturnFeedbackType = {
	handler: (data: FormInputs) => void
	loading: boolean
	error?: PostgrestError
}

function useFeedback(): ReturnFeedbackType {
	const [loading, setLoading] = useState(false)
	const [error, setError] = useState<PostgrestError>()

	const handler = async (data: FormInputs): Promise<void> => {
		setLoading(true)

		const { error } = await client.from("feedback").insert({
			message: data.feedback,
			phone: data.phone,
			user_name: data.name
		})

		if (error) setError(error)

		setLoading(false)
	}

	return {
		error,
		loading,
		handler
	}
}

export default useFeedback

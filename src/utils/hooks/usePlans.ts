import useSWR, { SWRResponse } from "swr"
import fetcher from "./fetcher"

export interface Plan {
  id: number
  name: string
  price: number
  benefits: string[]
}

type ReturnPlansType = Omit<SWRResponse, "data"> & { plans?: Array<Plan> }

function usePlans(): ReturnPlansType {
  const { data, error, isLoading, isValidating, mutate } = useSWR<Array<Plan>>(
    "plans",
    fetcher
  )

  return {
    error: error,
    plans: data,
    isLoading: isLoading,
    isValidating: isValidating,
    mutate: mutate,
  }
}

export default usePlans

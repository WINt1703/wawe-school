import useSWR, { SWRResponse } from "swr"
import fetcher from "./fetcher"

export interface Teammate {
  id: number
  name: string
  jobPosition: string
  photo: string
}

type ReturnTeamType = Omit<SWRResponse, "data"> & {
  team?: Array<Teammate>
}

function useTeam(): ReturnTeamType {
  const { data, error, isLoading, isValidating, mutate } = useSWR<
    Array<Teammate>
  >("/team", fetcher)

  return {
    error: error,
    team: data,
    isLoading: isLoading,
    isValidating: isValidating,
    mutate: mutate,
  }
}

export default useTeam

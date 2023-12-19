export const baseUrl = "http://localhost:3001"

async function fetcher<TResponse>(file: string): Promise<TResponse> {
  return await fetch(baseUrl + file).then((response) => response.json())
}

export default fetcher

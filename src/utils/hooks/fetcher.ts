async function fetcher<TResponse>(file: string): Promise<TResponse> {
  return await fetch(process.env.PUBLIC_URL + file).then((response) => response.json())
}

export default fetcher

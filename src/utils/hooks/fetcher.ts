async function fetcher<TResponse>(file: string): Promise<TResponse> {
  return await fetch("http://localhost:3001" + file).then((response) => response.json())
}

export default fetcher

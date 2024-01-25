export const jsonUrl =
	"https://raw.githubusercontent.com/WINt1703/wawe-school/dev/db.json"

async function fetcher<TResponse>(field: string): Promise<TResponse> {
	return await fetch(jsonUrl)
		.then((response) => response.json())
		.then((json) => json[field])
}

export default fetcher

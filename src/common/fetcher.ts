export async function textFetcher (url: string): Promise<string | null> {
  const response = await fetch(url)
  if (!response.ok) {
    return null
  }
  const text = await response.text()
  return text
}

export async function jsonFetcher<T> (url: string): Promise<T | null> {
  const response = await fetch(url)
  if (!response.ok) {
    return null
  }
  const json = await response.json()
  return json
}

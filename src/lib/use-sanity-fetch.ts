import useSWR from "swr"
import { client } from "@/sanity/lib/client"

const fetcher = (query: string) => client.fetch(query)

export function useSanityFetch(query: string) {
  const { data, error } = useSWR(query, fetcher)

  return {
    data,
    isLoading: !error && !data,
    isError: error,
  }
}

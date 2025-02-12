import { createClient } from "next-sanity"

export const client = createClient({
  projectId: "x81oppbe",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: false,
})

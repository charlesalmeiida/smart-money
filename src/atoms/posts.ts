import { atom } from "jotai"

export type Post = {
  id: number
  title: {
    rendered: string
  }
  date: string
  slug: string
  content: {
    rendered: string
  }
  excerpt: {
    rendered: string
  }
  _embedded: {
    "wp:featuredmedia": Array<{
      media_details: {
        sizes: {
          large: {
            source_url: string
          }
        }
      }
    }>
    author: Array<{
      name: string
    }>
  }
}

export const formatDate = (date: string) => {
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
  }
  const formattedDate = new Date(date).toLocaleDateString("pt-BR", options)
  return formattedDate
    .split(" ")
    .map((word, index) => {
      if (index === 0) {
        return word.charAt(0).toUpperCase() + word.slice(1)
      }
      return word
    })
    .join(" ")
}

export const postsAtom = atom<Post[]>([])

export const fetchPostsAtom = atom(
  (get) => get(postsAtom),
  async (get, set) => {
    const response = await fetch(
      "https://devblog.insanydesign.com/wp-json/wp/v2/posts?_embed"
    )
    const data = await response.json()
    set(postsAtom, data)
  }
)

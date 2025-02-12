import { Post } from "@/types/post-blog"
import { atom } from "jotai"

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

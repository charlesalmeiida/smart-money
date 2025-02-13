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

export type Homepage = {
  title: string
  subtitle: string
  form: string
  buttonCta: string
}

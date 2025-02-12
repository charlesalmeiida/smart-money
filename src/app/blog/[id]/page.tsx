import { Breadcrumb } from "@/components/blog-page/breadcrumb"
import { ContentPost } from "@/components/blog-page/content-post"
import { Quote } from "@/components/blog-page/quote"
import { TitleAndAuthor } from "@/components/blog-page/title-author-post"
import { Container } from "@/components/container"
import Image from "next/image"

export default async function BlogPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const id = (await params).id
  const data = await fetch(
    `https://devblog.insanydesign.com/wp-json/wp/v2/posts/${id}?_embed`
  )
  const post = await data.json()

  return (
    <section className="pt-14 pb-14 lg:pb-44">
      <Container>
        <Breadcrumb>{post.title.rendered}</Breadcrumb>
        <div className="w-full max-w-[800px] mx-auto mt-4">
          <span className="text-neutral-white text-sm font-medium bg-primary-dark rounded-sm py-1 px-2">
            Desenvolvimento
          </span>
          <TitleAndAuthor
            author={post._embedded.author[0].name}
            date={post.date}
            title={post.title.rendered}
          />
        </div>
        <div className="w-full mt-10 lg:mt-14">
          <div className="relative w-full mx-auto max-w-[1008px] h-[434px]">
            <Image
              src={
                post._embedded["wp:featuredmedia"][0].media_details.sizes.large
                  .source_url
              }
              fill
              alt="Imagem principal do post do blog"
              className="object-cover  rounded-[4px]"
            />
          </div>
        </div>
        <Quote quote={post.excerpt.rendered} />
        <ContentPost content={post.content.rendered} />
      </Container>
    </section>
  )
}

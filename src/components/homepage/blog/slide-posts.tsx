"use client"

import { useEffect, useState } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/pagination"
import { Navigation, Pagination } from "swiper/modules"
import { CardBlog } from "./card-blog"
import Image from "next/image"
import { ContainerPagination } from "./slide.styles"
import { useAtomValue, useAtom } from "jotai"
import { postsAtom, fetchPostsAtom } from "@/atoms/posts"
import { formatDate } from "@/utils/format-date"
import { Post } from "@/types/post-blog"

export function SlidePosts() {
  const posts = useAtomValue(postsAtom)
  const [, fetchPosts] = useAtom(fetchPostsAtom)
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [swiperInstance, setSwiperInstance] = useState<any>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const loadPosts = async () => {
      await fetchPosts()
      setIsLoading(false)
    }
    loadPosts()
  }, [fetchPosts])
  useEffect(() => {
    if (swiperInstance && posts.length > 0) {
      swiperInstance.update()
    }
  }, [posts, swiperInstance])

  if (isLoading) {
    return <div>Carregando...</div>
  }

  return (
    <div className="pt-7 lg:pt-0 pl-6 lg:pl-0">
      <div className="hidden lg:flex justify-end gap-8 mb-14">
        <button className="swiper-button-prev">
          <Image
            className="rotate-180"
            src={"/svg/icon-slide.svg"}
            width={10}
            height={20}
            alt="Slide"
          />
        </button>
        <button className="swiper-button-next">
          <Image
            src={"/svg/icon-slide.svg"}
            width={10}
            height={20}
            alt="Slide"
          />
        </button>
      </div>
      <Swiper
        key={posts.length}
        observer={true}
        observeParents={true}
        slidesPerView={4}
        spaceBetween={34}
        breakpoints={{
          350: {
            slidesPerView: 1.2,
          },
          512: {
            slidesPerView: 1.6,
          },
          768: {
            slidesPerView: 2.5,
          },
          1024: {
            slidesPerView: 4,
          },
        }}
        pagination={{
          clickable: true,
          el: ".custom-pagination",
        }}
        modules={[Navigation, Pagination]}
        className="mySwiper"
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        onSwiper={(swiper) => setSwiperInstance(swiper)}
      >
        {posts.map((post: Post) => (
          <SwiperSlide key={post.id}>
            <CardBlog
              id={post.id}
              slug={post.slug}
              author={post._embedded.author[0].name}
              image={
                post._embedded["wp:featuredmedia"][0].media_details.sizes.large
                  .source_url
              }
              title={post.title.rendered}
              date={formatDate(post.date)}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <ContainerPagination className="custom-pagination"></ContainerPagination>
    </div>
  )
}

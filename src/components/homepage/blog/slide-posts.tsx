"use client"

import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/pagination"
import { Navigation, Pagination } from "swiper/modules"
import { CardBlog } from "./card-blog"
import Image from "next/image"
import { ContainerPagination } from "./slide.styles"

export function SlidePosts() {
  return (
    <div>
      <div className="flex justify-end gap-8 mb-14">
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
        slidesPerView={4}
        spaceBetween={34}
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
      >
        <SwiperSlide>
          <CardBlog />
        </SwiperSlide>
        <SwiperSlide>
          <CardBlog />
        </SwiperSlide>
        <SwiperSlide>
          <CardBlog />
        </SwiperSlide>
        <SwiperSlide>
          <CardBlog />
        </SwiperSlide>
        <SwiperSlide>
          <CardBlog />
        </SwiperSlide>
        <SwiperSlide>
          <CardBlog />
        </SwiperSlide>
        <SwiperSlide>
          <CardBlog />
        </SwiperSlide>
        <SwiperSlide>
          <CardBlog />
        </SwiperSlide>
      </Swiper>
      <ContainerPagination className="custom-pagination"></ContainerPagination>
    </div>
  )
}

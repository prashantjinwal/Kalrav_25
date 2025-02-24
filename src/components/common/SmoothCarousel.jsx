import React, { useState } from 'react';
import { SwiperSlide, Swiper } from 'swiper/react';
import { Autoplay, EffectCoverflow, FreeMode, Navigation, Pagination } from 'swiper/modules';
import "swiper/css";

const SmoothCarousel = ({ cards }) => {
  return (
    <Swiper
    loop={true}
      effect={'coverflow'}
      grabCursor={true}
      centeredSlides={false}
      initialSlide={1}
      spaceBetween={20}
      slidesPerView={1}
      modules={[EffectCoverflow,Pagination,Navigation]}
      coverflowEffect={{
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows:false,
      }}

      className="mySwiper"
      >
      {
        cards.map((Card, index) => (
          <SwiperSlide key={index} className="transition-transform duration-500 px-10">
            <Card />

          </SwiperSlide>
        ))
      }
    </Swiper >
  );
};

export default SmoothCarousel;
import React, { useState } from 'react';
import { SwiperSlide, Swiper } from 'swiper/react';
import { Autoplay, EffectCoverflow, FreeMode, Pagination } from 'swiper/modules';
import "swiper/css";

const SmoothCarousel = ({ cards }) => {
  return (
    <Swiper
    loop={true}
      effect={'coverflow'}
      grabCursor={true}
      centeredSlides={true}
      slidesPerView={2}
      initialSlide={1}
      spaceBetween={50}
      modules={[EffectCoverflow]}
      className="mySwiper"
      coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 1,
          scale: 0.75,
          slideShadows:false,
        }}
      >
      {
        cards.map((Card, index) => (
          <SwiperSlide key={index} className="transition-transform duration-500">
            <Card />
          </SwiperSlide>
        ))
      }
    </Swiper >
  );
};

export default SmoothCarousel;
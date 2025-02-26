import React from "react";
import { SwiperSlide, Swiper } from "swiper/react";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
import "swiper/css";

const SmoothCarousel = ({ cards , height ="32rem" }) => {
  return (
    <Swiper
      loop={true}
      effect={"coverflow"}
      grabCursor={true}
      centeredSlides={false}
      initialSlide={1}
      spaceBetween={20}
      slidesPerView={1}
      modules={[EffectCoverflow, Pagination, Navigation]}
      coverflowEffect={{
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: false,
      }}
      className="mySwiper"
      style={{ height: height }} // Ensure Swiper has a fixed height
    >
      {cards.map((Card, index) => (
        <SwiperSlide
          key={index}
          className="h-full flex items-center justify-center px-10"
        >
          <div className="flex items-center justify-center h-full w-full">
            <Card />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SmoothCarousel;

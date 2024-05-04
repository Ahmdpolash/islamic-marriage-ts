'use client'
import { Swiper, SwiperSlide } from "swiper/react";
import data from "../data/happycouple.json";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
import Image from "next/image";

const HappyCouple = () => {
  return (
    <div className="max-w-4xl texpu mx-auto mt-5 lg:mt-8 mb-5">
      <Swiper
        slidesPerView={3}
        spaceBetween={20}
        loop={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper h-full  "
        breakpoints={{
          320: {
            slidesPerView: 1,
          },
          375: {
            slidesPerView: 2,
          },
          425: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 3,
          },
          1280: {
            slidesPerView: 3,
          },
          1536: {
            slidesPerView: 3,
          },
        }}
      >
        {data.map((item, i) => (
          <SwiperSlide key={i} className=" border shadow-md ">
            <div className="mx-auto mb-3">
              <div className="relative">
                <Image
                  className="w-full mx-auto h-"
                  src={item.image}
                  height={140}
                  width={120}
                  alt="user"
                />
              </div>

              <div className="space-y-2 mt-3">
                <h1 className="text-dark font-semibold text-[16px] lg:text-[18px]">
                  {item.name}
                </h1>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HappyCouple;

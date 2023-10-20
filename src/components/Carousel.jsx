import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Caroitem from "./Caroitem";
function Carousel() {
  let arr = [1, 2, 3, 4];
  return (
    <Swiper className="swipe">
      {arr.map(() => {
        return (
          <SwiperSlide>
            <Caroitem />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}

export default Carousel;

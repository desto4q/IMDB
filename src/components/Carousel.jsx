import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  EffectCreative,
  EffectCube,
  EffectFade,
  Navigation,
  Pagination,
  Scrollbar,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import "swiper/css/navigation";

import Caroitem from "./Caroitem";
function Carousel() {
  let arr = [1, 2, 3, 4];
  return (
    <Swiper
      speed={1000}
      modules={[EffectFade, Pagination,Scrollbar,Navigation]}
      navigation={true}
      pagination={{clickable:true}}
      scrollbar={{ draggable: true }}
      effect="fade"
      className="swipe"
    >
      {arr.map((item) => {
        return (
          <SwiperSlide key={item}>
            <Caroitem num={item} />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}

export default Carousel;

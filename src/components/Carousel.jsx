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
import { useQuery } from "react-query";
import { popular } from "../api/api";
function Carousel() {
  let arr = [1, 2, 3, 4];

  let { data: caro_data } = useQuery(["caro_data"], popular);
  return (
    <Swiper
      speed={1000}
      modules={[EffectFade, Pagination, Scrollbar, Navigation]}
      navigation={true}
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      effect="fade"
      className="swipe"
    >
      {caro_data?.results?.map(({ id,release_date,vote_average,original_language, overview, backdrop_path, title }) => {
        return (
          <SwiperSlide key={id}>
            <Caroitem
            rating={vote_average}
              date={release_date}
              num={id}
              desc={overview}
              img={backdrop_path}
              title={title}
            />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}

export default Carousel;

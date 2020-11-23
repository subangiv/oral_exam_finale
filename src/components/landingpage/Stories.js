import React from "react";
import styles from "./LandingPage.module.scss";
import testimg from "../../images/test-image.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";

// Import Swiper styles
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/scrollbar/scrollbar.scss";
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

export default function Stories() {
  return (
    <section className={styles.wrapper}>
      <h3>
        Learn the stories of those have <br></br>
        already received help
      </h3>
      <Swiper
        spaceBetween={50}
        slidesPerView={4}
        navigation
        pagination={{ clickable: true }}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <div className={styles.purple__div}>
            <img src={testimg} alt="" />
            <p>
              Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem
              ipsum
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.purple__div}>
            <img src={testimg} alt="" />
            <p>
              Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem
              ipsum
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div className={styles.purple__div}>
            <img src={testimg} alt="" />
            <p>
              Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem
              ipsum
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div className={styles.purple__div}>
            <img src={testimg} alt="" />
            <p>
              Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem
              ipsum
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div className={styles.purple__div}>
            <img src={testimg} alt="" />
            <p>
              Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem
              ipsum
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}

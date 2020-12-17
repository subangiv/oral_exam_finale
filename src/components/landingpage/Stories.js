import React from "react";
import styles from "./LandingPage.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import data from "../json/stories.json";

// Import Swiper styles
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/scrollbar/scrollbar.scss";
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

export default function Stories() {
  const swiperStyle = {
    height: "420px",
  };
  return (
    <section className={styles.wrapper}>
      <h3>
        Learn the stories of those have <br></br>
        already received help
      </h3>
      <Swiper
        id="stories-swiper"
        className={styles.swiperCon + " stories-swiper-desktop"}
        // style={swiperStyle}
        spaceBetween={50}
        slidesPerView={4}
        navigation
        pagination={{ clickable: true }}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {data.Stories.map((story, i) => {
          return (
            <SwiperSlide key={i}>
              <div key={i}>
                <div className={styles.purple__div}>
                  <img
                    src={
                      process.env.PUBLIC_URL + "/story-images/" + story.image
                    }
                    alt=""
                  />
                  <p>"{story.quote}"</p>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
      <Swiper
        id="stories-swiper"
        className="stories-swiper-ipad"
        style={{ minHeight: "500px" }}
        spaceBetween={50}
        slidesPerView={2}
        navigation
        pagination={{ clickable: true }}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {data.Stories.map((story, i) => {
          return (
            <SwiperSlide key={i}>
              <div key={i}>
                <div className={styles.purple__div}>
                  <img
                    src={
                      process.env.PUBLIC_URL + "/story-images/" + story.image
                    }
                    alt=""
                  />
                  <p>"{story.quote}"</p>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
      <Swiper
        id="stories-swiper"
        className={styles.swiperCon + " stories-swiper-mobile"}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {data.Stories.map((story, i) => {
          return (
            <SwiperSlide key={i}>
              <div key={i}>
                <div className={styles.purple__div}>
                  <img
                    src={
                      process.env.PUBLIC_URL + "/story-images/" + story.image
                    }
                    alt=""
                  />
                  <p>"{story.quote}"</p>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
}

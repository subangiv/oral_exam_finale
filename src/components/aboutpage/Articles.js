import React from "react";
import styles from "./AboutPage.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import data from "../json/articles.json";
import "../../styles/Swiper.scss";

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

export default function Articles() {
  return (
    <section className={styles.wrapper}>
      <h3>Articles</h3>
      <div className={styles.articles__wrapper}>
        <Swiper
          id="article-swiper"
          spaceBetween={50}
          slidesPerView={2}
          navigation
          pagination={{ clickable: true }}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {data.Articles.map((article, i) => {
            return (
              <SwiperSlide>
                <div key={i}>
                  <div className={styles.purple__div}>
                    <a href={article.url}>
                      <h6>{article.desc}</h6>
                      <p>{article.author}</p>
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
}

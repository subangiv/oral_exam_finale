import React from "react";
import styles from "./AboutPage.module.scss";
import ReactPlayer from "react-player";

export default function AboutVid() {
  return (
    <section className={styles.flex__secondary}>
      <div className={styles.flex__left}>
        <p>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
          ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur.
        </p>
      </div>
      <div className={styles.flex__right__secondary}>
        <ReactPlayer
          width="100%"
          height="100%"
          url="https://youtu.be/z4BTYo3-YDk"
        />
      </div>
    </section>
  );
}

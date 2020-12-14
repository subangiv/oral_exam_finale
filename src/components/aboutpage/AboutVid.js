import React from "react";
import styles from "./AboutPage.module.scss";
import ReactPlayer from "react-player";

export default function AboutVid() {
  return (
    <section className={styles.flex__secondary}>
      <div className={styles.flex__left}>
        <p>
          The organization's goal is to entirely eliminate the need for
          intermediaries and create an abstraction from the advanced technology
          in a user-friendly and lightweight front-end, enabling all parties to
          transact seamlessly from anywhere in the world and from any device.{" "}
          <br></br>
          This 2 minute introduction video explains how the platform works.
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

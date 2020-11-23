import React from "react";
import AboutBanner from "./AboutBanner";
import AboutVid from "./AboutVid";
import Articles from "./Articles";

export default function AboutPage() {
  return (
    <section>
      <AboutBanner />
      <AboutVid />
      <Articles />
    </section>
  );
}

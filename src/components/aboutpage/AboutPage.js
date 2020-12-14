import React from "react";
import AboutBanner from "./AboutBanner";
import AboutVid from "./AboutVid";
import Articles from "./Articles";
import Profiles from "./Profiles";

export default function AboutPage() {
  return (
    <section>
      <AboutBanner />
      <AboutVid />
      <Articles />
      <Profiles />
    </section>
  );
}

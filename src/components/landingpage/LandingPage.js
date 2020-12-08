import React from "react";
import HeroBanner from "./HeroBanner";
import Intro from "./Intro";
import StepsProcess from "./StepsProcess";
import Stories from "./Stories";

export default function LandingPage() {
  return (
    <section>
      <HeroBanner />
      <Intro />
      <StepsProcess />
      <Stories />
    </section>
  );
}

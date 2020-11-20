import React from "react";
import HeroBanner from "./HeroBanner";
import Intro from "./Intro";
import StepsProcess from "./StepsProcess";

export default function LandingPage() {
  return (
    <section>
      <HeroBanner />
      <Intro />
      <StepsProcess />
    </section>
  );
}

import React, { Fragment } from "react";
import HpDesign from "../sections/homepage-sections/HpDesign";
import HpDev from "../sections/homepage-sections/HpDev";
import Info from "../sections/homepage-sections/Info";
import Intro from "../sections/homepage-sections/Intro";
import About from "../sections/homepage-sections/About";

const Homepage = () => {
  return (
    <Fragment>
      <main id="header-anchor" className="wrapper">
        <Intro />
        <Info />
        <HpDesign />
        <HpDev />
        <About />
      </main>
    </Fragment>
  );
};

export default Homepage;

import React, { Fragment } from "react";
import HpDesign from "../sections/homepage-sections/HpDesign";
import HpDevOpt from "../sections/homepage-sections/HpDevOpt";
import Info from "../sections/homepage-sections/Info";
import Intro from "../sections/homepage-sections/Intro";
import About from "../sections/homepage-sections/About";

const Homepage = () => {
  return (
    <Fragment>
      <main id="header-anchor">
        <div className="wrapper homepage">
          <Intro />
          <Info />
          <HpDesign />
        </div>
        <HpDevOpt />
        <About />
      </main>
    </Fragment>
  );
};

export default Homepage;

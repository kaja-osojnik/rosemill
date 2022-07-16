import React from "react";
import kaja from "../../../img/kaja.jpg";

const About = () => {
  return (
    <section className="about">
      <h2 className="heading-2">iii. about</h2>

      <div className="img">
        <div className="kaja-img"></div>
        {/* <img src={kaja} alt="" /> */}
      </div>

      <p className="intro-copy info-text">
        Rosemill // Kaja Osojnik is living and working remotely as a
        web-developer, designer and a free spirit in Morocco, Africa. She is a
        forever passionate about learning and developing her skillset and has
        worked on different commercial and creative projects.
      </p>
    </section>
  );
};

export default About;

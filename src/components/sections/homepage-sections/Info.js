import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Info = () => {
  useEffect(() => {
    gsap.to(".intro-copy", {
      duration: 0.2,
      y: 0,
      stagger: 0.1,
      scrollTrigger: {
        trigger: ".intro-copy",
        markers: false,
        start: "top bottom-=10%",
        end: "bottom 30%",
        scrub: 0.2,
      },
    });
    // eslint-disable-next-line
  }, []);
  return (
    <section className="intro">
      <div className="of-hidden wrapper">
        <p className="intro-copy cc1">
          Welcome to <strong>rosemill</strong>'s digital portfolio presenting
        </p>
      </div>
      <div className="of-hidden">
        <p className="intro-copy cc2">
          her work in fields of <span>front-end development</span>,
        </p>
      </div>
      <div className="of-hidden">
        <p className="intro-copy cc3">
          <span>graphic design</span> and <span>collage</span>.
        </p>
      </div>
    </section>
  );
};

export default Info;

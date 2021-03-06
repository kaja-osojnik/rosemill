import React, { useEffect } from "react";
import gif from "../../img/webdev.gif";
import gsap from "gsap";
import ButtonMailto from "./ButtonMailto";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const WebDev = () => {
  useEffect(() => {
    gsap.timeline({
      scrollTrigger: {
        trigger: ".main-gif",
        pin: true,
        end: "bottom 50%",
      },
    });

    gsap
      .timeline({
        defaults: {
          delay: 1,
        },
      })
      .to(
        ".h1-letter",
        {
          y: 0,
          ease: "power2.out",
          duration: 1.5,

          stagger: {
            each: 0.1,
            from: "start", // center, start
          },
        },
        "-=1"
      )
      .to(
        ".rosemill",
        {
          autoAlpha: 1,
          duration: 0.6,
        },
        "-=0.9"
      );

    ScrollTrigger.matchMedia({
      // small
      "(max-width: 768px)": function () {
        gsap.to(".intro-copy", {
          duration: 0.2,
          y: 0,
          stagger: 0.1,
          scrollTrigger: {
            trigger: ".intro-copy",
            markers: false,
            start: "top bottom-=10%",
            end: "bottom 50%",
            scrub: 0.2,
          },
        });
      },

      // all
      all: function () {
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
      },
    });

    //eslint-disable-next-line
  }, []);
  return (
    <main id="header-anchor">
      <section className="sec-des-main-gif">
        <div className="main-gif main-gif-dev">
          <img src={gif} alt="main gif" />
        </div>
        <div className="main-heading-wrap">
          <div className="h1-wrap">
            <h1>
              <div className="h1-letter">w</div>
              <div className="h1-letter">e</div>
              <div className="h1-letter">b</div>
              <div className="h1-letter">d</div>
              <div className="h1-letter">e</div>
              <div className="h1-letter">v</div>
            </h1>
          </div>
          <h3 className="rosemill">
            <span>/</span>FRONT-END DEVELOPMENT
          </h3>
        </div>
      </section>

      <section className="intro intro-dev">
        <div className="of-hidden wrapper">
          <p className="intro-copy cc1">
            Due to the ownership of the client???s websites I am
          </p>
        </div>
        <div className="of-hidden">
          <p className="intro-copy cc2">
            unable to exhibit my recent works publicly, but happy to
          </p>
        </div>
        <div className="of-hidden">
          <p className="intro-copy cc3">forward you the links.</p>
        </div>
        <div className="of-hidden mt64">
          <p className="intro-copy cc4">
            {" "}
            <ButtonMailto
              label="Get in touch"
              mailto="mailto:kaja.osojnik@gmail.com"
            />
          </p>
        </div>
      </section>
    </main>
  );
};

export default WebDev;

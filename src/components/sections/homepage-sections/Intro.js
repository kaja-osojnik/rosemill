import React, { Fragment, useRef, useEffect } from "react";
import rose from "../../../img/rose1_compressed.png";
import moon from "../../../img/moon_compressed.png";
import gsap, { Power3 } from "gsap";

const Intro = () => {
  const tl = gsap.timeline();
  useEffect(() => {
    gsap.to(".mainPlanet", {
      rotate: 360,
      duration: 45,
      repeat: -1,
    });

    gsap
      .timeline({
        defaults: {
          easing: "power3.out",
          stagger: 0.25,
          duration: 0.7,
        },
        // repeat: 1,
      })
      .to(".bounce", { scale: 1 })
      .to(".bounce", { scale: 0 }, "-=0.3")
      .to(".loading", { autoAlpha: 0, duration: 1 });

    tl.to(".planetPosition", {
      height: 750,
      duration: 0.8,
      ease: "power2.out",
      delay: 3,
    })
      .to(".mainPlanet", {
        autoAlpha: 1,
        duration: 1,
      })
      .to(
        ".smallPlanet",
        {
          autoAlpha: 1,
          duration: 0.6,
        },
        "-=0.5"
      )
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
        "-=0.7"
      )
      .to(".rosemill", {
        autoAlpha: 1,
        duration: 0.6,
      })
      .to(
        ".city-group",
        {
          x: 0,
          autoAlpha: 1,
          ease: "power2.out",
          duration: 0.8,
        },
        "-=0.2"
      )
      .to(
        ".scroll-arrow",
        {
          right: 0,
        },
        "<"
      );
    //eslint-disable-next-line
  }, []);

  return (
    <Fragment>
      <div className="loading">
        <div className="spinner">
          <div className="bounce1 bounce"></div>
          <div className="bounce2 bounce"> </div>
          <div className="bounce3 bounce"> </div>
        </div>
      </div>
      <section>
        <div className="main-gif">
          <div className="planetPosition">
            <div className="planets-wrap">
              <div className="near-orbit"></div>
              <div
                className="mainPlanet"
                style={{ backgroundImage: `url(${moon})` }}
              >
                <div
                  className="smallPlanet mars pixelator"
                  data-original={rose}
                >
                  <img src={rose} alt="Rose" />
                </div>
                <div className="smallPlanet saturn">
                  <img src={rose} alt="Rose" />
                </div>
                <div className="smallPlanet planet-x">
                  <img src={rose} alt="Rose" />
                </div>

                <div className="smallPlanet planet-y">
                  <img src={rose} alt="Rose" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="main-heading-wrap">
          <div className="h1-wrap">
            <h1>
              <div className="h1-letter">r</div>
              <div className="h1-letter">o</div>
              <div className="h1-letter">s</div>
              <div className="h1-letter">e</div>
              <div className="h1-letter">m</div>
              <div className="h1-letter">i</div>
              <div className="h1-letter tall">l</div>
              <div className="h1-letter tall">l</div>
            </h1>
          </div>
          <h3 className="rosemill">
            <span>/</span>WEB DESIGN, COLLAGE <br />& FRONT-END DEVELOPEMENT
          </h3>
          <div className="city">
            <span className="koordinate group city-group">
              <a target="_blank" href="https://www.instagram.com/juxtax/?hl=en">
                [@juxtax]
              </a>
            </span>
            <span className="ljubljana group city-group">[ma - si]</span>
          </div>
        </div>

        <div className="scroll-arrow down">
          <p>&#8642;</p>
        </div>
      </section>
    </Fragment>
  );
};

export default Intro;

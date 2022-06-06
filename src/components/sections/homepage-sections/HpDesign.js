import React, { Fragment, useEffect } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const HpDesign = () => {
  useEffect(() => {
    gsap.to(".design-trigger", {
      duration: 1,
      autoAlpha: 1,
      stagger: 0.3,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".design-trigger",
        markers: false,
        start: "top bottom-=60%",
        end: "bottom",
        scrub: 0.2,
      },
    });
    // eslint-disable-next-line
  }, []);
  return (
    <Fragment>
      <section className="test-sticky design design-trigger">
        <h2 className="heading-2">i. design</h2>
      </section>

      <section className="design-portfolio-front design-trigger">
        <div className="design-piece">
          <Link to="/design" className="design-thumbnail rbno">
            <h3>//rbno 2.1a</h3>
            <div className="pixelator rbno-img"></div>
            <span>ALBUM COVER</span>
          </Link>

          <Link to="/design" className="design-thumbnail tracks">
            <h3>//Tracks</h3>
            <div className="pixelator tracks-img"></div>
            <span>BOOK DESIGN</span>
          </Link>

          <Link to="/design" className="design-thumbnail bananaleaves">
            <h3>
              //Banana <br />
              Leaves
            </h3>
            <div className="pixelator bananaleaves-img"></div>
            <span>BRANDING</span>
          </Link>
        </div>

        <div className="design-piece">
          <Link to="/design" className="design-thumbnail bunch">
            <h3>//Bunch</h3>
            <div className="pixelator bunch-img"></div>
            <span>BRANDING</span>
          </Link>

          <Link to="/design" className="design-thumbnail maybe">
            <h3>//Maybe mag</h3>
            <div className="pixelator maybe-img"></div>
            <span>PUBLICATION</span>
          </Link>

          <Link to="/design" className="design-thumbnail strider">
            <h3>//Strider</h3>
            <div className="pixelator strider-img"></div>
            <span>BRANDING</span>
          </Link>
        </div>
        {/* <Link to="/design" className="see-all-design">
          SEE ALL DESIGN & COLLAGE
        </Link> */}
      </section>
    </Fragment>
  );
};

export default HpDesign;

import React, { Fragment, useEffect } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import rbnoBack from "../../../img/Rbno2/album_back.png";
import wallpaper from "../../../img/Rbno2/album_wallpaper.jpg";
import tracksFront from "../../../img/Tracks/tracks_cover.png";
import tracksBack from "../../../img/Tracks/tracks_back.png";
import washingPowder from "../../../img/Banana/washingpowder.png";
import tea from "../../../img/Banana/tea.png";

gsap.registerPlugin(ScrollTrigger);

const HpDesign = () => {
  useEffect(() => {
    gsap.to(".design-trigger", {
      duration: 0.6,
      autoAlpha: 1,
      // stagger: 0.3,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".design-trigger",
        markers: false,
        start: "top bottom-=60%",
        end: "top",
        // scrub: 0.2,
        // toggleActions: "reset",
      },
    });

    gsap.to(".design-thumbnail.rbno .rot-img-right", {
      duration: 0.6,
      rotate: 30,
      // stagger: 0.3,
      ease: "power2.out",
      left: "30%",
      scrollTrigger: {
        trigger: ".design-thumbnail.rbno .relative",
        markers: false,
        start: "top 70%",
        end: "top 20%",
        toggleActions: "play reverse restart reverse",
      },
    });

    gsap.to(".design-thumbnail.rbno .rot-img-left", {
      duration: 0.5,
      rotate: -30,
      ease: "power2.out",
      left: "-30%",
      scrollTrigger: {
        trigger: ".design-thumbnail.rbno .relative",
        markers: false,
        start: "top 70%",
        end: "top 20%",
        toggleActions: "play reverse restart reverse",
      },
    });

    gsap.to(".design-thumbnail.tracks .rot-img-right", {
      duration: 0.5,
      rotate: 30,
      ease: "power2.out",
      left: "50%",
      scrollTrigger: {
        trigger: ".design-thumbnail.tracks .relative",
        markers: false,
        start: "top 70%",
        end: "top 20%",
        toggleActions: "play reverse restart reverse",
      },
    });

    gsap.to(".design-thumbnail.tracks .rot-img-left", {
      duration: 0.5,
      rotate: -30,
      ease: "power2.out",
      left: "-50%",
      scrollTrigger: {
        trigger: ".design-thumbnail.tracks .relative",
        markers: false,
        start: "top 70%",
        end: "top 20%",
        toggleActions: "play reverse restart reverse",
      },
    });

    gsap.to(".design-thumbnail.bananaleaves .rot-img-right", {
      duration: 0.5,
      rotate: 30,
      ease: "power2.out",
      left: "calc(50% + 75px)",
      scrollTrigger: {
        trigger: ".design-thumbnail.bananaleaves .relative",
        markers: true,
        start: "top 70%",
        end: "top 20%",
        toggleActions: "play reverse restart reverse",
      },
    });

    gsap.to(".design-thumbnail.bananaleaves .rot-img-left", {
      duration: 0.5,
      rotate: -30,
      ease: "power2.out",
      left: "-150px",
      scrollTrigger: {
        trigger: ".design-thumbnail.bananaleaves .relative",
        markers: false,
        start: "top 70%",
        end: "top 20%",
        toggleActions: "play reverse restart reverse",
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
          <Link to="/design" className="design-thumbnail rbno skewElem mb80">
            <h3>//rbno 2.1a</h3>
            <div className="relative">
              <img
                src={rbnoBack}
                alt="Rbno2 Back"
                className="rot-img rot-img-right "
              />
              <img
                src={wallpaper}
                alt="Wallpaper"
                className="rot-img rot-img-left"
              />
              <div className="pixelator rbno-img"></div>
            </div>
            <span>ALBUM COVER</span>
          </Link>

          <Link to="/design" className="design-thumbnail tracks skewElem ">
            <h3>//Tracks</h3>
            <div className="relative">
              <img
                src={tracksFront}
                alt="Tracks Back"
                className="rot-img rot-img-right "
              />
              <img
                src={tracksBack}
                alt="Tracks Front"
                className="rot-img rot-img-left"
              />
              <div className="pixelator tracks-img"></div>
            </div>

            <span>BOOK DESIGN</span>
          </Link>

          <Link
            to="/design"
            className="design-thumbnail bananaleaves skewElem mb80"
          >
            <h3>
              //Banana <br />
              Leaves
            </h3>
            <div className="relative">
              <img
                src={tea}
                alt="Tshirt Tag"
                className="rot-img rot-img-right "
              />
              <img
                src={washingPowder}
                alt="Washing powder"
                className="rot-img rot-img-left"
              />
              <div className="pixelator bananaleaves-img"></div>
            </div>
            <span>BRANDING</span>
          </Link>
        </div>

        <div className="design-piece">
          <Link to="/design" className="design-thumbnail bunch skewElem">
            <h3>//Bunch</h3>
            <div className="pixelator bunch-img"></div>
            <span>BRANDING</span>
          </Link>

          <Link to="/design" className="design-thumbnail maybe skewElem">
            <h3>//Maybe mag</h3>
            <div className="relative">
              <img
                src={tea}
                alt="Tshirt Tag"
                className="rot-img rot-img-right "
              />
              <img
                src={washingPowder}
                alt="Washing powder"
                className="rot-img rot-img-left"
              />
              <div className="pixelator maybe-img"></div>
            </div>

            <span>PUBLICATION</span>
          </Link>

          <Link to="/design" className="design-thumbnail strider skewElem">
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

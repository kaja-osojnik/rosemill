import React, { Fragment, useEffect } from "react";
import gsap from "gsap";
import { Link } from "react-router-dom";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import rbnoBack from "../../../img/Rbno2/album_back.png";
import wallpaper from "../../../img/Rbno2/album_wallpaper.jpg";
import tracksFront from "../../../img/Tracks/tracks_cover.png";
import tracksBack from "../../../img/Tracks/tracks_back.png";
import washingPowder from "../../../img/Banana/washingpowder.png";
import tea from "../../../img/Banana/tea.png";
import maybeTitle from "../../../img/Maybe/maybe_title.png";
import bunchPone from "../../../img/Bunch/phone_screen.png";
import bunchSign from "../../../img/Bunch/sign-right.png";
import StriderBottle from "../../../img/Strider/strider_waterbottle-right.png";
import StriderScreen from "../../../img/Strider/strider_screen.jpg";

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
      },
    });
    gsap
      .timeline({
        duration: 0.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".design-thumbnail.tracks .relative",
          markers: false,
          start: "top 70%",
          end: "top 20%",
          toggleActions: "play reverse restart reverse",
        },
      })
      .to(".design-thumbnail.tracks .rot-img-right", {
        left: "17vw",
      })
      .to(
        ".design-thumbnail.tracks .rot-img-left",
        {
          left: "-7vw",
        },
        "<"
      )
      .to(
        ".design-thumbnail.tracks .h3-wrap",
        {
          y: 0,
          duration: 0.4,
        },
        "-=0.7"
      )
      .to(
        ".design-thumbnail.tracks .h3-wrap h3",
        {
          autoAlpha: 1,
          duration: 0.2,
          delay: 0.1,
        },
        "-=0.2"
      )
      .to(
        ".design-thumbnail.tracks .vert-line",
        {
          height: 32,
          duration: 0.2,
        },
        "<"
      )
      .to(".design-thumbnail.tracks .th-desc p", {
        autoAlpha: 1,
      });

    gsap
      .timeline({
        duration: 0.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".design-thumbnail.rbno .relative",
          markers: false,
          start: "top 70%",
          end: "top 20%",
          toggleActions: "play reverse restart reverse",
        },
      })
      .to(".design-thumbnail.rbno .rot-img-right", {
        left: "17vw",
      })
      .to(
        ".design-thumbnail.rbno .rot-img-left",
        {
          left: "-7vw",
        },
        "<"
      )
      .to(
        ".design-thumbnail.rbno .h3-wrap",
        {
          y: 0,
          duration: 0.4,
        },
        "-=0.7"
      )
      .to(
        ".design-thumbnail.rbno .h3-wrap h3",
        {
          autoAlpha: 1,
          duration: 0.2,
          delay: 0.1,
        },
        "-=0.2"
      )
      .to(
        ".design-thumbnail.rbno .vert-line",
        {
          height: 32,
          duration: 0.2,
        },
        "<"
      )
      .to(".design-thumbnail.rbno .th-desc p", {
        autoAlpha: 1,
      });

    gsap
      .timeline({
        duration: 0.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".design-thumbnail.bananaleaves .relative",
          markers: false,
          start: "top 70%",
          end: "top 20%",
          toggleActions: "play reverse restart reverse",
        },
      })
      .to(".design-thumbnail.bananaleaves .rot-img-right", {
        left: "17vw",
      })
      .to(
        ".design-thumbnail.bananaleaves .rot-img-left",
        {
          left: "-7vw",
        },
        "<"
      )
      .to(
        ".design-thumbnail.bananaleaves .h3-wrap",
        {
          y: 0,
          duration: 0.4,
        },
        "-=0.7"
      )
      .to(
        ".design-thumbnail.bananaleaves .h3-wrap h3",
        {
          autoAlpha: 1,
          duration: 0.2,
          delay: 0.1,
        },
        "-=0.2"
      )
      .to(
        ".design-thumbnail.bananaleaves .vert-line",
        {
          height: 32,
          duration: 0.2,
        },
        "<"
      )
      .to(".design-thumbnail.bananaleaves .th-desc p", {
        autoAlpha: 1,
      });

    gsap
      .timeline({
        duration: 0.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".design-thumbnail.maybe .relative",
          markers: false,
          start: "top 70%",
          end: "top 20%",
          toggleActions: "play reverse restart reverse",
        },
      })
      .to(".design-thumbnail.maybe .rot-img-right", {
        left: "17vw",
      })
      .to(
        ".design-thumbnail.maybe .rot-img-left",
        {
          left: "-7vw",
        },
        "<"
      )
      .to(
        ".design-thumbnail.maybe .h3-wrap",
        {
          y: 0,
          duration: 0.4,
        },
        "-=0.7"
      )
      .to(
        ".design-thumbnail.maybe .h3-wrap h3",
        {
          autoAlpha: 1,
          duration: 0.2,
          delay: 0.1,
        },
        "-=0.2"
      )
      .to(
        ".design-thumbnail.maybe .vert-line",
        {
          height: 32,
          duration: 0.2,
        },
        "<"
      )
      .to(".design-thumbnail.maybe .th-desc p", {
        autoAlpha: 1,
      });

    gsap
      .timeline({
        duration: 0.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".design-thumbnail.bunch .relative",
          markers: false,
          start: "top 70%",
          end: "top 20%",
          toggleActions: "play reverse restart reverse",
        },
      })
      .to(".design-thumbnail.bunch .rot-img-right", {
        left: "17vw",
      })
      .to(
        ".design-thumbnail.bunch .rot-img-left",
        {
          left: "-7vw",
        },
        "<"
      )
      .to(
        ".design-thumbnail.bunch .h3-wrap",
        {
          y: 0,
          duration: 0.4,
        },
        "-=0.7"
      )
      .to(
        ".design-thumbnail.bunch .h3-wrap h3",
        {
          autoAlpha: 1,
          duration: 0.2,
          delay: 0.1,
        },
        "-=0.2"
      )
      .to(
        ".design-thumbnail.bunch .vert-line",
        {
          height: 32,
          duration: 0.2,
        },
        "<"
      )
      .to(".design-thumbnail.bunch .th-desc p", {
        autoAlpha: 1,
      });

    gsap
      .timeline({
        duration: 0.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".design-thumbnail.strider .relative",
          markers: false,
          start: "top 70%",
          end: "top 20%",
          toggleActions: "play reverse restart reverse",
        },
      })
      .to(".design-thumbnail.strider .rot-img-right", {
        left: "17vw",
      })
      .to(
        ".design-thumbnail.strider .rot-img-left",
        {
          left: "-7vw",
        },
        "<"
      )
      .to(
        ".design-thumbnail.strider .h3-wrap",
        {
          y: 0,
          duration: 0.4,
        },
        "-=0.7"
      )
      .to(
        ".design-thumbnail.strider .h3-wrap h3",
        {
          autoAlpha: 1,
          duration: 0.2,
          delay: 0.1,
        },
        "-=0.2"
      )
      .to(
        ".design-thumbnail.strider .vert-line",
        {
          height: 32,
          duration: 0.2,
        },
        "<"
      )
      .to(".design-thumbnail.strider .th-desc p", {
        autoAlpha: 1,
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
          <div className="design-thumbnail rbno skewElem">
            <div className="h3-container">
              <div className="h3-wrap bg-white">
                <h3>Rbno.2</h3>
              </div>
            </div>
            <div className="relative">
              <img
                src={rbnoBack}
                alt="Album back"
                className="rot-img rot-img-right "
              />
              <img
                src={wallpaper}
                alt="Wallpaper"
                className="rot-img rot-img-left"
              />
              <Link to="/design">
                <div className="rbno-img"></div>
                <div className="th-desc">
                  <div className="vert-line"></div>
                  <p className="text-center">ALBUM COVER</p>
                </div>
              </Link>
            </div>
          </div>

          <div className="design-thumbnail tracks skewElem ">
            <div className="h3-container">
              <div className="h3-wrap bg-white">
                <h3>Tracks</h3>
              </div>
            </div>
            <div className="relative">
              <img
                src={tracksBack}
                alt="Tracks Back"
                className="rot-img rot-img-right "
              />
              <img
                src={tracksFront}
                alt="Tracks Front"
                className="rot-img rot-img-left"
              />
              <Link to="/design">
                <div className="tracks-img"></div>
                <div className="th-desc">
                  <div className="vert-line"></div>
                  <p className="text-center">BOOK DESIGN</p>
                </div>
              </Link>
            </div>
          </div>
        </div>

        <div className="design-piece">
          <div className="design-thumbnail bananaleaves skewElem mt80">
            <div className="h3-container">
              <div className="h3-wrap bg-white">
                <h3>Banana Leaves</h3>
              </div>
            </div>
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
              <Link to="/design">
                <div className="bananaleaves-img"></div>
                <div className="th-desc">
                  <div className="vert-line"></div>
                  <p className="text-center">BRANDING</p>
                </div>
              </Link>
            </div>
          </div>
          <div className="design-thumbnail bunch skewElem mt80">
            <div className="h3-container">
              <div className="h3-wrap bg-white">
                <h3>Bunch</h3>
              </div>
            </div>
            <div className="relative">
              <img
                src={bunchPone}
                alt="Bunch Website"
                className="rot-img rot-img-left"
              />
              <img
                src={bunchSign}
                alt="Bunch Sign"
                className="rot-img rot-img-right"
              />
              <Link to="/design">
                <div className="bunch-img"></div>
                <div className="th-desc">
                  <div className="vert-line"></div>
                  <p className="text-center">BRANDING</p>
                </div>
              </Link>
            </div>
          </div>
        </div>

        <div className="design-piece">
          <div className="design-thumbnail maybe skewElem mt80">
            <div className="h3-container">
              <div className="h3-wrap bg-white">
                <h3>Maybe</h3>
              </div>
            </div>
            <div className="relative">
              <img
                src={maybeTitle}
                alt="Maybe Spread"
                className="rot-img rot-img-left"
              />
              <img
                src={maybeTitle}
                alt="Maybe Spread"
                className="rot-img rot-img-right"
              />
              <Link to="/design">
                <div className="maybe-img"></div>
                <div className="th-desc">
                  <div className="vert-line"></div>
                  <p className="text-center">PUBLICATION</p>
                </div>
              </Link>
            </div>
          </div>

          <div className="design-thumbnail strider skewElem mt80">
            <div className="h3-container">
              <div className="h3-wrap bg-white">
                <h3>Strider</h3>
              </div>
            </div>
            <div className="relative">
              <img
                src={StriderScreen}
                alt="Strider Bottle"
                className="rot-img rot-img-left"
              />
              <img
                src={StriderBottle}
                alt="Strider Website"
                className="rot-img rot-img-right"
              />
              <Link to="/design">
                <div className="strider-img"></div>
                <div className="th-desc">
                  <div className="vert-line"></div>
                  <p className="text-center">BRANDING</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default HpDesign;

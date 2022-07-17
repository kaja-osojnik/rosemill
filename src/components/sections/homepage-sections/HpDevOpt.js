import React, { useEffect } from "react";
import gsap from "gsap";
import mudra from "../../../img/mudra-screen.png";
import rps from "../../../img/rock-paper-scissors.png";
import aleks from "../../../img/aleksander.png";
import mimi from "../../../img/mimi_yoga.png";
import jiffy from "../../../img/jiffy.png";
import marvin from "../../../img/marvin.png";
import dolores from "../../../img/webdevs/dolores.png";
import karuna from "../../../img/webdevs/karuna.png";
import inox from "../../../img/webdevs/inox.png";
import salamander from "../../../img/webdevs/salamander.png";
import bewater from "../../../img/webdevs/bewater.png";
import { Link } from "react-router-dom";

const HpDevOpt = () => {
  useEffect(() => {
    let sections = gsap.utils.toArray(".panel");
    let sections2 = gsap.utils.toArray(".panel2");

    gsap.to(sections, {
      xPercent: -100 * (sections.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: ".horizontal-body",
        pin: true,
        scrub: 1,
        end: "+=1800",
      },
    });

    gsap.to(sections2, {
      xPercent: 100 * (sections2.length + 1),
      ease: "none",
      scrollTrigger: {
        trigger: ".horizontal-body",
        pin: true,
        scrub: 1,
        end: "+=1800",
      },
    });
  });
  return (
    <section className="webdev">
      <h2 className="heading-2 heading-2-webdev">ii. webdev</h2>
      <Link to="webdev">
        <div className="horizontal-body">
          <div className="horizontal-container">
            <section className="panel">
              <img src={mudra} alt="Mudra" />
              <p>mudra</p>
            </section>
            <section className="panel">
              <img src={rps} alt="Mudra" />
              <p>rps</p>
            </section>
            <section className="panel">
              <img src={aleks} alt="Mudra" />
              <p>aleks</p>
            </section>
            <section className="panel">
              <img src={mimi} alt="Mudra" />
              <p>mimi</p>
            </section>
            <section className="panel">
              <img src={jiffy} alt="Mudra" />
              <p>Jiffy</p>
            </section>
            <section className="panel">
              <img src={marvin} alt="Mudra" />
              <p>Marvin</p>
            </section>
            <section className="panel">
              <img src={mudra} alt="Mudra" />
              <p>mudra</p>
            </section>
            <section className="panel">
              <img src={rps} alt="Mudra" />
              <p>rps</p>
            </section>
            <section className="panel">
              <img src={aleks} alt="Mudra" />
              <p>aleks</p>
            </section>
            <section className="panel">
              <img src={mimi} alt="Mudra" />
              <p>mimi</p>
            </section>
            <section className="panel">
              <img src={jiffy} alt="Mudra" />
              <p>Jiffy</p>
            </section>
            <section className="panel">
              <img src={marvin} alt="Mudra" />
              <p>Marvin</p>
            </section>
          </div>

          <div className="horizontal-container-first">
            <section className="panel2">
              <img src={dolores} alt="Dolores Portreti" />
              <p>Dolores</p>
            </section>
            <section className="panel2">
              <img src={bewater} alt="Be Water" />
              <p>Be Water</p>
            </section>
            <section className="panel2">
              <img src={inox} alt="Inox" />
              <p>Inox</p>
            </section>
            <section className="panel2">
              <img src={salamander} alt="Salamander" />
              <p>Salamander</p>
            </section>
            <section className="panel2">
              <img src={karuna} alt="Karuna" />
              <p>Karuna</p>
            </section>
            <section className="panel2">
              <img src={dolores} alt="Dolores Portreti" />
              <p>Dolores</p>
            </section>
            <section className="panel2">
              <img src={bewater} alt="Be Water" />
              <p>Be Water</p>
            </section>

            <section className="panel2">
              <img src={inox} alt="Inox" />
              <p>Inox</p>
            </section>
            <section className="panel2">
              <img src={salamander} alt="Salamander" />
              <p>Salamander</p>
            </section>
            <section className="panel2">
              <img src={karuna} alt="Karuna" />
              <p>Karuna</p>
            </section>
          </div>
        </div>
      </Link>
    </section>
  );
};

export default HpDevOpt;

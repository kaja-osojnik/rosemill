import React, { Fragment } from "react";

const HpDev = () => {
  return (
    <Fragment>
      <section className="webdev">
        <h2 className="heading-2 heading-2-webdev">ii. webdev</h2>
        <div className="webdev-content">
          <a href="webdev.html" className="webdev-piece">
            <div className="webdev-piece-image">
              <div
                className="pixelator mudra-screen"
                data-original="img/mudra-screen.png"
              ></div>
            </div>
            <div>
              <h3>Mudra App</h3>
              <p>
                Mudra is a meditation timer for everyone wanting to be brought
                back to earth by a gentle sounds of tibetan singing balls.
              </p>
            </div>
          </a>

          <a href="webdev.html" className="webdev-piece">
            <div className="webdev-piece-image">
              <div
                className="pixelator rps-screen"
                data-original="img/rock-paper-scissors.png"
              ></div>
            </div>
            <div>
              <h3>R / P / S</h3>
              <p>Rock paper scizors game</p>
            </div>
          </a>

          <a href="webdev.html" className="webdev-piece">
            <div className="webdev-piece-image">
              <div
                className="pixelator alex-screen"
                data-original="img/aleksander.png"
              ></div>
            </div>
            <div>
              <h3>Aleksander Vujovic</h3>
              <p>
                A personal website for a architect and sceneographer from
                Ljubljana, Slovenia.
              </p>
            </div>
          </a>

          <a href="webdev.html" className="webdev-piece">
            <div className="webdev-piece-image">
              <div
                className="pixelator mimi-screen"
                data-original="img/mimi_yoga.png"
              ></div>
            </div>
            <div>
              <h3>Mimi Yoga</h3>
              <p>
                A personal website for a wonderful yogini Mimi who travels the
                world sharing her wisdom.
              </p>
            </div>
          </a>

          <a href="webdev.html" className="webdev-piece">
            <div className="webdev-piece-image">
              <div
                className="pixelator jiffy-screen"
                data-original="img/jiffy.png"
              ></div>
            </div>
            <div>
              <h3>Jiffy</h3>
              <p>A mini app to search random gifs.</p>
            </div>
          </a>

          <a href="webdev.html" className="webdev-piece">
            <div className="webdev-piece-image">
              <div
                className="pixelator marvin-screen"
                data-original="img/marvin.png"
              ></div>
            </div>
            <div>
              <h3>Marvin</h3>
              <p>
                An application for sending your deepest secrets across securely
                and quickly being shown only to those who need to see it.
              </p>
            </div>
          </a>
          <a className="see-all-webdev" href="webdev.html">
            SEE ALL WEBDEV
          </a>
        </div>
      </section>
    </Fragment>
  );
};

export default HpDev;

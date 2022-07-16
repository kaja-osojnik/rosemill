import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import ButtonMailto from "./ButtonMailto";

const Footer = ({ isHomepage, setIsHomepage }) => {
  const location = useLocation();
  const mailto = "mailto:kaja.osojnik@gmail.com";

  useEffect(() => {
    if (location.pathname === "/") {
      setIsHomepage(true);
    } else {
      setIsHomepage(false);
    }

    function handleMarquee() {
      const marquee = document.querySelectorAll(".marquee");
      let speed = 1;
      let lastScrollPos = 0;
      let timer;

      marquee.forEach(function (el) {
        // stop animation on mouseenter
        let mouseEntered = false;
        document
          .querySelector(".inner")
          .addEventListener("mouseenter", function () {
            mouseEntered = true;
          });
        document
          .querySelector(".inner")
          .addEventListener("mouseleave", function () {
            mouseEntered = false;
          });

        const container = el.querySelector(".inner");
        const content = el.querySelector(".inner > *");
        //Get total width
        const elWidth = content.offsetWidth;

        //Duplicate content
        let clone = content.cloneNode(true);
        container.appendChild(clone);

        let progress = 1;
        function loop() {
          if (mouseEntered === false) {
            progress = progress - speed;
          }
          if (progress <= elWidth * -1) {
            progress = 0;
          }
          container.style.transform = "translateX(" + progress + "px)";
          window.requestAnimationFrame(loop);
        }
        loop();
      });

      function handleSpeedClear() {
        speed = 4;
      }
    }

    handleMarquee();
  }, [location]);

  return (
    <footer className={` ${!isHomepage && "whitefooter"} `}>
      <div class="marquee">
        <div class="inner">
          <p>
            <span className="copyright">
              Rosemill {new Date().getFullYear()} |{" "}
              <ButtonMailto
                label="Contact Me"
                mailto="mailto:kaja.osojnik@gmail.com"
              />{" "}
              |{" "}
            </span>
            <span className="copyright">
              Rosemill {new Date().getFullYear()} |{" "}
              <ButtonMailto
                label="Contact Me"
                mailto="mailto:kaja.osojnik@gmail.com"
              />{" "}
              |{" "}
            </span>
            <span className="copyright">
              Rosemill {new Date().getFullYear()} |{" "}
              <ButtonMailto
                label="Contact Me"
                mailto="mailto:kaja.osojnik@gmail.com"
              />{" "}
              |{" "}
            </span>
            <span className="copyright">
              Rosemill {new Date().getFullYear()} |{" "}
              <ButtonMailto
                label="Contact Me"
                mailto="mailto:kaja.osojnik@gmail.com"
              />{" "}
              |{" "}
            </span>
            <span className="copyright">
              Rosemill {new Date().getFullYear()} |{" "}
              <ButtonMailto
                label="Contact Me"
                mailto="mailto:kaja.osojnik@gmail.com"
              />{" "}
              |{" "}
            </span>
            <span className="copyright">
              Rosemill {new Date().getFullYear()} |{" "}
              <ButtonMailto
                label="Contact Me"
                mailto="mailto:kaja.osojnik@gmail.com"
              />{" "}
              |{" "}
            </span>
            <span className="copyright">
              Rosemill {new Date().getFullYear()} |{" "}
              <ButtonMailto
                label="Contact Me"
                mailto="mailto:kaja.osojnik@gmail.com"
              />{" "}
              |{" "}
            </span>
            <span className="copyright">
              Rosemill {new Date().getFullYear()} |{" "}
              <ButtonMailto
                label="Contact Me"
                mailto="mailto:kaja.osojnik@gmail.com"
              />{" "}
              |{" "}
            </span>
            <span className="copyright">
              Rosemill {new Date().getFullYear()} |{" "}
              <ButtonMailto
                label="Contact Me"
                mailto="mailto:kaja.osojnik@gmail.com"
              />{" "}
              |{" "}
            </span>
            <span className="copyright">
              Rosemill {new Date().getFullYear()} |{" "}
              <ButtonMailto
                label="Contact Me"
                mailto="mailto:kaja.osojnik@gmail.com"
              />{" "}
              |{" "}
            </span>
            <span className="copyright">
              Rosemill {new Date().getFullYear()} |{" "}
              <ButtonMailto
                label="Contact Me"
                mailto="mailto:kaja.osojnik@gmail.com"
              />{" "}
              |{" "}
            </span>
            <span className="copyright">
              Rosemill {new Date().getFullYear()} |{" "}
              <ButtonMailto
                label="Contact Me"
                mailto="mailto:kaja.osojnik@gmail.com"
              />{" "}
              |{" "}
            </span>
            <span className="copyright">
              Rosemill {new Date().getFullYear()} |{" "}
              <ButtonMailto
                label="Contact Me"
                mailto="mailto:kaja.osojnik@gmail.com"
              />{" "}
              |{" "}
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

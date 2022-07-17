import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./scss/App.scss";
import Navbar from "./components/layout/Navbar";
import Homepage from "./components/layout/Homepage";
import Design from "./components/layout/Design";
import WebDev from "./components/layout/WebDev";
import Footer from "./components/layout/Footer";
import Cursor from "./components/layout/Cursor";
import ScrollToTop from "./components/layout/ScrollToTop";
import gsap from "gsap";

const App = () => {
  const [isHomepage, setIsHomepage] = useState(true);

  useEffect(() => {
    gsap
      .timeline()
      .to("header", {
        autoAlpha: 1,
        delay: 6.5,
        ease: "power4.in",
      })
      .to(
        ".nav-link",
        {
          x: 0,
          stagger: 0.1,
        },
        "-=0.8"
      );

    gsap.set(".rosemill-logo", { xPercent: 0 });

    gsap
      .timeline({
        scrollTrigger: {
          trigger: "body",

          scrub: 0.2,
          start: "top top",
          end: "+=10000",
        },
      })
      .to(".rosemill-logo", {
        rotation: 360 * 5,
        duration: 1,
        ease: "none",
      });

    // eslint-disable-next-line
  }, []);
  return (
    <Router>
      {/* <ScrollToTop /> */}
      <div className="App">
        <div className={`${!isHomepage && "white-bg"}`}>
          <Cursor />
          <Navbar isHomepage={isHomepage} />
          <Routes>
            <Route exct path="/" element={<Homepage />} />
            <Route exct path="/design" element={<Design />} />
            <Route exct path="/webdev" element={<WebDev />} />
          </Routes>
          <Footer isHomepage={isHomepage} setIsHomepage={setIsHomepage} />
        </div>
      </div>
    </Router>
  );
};

export default App;

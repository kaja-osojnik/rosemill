import React, { Fragment, useEffect } from "react";
import rose from "../../img/rose1_compressed.png";
import logo from "../../img/rosemil_logo.svg";
import gsap from "gsap";
import { Link } from "react-router-dom";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Navbar = ({ isHomepage }) => {
  return (
    <Fragment>
      <header className={`${!isHomepage && "white-bg"} "header"`}>
        <nav className="nav-mobile nav-mobile-left">
          <ul>
            <li>
              <Link to="/design" className="nav-link">
                design
              </Link>
            </li>
          </ul>
        </nav>
        <Link to="/" className="header-logo">
          <img src={logo} alt="Rosemill Logo" className="rosemill-logo" />
          <img src={rose} alt="Rosemill Logo" className="rosemill-logo-rose" />
        </Link>
        <nav className="nav-lg">
          <ul>
            <li>
              <Link to="/design" className="nav-link nav-link-design">
                design
              </Link>
            </li>
            <li>
              <Link to="/webdev" className="nav-link nav-link-webdev">
                webdev
              </Link>
            </li>
          </ul>
        </nav>
        <nav className="nav-mobile">
          <ul>
            <li>
              <Link to="/webdev" className="nav-link">
                webdev
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </Fragment>
  );
};

export default Navbar;

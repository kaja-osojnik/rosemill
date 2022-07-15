import React, { Fragment, useEffect } from "react";
import rose from "../../img/rose1_compressed.png";
import logo from "../../img/rosemil_logo.svg";
import gsap from "gsap";
import { Link } from "react-router-dom";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Navbar = () => {
  return (
    <Fragment>
      <header className="header">
        <Link to="/" className="header-logo">
          <img src={logo} alt="Rosemill Logo" className="rosemill-logo" />
          <img src={rose} alt="Rosemill Logo" className="rosemill-logo-rose" />
        </Link>
        <nav>
          <ul>
            <li>
              <Link to="/design" className="nav-link">
                design
              </Link>
            </li>
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

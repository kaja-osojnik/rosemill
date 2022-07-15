import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

const Footer = ({ isHomepage, setIsHomepage }) => {
  const location = useLocation();

  useEffect(() => {
    console.log("Location changed");
    console.log(location.pathname);
    console.log(isHomepage);

    if (location.pathname === "/") {
      setIsHomepage(true);
    } else {
      setIsHomepage(false);
    }
  }, [location]);

  return (
    <footer className={` ${!isHomepage && "whitefooter"} `}>
      <span className="copyright">
        Rosemill {new Date().getFullYear()} | rosemill@gmail.com
      </span>
    </footer>
  );
};

export default Footer;

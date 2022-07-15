import React, { useEffect } from "react";
import gif from "../../img/gif.gif";
import maybeCover from "../../img/Maybe/maybe_cover.png";
import maybeContent from "../../img/Maybe/maybe_content.png";
import maybeContent2 from "../../img/Maybe/maybe_content2.png";
import albumArtwork from "../../img/Rbno2/album_artwork.png";
import albumBack from "../../img/Rbno2/album_back.png";
import albumFront from "../../img/Rbno2/album_front.png";
import albumWallpaper from "../../img/Rbno2/album_wallpaper.jpg";
import fanPage from "../../img/Rbno2/fb_fanpage.png";
import tracksCover from "../../img/Tracks/tracks_cover.png";
import tracksLogo from "../../img/Tracks/tracks.jpg";
import tracksBack from "../../img/Tracks/tracks_back.png";
import bunchWebsite from "../../img/Bunch/bunch_website.png";
import bunchScreen from "../../img/Bunch/phone_screen.png";
import bunchSign from "../../img/Bunch/sign.png";
import striderScreen from "../../img/Strider/strider_screen.jpg";
import striderWebsite from "../../img/Strider/strider_website.png";
import striderWaterbottle from "../../img/Strider/strider_waterbottle.png";
import striderPattern from "../../img/Strider/pattern.png";
import tea from "../../img/Banana/tea.png";
import teeprinting from "../../img/Banana/teeprinting.png";
import washingpowder from "../../img/Banana/washingpowder.png";
import shirt from "../../img/Banana/shirt.png";
import gsap from "gsap";

const Design = () => {
  useEffect(() => {
    gsap.timeline({
      scrollTrigger: {
        trigger: ".main-gif",
        pin: true,
        end: "bottom 50%",
      },
    });

    gsap
      .timeline({
        defaults: {
          // delay: 1,
        },
      })
      .to(".main-gif-design .white-square-1", {
        x: "100%",
        delay: 0.4,
        duration: 0.8,
      })
      .to(".main-gif-design .white-square-2", {
        x: "100%",
        delay: 0.4,
        duration: 2,
        ease: "power2.out",
      })
      .to(
        ".h1-letter",
        {
          y: 0,
          ease: "power2.out",
          duration: 1.5,

          stagger: {
            each: 0.1,
            from: "start", // center, start
          },
        },
        "-=1"
      )
      .to(".rosemill", {
        autoAlpha: 1,
        duration: 0.6,
      });
    //eslint-disable-next-line
  }, []);
  return (
    <div>
      <section className="sec-des-main-gif">
        <div className="main-heading-wrap">
          <div className="main-gif main-gif-design">
            <div className="white-square white-square-1"></div>
            <div className="white-square white-square-2"></div>
            <img src={gif} alt="Design Gif" height="auto" />
          </div>
          <div className="h1-wrap">
            <h1>
              <div className="h1-letter">d</div>
              <div className="h1-letter">e</div>
              <div className="h1-letter">s</div>
              <div className="h1-letter">i</div>
              <div className="h1-letter">g</div>
              <div className="h1-letter">n</div>
            </h1>
          </div>
          <h3 className="rosemill">
            <span>/</span>ROSEMILL PORTFOLIO PIECES
          </h3>
        </div>
      </section>

      <section className="blank"></section>

      <section className="design-item">
        <div className="design-item-copy">
          <h2>
            Maybe <br />
            magazine
          </h2>
          <h3>Publication design</h3>
        </div>
        <div className="design-item-images">
          <img src={maybeCover} alt="Maybe Cover" />
          <img src={maybeContent2} alt="Maybe Content" />
          <img src={maybeContent} alt="Maybe Spread" />
        </div>
      </section>

      <section className="design-item">
        <div className="design-item-copy">
          <h2>rbno 2.1a</h2>
          <h3>Album cover</h3>
        </div>
        <div className="design-item-images">
          <img src={albumArtwork} alt="Album Artwork" />
          <img src={albumBack} alt="Album Back" />
          <img src={albumFront} alt="Album Front" />
          <img src={albumWallpaper} alt="Album Wallpaper" />
          <img src={fanPage} alt="Fb Fanpage" />
        </div>
      </section>

      <section className="design-item">
        <div className="design-item-copy">
          <h2>Tracks</h2>
          <h3>Book cover design</h3>
        </div>
        <div className="design-item-images">
          <img src={tracksCover} alt="" />
          <img src={tracksLogo} alt="" />
          <img src={tracksBack} alt="" />
        </div>
      </section>
      <section className="design-item">
        <div className="design-item-copy">
          <h2>Bunch</h2>
          <h3>Flower shop branding</h3>
        </div>
        <div className="design-item-images">
          <img src={bunchScreen} alt="Bunch Screens" />
          <img src={bunchWebsite} alt="Bunch Website" />
          <img src={bunchSign} alt="Bunch Sign" />
        </div>
      </section>
      <section className="design-item">
        <div className="design-item-copy">
          <h2>Strider</h2>
          <h3>Bicycle sharing Wollongong</h3>
        </div>
        <div className="design-item-images">
          <img src={striderScreen} alt="Strider" />
          <img src={striderWaterbottle} alt="Strider" />
          <img src={striderWebsite} alt="Strider" />
          <img src={striderPattern} alt="Strider" />
        </div>
      </section>

      <section className="design-item">
        <div className="design-item-copy">
          <h2>Banana Leaves</h2>
          <h3>T-shirt printing company branding</h3>
        </div>
        <div className="design-item-images">
          <img src={tea} alt="Banana Leaves" />
          <img src={teeprinting} alt="Banana Leaves" />
          <img src={washingpowder} alt="Banana Leaves" />
          <img src={shirt} alt="Banana Leaves" />
        </div>
      </section>
    </div>
  );
};

export default Design;

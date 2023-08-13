import "./Nav_footer_events_sponsors_speakers.css";
import Surround from "./surround.svg";
import Hamburger from "./bars-solid.svg";
import { useRef, useState, useEffect } from "react";
import { Link } from "react-scroll";
import NavLogo from "./NavLogo.svg";
function NavBar() {
  const ham = useRef(null);
  const navState = useRef(null);
  const hamClick = () => {
    document.getElementById("mobile-links-1").style.visibility === "hidden"
      ? (document.getElementById("mobile-links-1").style.visibility = "visible")
      : (document.getElementById("mobile-links-1").style.visibility = "hidden");
    document.getElementById("mobile-links-2").style.visibility === "hidden"
      ? (document.getElementById("mobile-links-2").style.visibility = "visible")
      : (document.getElementById("mobile-links-2").style.visibility = "hidden");
    document.getElementById("mobile-links-3").style.visibility === "hidden"
      ? (document.getElementById("mobile-links-3").style.visibility = "visible")
      : (document.getElementById("mobile-links-3").style.visibility = "hidden");
    navState.current.style.visibility === "hidden"
      ? (navState.current.style.visibility = "visible")
      : (navState.current.style.visibility = "hidden");
  };

  return (
    <>
      <nav>
        <div>
          <img alt="logo" src={NavLogo} id="nav-logo" />
        </div>

        <div className="links">
          <Link to="hero" duration={500} smooth={true}>
            HOME
          </Link>
          <Link to="events" duration={500} smooth={true}>
            EVENTS
          </Link>
          <Link to="sponsors" duration={500} smooth={true}>
            SPONSORS
          </Link>
          <button id="brochure">BROCHURE</button>
        </div>
      </nav>
      <div id="mobile-nav">
        <button id="hamburger" onClick={hamClick}>
          <img src={Hamburger} />
        </button>
        <div className="links" id="mobile-links" ref={navState}>
          <a role="button" id="mobile-links-1">
            HOME
          </a>
          <a role="button" id="mobile-links-2">
            EVENTS
          </a>
          <a role="button" id="mobile-links-3">
            SPONSORS
          </a>
          <button id="brochure-mobile">BROCHURE</button>
        </div>
      </div>
    </>
  );
}
export default NavBar;

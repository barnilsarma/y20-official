import "./App.css";
import "./swarup.css";
import "./sahin.css";
import "./theme.css";
import moto from "./moto.png";
import g20 from "./G20logo.png";
import think from "./ThinkIndialogo.png";
import assamlogo from "./assamlogo.png";
import nitlogo from "./nitlogo.png";
import ThemeLeft from "./flower-removebg-preview.png";
import ThemeRight from "./flower-removebg-preview-left.png";
import ThemeFull from "./flower-full.svg";
import ThemeUnderline from "./theme-underline.svg"
import Surround from "./surround.svg";
import Underline from "./underline.svg";
import "./unite.css";
import { useRef } from "react";
import NavLogo from "./NavLogo.svg";
function NavBar() {
  const ham = useRef(null);
  const navState = useRef(null);
  const hamClick = () => {
    navState.current.style.visibility === "hidden"
      ? (navState.current.style.visibility = "visible")
      : (navState.current.style.visibility = "hidden");
  };
  return (
    <>
      <nav>
        <div>
          <img alt="logo" src={NavLogo} />
        </div>

        <button id="hamburger" ref={ham} onClick={hamClick}>
          X
        </button>
        <div className="links" ref={navState}>
          <a role="button" id="home">
            HOME
          </a>
          <a role="button" id="events">
            EVENTS
          </a>
          <a role="button" id="sponsors">
            SPONSORS
          </a>
          <button id="brochure">BROCHURE</button>
        </div>
      </nav>
    </>
  );
}
function Unite() {
  return (
    <div className="unite">
      <h1 className="primary-unite-heading">UNITING YOUTH, IGNITING CHANGE!</h1>
      <img src={Underline} alt="" />
      <h1 className="secondary-unite-heading">
        Why unite at Northeast Y20 Conclave?
      </h1>
      <div className="unite-container">
        <div className="unite-secondary-container">
          <h1 className="unite-container-heading">
            Empowerment through knowledge
          </h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores
            aperiam nam mollitia, voluptatum distinctio similique!
          </p>
        </div>
        <div className="unite-secondary-container" id="container-2">
          <h1 className="unite-container-heading">
            Empowerment through knowledge
          </h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores
            aperiam nam mollitia, voluptatum distinctio similique!
          </p>
        </div>
        <div className="unite-secondary-container" id="container-3">
          <h1 className="unite-container-heading">
            Empowerment through knowledge
          </h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores
            aperiam nam mollitia, voluptatum distinctio similique!
          </p>
        </div>
      </div>
    </div>
  );
}
function Events() {
  const events_info = [
    {
      name: "EVENT 1",
      desc: "DESCRIPTION",
      time: "TIMINGS",
      background: "#ff0000",
    },
    {
      name: "EVENT 2",
      desc: "DESCRIPTION",
      time: "TIMINGS",
      background: "#00ff00",
    },
    {
      name: "EVENT 3",
      desc: "DESCRIPTION",
      time: "TIMINGS",
      background: "#0000ff",
    },
    {
      name: "EVENT 4",
      desc: "DESCRIPTION",
      time: "TIMINGS",
      background: "#00ffff",
    },
    {
      name: "EVENT 5",
      desc: "DESCRIPTION",
      time: "TIMINGS",
      background: "#ff00ff",
    },
  ];
  return (
    <div className="events">
      <center>
        <div className="surrounder">
          <img src={Surround} />
          <h1>EVENTS</h1>
          <img src={Surround} />
        </div>
      </center>
      <marquee>
        <div className="events-each">
          {events_info.map((item, index) => (
            <div
              className="event"
              style={{ backgroundColor: `${item.background}` }}
            >
              <div className="green-filter">
                <div className="black-filter">
                  <label className="event-name">NAME: {item.name}</label>
                  <p className="event-desc">DESCRIPTION: {item.desc}</p>
                  <label className="timings">TIMINGS: {item.time}</label>
                </div>
              </div>
            </div>
          ))}
        </div>
      </marquee>
    </div>
  );
}
function Theme() {
  return (
    <div className="theme-container"> 
      <div className="theme-subcontainer-1">
        <img src={ThemeUnderline} alt="" />       
        <h1 className="theme-heading">THEME</h1>
        <img src={ThemeUnderline} alt="" id="theme-underline"/>
      <p className="theme-paragraph">"Beyond Horizons:Youth Powering Progress"</p>
      </div>
      
      <div className="theme-subcontainer-2">
        <p>
        In the heart of the mesmerizing North East, we converge to celebrate the spirit of unity, diversity, and progress. The theme "Beyond Horizons: Youth Powering Progress" encapsulates our collective vision to transcend boundaries, break barriers, and chart a course towards a prosperous future. Together, we embark on an inspirational journey, exploring the untapped potential of the North East and unleashing the force of youth to drive positive transformations across the region.
        </p>
      </div>
    </div>
  );
}
function Hero() {
  return (
    <div className="hero">
      <div className="leftportion">
        <h1 class="toptxt">WELCOME TO</h1>
        <h1 class="bottomtxt">NORTHEAST Y20 CONCLAVE</h1>
        <div class="imagelogo">
          <img id="g20" src={g20} alt="G20 Logo" />
          <img src={think} id="think" alt="ThinkIndia Logo" />
        </div>
      </div>
      <div className="motto-container">
        <img src={moto} alt="moto" />
      </div>
    </div>
  );
}
function Speakers() {
  const primary = [
    { name: "Speaker 1", desgn: "designation", photo: "photo1" },
    { name: "Speaker 2", desgn: "designation", photo: "photo2" },
  ];
  const secondary = [
    { name: "Speaker 1", desgn: "designation", photo: "photo1" },
    { name: "Speaker 2", desgn: "designation", photo: "photo2" },
    { name: "Speaker 3", desgn: "designation", photo: "photo3" },
    { name: "Speaker 4", desgn: "designation", photo: "photo4" },
    { name: "Speaker 5", desgn: "designation", photo: "photo5" },
  ];
  const tertiary = [
    { name: "Speaker 1", desgn: "designation", photo: "photo1" },
    { name: "Speaker 2", desgn: "designation", photo: "photo2" },
    { name: "Speaker 3", desgn: "designation", photo: "photo3" },
    { name: "Speaker 4", desgn: "designation", photo: "photo4" },
    { name: "Speaker 5", desgn: "designation", photo: "photo5" },
  ];
  return (
    <div className="speakers">
      <center>
        <div className="surrounder">
          <img src={Surround} />
          <h1>SPEAKERS</h1>
          <img src={Surround} />
        </div>
      </center>
      <h2>GUEST SPEAKERS</h2>
      <div className="primary">
        {primary.map((each) => (
          <div className="each-speaker">
            <img src={each.photo} />
            <label className="speaker-name">{each.name}</label>
            <label className="speaker-designation">{each.desgn}</label>
          </div>
        ))}
      </div>
      <h2>Y20 SPEAKERS</h2>
      <div className="tertiary">
        {tertiary.map((each) => (
          <div className="each-speaker">
            <img src={each.photo} />
            <label className="speaker-name">{each.name}</label>
            <label className="speaker-designation">{each.desgn}</label>
          </div>
        ))}
      </div>
    </div>
  );
}
function Sponsors() {
  const sponsors_info = [
    { logo: "logo1" },
    { logo: "logo2" },
    { logo: "logo3" },
    { logo: "logo4" },
    { logo: "logo5" },
    { logo: "logo6" },
    { logo: "logo7" },
  ];
  return (
    <div className="sponsors">
      <center>
        <div className="surrounder">
          <img src={Surround} />
          <h1>SPONSORS</h1>
          <img src={Surround} />
        </div>
      </center>
      <div className="sponsors-img">
        {sponsors_info.map((sponsor) => (
          <img src={sponsor.logo} />
        ))}
      </div>
    </div>
  );
}
function OrganisingInstitutes() {
  const inst = [
    { name: "National Institute of Technology, Silchar", logo: "nitslogo" },
    { name: "Assam University, Silchar", logo: "aulogo" },
  ];
 return (
    <div className="Organising">
      <center>
        <div className="surrounder">
          <img src={Surround} />
          <h1>Organising Institutes</h1>
          <img src={Surround} />
        </div>
      </center>
      <div className="Organise">
        <div className="left-logo">
            <img src={nitlogo} alt="nitlogo"/>            
        </div>
        <div className="right-logo">
            <img src={assamlogo} alt="aulogo"/> 
        </div>
    </div>
    </div>
  );
}
function Footer() {
  return (
    <footer>
      <center>
        <h2>NORTHEAST Y20 CONCLAVE</h2>
      </center>
      <div className="part-1">
        <div className="col">
          <b>ORGANISERS</b>
          <a href="https://www.thinkindiaorg.in/">Think India</a>
          <a href="https://nits.ac.in/">
            National Institute of Technology, Silchar
          </a>
          <a href="#">Assam University</a>
        </div>
        <div className="col">
          <b>CONTACTS</b>
          <label>Contact Number:</label>
          <label>Email:</label>
        </div>
        <div className="col">
          <b>SOCIAL MEDIA</b>
          <a>Instagram</a>
          <a>Facebook</a>
          <a>LinkedIn</a>
        </div>
      </div>
      <center>&copy; Copyrights @ </center>
    </footer>
  );
}
function App() {
  return (
    <div className="App">
      <NavBar />
      <Hero />
      <Unite />
      <Events />
      <Theme />
      <Speakers />
      <Sponsors />
      <OrganisingInstitutes />
      <Footer />
    </div>
  );
}

export default App;

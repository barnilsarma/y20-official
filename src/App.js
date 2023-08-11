import { useRef } from "react";
import './index.css'
//

import Events from './components/barnil/Events';
import Footer from './components/barnil/Footer';
import NavBar from "./components/barnil/Navbar";
import Speakers from "./components/barnil/Speakers";
import Sponsors from "./components/barnil/Sponsors";
//
import Unite from './components/pragyan/Unite';
import Hero from './components/swarup/Hero';

import Theme from './components/sahin/Theme';

function OrganisingInstitutes() {
  const inst = [
    { name: "National Institute of Technology, Silchar", logo: "nitslogo" },
    { name: "Assam University, Silchar", logo: "aulogo" },
  ];
  return (
    <div className="Organising">
      <h1>Organising Institutes</h1>
      {inst.map((institute) => (
        <div className="insititute">
          <img src={institute.logo} />
          <label>{institute.name}</label>
        </div>
      ))}
    </div>
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

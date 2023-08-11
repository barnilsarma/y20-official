
import g20 from './G20logo.png';
import think from './ThinkIndialogo.png';
import moto from './moto.png';
import './hero.css';
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
  export default Hero;
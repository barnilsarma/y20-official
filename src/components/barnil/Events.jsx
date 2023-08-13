import "./Nav_footer_events_sponsors_speakers.css";
import Surround from "./surround.svg";

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
    <div className="events" id="events">
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
export default Events;

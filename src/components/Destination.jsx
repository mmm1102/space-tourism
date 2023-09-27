import React from "react";
import info from "../data.json";
import backgroundDestination from "../assets/destination/background-destination-desktop.jpg";

const Destination = () => {
  return (
    <div style={{
      backgroundImage: `url(${backgroundDestination})`,
      width: "100%",
      height: "100vh",
      backgroundSize: "cover",
      backgroundColor: "black",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
    }}>
      <p>
        <span>01</span>Pick your destination
      </p>
      <div>
        {info.destinations.map((elem) => {
          return (
            <div>
              <h4 style={{ color: "red", marginTop: "2rem" }}>{elem.name}</h4>
              {/* <li>{elem.description}</li>
            <h5>{elem.distance}</h5>
            <p>{elem.travel}</p> */}
            <p></p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Destination;

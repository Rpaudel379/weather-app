import React from "react";

const Info = ({ main, name, sys, weather }) => {
  const ss = Math.round((main?.temp - 273.15) * 1000) / 1000;

  return (
    <div className="information" style={{ display: main ? "block" : "none" }}>
      <div className="city-country">
        {name}
        <span className="country">{sys?.country}</span>
      </div>

      <p className="temp">
        {ss}
        <sup>°C</sup>{" "}
      </p>
      {weather && <p className="desc">{weather[0]["description"]}</p>}
    </div>
  );
};

export default Info;

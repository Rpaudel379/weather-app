import React from "react";

const Info = ({ main, name, sys }) => {
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
    </div>
  );
};

export default Info;

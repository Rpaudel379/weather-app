import React, { useState } from "react";

const Input = ({ toApp }) => {
  const [city, setCity] = useState("");
  const [fixedCity, setFixedCity] = useState("");

  const handleChange = (e) => {
    setCity(e.target.value);
  };

  const handelSubmit = (e) => {
    e.preventDefault();
    setFixedCity(city);
    setCity("");
  };

  React.useEffect(() => {
    toApp(fixedCity);
  }, [fixedCity, toApp]);

  return (
    <form onSubmit={handelSubmit} className="form">
      <input
        type="text"
        id="city"
        value={city}
        onChange={handleChange}
        placeholder="Search City..."
      />
    </form>
  );
};

export default Input;

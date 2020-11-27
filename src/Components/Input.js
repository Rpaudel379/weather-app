import React, { useState } from "react";

const Input = ({ toApp }) => {
  const [city, setCity] = useState("");

  const handleChange = (e) => {
    setCity(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toApp(city);
    setCity("");
  };

  return (
    <form onSubmit={handleSubmit} className="form">
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

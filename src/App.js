import React, { useState, useCallback, useEffect } from "react";
import "./index.css";
import Header from "./Components/Header";
import Input from "./Components/Input";
import Info from "./Components/Info";
import Footer from "./Components/Footer";

const API_key = "72c2205a619a93ea437378bb15e7030d";

function App() {
  // city search variable
  const [city, setCity] = useState("");
  // get city name from <Input />
  const toApp = (inputCity) => {
    setCity(inputCity);
  };

  // api

  
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_key}`;
  const [info, setInfo] = useState([]);

  const getData = useCallback(async () => {
    const response = await fetch(url);
    const data = await response.json();

    setInfo(data);
  }, [url]);

  useEffect(() => {
    if (city.length) {
      getData();
    }
  }, [city, getData]);

  return (
    <div className="App">
      <Header title="Weather App" />
      <Input toApp={toApp} />
      <Info {...info} />
      <Footer />
    </div>
  );
}

export default App;

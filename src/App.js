import React, { useState, useCallback, useEffect } from "react";
import "./index.css";
import Header from "./Components/Header";
import Input from "./Components/Input";
import Info from "./Components/Info";
import Footer from "./Components/Footer";

function App() {
  // city search variable
  const [city, setCity] = useState("");

  // informations
  const [info, setInfo] = useState({});

  // set info loading
  const [loading, setLoading] = useState(false);

  // get city name from <Input />
  const toApp = (inputCity) => {
    setCity(inputCity);
  };

  const fetchData = useCallback(async () => {
    setLoading(false);

    try {
      if (city === "") {
        return;
      }

      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_API_KEY}`
      );

      const data = await response.json();

      if (data) {
        setLoading(true);
        const { main, name, sys, weather } = data;

        setInfo({ main, name, sys, weather });
      } else {
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
    }
  }, [city]);

  useEffect(() => {
    fetchData();
  }, [city, fetchData]);

  return (
    <div className="App">
      <Header title="Weather App" />
      <Input toApp={toApp} />
      {loading && <Info {...info} />}

      <Footer />
    </div>
  );
}

export default App;

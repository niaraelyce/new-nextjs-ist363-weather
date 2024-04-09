"use client";
import { useState, useEffect } from "react";

import ButtonDemo from "../components/ButtonDemo";
import ColorPicker from "../components/ColorPicker";
import PeoplePicker from "../components/PeoplePicker";

import { getPeople } from "../lib/api";

const Homepage = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await getAllWeatherData();
      setData(response);
    };

    fetchData();
  }, []);
  useEffect(() => {
    weatherData &&
      weatherData.list.filter((block) => {
        const date = new Date(block.dt);
      });
  }, [weatherData]);
  return (
    <div>
      <h1>Weather App</h1>
      {data && <h2>{data.city.name}</h2>}
    </div>
  );
};
export default Homepage;
// order the pizza
export const getGeolocation = () => {
  return new Promise((resolve, reject) => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          resolve(position);
        },
        () => {
          reject("User denied geolocation");
        }
      );
    } else {
      reject("Geolocation is not available in your browser");
    }
  });
};

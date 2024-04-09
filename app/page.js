"use client";

import ButtonDemo from "../components/ButtonDemo";
import ColorPicker from "../components/ColorPicker";
import PeoplePicker from "../components/PeoplePicker";

import { getPeople } from "../lib/api";

const Homepage = () => {
  const peopleArr = getPeople();
  //console.log({ peopleArr });
  return (
    <div>
      <h1>Weather app</h1>
      <PeoplePicker people={peopleArr} />
      <ButtonDemo />
      <ColorPicker />
    </div>
  );
};
export default Homepage;
import { getAllWeatherData } from "../lib/api";

const Homepage = () => {
  const data = getAllWeatherData();

  return (
    <div>
      <h1>Weather App</h1>
      <h2>{data.city.name}</h2>
    </div>
  );
}
export default Homepage;
import { useState, useEffect } from "react";

import { getAllWeatherData } from "../lib/api";

const Homepage = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await getAllWeatherData();
      setData(response);
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Weather App</h1>
      {data && <h2>{data.city.name}</h2>}
    </div>
  );
};
// order the pizza
export const getGeolocation = () => {
  // handle whether the pizza is ready or not
  // A promise expects two arguments: resolve and reject, which are functions that you call to fulfill or reject the promise.
  return new Promise((resolve, reject) => {
    // if the pizza is ready, resolve the promise
   if ("geolocation" in navigator) {
    // Yes, the browser supports geolocation! Keep going!
    // it needs two functions: success and error
     navigator.geolocation.getCurrentPosition((position) => {
        resolve(position);
     }, () => {
        reject("User denied geolocation");
     });
   } else {
     // if the pizza is not ready, reject the promise
     reject("Geolocation is not available in your browser");
   }
  });
};
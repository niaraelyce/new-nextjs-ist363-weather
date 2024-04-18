"use client";

import { useState, useEffect } from "react";

import Image from "next/image";

import ButtonDemo from "../components/ButtonDemo";
import ColorPicker from "../components/ColorPicker";
import PeoplePicker from "../components/PeoplePicker";
import Col from "../components/Col";
import Row from "../components/Row";
import Tabs from "../components/Tabs";
import List from "../components/list";
import Container from "../components/Container";
import { getGeoLocation, getPeople, getWeatherDataByLatLon } from "../lib/api";

const Homepage = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [daysOfWeek, setDaysOfWeek] = useState(null);
  const [activeDayIndex, setActivedayIndex] = useState(0);

  useEffect(() => {
    getGeoLocation()
      .then((position) => {
        console.log(position);
        setLocation(position);
      })
      .catch((error) => {
        setErrorMsg(error);
      });
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const response = await getWeatherDataByLatLon(location);
      setWeatherData(response);
    };
    location ? fetchData() : null;
  }, [location]);

  useEffect(() => {
    const tempWeek = [];
    if (weatherData) {
      weatherData.list.forEach((block) => {
        const date = new Date(block.dt * 1000);
        const options = { weekday: "short" };
        const day = date.toLocaleDateString("en-US", options);
        if (!tempWeek.includes(day)) {
          tempWeek.push(day);
        }
      });
      setDaysOfWeek(tempWeek);
    }
  }, [weatherData]);

  return (
    <div>
      <h1>Weather app</h1>
      {errorMsg && <div>{errorMsg}</div>}
      {weatherData && (
        <Container>
          <Row>
            <Col>
              <h2>{weatherData.city.name}</h2>
              <p>Current temp: {weatherData.list[0].main.temp}&deg; F</p>
              <p>{weatherData.list[0].weather[0].description}</p>
              <Image
                src={`https://openweathermap.org/img/wn/${weatherData.list[0].weather[0].icon}@2x.png`}
                alt={`Weather icon for ${weatherData.list[0].weather[0].description}`}
                width={100}
                height={100}
              />
            </Col>
            <Col> Tabs and list goes here.</Col>
          </Row>
        </Container>
      )}
      {weatherData && daysOfWeek && (
        <section>
          <Tabs
            activeIndex={activeDayIndex}
            items={daysOfWeek}
            clickHandler={setActivedayIndex}
          />
          <List
            activeIndex={activeDayIndex}
            items={weatherData?.list}
            daysOfWeek={daysOfWeek}
          />
        </section>
      )}
    </div>
  );
};

export default Homepage;

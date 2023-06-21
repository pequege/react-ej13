import React from "react";
import { Card } from "react-bootstrap";

const CardClima = ({clima}) => {
  const weather_icon = "https://openweathermap.org/img/wn/" +
  clima.weather[0].icon +
  "@2x.png";
  const weather_description = clima.weather[0].description;
  return (
    <>
      <Card className="mb-3">
        <Card.Body className="d-block d-md-flex">
          <Card.Title>
            <p className="text-secondary mb-0">{clima.name}</p>
            <h1 className="display-1">{clima.main.temp}°C</h1>
            <span className="text-muted mb-2">
              Sensación Térmica {clima.main.feels_like}°C
            </span>
          </Card.Title>
          <Card.Text>
            {clima.temp}
            <img src={weather_icon}/>
            <p>{weather_description}</p>
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};

export default CardClima;

import React, { useEffect, useState } from "react";
import { Form, Button, Spinner, InputGroup } from "react-bootstrap";
import CardClima from "./CardClima";

const FormClima = () => {
  const [ciudad, setCiudad] = useState("");
  /* const [latitud, setLatitud] = useState("");
  const [longitud, setLongitud] = useState(""); */
  const [clima, setClima] = useState({});
  const [mostrarSpinner, setMostrarSpinner] = useState({});

    /* const consultarAPIGeoLoc = async () => {
      try {
        const respuesta = await fetch(
          "http://api.openweathermap.org/geo/1.0/direct?" +
          `q=${ciudad || "tucuman"}`+
          "&appid=45a81fc05084d4549f01f18a69f1a024"
        )
        const dato = await respuesta.json();
      setLatitud(dato[0].lat);
      setLongitud(dato[0].lon);
      consultarAPIClima();
    } catch (err) {
      console.log(err);
    }
  } */

  const consultarAPIClima = async () => {
    try {
      setMostrarSpinner(true);
      const respuesta = await fetch(
        "https://api.openweathermap.org/data/2.5/weather?" +
        `q=${ciudad || "tucuman"}`+
        "&appid=45a81fc05084d4549f01f18a69f1a024" +
        "&units=metric&lang=es"
      );
      const dato = await respuesta.json();
      console.log(dato);
      setClima(dato);
      setMostrarSpinner(false);
    } catch (err) {
      console.log(err);
    }
  };
  
  useEffect(()=>{
    consultarAPIClima()
  }, []);

  const handleSubmit = (e) =>{
    e.preventDefault();
    setCiudad(e.target.value);
    consultarAPIClima();
  };

  const componenteRenderizado = mostrarSpinner ? (
    <div className="my-5">
      <Spinner animation="border" variant="primary" />
    </div>
  ) : (
    <CardClima clima={clima} />
  );

  return (
    <>
      <Form className="mb-3" onSubmit={handleSubmit}>
        <InputGroup>
          <InputGroup.Text>
            <i className="bi bi-geo-alt-fill"></i>
          </InputGroup.Text>
          <Form.Control
            aria-label="input-clima"
            aria-describedby="basic-addon2"
            placeholder="Buscar ciudad. Ej: Tucumán..."
            required
            onChange={(e) => setCiudad(e.target.value)}
            minLength={3}
          />
          <Button variant="primary" id="button-addon2" type="submit">
            <i className="bi bi-search"></i>
          </Button>
        </InputGroup>
      </Form>
      {componenteRenderizado}
    </>
  );
};

export default FormClima;

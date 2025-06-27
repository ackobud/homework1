import React, { useState } from "react";

function Weather() {
  let [country, setCountry] = useState("");
  let [city, setCity] = useState("");
  let [temperature, setTemperature] = useState("");
  let [cities, setCities] = useState([]);

  function addCity() {
    if (country === "" || city === "" || temperature === "") {
      return;
    }

    const newCity = [
      {
        name: city,
        country: country,
        temperature: temperature,
      },
    ];

    setCities((currentCities) => [...currentCities, ...newCity]);
  }

  return (
    <div className="container">
      <input
        className="form-control item mt-3 w-25 mx-auto"
        type="text"
        placeholder="Country"
        onInput={(e) => setCountry(e.currentTarget.value)}
      />
      <input
        className="form-control item mt-3 w-25 mx-auto"
        type="text"
        placeholder="City"
        onInput={(e) => setCity(e.currentTarget.value)}
      />
      <input
        className="form-control item mt-3 w-25 mx-auto"
        type="number"
        placeholder="Temperature"
        onInput={(e) => setTemperature(e.currentTarget.value)}
      />
      <div className="d-flex justify-content-center">
        <button className="btn btn-primary mt-3" onClick={addCity}>
          Add City
        </button>
      </div>

      <div className="container text-center mt-3">
        {cities.map((city) => (
          <p>{city.name}</p>
        ))}
      </div>
    </div>
  );
}

export default Weather;

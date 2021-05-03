import React, { useState } from "react";

import "./App.css";

import { Gauge } from "./gauge/Gauge";

function App() {
  const [inputValues, setInputValues] = useState({
    min: 0,
    max: 100,
    current: 50
  });

  const handleInputChange = (event) => {
    setInputValues((inputValues) => ({
      ...inputValues,
      [event.target.id]: parseInt(event.target.value),
    }));
  };

  return (
    <div className="App">
      <label className="input-label" htmlFor="min">
        Min
      </label>
      <input id="min" type="number" onChange={handleInputChange} defaultValue={inputValues.min}></input>

      <label className="input-label" htmlFor="max">
        Max
      </label>
      <input id="max" type="number" onChange={handleInputChange} defaultValue={inputValues.max}></input>

      <label className="input-label" htmlFor="current">
        Current
      </label>
      <input id="current" min={inputValues.min} max={inputValues.max} type="number" onChange={handleInputChange} defaultValue={inputValues.current}></input>

      
      <Gauge {...inputValues} />
    </div>
  );
}

export default App;

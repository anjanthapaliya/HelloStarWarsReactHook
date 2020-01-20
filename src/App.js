import React, { useState, useEffect } from "react";
import "./styles.css";

export default function App() {
  const API = "https://swapi.co/api/people/1";

  //State Hook
  const [name, setName] = useState();

  //Effect hook works like componentDidMount
  useEffect(() => {
    fetch(API)
      .then(response => response.json())
      .then(data => setName(data.name));
  });

  return (
    <div className="App">
      <h2>My favorite Star Wars character is {name} </h2>
    </div>
  );
}

import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="containter">
        <Weather defaultCity="New York" />
        <footer>
          This project was coded by Jo and is{" "}
          <a href="https://github.com/jogit99/react-weather-app" target="blank">
            open sourced on Github"
          </a>
        </footer>
      </div>
    </div>
  );
}

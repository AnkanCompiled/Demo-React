import React from "react";
import Card from "./components/Card";
import "./App.css";

export default function App() {
  const arrays = ["/inosuke.jpg", "/Makima.png", "/noface.jpg", "/rengoku.jpg"];
  const object = {
    Inosuke: "/inosuke.jpg",
    Makima: "/Makima.png",
    Noface: "/noface.jpg",
    Rengoku: "/rengoku.jpg",
  };
  const arrayObject = [
    { name: "Inosuke", image: "/inosuke.jpg" },
    { name: "Makima", image: "/Makima.png" },
    { name: "Noface", image: "/noface.jpg" },
    { name: "Rengoku", image: "/rengoku.jpg" },
  ];
  return (
    <div>
      <div className="navbar">
        <h1 className="navbar-text">Image View</h1>
      </div>
      <div className="card-container">
        {arrayObject.map((elements) => (
          <Card image={elements.image} text={elements.name} />
        ))}
      </div>
    </div>
  );
}

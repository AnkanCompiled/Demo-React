import React from "react";

export default function Card({ image, text }) {
  return (
    <div className="image-container">
      <img className="image" src={image} alt="images" />
      <p className="image-text">{text}</p>
    </div>
  );
}

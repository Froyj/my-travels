import React from "react";

const Travel = ({ photo, destination, country, distance }) => (
  <figure>
    <img src={photo} alt={destination}  />
    <figcaption>
      <h2>{country}</h2>
      <blockquote>{destination}</blockquote>
      <cite>{distance}</cite>
    </figcaption>
  </figure>
);

export default Travel;
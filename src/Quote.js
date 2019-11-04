
import React from "react";

const Quote = props => (
  <figure>
    <img className='image'
      src= {props.photo} 
      alt= {props.country}
    />
    <figcaption>
      <blockquote className="text">
        {props.destination}, 
      <cite> {props.country}</cite>
      </blockquote>
      <blockquote>{props.distance}</blockquote>
    </figcaption>
  </figure>
);

export default Quote;
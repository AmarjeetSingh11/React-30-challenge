import React from "react";
import '../style.css'; 
const CardComponent = (props) => {
  return (
    <div className="card-container">
      <div className="card">
        <img
          src={props.img} // Placeholder image
          alt="Product"
          className="card-image"
        />
        <h3 className="card-title">{props.title}</h3>
        <p className="card-body">
          {props.body}
        </p>
        <button className="card-btn">Add to Cart</button>
      </div>
    </div>
  );
};

export default CardComponent;

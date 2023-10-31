import React from "react";
import "./styles.css";

const Favourite = ({ cart, removeFromCart }) => {
  return (
    <div className="favourite">
      {cart.map((item, index) => (
        <div key={index} className="card">
          <img src={item.image} alt="Recipe" className="recipe-image" />
          <div className="card-content">
            <h4>{item.label}</h4>
            <button
              className="view-details-button"
              onClick={() => removeFromCart(index)}
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Favourite;

import React from "react";
import "./styles.css";
import { Link } from "react-router-dom";
const Card = ({ recipes }) => {
  return (
    <div className="recipe-list">
      {recipes.map((recipe, index) => (
        <div key={index} className="card">
          <img
            src={recipe.recipe.image}
            alt="Recipe"
            className="recipe-image"
          />
          <div className="card-content">
            <h4>{recipe.recipe.label}</h4>
            <Link to={`/details/${index}`}>
              <button className="view-details-button">View Details</button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;

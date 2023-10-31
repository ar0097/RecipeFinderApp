import React from "react";
import "./styles.css";
import { useParams } from "react-router-dom";
const Details = ({ recipes, addToCart }) => {
  const { id } = useParams();
  const recipe = recipes[id] ? recipes[id].recipe : null;

  if (!recipe) {
    return <div>Loading...</div>;
  }
  return (
    <div className="details">
      <img src={recipe.image} alt="Recipe" className="recipe-image" />
      <div className="details-content">
        <h4>{recipe.label}</h4>
        <button className="save-button" onClick={() => addToCart(recipe)}>
          Save to Cart
        </button>
        <div className="show-ingredient">
          <h4>Ingredients</h4>
          <ul className="list-ingredient">
            {recipe.ingredientLines.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Details;

import React, { useState, useEffect } from "react";
import "./styles.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Card from "./Card";
import Details from "./Details";
import Favourite from "./Favourite";

export default function App() {
  const [recipes, setRecipes] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [cart, setCart] = useState([]);

  const addToCart = (recipe) => {
    setCart([...cart, recipe]);
  };

  const saveCartToLocalStorage = (cart) => {
    localStorage.setItem("cart", JSON.stringify(cart));
  };

  const getCartFromLocalStorage = () => {
    const cartData = localStorage.getItem("cart");
    return cartData ? JSON.parse(cartData) : [];
  };

  useEffect(() => {
    const cartData = getCartFromLocalStorage();
    setCart(cartData);
  }, []);

  useEffect(() => {
    saveCartToLocalStorage(cart);
  }, [cart]);

  useEffect(() => {
    if (searchTerm) {
      fetchRecipes();
    }
  }, [searchTerm]);

  const removeFromCart = (index) => {
    const updatedCart = [...cart];
    updatedCart.splice(index, 1);
    setCart(updatedCart);
  };

  const fetchRecipes = async () => {
    try {
      const response = await fetch(
        `https://api.edamam.com/api/recipes/v2?type=public&q=${searchTerm}&app_id=23d6a093&app_key=de2b98968e178d38098f22277622d829`
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setRecipes(data.hits);
      console.log(data.hits);
    } catch (error) {
      console.error("Error:", error);
    }
  };
  console.log(cart);
  return (
    <div className="app">
      <Router>
        <Navbar
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          cartCount={cart.length}
        />
        <Routes>
          <Route path="/" element={<Card recipes={recipes} />} />
          <Route
            path="/details/:id"
            element={<Details recipes={recipes} addToCart={addToCart} />}
          />
          <Route
            path="/favourite"
            element={<Favourite cart={cart} removeFromCart={removeFromCart} />}
          />
        </Routes>
      </Router>
    </div>
  );
}

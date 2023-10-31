import React from "react";
import "./styles.css";
import { Link } from "react-router-dom";
const Navbar = ({ setSearchTerm, cartCount }) => {
  const handleSearch = (e) => {
    e.preventDefault();
    const searchTerm = e.target.searchInput.value;
    setSearchTerm(searchTerm);
  };

  return (
    <div className="navbar">
      <Link to="/">
        <div className="logo">
          <img
            src="https://t4.ftcdn.net/jpg/02/88/84/21/240_F_288842168_nhgjfMO0vtARTs6obR3i9bfdRIuaSL56.jpg"
            alt="Logo"
          />
        </div>
      </Link>
      <div className="search">
        <form onSubmit={handleSearch}>
          <input
            type="text"
            name="searchInput"
            placeholder="Search for recipes..."
          />
          <button type="submit">Search</button>
        </form>
      </div>
      <Link to="/favourite">
        <div className="cart">
          Cart <span>{cartCount}</span>
        </div>
      </Link>
    </div>
  );
};

export default Navbar;

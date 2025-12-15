// src/Navbar.js
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { StoreContext } from "./StoreContext";

const Navbar = () => {
  const { cart } = useContext(StoreContext);

  const cartCount = Array.isArray(cart)
    ? cart.reduce((sum, item) => sum + item.quantity, 0)
    : 0;

  return (
    <nav className="navbar">
      <h2 className="logo">MyStore</h2>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/wishlist">Wishlist ❤️</Link>

        {/* CART WITH BADGE */}
        <Link to="/cart" className="cart-link">
          Cart 🛒
          {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
        </Link>

        {/* NEW: My Orders */}
        <Link to="/orders">My Orders</Link>

        <Link to="/signin">Sign In</Link>
      </div>
    </nav>
  );
};

export default Navbar;

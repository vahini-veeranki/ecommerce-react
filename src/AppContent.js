import React, { useContext } from "react";
import { Routes, Route, Link } from "react-router-dom";
import { StoreContext } from "./StoreContext";

import Home from "./Home";
import CategoryPage from "./CategoryPage";
import ProductDetail from "./ProductDetails";
import Cart from "./Cart";
import SignIn from "./SignIn";

const AppContent = () => {
  const { cart } = useContext(StoreContext);

  return (
    <>
      <nav className="navbar">
        <Link to="/">Home</Link>
        <Link to="/signin">Sign In</Link>
        <Link to="/cart">Cart ({cart.length})</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/category/:slug" element={<CategoryPage />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </>
  );
};

export default AppContent;

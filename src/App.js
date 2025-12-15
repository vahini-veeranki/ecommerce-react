// src/App.js
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Home";
import CategoryPage from "./CategoryPage";
import ProductDetails from "./ProductDetails";
import SignIn from "./SignIn";
import Checkout from "./Checkout";
import Cart from "./Cart";
import Wishlist from "./Wishlist";
import Navbar from "./Navbar";
import StoreProvider from "./StoreContext";
import DeliveryAddress from "./DeliveryAddress";
import PaymentPage from "./PaymentPage"; // <-- import at the top
import "./App.css";
import "./PaymentPage.css";
import OrderSuccess from "./OrderSuccess";
import Orders from "./Orders";



function App() {
  return (
    <StoreProvider>
      <BrowserRouter>
        <Navbar />

        <div className="page-content"> {/* ensures content below navbar */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/category/:slug" element={<CategoryPage />} />
            <Route path="/product/:id" element={<ProductDetails />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/wishlist" element={<Wishlist />} />
            <Route path="/address" element={<DeliveryAddress />} />
            <Route path="/payment" element={<PaymentPage />} />
            <Route path="/order-success" element={<OrderSuccess />} />
            <Route path="/orders" element={<Orders />} />

          </Routes>
        </div>
      </BrowserRouter>
    </StoreProvider>
  );
}

export default App;

// src/Checkout.js
import React, { useState, useMemo } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./Checkout.css";

const Checkout = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // ✅ MEMOIZED selectedItems (FIX FOR ESLINT + NETLIFY)
  const selectedItems = useMemo(() => {
    return Array.isArray(location.state) ? location.state : [];
  }, [location.state]);

  // ---------------- ADDRESSES ----------------
  const [addresses] = useState([
    {
      id: 1,
      name: "John Doe",
      phone: "9876543210",
      address: "123, ABC Apartments, MG Road",
      city: "Bangalore",
      pincode: "560001",
      state: "Karnataka",
      default: true,
    },
    {
      id: 2,
      name: "Jane Smith",
      phone: "9876543211",
      address: "456, XYZ Street, 2nd Block",
      city: "Bangalore",
      pincode: "560002",
      state: "Karnataka",
      default: false,
    },
  ]);

  const [selectedAddressId, setSelectedAddressId] = useState(
    addresses.find((a) => a.default)?.id || null
  );

  // ---------------- DELIVERY CHARGES (PER PRODUCT) ----------------
  const deliveryCharges = useMemo(() => {
    const charges = {};
    selectedItems.forEach((item) => {
      charges[item.id] = charges[item.id] || (Math.random() > 0.5 ? 40 : 50);
    });
    return charges;
  }, [selectedItems]);

  // ---------------- PRICE CALCULATION ----------------
  const subtotal = selectedItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const deliveryTotal = selectedItems.reduce(
    (sum, item) => sum + deliveryCharges[item.id] * item.quantity,
    0
  );

  const totalAmount = subtotal + deliveryTotal;

  // ---------------- PROCEED FUNCTION ----------------
  const handleProceed = () => {
    if (!selectedAddressId) {
      alert("Please select a delivery address");
      return;
    }

    navigate("/payment", {
      state: {
        selectedItems,
        selectedAddress: addresses.find((a) => a.id === selectedAddressId),
        totalAmount,
      },
    });
  };

  return (
    <div className="checkout-page">
      <h2>Checkout</h2>

      {/* ================= PRODUCTS ================= */}
      <div className="checkout-products">
        {selectedItems.map((item) => (
          <div className="checkout-product" key={item.id}>
            <img src={item.image} alt={item.name} />
            <div className="product-info">
              <h4>{item.name}</h4>
              <p>₹{item.price} × {item.quantity}</p>
              <p className="delivery-line">
                Delivery: ₹{deliveryCharges[item.id]} per item
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* ================= ADDRESS ================= */}
      <div className="checkout-address">
        <h3>Delivery Address</h3>
        {addresses.map((addr) => (
          <label key={addr.id} className="address-card">
            <input
              type="radio"
              checked={selectedAddressId === addr.id}
              onChange={() => setSelectedAddressId(addr.id)}
            />
            <div>
              <p>
                <strong>{addr.name}</strong> | {addr.phone}
              </p>
              <p>
                {addr.address}, {addr.city} - {addr.pincode}
              </p>
              <p>{addr.state}</p>
              {addr.default && <span className="default-badge">Default</span>}
            </div>
          </label>
        ))}
        <button
          className="add-address-btn"
          onClick={() => navigate("/address")}
        >
          + Add New Address
        </button>
      </div>

      {/* ================= PRICE SUMMARY ================= */}
      <div className="price-box">
        <div className="price-row">
          <span>Subtotal</span>
          <span>₹{subtotal}</span>
        </div>

        <div className="price-row">
          <span>Delivery Charges</span>
          <span>₹{deliveryTotal}</span>
        </div>

        <hr />

        <div className="price-row total">
          <strong>Total</strong>
          <strong>₹{totalAmount}</strong>
        </div>
      </div>

      {/* ================= PROCEED ================= */}
      <div className="checkout-proceed">
        <button className="proceed-btn" onClick={handleProceed}>
          Proceed to Payment
        </button>
      </div>
    </div>
  );
};

export default Checkout;

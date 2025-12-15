// PaymentPage.js
import React, { useState, useContext } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { StoreContext } from "./StoreContext";
import "./PaymentPage.css";

const PaymentPage = () => {
  const { cart } = useContext(StoreContext);
  const navigate = useNavigate();
  const location = useLocation();

  // ✅ existing logic (unchanged)
  const selectedItems = location.state?.selectedItems || cart;
  const selectedAddress = location.state?.selectedAddress || null;

  const [selectedPayment, setSelectedPayment] = useState("");

  // =========================
  // ✅ PRICE CALCULATIONS
  // =========================

  // Subtotal
  const subtotal = selectedItems.reduce(
    (sum, item) => sum + (item.price || 0) * (item.quantity || 1),
    0
  );

  // ✅ Delivery charges: ₹40 per product
  const DELIVERY_PER_ITEM = 40;

  const deliveryCharges = selectedItems.reduce(
    (sum, item) => sum + DELIVERY_PER_ITEM * (item.quantity || 1),
    0
  );

  // ✅ Final total
  const totalAmount = subtotal + deliveryCharges;

  // =========================
  // ✅ HANDLE PAYMENT
  // =========================
  const handleProceedPayment = () => {
    if (!selectedPayment) {
      alert("Please select a payment method.");
      return;
    }

    navigate("/order-success", {
      state: {
        items: selectedItems,
        address: selectedAddress,
        total: totalAmount,
      },
    });
  };

  return (
    <div className="payment-page">
      <h2>Payment Page</h2>

      {/* ================= CART SUMMARY ================= */}
      <div className="cart-summary">
        <h3>Order Summary</h3>

        {selectedItems.map((item) => (
          <div className="cart-item" key={item.id}>
            <img src={item.image} alt={item.name} />
            <div>
              <p>{item.name}</p>
              <p>Qty: {item.quantity}</p>
              <p>₹{item.price * item.quantity}</p>
            </div>
          </div>
        ))}

        {/* PRICE BREAKDOWN */}
        <div className="price-breakdown">
          <p>
            <span>Subtotal</span>
            <span>₹{subtotal}</span>
          </p>

          <p>
            <span>Delivery Charges</span>
            <span>₹{deliveryCharges}</span>
          </p>

          <hr />

          <p className="total-pay">
            <strong>Total to Pay</strong>
            <strong>₹{totalAmount}</strong>
          </p>
        </div>
      </div>

      {/* ================= PAYMENT OPTIONS ================= */}
      <div className="payment-options">
        <h3>Select Payment Method</h3>

        <label>
          <input
            type="radio"
            name="payment"
            value="PhonePe"
            onChange={(e) => setSelectedPayment(e.target.value)}
          />
          PhonePe
        </label>

        <label>
          <input
            type="radio"
            name="payment"
            value="EMI"
            onChange={(e) => setSelectedPayment(e.target.value)}
          />
          EMI
        </label>

        <label>
          <input
            type="radio"
            name="payment"
            value="Net Banking"
            onChange={(e) => setSelectedPayment(e.target.value)}
          />
          Net Banking
        </label>

        <label>
          <input
            type="radio"
            name="payment"
            value="Card"
            onChange={(e) => setSelectedPayment(e.target.value)}
          />
          Debit / Credit Card
        </label>

        {selectedPayment === "Card" && (
          <div className="card-details">
            <input type="text" placeholder="Name on Card" />
            <input type="text" placeholder="Card Number" />
            <input type="text" placeholder="Expiry Date (MM/YY)" />
            <input type="text" placeholder="CVV" />
          </div>
        )}
      </div>

      {/* ================= PAY BUTTON ================= */}
      <button
        className="proceed-payment-btn"
        disabled={!selectedPayment}
        onClick={handleProceedPayment}
      >
        Pay ₹{totalAmount}
      </button>
    </div>
  );
};

export default PaymentPage;

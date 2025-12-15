// src/OrderSuccess.js
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./OrderSuccess.css";

const ORDER_STEPS = [
  "Order Placed",
  "Order Confirmed",
  "Shipped",
  "Out for Delivery",
  "Delivered",
];

const OrderSuccess = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const order = location.state;

  const [currentStatus, setCurrentStatus] = useState(0);

  useEffect(() => {
    if (!order) {
      navigate("/");
      return;
    }

    // 🟢 Add order status (without breaking your logic)
    const orderWithStatus = {
      ...order,
      statusIndex: 0,
      statusText: ORDER_STEPS[0],
      orderedAt: new Date().toISOString(),
    };

    const existingOrders = JSON.parse(localStorage.getItem("orders")) || [];
    localStorage.setItem(
      "orders",
      JSON.stringify([...existingOrders, orderWithStatus])
    );

    // 🔄 Simulate order tracking updates (demo)
    const timers = [];

    ORDER_STEPS.forEach((_, index) => {
      if (index === 0) return;

      timers.push(
        setTimeout(() => {
          setCurrentStatus(index);
        }, index * 3000) // every 3 seconds
      );
    });

    return () => timers.forEach(clearTimeout);
  }, [order, navigate]);

  if (!order) return null;

  return (
    <div className="order-success-page">
      <h2>🎉 Order Placed Successfully!</h2>
      <p>Your order has been confirmed.</p>

      {/* ✅ ORDER STATUS TRACKING */}
      <div className="order-tracking">
        <h3>Order Status</h3>

        <div className="tracking-steps">
          {ORDER_STEPS.map((step, index) => (
            <div
              key={step}
              className={`tracking-step ${
                index <= currentStatus ? "active" : ""
              }`}
            >
              <div className="step-circle">{index + 1}</div>
              <p>{step}</p>
            </div>
          ))}
        </div>

        <p className="current-status">
          Current Status: <strong>{ORDER_STEPS[currentStatus]}</strong>
        </p>
      </div>

      {/* 🧾 ORDER SUMMARY */}
      <div className="order-summary">
        {order.items.map((item) => (
          <div className="order-item" key={item.id}>
            <img src={item.image} alt={item.name} />
            <div>
              <h4>{item.name}</h4>
              <p>Qty: {item.quantity}</p>
              <p>₹{item.price * item.quantity}</p>
            </div>
          </div>
        ))}
      </div>

      {/* ACTIONS */}
      <div className="order-actions">
        <button onClick={() => navigate("/orders")}>View My Orders</button>
        <button onClick={() => navigate("/")}>Continue Shopping</button>
      </div>
    </div>
  );
};

export default OrderSuccess;

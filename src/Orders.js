// src/Orders.js
import React from "react";
import "./Orders.css";

const Orders = ({ orders }) => {
  // ✅ Fallback to localStorage if orders prop is not passed
  const storedOrders = JSON.parse(localStorage.getItem("orders")) || [];
  const finalOrders = orders && orders.length > 0 ? orders : storedOrders;

  // ✅ Order status steps
  const statusSteps = ["Order Placed", "Packed", "Shipped", "Delivered"];

  return (
    <div className="orders-page">
      <h2>Your Orders</h2>

      {finalOrders && finalOrders.length > 0 ? (
        finalOrders.map((order, index) => {
          const currentStatus = order.status || "Order Placed";
          const activeIndex = statusSteps.indexOf(currentStatus);

          return (
            <div className="order-card" key={index}>
              <h3>Order #{index + 1}</h3>

              {/* ✅ ORDER STATUS TRACKING */}
              <div className="order-status">
                {statusSteps.map((step, i) => (
                  <div
                    key={i}
                    className={`status-step ${
                      i <= activeIndex ? "active" : ""
                    }`}
                  >
                    <span className="dot" />
                    <span className="label">{step}</span>
                  </div>
                ))}
              </div>

              {/* Delivery Address */}
              {order.address ? (
                <div className="order-address">
                  <p>
                    <strong>{order.address.name}</strong> |{" "}
                    {order.address.phone}
                  </p>
                  <p>
                    {order.address.house}, {order.address.city},{" "}
                    {order.address.pincode}, {order.address.state}
                  </p>
                </div>
              ) : (
                <p>No delivery address available.</p>
              )}

              {/* Items */}
              {order.items && order.items.length > 0 ? (
                <div className="order-items">
                  <h4>Items:</h4>
                  {order.items.map((item) => (
                    <div className="order-item" key={item.id}>
                      <img
                        src={item.image}
                        alt={item.name}
                        className="item-image"
                      />
                      <div className="item-info">
                        <p>{item.name}</p>
                        <p>
                          ₹{item.price} × {item.quantity}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p>No items in this order.</p>
              )}

              {/* Total */}
              <h4 className="order-total">
                Total: ₹{order.total || 0}
              </h4>
            </div>
          );
        })
      ) : (
        <p className="no-orders">No past orders yet.</p>
      )}
    </div>
  );
};

export default Orders;

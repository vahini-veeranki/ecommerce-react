import React from "react";
import "./OrderStatusTracker.css";

const steps = [
  "Order Placed",
  "Confirmed",
  "Shipped",
  "Out for Delivery",
  "Delivered",
];

const OrderStatusTracker = ({ status }) => {
  const currentStep = steps.indexOf(status);

  return (
    <div className="status-tracker">
      {steps.map((step, index) => (
        <div
          key={step}
          className={`status-step ${
            index <= currentStep ? "completed" : ""
          }`}
        >
          <div className="circle">{index + 1}</div>
          <span>{step}</span>
          {index !== steps.length - 1 && (
            <div className="line"></div>
          )}
        </div>
      ))}
    </div>
  );
};

export default OrderStatusTracker;

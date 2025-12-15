// src/Cart.js
import React, { useContext } from "react";
import { StoreContext } from "./StoreContext";
import { useNavigate } from "react-router-dom";
import "./Cart.css";

const Cart = () => {
  const { cart, updateQuantity, removeFromCart, toggleSelect } =
    useContext(StoreContext);

  const navigate = useNavigate();

  const selectedItems = cart.filter((item) => item.selected);

  const selectedTotal = selectedItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="cart-page">
      <h2>Your Cart</h2>

      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {cart.map((item) => (
            <div className="cart-item" key={item.id}>
              {/* Checkbox */}
              <input
                type="checkbox"
                checked={item.selected || false}
                onChange={() => toggleSelect(item.id)}
                className="select-box"
              />

              {/* Image */}
              <div className="cart-image">
                <img src={item.image} alt={item.name} />
              </div>

              {/* Info */}
              <div className="item-info">
                <h3>{item.name}</h3>
                <p>₹{item.price * item.quantity}</p>

                {/* Quantity */}
                <div className="qty-box">
                  <button
                    onClick={() =>
                      updateQuantity(item.id, Math.max(1, item.quantity - 1))
                    }
                  >
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    onClick={() =>
                      updateQuantity(item.id, item.quantity + 1)
                    }
                  >
                    +
                  </button>
                </div>

                {/* ✅ DELETE BELOW QTY */}
                <button
                  className="delete-btn"
                  onClick={() => removeFromCart(item.id)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}

          <div className="selected-summary">
            <h3>
              Selected Total: <span>₹{selectedTotal}</span>
            </h3>
          </div>

          <div className="proceed-box">
            <button
              className="proceed-btn"
              disabled={selectedItems.length === 0}
              onClick={() => navigate("/checkout", { state: selectedItems })}
            >
              Proceed to Buy ({selectedItems.length} items)
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;

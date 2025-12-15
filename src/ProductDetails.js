// src/ProductDetails.js
import React, { useContext, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { StoreContext } from "./StoreContext";
import { products } from "./data";
import "./ProductDetails.css";

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useContext(StoreContext);

  const product = products.find((p) => p.id === Number(id));

  const [qty, setQty] = useState(1);
  const [size, setSize] = useState(""); // ✅ Added size state
  const [reviews, setReviews] = useState([]);
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState("");

  if (!product) {
    return <h2 style={{ padding: "20px" }}>Product not found</h2>;
  }

  const productWithQty = { ...product, quantity: qty, selected: true, size };

  const addReview = () => {
    if (!comment) return;
    setReviews([...reviews, { rating, comment }]);
    setComment("");
  };

  // ✅ Show size only for Women Dresses and Men Shirts
  const showSizeOptions =
    product.category === "Women Dresses" || product.category === "Men Shirts";

  return (
    <div className="product-details-page">
      <img
        src={product.image}
        alt={product.name}
        className="product-details-image"
      />

      <h2>{product.name}</h2>

      {/* ✅ SIZE SELECTION */}
      {showSizeOptions && (
        <div className="size-selection">
          <label>Select Size: </label>
          <select
            value={size}
            onChange={(e) => setSize(e.target.value)}
          >
            <option value="">--Select--</option>
            {["XS", "S", "M", "L", "XL", "XXL"].map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
        </div>
      )}

      {/* PRICE + QUANTITY (STACKED) */}
      <div className="price-qty">
        <p className="price">₹{product.price}</p>

        <div className="qty-box">
          <button onClick={() => setQty(Math.max(1, qty - 1))}>-</button>
          <span>{qty}</span>
          <button onClick={() => setQty(qty + 1)}>+</button>
        </div>
      </div>

      <button
        className="add-btn"
        onClick={() => {
          if (showSizeOptions && !size) {
            alert("Please select a size!");
            return;
          }
          addToCart(productWithQty);
        }}
      >
        Add to Cart
      </button>

      <button
        className="buy-btn"
        onClick={() => {
          if (showSizeOptions && !size) {
            alert("Please select a size!");
            return;
          }
          navigate("/checkout", { state: [productWithQty] });
        }}
      >
        Buy Now
      </button>

      {/* REVIEWS */}
      <div className="reviews">
        <h3>Reviews</h3>

        {reviews.length === 0 && <p>No reviews yet.</p>}

        {reviews.map((r, i) => (
          <p key={i}>⭐ {r.rating}/5 – {r.comment}</p>
        ))}

        <select value={rating} onChange={(e) => setRating(e.target.value)}>
          {[5, 4, 3, 2, 1].map((r) => (
            <option key={r} value={r}>{r}</option>
          ))}
        </select>

        <input
          placeholder="Write a review"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />

        <button onClick={addReview}>Submit Review</button>
      </div>
    </div>
  );
};

export default ProductDetails;

import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { StoreContext } from "./StoreContext";

const ProductCard = ({ product }) => {
  const { wishlist, addToWishlist, removeFromWishlist } = useContext(StoreContext);

  const isWishlisted = wishlist.some(item => item.id === product.id);

  return (
    <div className="product-card">

      <Link to={`/product/${product.id}`}>
        <img src={product.image} alt={product.name} />
        <h3>{product.name}</h3>
        <p>₹{product.price}</p>
      </Link>

      <button
        className="wishlist-btn"
        onClick={() =>
          isWishlisted ? removeFromWishlist(product.id) : addToWishlist(product)
        }
      >
        {isWishlisted ? "❤️ Remove" : "🤍 Wishlist"}
      </button>
    </div>
  );
};

export default ProductCard;

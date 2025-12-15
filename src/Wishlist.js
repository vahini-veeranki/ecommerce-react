import React, { useContext } from "react";
import { StoreContext } from "./StoreContext";


const Wishlist = () => {
  const { wishlist, removeFromWishlist } = useContext(StoreContext);

  return (
    <div className="wishlist-page">
      <h1>Your Wishlist ❤️</h1>

      {wishlist.length === 0 ? (
        <p>No items in wishlist.</p>
      ) : (
        <div className="wishlist-grid">
          {wishlist.map(product => (
            <div key={product.id} className="wishlist-item">
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
              <p>₹{product.price}</p>

              <button onClick={() => removeFromWishlist(product.id)}>
                Remove ❌
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Wishlist;

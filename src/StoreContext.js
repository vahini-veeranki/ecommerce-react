import React, { createContext, useState } from "react";

export const StoreContext = createContext();

const StoreProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);

  // ✅ NEW: Orders state
  const [orders, setOrders] = useState([]);

  // ---------------- CART ----------------
  const addToCart = (product) => {
    setCart((prev) => {
      const exists = prev.find((item) => item.id === product.id);
      if (exists) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...product, quantity: 1, selected: true }];
    });
  };

  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const updateQuantity = (id, newQty) => {
    if (newQty < 1) return;
    setCart((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: newQty } : item
      )
    );
  };

  // Toggle checkbox selection
  const toggleSelect = (id) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, selected: !item.selected } : item
      )
    );
  };

  // ---------------- WISHLIST ----------------
  const addToWishlist = (product) => {
    setWishlist((prev) => {
      const exists = prev.some((item) => item.id === product.id);
      if (!exists) return [...prev, product];
      return prev;
    });
  };

  const removeFromWishlist = (id) => {
    setWishlist((prev) => prev.filter((item) => item.id !== id));
  };

  // ---------------- ORDERS (NEW) ----------------

  /**
   * Called from PaymentPage after successful payment
   */
  const placeOrder = ({ items, address, total }) => {
    const newOrder = {
      id: Date.now(),
      items,
      address,
      total,
      date: new Date().toLocaleString(),
    };

    // Save order
    setOrders((prev) => [newOrder, ...prev]);

    // Remove ordered items from cart
    setCart((prev) =>
      prev.filter((item) => !item.selected)
    );
  };

  return (
    <StoreContext.Provider
      value={{
        // cart
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        toggleSelect,

        // wishlist
        wishlist,
        addToWishlist,
        removeFromWishlist,

        // orders
        orders,
        placeOrder,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};

export default StoreProvider;

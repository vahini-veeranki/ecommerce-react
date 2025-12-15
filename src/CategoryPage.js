// src/CategoryPage.js
import React from "react";
import { useParams } from "react-router-dom";
import { products } from "./data";
import ProductCard from "./ProductCard";

const CategoryPage = () => {
  const { slug } = useParams();  // ✅ must match the route
  const filtered = products.filter((p) => p.category === slug);

  return (
    <div className="page">
      <h1>{slug}</h1>

      <div className="grid">
        {filtered.map((item) => (
          <ProductCard product={item} key={item.id} />
        ))}
      </div>

      {filtered.length === 0 && (
        <p>No products found under "{slug}".</p>
      )}
    </div>
  );
};

export default CategoryPage;

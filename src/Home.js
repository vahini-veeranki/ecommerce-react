import React, { useState } from "react";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import { categories, products } from "./data";
import ProductCard from "./ProductCard";  // ✅ import it


const Home = () => {
  const [search, setSearch] = useState("");

  const handleSearchEnter = (value) => {
    console.log("Search triggered:", value);
  };

  const filtered = products.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="page">
      <h1>E-Commerce Store</h1>

      <SearchBar 
        search={search} 
        setSearch={setSearch} 
        onEnter={handleSearchEnter}
      />

      <h2>Categories</h2>
      <div className="grid">
        {categories.map((cat) => (
          <Link key={cat} to={`/category/${cat}`} className="card">
            {cat}
          </Link>
        ))}
      </div>

      <h2>Products</h2>
      <div className="grid">
        {filtered.map((item) => (
          <ProductCard product={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default Home;

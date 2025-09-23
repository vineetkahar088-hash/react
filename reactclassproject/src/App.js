import React, { useState } from "react";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import { categories, userCart } from "./data";

function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  return (
    <div>
      <Navbar categories={categories} onCategoryClick={setSelectedCategory} />
      {selectedCategory ? (
        <ProductList products={selectedCategory.products} />
      ) : (
        <h2 style={{ textAlign: "center", marginTop: "50px" }}>
          Select a category to see products
        </h2>
      )}
      <Cart cart={userCart.cart} />
    </div>
  );
}

export default App;

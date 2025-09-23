import React from "react";
import Pagination from "./components/Pagination.js";

function App() {
  // Dummy data
  const items = Array.from({ length: 50 }, (_, i) => `Item ${i + 1}`);

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>My React App</h1>
      <Pagination data={items} itemsPerPage={5} />
    </div>
  );
}

export default App;

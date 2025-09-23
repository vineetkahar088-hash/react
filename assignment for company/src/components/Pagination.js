import React, { useState } from "react";

function Pagination({ data, itemsPerPage }) {
  const [currentPage, setCurrentPage] = useState(1);

  // total pages
  const totalPages = Math.ceil(data.length / itemsPerPage);

  // current items
  const indexOfLast = currentPage * itemsPerPage;
  const indexOfFirst = indexOfLast - itemsPerPage;
  const currentItems = data.slice(indexOfFirst, indexOfLast);

  // change page
  const goToPage = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h2>Pagination Example</h2>

      {/* Show Current Items */}
      <ul style={{ listStyle: "none", padding: 0 }}>
        {currentItems.map((item, index) => (
          <li key={index} style={{ margin: "5px 0" }}>
            {item}
          </li>
        ))}
      </ul>

      {/* Pagination Controls */}
      <div style={{ marginTop: "20px" }}>
        <button
          onClick={() => goToPage(currentPage - 1)}
          disabled={currentPage === 1}
          style={{ marginRight: "10px" }}
        >
          Prev
        </button>

        {[...Array(totalPages)].map((_, i) => (
          <button
            key={i}
            onClick={() => goToPage(i + 1)}
            style={{
              margin: "0 5px",
              fontWeight: currentPage === i + 1 ? "bold" : "normal",
            }}
          >
            {i + 1}
          </button>
        ))}

        <button
          onClick={() => goToPage(currentPage + 1)}
          disabled={currentPage === totalPages}
          style={{ marginLeft: "10px" }}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default Pagination;

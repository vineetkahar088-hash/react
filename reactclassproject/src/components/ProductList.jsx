function ProductList({ products }) {
  if (!products) return null;

  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "20px", padding: "20px" }}>
      {products.map(p => (
        <div key={p.productId} style={{ border: "1px solid #ccc", padding: "10px", width: "200px" }}>
          <img src={p.productImage} alt={p.productName} style={{ width: "100%" }} />
          <h4>{p.productName}</h4>
          <p>Price: ₹{p.price}</p>
          <p>Rating: {p.productRating}</p>
        </div>
      ))}
    </div>
  );
}

export default ProductList;

function Navbar({ categories, onCategoryClick }) {
  return (
    <div style={{ display: "flex", gap: "20px", padding: "10px", background: "#eee" }}>
      {categories.map(cat => (
        <button key={cat.categoryId} onClick={() => onCategoryClick(cat)}>
          {cat.categoryName}
        </button>
      ))}
    </div>
  );
}

export default Navbar;

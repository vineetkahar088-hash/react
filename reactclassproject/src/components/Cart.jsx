function Cart({ cart }) {
  return (
    <div style={{ padding: "20px", borderTop: "1px solid #ccc" }}>
      <h3>My Cart</h3>
      {cart.map(item => (
        <div key={item.productId}>
          {item.productName} - Qty: {item.quantity} - ₹{item.price}
        </div>
      ))}
    </div>
  );
}

export default Cart;

import React from "react";
import { useStore } from "./store/store";

const Cart = () => {
  const cart = useStore((state) => state.cart);
  const removeItem = useStore((state) => state.removeItem);
  const clearCart = useStore((state) => state.clearCart);

  return (
    <div style={{ padding: "20px", marginTop: "20px", borderTop: "2px solid #333" }}>
      <h2>Cart Items</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          <ul>
            {cart.map((item, index) => (
              <li key={index} style={{ marginBottom: "10px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span>{item}</span>
                <button onClick={() => removeItem(index)} style={{ padding: "5px 10px", backgroundColor: "#ff6b6b", color: "white", border: "none", borderRadius: "4px", cursor: "pointer" }}>
                  Remove
                </button>
              </li>
            ))}
          </ul>
          <button onClick={() => clearCart()} style={{ padding: "10px 20px", backgroundColor: "#ff6b6b", color: "white", border: "none", borderRadius: "4px", cursor: "pointer", fontSize: "16px", marginTop: "10px" }}>
            Clear Cart
          </button>
        </>
      )}
    </div>
  );
};

export default Cart;

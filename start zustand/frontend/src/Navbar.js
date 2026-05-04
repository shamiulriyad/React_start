import React from "react";
import { useStore } from "./store/store";

const Navbar = () => {
  const cart = useStore((state) => state.cart);

  return (
    <div style={{
      padding: "20px",
      backgroundColor: "#333",
      color: "white",
      marginBottom: "20px",
      fontSize: "18px",
      fontWeight: "bold",
    }}>
      Store Navbar - Cart: {cart.length} items
    </div>
  );
};

export default Navbar;

import React from "react";
import { useStore } from "./store/store";

const ProductList = ({ products }) => {
  const addItem = useStore((state) => state.addItem);

  return (
    <div>
      {products?.map((product) => (
        <div key={product.id}>
          <h3>{product.name}</h3>
          <p>{product.description}</p>
          <button onClick={() => addItem(product.name)}>
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;

import React from "react";
import Card from "./Card";

export default function MenuItem({ item }) {
  const addToCart = () => {
    console.log(`Item ${item._id} has been added to your cart`);
  };

  return (
    <Card>
      <h1>{item.name}</h1>
      <p>{item.description}</p>
      <div className="buttons">
        <button className="qtyBtn"><span>-</span> 0 <span>+</span></button>
        <button onClick={addToCart}>
          Add to cart - ${item.price.toFixed(2)}
        </button>
      </div>
    </Card>
  );
}

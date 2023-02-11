import React from "react";
import Card from "./Card";

export default function MenuItem({ item }) {
  const addToCart = () => {
    console.log(`Item ${item._id} has been added to your cart`);
  };

  return (
    <Card>
      <h1>{item.name}</h1>
      <p>{item.price}</p>
      <p>{item.description}</p>
      <button onClick={addToCart}>Add to cart</button>
    </Card>
  );
}

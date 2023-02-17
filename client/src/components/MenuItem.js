import React, { useState } from "react";
import Card from "./Card";
import { useStoreContext } from "../utils/GlobalState";
import { UPDATE_CART_QUANTITY, ADD_TO_CART } from "../utils/actions";

export default function MenuItem({ item }) {
  const [state, dispatch] = useStoreContext();
  const [amtInCart, setAmtInCart] = useState(0);

  const addToCart = () => {
    dispatch({
      type: ADD_TO_CART,
      product: { ...item, quantity: amtInCart },
    });
    console.log(state.cart);
  };

  const increment = () => {
    setAmtInCart((prevAmt) => prevAmt + 1);
  };

  const decrement = () => {
    if (amtInCart > 0) {
      setAmtInCart((prevAmt) => prevAmt - 1);
    }
  };

  return (
    <Card>
      <h1>{item.name}</h1>
      <img src={item.image}/>
      <p>{item.description}</p>
      <div className="buttons">
        <button className="qtyBtn">
          <span onClick={decrement}>-</span> {amtInCart}{" "}
          <span onClick={increment}>+</span>
        </button>
        <button onClick={addToCart}>
          Add to cart - $
          {amtInCart > 0
            ? (item.price * amtInCart).toFixed(2)
            : item.price.toFixed(2)}
        </button>
      </div>
    </Card>
  );
}

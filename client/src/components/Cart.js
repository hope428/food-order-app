import React from "react";
import Card from "./Card";
import { useStoreContext } from "../utils/GlobalState";

export default function Cart() {
  const [state, dispatch] = useStoreContext();

  return (
    <div className="cart">
      {state.cart.map((item) => (
        <div className="cart-item">
            <p>{item.name}</p>
            <p>{item.price}</p>
        </div>
      ))}
    </div>
  );
}

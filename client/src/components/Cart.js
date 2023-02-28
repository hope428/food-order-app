import React from "react";
import Card from "./Card";
import { useStoreContext } from "../utils/GlobalState";

export default function Cart() {
  const [state, dispatch] = useStoreContext();

  const calculateTotal = () => {
    let sum = 0;
    for (let i = 0; i < state.cart.length; i++) {
      const item = state.cart[i];
      sum += item.price * item.quantity;
    }

    return sum;
  };

  return (
    <div className="cart">
      {state.cart.map((item) => (
        <div className="cart-item">
          <p>
            {item.name} x{item.quantity}
          </p>
          <p>{item.price * item.quantity}</p>
        </div>
      ))}

      <span>Total: {calculateTotal()}</span>
    </div>
  );
}

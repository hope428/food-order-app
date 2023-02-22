import React from "react";
import { useStoreContext } from "../utils/GlobalState";
import { TOGGLE_CART } from "../utils/actions";

export default function Navbar() {

  const [state, dispatch] = useStoreContext();

  const toggleCart = () => {
    dispatch({
      type: TOGGLE_CART 
    })
  }

  return (
    <nav>
      <ol>
        <li>
          <span class="material-symbols-outlined">account_circle</span>
        </li>
        <li>
          <span class="material-symbols-outlined">menu_book</span>
        </li>
        <li>
          <span onClick={toggleCart} class="material-symbols-outlined">shopping_cart</span>
        </li>
      </ol>
    </nav>
  );
}

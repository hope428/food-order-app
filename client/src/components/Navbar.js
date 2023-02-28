import React from "react";
import { useStoreContext } from "../utils/GlobalState";
import { TOGGLE_CART } from "../utils/actions";
import Cart from "./Cart";
import {Link} from "react-router-dom"

export default function Navbar() {

  const [state, dispatch] = useStoreContext();

  const toggleCart = () => {
    dispatch({
      type: TOGGLE_CART 
    })
  }

  return (
    <>
    <nav>
      <ol>
        <li>
          <Link to="/user"><span class="material-symbols-outlined">account_circle</span></Link>
        </li>
        <li>
          <Link to="/"><span class="material-symbols-outlined">menu_book</span></Link>
        </li>
        <li>
          <span onClick={toggleCart} class="material-symbols-outlined">shopping_cart</span>
        </li>
      </ol>
    </nav>
    {state.cartOpen ? <Cart/> : ""}
    </>
  );
}

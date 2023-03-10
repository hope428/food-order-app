import { useReducer } from "react";
import {
  ADD_TO_CART,
  UPDATE_CART_QUANTITY,
  REMOVE_FROM_CART,
  UPDATE_PRODUCTS,
  TOGGLE_CART,
} from "./actions";

export const reducer = (state, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        cart: [...state.cart, action.product],
      };

    case UPDATE_CART_QUANTITY:
      return {
        ...state,
        cart: state.cart.map((item) => {
          if (item._id === action._id) {
            if(item.quantity > 0){
                item.quantity++
            } else {
                item.quantity = 1
            }
            return item
          }
        }),
      };

    case TOGGLE_CART: 
      return {
        ...state,
        cartOpen: !state.cartOpen
      }

    default:
      return state;
  }
};

export function useProductReducer(initialState) {
    return useReducer(reducer, initialState);
  }
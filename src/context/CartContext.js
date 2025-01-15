import { createContext } from "react";

// Create Context
const params = {
  cartItems: [],
  cartCount: [],
  addToCart: [],
  removeFromCart: [],
};
const CartContext = createContext(params);
export default CartContext;

import React, { useState } from "react";
export const CartContext = React.createContext("");
console.log("CartContext: ", CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const removeProduct = (id) => setCart(cart.filter(product => product.id !== id));



  return (
    <CartContext.Provider value="agustin">{children}</CartContext.Provider>
  );
};

export default CartProvider;

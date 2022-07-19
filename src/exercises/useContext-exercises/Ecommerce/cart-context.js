import { createContext } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  return (
    <CartContext.Provider
      value={{ cartItems: 4, cartLogger: () => console.log("carting") }}
    >
      {children}
    </CartContext.Provider>
  );
};

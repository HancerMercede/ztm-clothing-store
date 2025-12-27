import { useState } from "react";
import { CartContext } from "./Cart.Context";
import type { CartProviderProps } from "../../types";

export const CartProvider = ({ children }: CartProviderProps) => {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const value = { isCartOpen, setIsCartOpen };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

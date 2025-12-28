import { useMemo, useState } from "react";
import { CartContext } from "./Cart.Context";
import type { CartItem, CartProviderProps, Product } from "../../types";

// Helper function
const addCartItem = (cartItems: CartItem[], productToAdd: Product) => {
  //Check the array if exist the product
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );

  // If exists then return a the same cartItems array with the updated quantity
  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  // if not return a new array with the quantity in 1
  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

export const CartProvider = ({ children }: CartProviderProps) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCarItems] = useState<CartItem[]>([]);

  const cartCount = useMemo(
    () => cartItems.reduce((total, acc) => total + acc.quantity, 0),
    [cartItems]
  );

  const addItemToCart = (productToAdd: Product) => {
    setCarItems(addCartItem(cartItems, productToAdd));
  };

  const value = {
    isCartOpen,
    setIsCartOpen,
    addItemToCart,
    cartItems,
    cartCount,
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

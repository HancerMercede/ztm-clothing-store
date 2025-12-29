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

const removeCartItem = (cartItems: CartItem[], cartItemToRemove: Product) => {
  //Check the array if exist the product
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToRemove.id
  );

  //Check if the quantity is equal to 1, if it is remove that item from the cart
  if (existingCartItem?.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
  }

  // If exists then return a the same cartItems array with the updated quantity
  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === cartItemToRemove.id
        ? { ...cartItem, quantity: cartItem.quantity - 1 }
        : cartItem
    );
  }
  // if not return a new array with the quantity in 1
  return [...cartItems, { ...cartItemToRemove, quantity: 1 }];
};

const removeCheckOutItem = (
  cartItems: CartItem[],
  cartItemToClear: Product
) => {
  return cartItems.filter((cartItem) => cartItem.id !== cartItemToClear.id);
};

export const CartProvider = ({ children }: CartProviderProps) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCarItems] = useState<CartItem[]>([]);

  const cartCount = useMemo(
    () => cartItems.reduce((total, acc) => total + acc.quantity, 0),
    [cartItems]
  );

  const cartTotal = useMemo(
    () => cartItems.reduce((total, acc) => total + acc.price * acc.quantity, 0),
    [cartItems]
  );

  const addItemToCart = (productToAdd: Product) => {
    setCarItems(addCartItem(cartItems, productToAdd));
  };

  const removeItemFromCart = (cartItemToRemove: Product) => {
    setCarItems(removeCartItem(cartItems, cartItemToRemove));
  };

  const clearItemFromCart = (cartItemToClear: Product) => {
    setCarItems(removeCheckOutItem(cartItems, cartItemToClear));
  };

  const value = {
    isCartOpen,
    setIsCartOpen,
    addItemToCart,
    removeItemFromCart,
    cartItems,
    cartCount,
    cartTotal,
    clearItemFromCart,
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

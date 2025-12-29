import type {
  Dispatch,
  InputHTMLAttributes,
  ReactNode,
  SetStateAction,
} from "react";
import { type User } from "firebase/auth";
import { CartItem } from "../components/Cart-Item/CartItem";

// Category section
export interface Category {
  id: number;
  title: string;
  imageUrl: string;
}

export interface CategoryItemProps {
  category: Category;
}

export type CategoriesListProps = {
  categories: Category[];
};

export interface CategoriesPreviewProps {
  title: string;
  products: Product[];
}
// User section
export type CurrentUser = User | null;

export interface UserContextType {
  currentUser: CurrentUser;
  setCurrentUser: Dispatch<SetStateAction<CurrentUser>>;
}

export const defaultUserValue: UserContextType = {
  currentUser: null,
  setCurrentUser: () => {},
};

export interface UserProviderProps {
  children: ReactNode;
}

// Form inputs
export interface DefaultFormInputProps {
  label: string;
  [x: string]: unknown;
}

export type FormInputProps = DefaultFormInputProps &
  InputHTMLAttributes<HTMLInputElement>;

// Product section
export interface Product {
  id: number;
  name: string;
  imageUrl: string;
  price: number;
}

// This is a new interface to interact with the context of categories and the provider
export interface CategoriesMap {
  [x: string]: [];
}

export interface Products {
  categoriesMap: CategoriesMap;
  setCategoriesMap: React.Dispatch<React.SetStateAction<CategoriesMap>>;
}

export const DefaultProductsValue: Products = {
  categoriesMap: {},
  setCategoriesMap: () => {},
};

export interface ProductsProviderProps {
  children: ReactNode;
}

export interface ProductProps {
  product: Product;
}

// Cart section
export interface CartContextData {
  isCartOpen: boolean;
  setIsCartOpen: React.Dispatch<React.SetStateAction<boolean>>;
  cartItems: CartItem[];
  addItemToCart: (productToAdd: Product) => void;
  removeItemFromCart: (productToAdd: Product) => void;
  clearItemFromCart: (productToAdd: Product) => void;
  cartCount: number;
  cartTotal: number;
}

export const CartDefaultValues: CartContextData = {
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  removeItemFromCart: () => {},
  clearItemFromCart: () => {},
  cartCount: 0,
  cartTotal: 0,
};

export interface CartProviderProps {
  children: ReactNode;
}

// This is a new object or interface extending Product
export interface CartItem extends Product {
  quantity: number;
}

export interface CartItemModel {
  cartItem: CartItem;
}

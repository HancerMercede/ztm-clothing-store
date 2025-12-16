import type {
  Dispatch,
  InputHTMLAttributes,
  ReactNode,
  SetStateAction,
} from "react";
import { type User } from "firebase/auth";

export interface Category {
  id: number;
  title: string;
  imageUrl: string;
}

export interface CategoryItemProps {
  category: Category;
}

export interface CategoriesListProps {
  categories: Category[];
}

export type Categories = Category[];

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

export interface DefaultFormInputProps {
  label: string;
  [x: string]: unknown;
}

export type FormInputProps = DefaultFormInputProps &
  InputHTMLAttributes<HTMLInputElement>;

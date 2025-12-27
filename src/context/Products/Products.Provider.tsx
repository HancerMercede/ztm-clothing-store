import { useState } from "react";
import { ProductsContext } from "./Products.Context";
import productsList from "../../Shop-data.json";
import type { Product, ProductsProviderProps } from "../../types";

export const ProductsProvider = ({ children }: ProductsProviderProps) => {
  const [products, setProducts] = useState<Product[]>(productsList);

  const value = { products, setProducts };
  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};

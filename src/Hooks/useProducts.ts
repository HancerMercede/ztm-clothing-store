import { useContext, useMemo } from "react";
import { CategoriesContext } from "../context/Categories/Categories.Context";
import type { Product } from "../types";

export const useProducts = (filter: string) => {
  const { categoriesMap } = useContext(CategoriesContext);

  const allProducts = useMemo(() => {
    const products: Product[] = [];

    Object.values(categoriesMap).forEach((categoriesProducts) => {
      products.push(...categoriesProducts);
    });

    return products;
  }, [categoriesMap]);

  const filteredProducts: Product[] = useMemo(() => {
    if (!filter.trim()) return [];

    const searchTerm = filter.toLowerCase();

    return allProducts
      .filter((product) => product.name.toLowerCase().includes(searchTerm))
      .slice(0, 5);
  }, [filter, allProducts]);

  return { filteredProducts };
};

import { useEffect, useState } from "react";
import { CategoriesContext } from "./Categories.Context";

import { getCategoriesAndDocuments } from "../../utils/Firebase/firebase";

import type { CategoriesMap, ProductsProviderProps } from "../../types";

export const CategoriesProvider = ({ children }: ProductsProviderProps) => {
  const [categoriesMap, setCategoriesMap] = useState<CategoriesMap>({});

  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoryMap = await getCategoriesAndDocuments();
      setCategoriesMap(categoryMap);
    };
    getCategoriesMap();
  }, []);
  const value = { categoriesMap, setCategoriesMap };
  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  );
};

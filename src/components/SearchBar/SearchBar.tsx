import { useState, useContext, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { CategoriesContext } from "../../context/Categories/Categories.Context";
import type { Product } from "../../types";
import "./SearchBar.styles.scss";

interface FilterProps {
  filter: string;
  FilterChange: (f: string) => void;
}

export const SearchBar = ({ filter, FilterChange }: FilterProps) => {
  const navigate = useNavigate();
  const { categoriesMap } = useContext(CategoriesContext);
  const [isFocused, setIsFocused] = useState(false);

  const allProducts = useMemo(() => {
    const products: Product[] = [];
    Object.values(categoriesMap).forEach((categoryProducts) => {
      products.push(...categoryProducts);
    });
    return products;
  }, [categoriesMap]);

  const filteredProducts = useMemo(() => {
    if (!filter.trim()) return [];
    const searchTerm = filter.toLowerCase();
    return allProducts
      .filter((product) => product.name.toLowerCase().includes(searchTerm))
      .slice(0, 5);
  }, [filter, allProducts]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    FilterChange(e.target.value);
  };

  const handleProductClick = (productId: number) => {
    navigate(`/product/${productId}`);
    FilterChange("");
    setIsFocused(false);
  };

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setTimeout(() => setIsFocused(false), 200);

  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Search products..."
        value={filter}
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        className="input-search"
      />
      {isFocused && filteredProducts.length > 0 && (
        <div className="search-dropdown">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="search-dropdown-item"
              onClick={() => handleProductClick(product.id)}
            >
              <img src={product.imageUrl} alt={product.name} />
              <div className="item-info">
                <span className="item-name">{product.name}</span>
                <span className="item-price">${product.price}</span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

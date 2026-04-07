import { useState, type ChangeEvent } from "react";
import { useNavigate } from "react-router-dom";
import "./SearchBar.styles.scss";
import { useProducts } from "../../Hooks/useProducts";

interface IFilterProps {
  filter: string;
  FilterChange: (f: string) => void;
}

export const SearchBar = ({ filter, FilterChange }: IFilterProps) => {
  const navigate = useNavigate();
  const { filteredProducts } = useProducts(filter);
  const [isFocused, setIsFocused] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
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
      <form>
        <input
          type="text"
          placeholder="Search products..."
          value={filter}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          className="input-search"
        />
      </form>
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

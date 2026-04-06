import { useContext, useMemo } from "react";
import { useParams, Link } from "react-router-dom";
import { CategoriesContext } from "../../context/Categories/Categories.Context";
import { CartContext } from "../../context/Cart/Cart.Context";
import type { Product } from "../../types";
import Button from "../../components/Button/Button";
import "./ProductDetails.styles.scss";

export const ProductDetails = () => {
  const { productId } = useParams<{ productId: string }>();
  const { categoriesMap } = useContext(CategoriesContext);
  const { addItemToCart } = useContext(CartContext);

  const product: Product | null = useMemo(() => {
    const id = parseInt(productId || "0", 10);
    const categories = categoriesMap as Record<string, Product[]>;

    for (const categoryProducts of Object.values(categories)) {
      const found = categoryProducts.find((p) => p.id === id);
      if (found) return found;
    }
    return null;
  }, [productId, categoriesMap]);

  if (!product) {
    return (
      <div className="product-not-found">
        <h2>Product not found</h2>
        <Link to="/shop">Back to Shop</Link>
      </div>
    );
  }

  const handleAddToCart = () => addItemToCart(product);

  return (
    <div className="product-details-container">
      <Link to="/shop" className="back-link">
        ← Back to Shop
      </Link>
      <div className="product-content">
        <div className="product-image">
          <img src={product.imageUrl} alt={product.name} />
        </div>
        <div className="product-info">
          <h1 className="product-name">{product.name}</h1>
          <p className="product-price">${product.price}</p>
          <p className="product-description">
            Premium quality clothing item. Perfect for any occasion.
          </p>
          <Button buttonType="inverted" onClick={handleAddToCart}>
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  );
};

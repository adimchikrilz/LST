// src/components/ProductCard/ProductCard.tsx

import { useDispatch } from 'react-redux';
import { addToCart } from '../../features/cart/cartSlice';
import styles from './ProductCard.module.css';
import type { Product } from '../../services/products'; // Import the Product type

interface ProductCardProps {
  product: Product; // Use the imported Product type
  showAddToCart?: boolean; // Add showAddToCart prop to control button visibility
}

const ProductCard = ({ product, showAddToCart = false }: ProductCardProps) => {
  const dispatch = useDispatch();
  const discountedPrice = product.discountPercentage
    ? product.price * (1 - product.discountPercentage / 100)
    : product.price;

  return (
    <div className={styles.productCard}>
      {product.isNew && <span className={styles.newTag}>NEW</span>}
      <img src={product.thumbnail || '/placeholder.jpg'} alt={product.title} className={styles.productImage} />
      <p className={styles.productCategory}>Graphic Design</p>
      <p className={styles.productDepartment}>English Department</p>
      <h3 className={styles.productTitle}>{product.title}</h3>
      <div className={styles.price}>
        {product.discountPercentage && (
          <span className={styles.originalPrice}>${product.price.toFixed(2)}</span>
        )}
        <span className={styles.discountedPrice}>${discountedPrice.toFixed(2)}</span>
      </div>
      {showAddToCart && (
        <button
          className={styles.addToCartBtn}
          onClick={() => dispatch(addToCart(product))}
          disabled={product.stock === 0}
        >
          {product.stock === 0 ? 'Out of Stock' : 'Add to Cart'}
        </button>
      )}
    </div>
  );
};

export default ProductCard;
import React from 'react';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { useCart } from '../context/CartContext'; // ✅ Import
import '../styles/ProductCard.css';

export default function ProductCard({ product, isInWishlist, addToWishlist, removeFromWishlist }) {
  const { addToCart } = useCart(); // ✅ Use the cart context

  const handleWishlistClick = () => {
    if (isInWishlist) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product);
    }
  };

  const handleAddToCart = () => {
    addToCart(product);
  };

  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>₹{product.price}</p>
      <p>Size: {product.size}</p>
      <div className="card-buttons">
        <button onClick={handleAddToCart}>Add to Cart</button>
        <button onClick={handleWishlistClick} className="wishlist-btn">
          {isInWishlist ? <FaHeart color="red" /> : <FaRegHeart />}
        </button>
      </div>
    </div>
  );
}

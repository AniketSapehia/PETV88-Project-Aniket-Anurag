import React from 'react';
import { useWishlist } from '../context/WishlistContext';
import '../styles/Category.css';

export default function Wishlist() {
  const { wishlist, removeFromWishlist } = useWishlist();

  return (
    <div className="category-container">
      <h2>My Wishlist</h2>
      <div className="product-grid">
        {wishlist.length === 0 ? (
          <p>Your wishlist is empty.</p>
        ) : (
          wishlist.map(item => (
            <div key={item.id} className="product-card">
              <img src={item.image} alt={item.name} />
              <h3>{item.name}</h3>
              <p>₹{item.price}</p>
              <p>Size: {item.size}</p>
              <button onClick={() => removeFromWishlist(item.id)}>Remove</button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

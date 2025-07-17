import React, { useState } from 'react';
import products from '../data/Products';
import '../styles/Category.css';
import ProductCard from '../components/ProductCard';
import { useWishlist } from '../context/WishlistContext';

export default function Women() {
  const [filters, setFilters] = useState({ size: '', price: '' });
  const { wishlist, addToWishlist, removeFromWishlist } = useWishlist();

  const handleSizeChange = (e) => {
    setFilters({ ...filters, size: e.target.value });
  };

  const handlePriceChange = (e) => {
    setFilters({ ...filters, price: e.target.value });
  };

  const applyFilters = (items) => {
    return items.filter((item) => {
      const matchesSize = filters.size ? item.size === filters.size : true;
      const matchesPrice = filters.price ? item.price <= parseInt(filters.price) : true;
      return matchesSize && matchesPrice;
    });
  };

  const menItems = products.filter(p => p.category === 'women');
  const filteredItems = applyFilters(menItems);

  return (
    <div className="category-container">
      <h2>Women's Clothing</h2>

      <div className="filters">
        <select onChange={handleSizeChange} value={filters.size}>
          <option value="">All Sizes</option>
          <option value="S">S</option>
          <option value="M">M</option>
          <option value="L">L</option>
        </select>

        <select onChange={handlePriceChange} value={filters.price}>
          <option value="">Any Price</option>
          <option value="500">Up to ₹500</option>
          <option value="1000">Up to ₹1000</option>
          <option value="2000">Up to ₹2000</option>
        </select>
      </div>

      <div className="product-grid">
        {filteredItems.length > 0 ? (
          filteredItems.map(item => (
            <ProductCard
              key={item.id}
              product={item}
              isInWishlist={wishlist.some(w => w.id === item.id)}
              addToWishlist={addToWishlist}
              removeFromWishlist={removeFromWishlist}
            />
          ))
        ) : (
          <p>No products match the selected filters.</p>
        )}
      </div>
    </div>
  );
}

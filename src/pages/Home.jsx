import React, { useState, useEffect } from 'react';
import productsData from '../data/Products';
import '../styles/Home.css';
import Footer from '../components/Footer.jsx';
import ProductCard from '../components/ProductCard.jsx';
import { useWishlist } from '../context/WishlistContext';

export default function Home() {
  const [products, setProducts] = useState([]);
  const { wishlist, addToWishlist, removeFromWishlist } = useWishlist();

  useEffect(() => {
    setProducts(productsData);
  }, []);

  return (
    <div className="home-container">
      <section className="hero-section">
        <div className="hero-text">
          <h1>Welcome to VASTRA</h1>
          <p>Explore the latest trends in fashion for Men, Women, and Kids.</p>
        </div>
      </section>

      <section className="products-section">
        <h2>All Products</h2>
        <div className="products-grid">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              isInWishlist={wishlist.some((item) => item.id === product.id)}
              addToWishlist={addToWishlist}
              removeFromWishlist={removeFromWishlist}
            />
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}

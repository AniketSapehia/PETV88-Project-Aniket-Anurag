import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { WishlistProvider } from './context/WishlistContext';
import { CartProvider } from './context/CartContext';
import './styles/Index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <WishlistProvider>
       <CartProvider>
          <App />
        </CartProvider>
    </WishlistProvider>
  </React.StrictMode>
);

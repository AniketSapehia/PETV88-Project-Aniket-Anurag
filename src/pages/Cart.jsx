import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import '../styles/Cart.css';

export default function Cart() {
  const { cart, removeFromCart, clearCart } = useCart();
  const [orderPlaced, setOrderPlaced] = useState(false);

  const calculateTotal = () => {
    return cart.reduce((acc, item) => acc + item.price, 0);
  };

  const handleCheckout = () => {
    setOrderPlaced(true);
    clearCart(); // Optional: empty the cart after order
  };

  if (orderPlaced) {
    return (
      <div className="cart-container thank-you">
        <h2>Thank you for your purchase!</h2>
        <p>Your order has been placed successfully.</p>
      </div>
    );
  }

  if (!cart || cart.length === 0) {
    return <h2 className="cart-container">Your cart is empty.</h2>;
  }

  return (
    <div className="cart-container">
      <h2>Your Cart</h2>

      <div className="cart-items">
        {cart.map((item) => (
          <div key={item.id} className="cart-item">
            <img src={item.image} alt={item.name} />
            <div>
              <h3>{item.name}</h3>
              <p>₹{item.price}</p>
              <p>Size: {item.size}</p>
              <button onClick={() => removeFromCart(item.id)}>Remove</button>
            </div>
          </div>
        ))}
      </div>

      <div className="cart-summary">
        <h3>Total: ₹{calculateTotal()}</h3>
        <button className="checkout-btn" onClick={handleCheckout}>
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
}

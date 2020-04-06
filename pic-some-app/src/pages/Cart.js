import React, { useState, useContext } from 'react';
import { Context } from '../context/Context';
import CartItem from '../components/CartItem';

function Cart() {
  let { cartItems, emptyCart } = useContext(Context);
  const [displayText, setDisplayText] = useState('Place Order');
  const cartItemElements = cartItems.map((item) => {
    return <CartItem key={item.id} item={item} />;
  });

  const cartTotal = cartItems.length * 5.99;

  const placeOrder = () => {
    setDisplayText('Ordering...');
    setTimeout(() => {
      emptyCart();
      setDisplayText('Place Order!');
      console.log(`Order placed!`);
    }, 3000);
  };

  return (
    <main className="cart-page">
      <h1>Check out</h1>
      {cartItemElements}
      <p className="total-cost">
        Total:{' '}
        {cartTotal.toLocaleString('en-US', {
          style: 'currency',
          currency: 'USD',
        })}{' '}
      </p>
      <div className="order-button">
        <button onClick={placeOrder}>{`${displayText}`}</button>
      </div>
    </main>
  );
}

export default Cart;

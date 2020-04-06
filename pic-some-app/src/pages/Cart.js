import React, { useContext } from 'react';
import { Context } from '../context/Context';
import CartItem from '../components/CartItem';

function Cart() {
  const { cartItems } = useContext(Context);
  const cartItemElements = cartItems.map((item) => {
    return <CartItem key={item.id} item={item} />;
  });

  const cartTotal = cartItems.length * 5.99;

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
        <button>Place Order</button>
      </div>
    </main>
  );
}

export default Cart;

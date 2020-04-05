import React, { useContext } from 'react';
import { Context } from '../context/Context';

function Cart() {
  const { cartItems } = useContext(Context);
  const cartItemElements = cartItems.map((item) => {
    return <li key={item.id}>{item.url}</li>;
  });

  return (
    <main className="cart-page">
      <h1>Check out</h1>
      <ul>{cartItemElements}</ul>
    </main>
  );
}

export default Cart;

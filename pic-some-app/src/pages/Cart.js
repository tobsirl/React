import React, { useContext } from 'react';
import { Context } from '../context/Context';
import CartItem from '../components/CartItem';

function Cart() {
  const { cartItems } = useContext(Context);
  const cartItemElements = cartItems.map((item) => {
    return <CartItem key={item.id} item={item} />;
  });

  return (
    <main className="cart-page">
      <h1>Check out</h1>
      {cartItemElements}
    </main>
  );
}

export default Cart;

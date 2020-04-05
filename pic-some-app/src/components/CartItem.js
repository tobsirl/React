import React, { useContext } from 'react';
import { Context } from '../context/Context';

function CartItem({ item }) {
  const { removeCartItem } = useContext(Context);

  return (
    <div className="cart-item">
      <i
        className="ri-delete-bin-line"
        onClick={() => removeCartItem(item.id)}
      ></i>
      <img src={item.url} width="130px" alt="" />
      <p>$5.99</p>
    </div>
  );
}

export default CartItem;

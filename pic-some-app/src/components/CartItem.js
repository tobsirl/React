import React, { useContext } from 'react';
import { Context } from '../context/Context';
import useHover from '../hooks/useHover';

function CartItem({ item }) {
  // const [hovered, setHovered] = useState(false);
  const [ hovered, ref ] = useHover();
  const { removeCartItem } = useContext(Context);

  return (
    <div className="cart-item">
      <i
        className={hovered ? 'ri-delete-bin-fill' : 'ri-delete-bin-line'}
        ref={ref}
        onClick={() => removeCartItem(item.id)}
      ></i>
      <img src={item.url} width="130px" alt="" />
      <p>$5.99</p>
    </div>
  );
}

export default CartItem;

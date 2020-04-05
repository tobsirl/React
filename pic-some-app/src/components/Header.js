import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../context/Context';

function Header() {
  const { cartItems } = useContext(Context);

  const cartFull =
    cartItems.length > 0 ? (
      <i className="ri-shopping-cart-fill ri-fw ri-2x"></i>
    ) : (
      <i className="ri-shopping-cart-line ri-fw ri-2x"></i>
    );

  return (
    <header>
      <Link to="/">
        <h2>Pic Some</h2>
      </Link>
      <Link to="/cart">{cartFull}</Link>
    </header>
  );
}

export default Header;

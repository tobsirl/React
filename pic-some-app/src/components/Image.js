import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Context } from '../context/Context';
import { useContext } from 'react';

function Image({ className, img }) {
  const [hovered, setHovered] = useState(false);
  const { toggleFavorite, addCartItem, cartItems } = useContext(Context);

  function heartIcon() {
    if (img.isFavorite) {
      return (
        <i
          className="ri-heart-fill favorite"
          onClick={() => toggleFavorite(img.id)}
        ></i>
      );
    } else if (hovered) {
      return (
        <i
          className="ri-heart-line favorite"
          onClick={() => toggleFavorite(img.id)}
        ></i>
      );
    }
  }

  function cartIcon() {
    const alreadyInCart = cartItems.some(item => item.id === img.id);
    if (alreadyInCart) {
      return <i className="ri-shopping-cart-fill cart"></i>;
    } else if (hovered) {
      return (
        <i
          className="ri-add-circle-line cart"
          onClick={() => addCartItem(img)}
        ></i>
      );
    }
  }

  return (
    <div
      className={`${className} image-container`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <img className="image-grid" src={img.url} alt="" />
      {heartIcon()}
      {cartIcon()}
    </div>
  );
}

Image.propTypes = {
  className: PropTypes.string,
  img: PropTypes.shape({
    id: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    isFavorite: PropTypes.bool
  })
};

export default Image;

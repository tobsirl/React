import React, { useState } from 'react';

function Image({ className, img }) {
  const [hovered, setHovered] = useState(false);

  const heartIcon = hovered && <i className="ri-heart-line favorite"></i>;
  const cartIcon = hovered && <i className="ri-add-circle-line cart"></i>;

  return (
    <div
      className={`${className} image-container`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <img className="image-grid" src={img.url} alt="" />
      {heartIcon}
      {cartIcon}
    </div>
  );
}

export default Image;

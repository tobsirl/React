import React from 'react';
import { useParams } from 'react-router-dom';

import productData from './productData';

function ProductDetails() {
  let { productId } = useParams();

  const product = productData.find(prod => prod.id === productId);

  return (
    <div>
      <h1>Product Details</h1>
      <p>{`ProductId: ${productId}`}</p>
      <p>{`Name: ${product.name}`}</p>
      <p>{`Price: ${product.price}`}</p>
      <p>{`Description: ${product.description}`}</p>
    </div>
  );
}

export default ProductDetails;

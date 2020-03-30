import React from 'react';
import { Link, useRouteMatch, Switch, Route } from 'react-router-dom';

import productData from './productData';
import ProductDetails from './ProductDetails';

function Product() {
  let { url, path } = useRouteMatch();

  const products = productData.map(({ id, name }) => {
    return (
      <li key={id}>
        <h3>
          <Link to={`${url}/${id}`}>{name}</Link>
        </h3>
      </li>
    );
  });

  return (
    <div>
      <h1>Product</h1>
      <ul>{products}</ul>
      <Switch>
        <Route exact path={path}>
          <h3>Please select a Product.</h3>
        </Route>
        <Route path={`${path}/:productId`}>
          <ProductDetails />
        </Route>
      </Switch>
    </div>
  );
}

export default Product;

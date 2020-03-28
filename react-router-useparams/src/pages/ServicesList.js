import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';

import serviceData from './servicesData';


function ServicesList() {
  let { url } = useRouteMatch();

  return (
    <div>
      <h1>Sevices List Page</h1>
      <ul>
        {serviceData.map(({ _id, name, price }) => {
          return (
            <li key={_id}>
              <h3>
                <Link to={`${url}/${_id}`}>
                  {name} - {`${price}`}
                </Link>
              </h3>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default ServicesList;

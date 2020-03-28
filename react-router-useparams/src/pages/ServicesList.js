import React from 'react';

import serviceData from './servicesData';

function ServicesList() {
  return (
    <div>
      <h1>Sevices List Page</h1>
      <ul>
        {serviceData.map(({ _id, name, price, description }) => {
          return (
            <li key={_id}>
              {name}
              {price} {description}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default ServicesList;

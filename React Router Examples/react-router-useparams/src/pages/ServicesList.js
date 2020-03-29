import React from 'react';
import { Link, Switch, Route, useRouteMatch } from 'react-router-dom';

import serviceData from './servicesData';
import ServiceDetails from './ServiceDetails';

function ServicesList() {
  let { url, path } = useRouteMatch();
  console.log(url, path);

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
      
      <Switch>
        <Route path={`${path}/:serviceId`}>
          <ServiceDetails />
        </Route>
      </Switch>
    </div>
  );
}

export default ServicesList;

import React from 'react';
import { Link, Switch, Route, useRouteMatch } from 'react-router-dom';

import Settings from './Settings';
import Info from './Info';

function Profile() {
  let match = useRouteMatch();

  return (
    <div>
      <h1>Profile Page</h1>
      <ul>
        <li>
          <Link to={`${match.url}/info`}>Profile Info</Link>
        </li>
        <li>
          <Link to={`${match.url}/settings`}>Profile Settings</Link>
        </li>
      </ul>
      <Switch>
        <Route path={`${match.path}/info`}>
          <Info />
        </Route>
        <Route path={`${match.path}/settings`}>
          <Settings />
        </Route>
        <Route path={match.path}>
          <h3>Please select a topic.</h3>
        </Route>
      </Switch>
    </div>
  );
}

export default Profile;

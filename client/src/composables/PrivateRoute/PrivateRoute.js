import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component: Component, authorization, ...rest}) => {
  return authorization.authorized ? (
    <Route {...rest}
      component={Component}
    />
  ) : <Redirect to="/"/>
}

export default PrivateRoute;
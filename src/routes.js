import React from 'react';
import { Route } from 'react-router';
import App from './containers/App';
import * as containers from './containers';


const {
  PermitCheckerPage,
  NotFoundPage,
} = containers;


export default (
  <Route component={App}>
    <Route path="/" component={PermitCheckerPage} />
    <Route path="*" component={NotFoundPage} />
  </Route>
);

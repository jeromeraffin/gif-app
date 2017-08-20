import React from 'react';
import { hashHistory, IndexRedirect, Router, Route } from 'react-router';
import { Provider } from 'react-redux';

import ConnectedApp from '../containers/App';
import ConnectedResults from '../containers/Results';
import ConnectedFavs from '../containers/Favs';

const Root = ({ store }) => (
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={ConnectedApp}>
        <IndexRedirect to="/search" />
        <Route path="search(/:query)" component={ConnectedResults} />
        <Route path="favorites" component={ConnectedFavs} />
      </Route>
    </Router>
  </Provider>
)

export default Root;

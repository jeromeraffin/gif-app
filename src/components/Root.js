import React from 'react';
import { browserHistory, IndexRedirect, Router, Route } from 'react-router';
import { Provider } from 'react-redux';

import ConnectedApp from '../containers/App';
import ConnectedResults from '../containers/Results'
import Favs from './Favs';

const Root = ({ store }) => (
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={ConnectedApp}>
        <IndexRedirect to="/search" />
        <Route path="search(/:query)" component={ConnectedResults} />
        <Route path="favorites" component={Favs} />
      </Route>
    </Router>
  </Provider>
)

export default Root;

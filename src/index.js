import React from 'react';
import ReactDOM from 'react-dom';
import { browserHistory, IndexRedirect, Router, Route } from 'react-router'

import 'normalize.css/normalize.css';
import './global-styles';

import App from './components/App';
import SearchPage from './components/SearchPage';
import Favs from './components/Favs';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRedirect to="/search" />
      <Route path="search(/:query)" component={SearchPage} />
      <Route path="favorites" component={Favs} />
    </Route>
  </Router>
), document.getElementById('root'));
registerServiceWorker();

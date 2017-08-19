import React from 'react';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';

import 'normalize.css/normalize.css';
import './global-styles';

import reducers from './reducers';
import { loadState, saveState } from './localStorage';
import Root from './components/Root';
import registerServiceWorker from './registerServiceWorker';

const persistedState = loadState();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducers,
  persistedState,
  composeEnhancers(
    applyMiddleware(thunk),
  )
);

store.subscribe(() => {
  saveState({
    favoritedGifs: store.getState().favoritedGifs
  })
})

ReactDOM.render((
  <Root store={store} />
), document.getElementById('root'));
registerServiceWorker();

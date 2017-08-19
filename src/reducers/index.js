import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'
import gifs from './gifs';
import favoritedGifs from './favoritedGifs'

const reducers = combineReducers({
  gifs,
  favoritedGifs,
  form: formReducer
})

export default reducers;

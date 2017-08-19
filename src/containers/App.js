import { connect } from 'react-redux';
import { initialize } from 'redux-form';

import App from '../components/App';

import {
  clearSearch,
  sendSearch
} from '../actions';

const mapStateToProps = ({ gifs, favoritedGifs, error, page }) => {
  return {
    gifs: gifs.items,
    loading: gifs.loading,
    favoritedGifs: favoritedGifs.items,
    error: gifs.error,
    page: gifs.page
  }
}

const mapDispatchToProps = dispatch => {
  return {
    handleSearch: searchParameter => {
      if(searchParameter) {
        dispatch(sendSearch(searchParameter));
      } else {
        dispatch(clearSearch());
        dispatch(initialize('search', {}));
      }
    },
    clearSearch: () => {
      dispatch(clearSearch())
    },
    initializeForm: () => {
      dispatch(initialize('search', {}))
    }
  }
}

const ConnectedApp = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default ConnectedApp;

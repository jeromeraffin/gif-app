import { connect } from 'react-redux';

import App from '../components/App';

import {
  clearSearch,
  sendSearch
} from '../actions';

const mapStateToProps = ({ gifs, favoritedGifs }) => {
  return {
    gifs: gifs.items,
    loading: gifs.loading,
    favoritedGifs: favoritedGifs.items,
    error: gifs.error,
    page: gifs.page,
    copied: gifs.copied
  }
}

const mapDispatchToProps = dispatch => {
  return {
    handleSearch: searchParameter => {
      if (searchParameter) {
        dispatch(sendSearch(searchParameter));
      } else {
        dispatch(clearSearch());
      }
    },
    clearSearch: () => {
      dispatch(clearSearch())
    }
  }
}

const ConnectedApp = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default ConnectedApp;

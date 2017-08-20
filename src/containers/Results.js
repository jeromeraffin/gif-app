import { connect } from 'react-redux';
import Results from '../components/Results';
import LoaderHOC from '../components/Loader';
import NoResultsHOC from '../components/NoResults.js';
import ErrorHOC from '../components/Error.js';

import {
  sendSearch,
  toggleFavorites,
  copyGifUrl
} from '../actions';

const mapStateToProps = ({ gifs, favoritedGifs }) => {
  return {
    gifs: gifs.items,
    loading: gifs.loading,
    loaded: gifs.loaded,
    favoritedGifs: favoritedGifs.items,
    error: gifs.error,
    searchParameter: gifs.searchParameter,
    page: gifs.page,
    loadingPage: gifs.loadingPage,
    totalGifs: gifs.totalGifs
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onFavoriteClicked: gifClicked => {
      dispatch(toggleFavorites(gifClicked));
    },
    onCopyClicked: (url) => {
      dispatch(copyGifUrl(url));
    },
    loadMoreGifs: (searchParameter, page) => {
      dispatch(sendSearch(searchParameter, page));
    }
  }
}

const ConnectedResults = connect(
  mapStateToProps,
  mapDispatchToProps
)(LoaderHOC(ErrorHOC(NoResultsHOC(Results))));

export default ConnectedResults;

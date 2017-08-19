import { connect } from 'react-redux';
import { sendSearch, addGifToFavorites, removeGifFromFavorites } from '../actions';
import Results from '../components/Results';
import LoaderHOC from '../components/Loader';
import NoResultsHOC from '../components/NoResults.js'
import ErrorHOC from '../components/Error.js'


const mapStateToProps = ({ gifs, favoritedGifs }) => {
  return {
    gifs: gifs.items,
    loading: gifs.loading,
    loaded: gifs.loaded,
    favoritedGifs: favoritedGifs.items,
    error: gifs.error,
    searchParameter: gifs.searchParameter,
    page: gifs.page,
    loadingPage: gifs.loadingPage
  }
}

const mergedProps = (stateProps, dispatchProps) => {
  const {
    favoritedGifs,
    loading,
    gifs,
    loaded,
    error,
    page,
    loadingPage,
    searchParameter
  } = stateProps;
  const { dispatch } = dispatchProps;

  return {
    favoritedGifs,
    loading,
    gifs,
    loaded,
    error,
    page,
    loadingPage,
    searchParameter,
    onFavoriteClicked: gifClicked => {
      if(favoritedGifs.find(gif => gif.id === gifClicked.id) !== undefined) {
        dispatch(removeGifFromFavorites(gifClicked));
      }
      else {
        dispatch(addGifToFavorites(gifClicked))
      }
    },
    loadMoreGifs: (searchParameter, page) => {
      dispatch(sendSearch(searchParameter, page));
    }
  }
};

const ConnectedResults = connect(
  mapStateToProps,
  null,
  mergedProps
)(LoaderHOC(ErrorHOC(NoResultsHOC(Results))));

export default ConnectedResults;

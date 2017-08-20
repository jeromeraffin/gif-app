import { connect } from 'react-redux';

import Favs from '../components/Favs';

import {
  addGifToFavorites,
  removeGifFromFavorites,
  copyGifUrl
} from '../actions';

const mapStateToProps = ({ favoritedGifs }) => {
  return {
    favoritedGifs: favoritedGifs.items
  }
}

const mergedProps = (stateProps, dispatchProps) => {
  const {
    favoritedGifs
  } = stateProps;
  const { dispatch } = dispatchProps;

  return {
    favoritedGifs,
    onFavoriteClicked: gifClicked => {
      if(favoritedGifs.find(gif => gif.id === gifClicked.id) !== undefined) {
        dispatch(removeGifFromFavorites(gifClicked));
      }
      else {
        dispatch(addGifToFavorites(gifClicked))
      }
    },
    onCopyClicked: () => {
      dispatch(copyGifUrl());
    },
  }
};

const ConnectedFavs = connect(
  mapStateToProps,
  null,
  mergedProps
)(Favs);

export default ConnectedFavs;

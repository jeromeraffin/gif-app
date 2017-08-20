import { connect } from 'react-redux';

import Favs from '../components/Favs';

import {
  toggleFavorites,
  copyGifUrl
} from '../actions';

const mapStateToProps = ({ favoritedGifs }) => {
  return {
    favoritedGifs: favoritedGifs.items
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onFavoriteClicked: gifClicked => {
      dispatch(toggleFavorites(gifClicked));
    },
    onCopyClicked: url => {
      dispatch(copyGifUrl(url));
    }
  }
}

const ConnectedFavs = connect(
  mapStateToProps,
  mapDispatchToProps
)(Favs);

export default ConnectedFavs;

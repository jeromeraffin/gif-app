import React, { Component } from 'react';
import { connect } from 'react-redux';

import { addGifToFavorites, removeGifFromFavorites } from '../actions'
import GifsList from './GifsList';

class Favs extends Component {

  onFavoriteClicked = (gifClicked) => {
    if(this.props.favoritedGifs.find(gif => gif.id === gifClicked.id) !== undefined) {
      this.props.removeGifFromFavorites(gifClicked);
    }
    else {
      this.props.addGifToFavorites(gifClicked);
    }
  }

  render() {
    const { favoritedGifs } = this.props;
    return (
      <div>
        <GifsList
          gifs={favoritedGifs}
          favoritedGifs={favoritedGifs}
          onFavoriteClicked={this.onFavoriteClicked}
        />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    favoritedGifs: state.favoritedGifs.items
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addGifToFavorites: gif => {
      dispatch(addGifToFavorites(gif))
    },
    removeGifFromFavorites: gif => {
      dispatch(removeGifFromFavorites(gif))
    }
  }
}

const ConnectedFavs = connect(
  mapStateToProps,
  mapDispatchToProps
)(Favs);

export default ConnectedFavs;

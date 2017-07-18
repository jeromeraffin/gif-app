import React, { Component } from 'react';

import { fetchFavsGifs } from '../utils/api';
import GifsList from './GifsList';

class Favs extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gifs: [],
      favoritedGifsIds: JSON.parse(localStorage.getItem('favoritedGifsIds')) || []
    }
  }

  componentDidMount() {
    if(this.state.favoritedGifsIds.length > 0) {
      fetchFavsGifs(this.state.favoritedGifsIds).then(gifs => this.setState({
        gifs: gifs
      }))
    }
  }

  onFavoriteClicked = (favId) => {
    if(this.state.favoritedGifsIds.includes(favId)) {
      const newFavoritesState = this.state.favoritedGifsIds.filter(gif => gif !== favId)
      const newGifsState = this.state.gifs.filter(gif => gif.id !== favId)

      this.setState({
        gifs: newGifsState,
        favoritedGifsIds: newFavoritesState
      })

      localStorage.setItem('favoritedGifsIds', JSON.stringify(newFavoritesState));
    }
  }

  render() {
    const { gifs, favoritedGifsIds } = this.state
    return (
      <div>
        <GifsList
          gifs={gifs}
          favoritedGifsIds={favoritedGifsIds}
          onFavoriteClicked={this.onFavoriteClicked}
        />
      </div>
    )
  }
}

export default Favs;

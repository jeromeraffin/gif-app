import React from 'react';
import PropTypes from 'prop-types';

import GifsList from './GifsList';

const Favs = ({ favoritedGifs, onFavoriteClicked, onCopyClicked }) => (
  <div>
    <GifsList
      gifs={favoritedGifs}
      favoritedGifs={favoritedGifs}
      onFavoriteClicked={onFavoriteClicked}
      onCopyClicked={onCopyClicked}
    />
  </div>
)

Favs.propTypes = {
  favoritedGifs: PropTypes.array.isRequired,
  onFavoriteClicked: PropTypes.func.isRequired
};

export default Favs;

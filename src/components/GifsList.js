import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Gif from './Gif';

const List = styled.ul `
  padding: 0 1rem;
  column-count: 5;
  column-width: 14rem;
  list-style: none;
`

const GifsList = ({ gifs, favoritedGifs, onFavoriteClicked, onCopyClicked }) => (
  <List>
    {
      gifs.map(gif => (
        <Gif
          id={gif.id}
          key={gif.id}
          url={gif.images.fixed_width.url}
          originalUrl={gif.images.original.url}
          width={gif.images.fixed_width.width}
          height={gif.images.fixed_width.height}
          favGif={favoritedGifs.find(fav => fav.id === gif.id) !== undefined ? true : false}
          onFavoriteClicked={onFavoriteClicked}
          onCopyClicked={onCopyClicked}
        />
      ))
    }
  </List>
)

GifsList.propTypes = {
  gifs: PropTypes.array.isRequired,
  favoritedGifs: PropTypes.array.isRequired,
  onFavoriteClicked: PropTypes.func.isRequired,
  onCopyClicked: PropTypes.func.isRequired
};

export default GifsList;

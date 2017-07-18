import React from 'react';
import styled from 'styled-components';

import Gif from './Gif';

const List = styled.ul `
  padding: 0 2rem;
  column-count: 4;
  column-width: 15rem;
  list-style: none;
`

const GifsList = ({ gifs, favoritedGifsIds, onFavoriteClicked }) => (
  <List>
    {
      gifs.map((gif) => (
        <Gif
          id={gif.id}
          key={gif.id}
          url={gif.images.fixed_width.url}
          width={gif.images.fixed_width.width}
          height={gif.images.fixed_width.height}
          favoritedGifsIds={favoritedGifsIds}
          onFavoriteClicked={onFavoriteClicked}
        />
      ))
    }
  </List>
)

export default GifsList;

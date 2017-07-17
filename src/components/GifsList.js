import React from 'react';
import styled from 'styled-components';

import Gif from './Gif';

const List = styled.ul `
  display: flex;
  flex-wrap: wrap;
  padding: 0 2rem;
  column-grid: 4;

  list-style: none;
`

const GifsList = ({gifs}) => (
  <List>
    {
      gifs.map((gif) => (
        <Gif key={gif.id} url={gif.images.fixed_height.url} />
      ))
    }
  </List>
)

export default GifsList;

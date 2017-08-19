import React, { Component } from 'react';
import styled from 'styled-components';

import GifsList from './GifsList';
import LoaderHOC from './Loader';

const StyledSearch = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
text-align:center;
`;

const Button = LoaderHOC(styled.button`
  background-color: #ffd800;
  color: #ff0066;
  border: 0;
  text-transform: uppercase;
  font-weight: 600;
  padding: 1rem;
  cursor: pointer;
  font-family: 'Montserrat', Helvetica, sans-serif;
`)

const Results = ({ gifs, favoritedGifs, onFavoriteClicked, page, loadingPage, loaded, loadMoreGifs, searchParameter }) => (
  <StyledSearch>
    <GifsList
      gifs={gifs}
      favoritedGifs={favoritedGifs}
      onFavoriteClicked={onFavoriteClicked}
    />
  {loaded &&
    <Button
      loading={loadingPage}
      onClick={() => { loadMoreGifs(searchParameter, page + 1) }}>
      Gimme more!
    </Button>
  }
  </StyledSearch>
)

export default Results;

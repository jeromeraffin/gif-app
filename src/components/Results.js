import React from 'react';
import PropTypes from 'prop-types';
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

const Results = ({
  gifs,
  favoritedGifs,
  onFavoriteClicked,
  page,
  loadingPage,
  loaded,
  loadMoreGifs,
  searchParameter,
  onCopyClicked,
  totalGifs
}) => (
  <StyledSearch>
    <GifsList
      gifs={gifs}
      favoritedGifs={favoritedGifs}
      onFavoriteClicked={onFavoriteClicked}
      onCopyClicked={onCopyClicked}
    />
  {(loaded && gifs.length < totalGifs) &&
    <Button
      loading={loadingPage}
      onClick={() => { loadMoreGifs(searchParameter, page + 1) }}>
      Gimme more!
    </Button>
  }
  </StyledSearch>
)

Results.propTypes = {
  gifs: PropTypes.array.isRequired,
  favoritedGifs: PropTypes.array.isRequired,
  onFavoriteClicked: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  loadingPage: PropTypes.bool,
  loaded: PropTypes.bool,
  loadMoreGifs: PropTypes.func.isRequired,
  searchParameter: PropTypes.string.isRequired
};

export default Results;

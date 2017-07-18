import React, { Component } from 'react';
import styled from 'styled-components';

import Search from './Search';
import GifsList from './GifsList';
import Loading from './Loading';
//import NoResults from './NoResults';

import { fetchGifs } from '../utils/api';

const StyledSearch = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align:center;
`;

class SearchPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      submitted: false,
      loading: false,
      gifs: [],
      favoritedGifsIds: JSON.parse(localStorage.getItem('favoritedGifsIds')) || []
    }
  }

  handleChange = event => {
    this.setState({value: event.target.value});
  }

  handleSubmit = event => {
    event.preventDefault();
    this.setState({loading: true});
    this.props.router.push(`/search/${this.state.value}`)
  }

  handleClick = () => {
    this.setState({
      value: '',
      gifs: [],
      submitted: false
    })
    this.props.router.push(`/search/`)
  }

  onFavoriteClicked = (favId) => {

    if(this.state.favoritedGifsIds.includes(favId)) {
      const newFavoritesState = this.state.favoritedGifsIds.filter(gif => gif !== favId)

      this.setState({
        favoritedGifsIds: newFavoritesState
      })

      localStorage.setItem('favoritedGifsIds', JSON.stringify(newFavoritesState));
    }
    else {

      const newFavoritesState = [...this.state.favoritedGifsIds, favId]

      this.setState({
        favoritedGifsIds: newFavoritesState
      })

      localStorage.setItem('favoritedGifsIds', JSON.stringify(newFavoritesState));
    }

  }

  componentWillReceiveProps(nextProps) {
    if(this.props.params.query !== nextProps.params.query) {
      fetchGifs(nextProps.params.query).then(gifs => this.setState({
        gifs: gifs,
        loading: false
      }))
    }
  }

  componentDidMount() {
    if(this.props.params.query) {
      fetchGifs(this.props.params.query).then(gifs => this.setState({
        value: this.props.params.query,
        gifs: gifs,
        loading: false
      }))
    }
  }

  render() {
    const {value, gifs, submitted, favoritedGifsIds, loading} = this.state;
    return (
      <StyledSearch>
        <Search
          value={value}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          handleClick={this.handleClick}
        />
        {loading ? <Loading /> :
          <GifsList
            gifs={gifs}
            favoritedGifsIds={favoritedGifsIds}
            onFavoriteClicked={this.onFavoriteClicked}
          />
        }
      </StyledSearch>
    )
  }
}

export default SearchPage;

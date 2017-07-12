import React, { Component } from 'react';
import styled from 'styled-components';

import fetchGifs from '../utils/api';
import Header from './Header';
import GifsList from './GifsList';

const StyledApp = styled.div`
  height: 100%
`;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      gifs: []
    }
  }

  handleChange = event => {
    this.setState({value: event.target.value});
  }

  handleSubmit = event => {
    event.preventDefault();
    fetchGifs(this.state.value).then(gifs => this.setState({gifs: gifs}))
  }

  render() {
    return (
      <StyledApp>
        <Header />
        <form onSubmit={this.handleSubmit}>
          <label>
            Recherche:
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
        { this.state.gifs.length > 0 &&
          <GifsList gifs={this.state.gifs} />
        }
      </StyledApp>
    );
  }
}

export default App;

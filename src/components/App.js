import React, { Component } from 'react';
import styled from 'styled-components';

import IconSearch from '../assets/search.svg';
import IconClear from '../assets/clear.svg';

import fetchGifs from '../utils/api';
import Header from './Header';
import GifsList from './GifsList';

const StyledApp = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  text-align:center;
`;

const Form = styled.form`
  display: flex;
  align-self: center;
  position: relative;
  width: 30rem;
`

const Icon = styled.img `
  position: absolute;
  height: 1.8rem;
  top: 3px;
`

const ClearButton = styled.img`
  position: absolute;
  right: 0;
  top: 3px;
  height: 1.8rem;

  > svg path {
    fill: #cccccc;
  }
`

const TextInput = styled.input`
  padding-left: 2.4rem;
  padding-bottom: .6rem;
  width: 30rem;
  height: 2.8rem;

  font-size: 1.6rem;

  border: none;
  border-bottom: 2px solid #000000;

  &:focus {
    border-bottom: 2px solid #ff0066;
    outline: none;
  }
`

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
        <Form onSubmit={this.handleSubmit}>
          <Icon src={IconSearch}/>
          <TextInput value={this.state.value} onChange={this.handleChange} />
          <ClearButton src={IconClear}/>
        </Form>
        { this.state.gifs.length > 0 &&
          <GifsList gifs={this.state.gifs} />
        }
      </StyledApp>
    );
  }
}

export default App;

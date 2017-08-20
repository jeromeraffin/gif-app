import React, { PureComponent } from 'react';
import styled from 'styled-components';

import Header from './Header';
import Popup from './Popup';
import ConnectedSearch from '../containers/Search';

const StyledApp = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align:center;
`;

class App extends PureComponent {

  handleSubmit = values => {
    this.props.router.push(`/search/${values.searchParameter}`);
  }

  handleReset = event => {
    this.props.clearSearch();
    this.props.router.push(`/search/`);
  }

  componentWillReceiveProps(nextProps) {
    if(this.props.params.query !== nextProps.params.query) {
      this.props.handleSearch(nextProps.params.query);
    }
  }

  componentWillMount() {
    if(this.props.params.query) {
      this.props.handleSearch(this.props.params.query);
    }
  }

  render() {
    const { children, copied } = this.props;
    return (
      <StyledApp>
        <Popup copied={copied} />
        <Header />
        <ConnectedSearch onSubmit={this.handleSubmit} handleReset={this.handleReset} />
        {children}
      </StyledApp>
    )
  }
}
export default App;

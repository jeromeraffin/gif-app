import React, { Component } from 'react';
import styled from 'styled-components';

import Header from './Header';

const StyledApp = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align:center;
`;

class App extends Component {
  render() {
    const { children } = this.props;
    return (
      <StyledApp>
        <Header />
        {children}
      </StyledApp>
    );
  }
}

export default App;

import React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 12rem;
  color: #ff0066;
`

const Title = styled.h1`
  margin: 0;
  text-transform: uppercase;
  font-size: 3rem;
  font-weight: 400;
`

const Subtitle = styled.h2`
  margin: 0;
  font-weight: 200;
`

const Header = () => (
  <StyledHeader>
    <Title>Gif Power</Title>
    <Subtitle>Powerful GIFs search application</Subtitle>
  </StyledHeader>
)

export default Header;

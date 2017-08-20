import React from 'react';
import { Link } from 'react-router';
import styled from 'styled-components';

import Giphy from '../assets/images/Giphy.png';

const StyledHeader = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem 2rem 0;
  background-color: #ff0066;
  color: #ffffff;
`

const Title = styled.h1`
  margin: 0;
  text-transform: uppercase;
  font-size: 3rem;
  font-weight: 400;
`

const Nav = styled.nav`
  position: absolute;
  right: 1rem;
  top: 1rem;
`
const NavLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  border-bottom: 1px solid #ffffff;
  padding-bottom: 4px;

  &:not(:first-child) {
    margin-left: 1rem;
  }
`

const Header = () => (
  <StyledHeader>
    <Title>Gif Power</Title>
    <img alt="Powered by Giphy" src={Giphy} width="200" height="20"/>
    <Nav>
      <NavLink to="/favorites">Favorites</NavLink>
    </Nav>
  </StyledHeader>
)

export default Header;

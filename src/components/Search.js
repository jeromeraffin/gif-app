import React from 'react';
import { Field } from 'redux-form'
import styled from 'styled-components';

import Icon from './Icon';

const StyledSearch = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 1rem;
  padding: 2rem 0;
  background-color: #ff0066;
`

const Form = styled.form`
  display: flex;
  align-self: center;
  position: relative;
  width: 30rem;

  @media (max-width: 600px) {
    width: 20rem;
  }
`

const SearchIcon = styled(Icon) `
  position: absolute;
  height: 1.8rem;
  top: 3px;
  fill: #ffffff;
`

const ClearButton = styled(Icon)`
  position: absolute;
  right: 0;
  top: 3px;
  cursor: pointer;
  fill: #ffffff;
`

const TextInput = styled(Field)`
  padding-left: 2.4rem;
  padding-bottom: .6rem;
  width: 100%;
  height: 2.8rem;
  font-size: 1.6rem;
  color: #ffffff;
  background-color: transparent;
  border: none;
  border-bottom: 2px solid #ffffff;
  text-transform: lowercase;

  &:focus {
    border-bottom: 2px solid #ffd800;
    outline: none;
  }

  &::placeholder {
    color: rgba(255, 255, 255, 0.5)
  }
`

const Search = ({ handleSubmit, handleReset, searchParameter }) => (
  <StyledSearch>
    <Form onSubmit={handleSubmit}>
      <SearchIcon width="30" height="30" glyph="search"/>
      <TextInput name="searchParameter" component="input" type="text" placeholder="Type something great"/>
      {searchParameter ? <span onClick={handleReset}><ClearButton width="30" height="30" glyph="clear"/></span> : '' }
    </Form>
  </StyledSearch>
)

export default Search;

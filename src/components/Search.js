import React from 'react';
import styled from 'styled-components';

import IconSearch from '../assets/search.svg';
import IconClear from '../assets/clear.svg';

const Form = styled.form`
  display: flex;
  align-self: center;
  position: relative;
  width: 30rem;
  margin-bottom: 2rem;
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

const Search = ({value, handleSubmit, handleChange, handleClick}) => (
  <Form onSubmit={handleSubmit}>
    <Icon src={IconSearch}/>
    <TextInput value={value}  onChange={handleChange}/>
    {value ? <ClearButton src={IconClear} onClick={handleClick}/> : ''}
  </Form>
)

export default Search;

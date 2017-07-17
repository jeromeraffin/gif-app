import React from 'react';
import styled from 'styled-components';

const Item = styled.li`
  
`

const Gif = ({id, url}) => (
  <Item>
    <img src={url}/>
  </Item>
)

export default Gif;

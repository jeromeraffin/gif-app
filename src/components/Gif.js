import React, {Component} from 'react';
import styled, { keyframes } from 'styled-components';

import Icon from './Icon';

// import Button from './Button';

const Item = styled.li`
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 3px;
  overflow: hidden;
  background-color: #ffffff;
  margin: 1rem 0;
  box-shadow: 0px 0px 5px 0px rgba(221,221,221,1);
`

const backgroundColor = keyframes`
    0%, 100% {
      background-color: #ffd800;
    } 50% {
      background-color: #ff0066;
    }
`;

const Img = styled.img`
  animation: ${backgroundColor} 2.0s 20 ease-in-out;
`

const Actions = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  padding: .8rem;
`

const FavIcon = styled(Icon) `
  cursor: pointer;
  fill: #ff0066;
`

const Button = styled.span`
  display: flex;
`
const Gif = ({ id, url, width, height, favGif, onFavoriteClicked }) => {
  const gifClicked = {
    id: id,
    images : {
        fixed_width: {
          url: url,
          width: width,
          height: height
        }
    }
  }
  return (
    <Item>
      <Img src={url} width={width} height={height} />
      <Actions>
        {
          favGif ?
          <Button onClick={() => {onFavoriteClicked(gifClicked)}}>
            <FavIcon width="25" height="25"  glyph="favorite_full"/>
          </Button> :
          <Button onClick={() => {onFavoriteClicked(gifClicked)}}>
            <FavIcon width="25" height="25" glyph="favorite_empty" />
          </Button>
        }
      </Actions>
    </Item>
  )
}

export default Gif;

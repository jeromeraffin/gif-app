import React, {Component} from 'react';
import styled from 'styled-components';

import IconFavoriteEmpty from '../assets/favorite_empty.svg';
import IconFavoriteFull from '../assets/favorite_full.svg';

// import Button from './Button';

const Item = styled.li`
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`

const Img = styled.img`
  
`

const Icon = styled.img `
  height: 1.8rem;
  cursor: pointer;
`

class Gif extends Component {

  handleClick = () => {
    this.props.onFavoriteClicked(this.props.id);
  }

  render() {
    const { id, url, width, height, favoritedGifsIds } = this.props;
    //console.log(width, height);
    return (
      <Item>
        <Img src={url} width={width} height={height} />
        <div>
          { favoritedGifsIds.includes(id) ? <Icon src={IconFavoriteFull} onClick={this.handleClick} /> : <Icon src={IconFavoriteEmpty} onClick={this.handleClick} /> }
        </div>
      </Item>
    )
  }
}

export default Gif;

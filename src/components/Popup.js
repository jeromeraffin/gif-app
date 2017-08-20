import React from 'react';
import styled, { keyframes } from 'styled-components';

const StyledPopup = styled.div`
  display: ${props => props.display ? 'flex' : 'none'};
  position: fixed;
  background-color: #ffd800;
  top: 0;
  min-height: 100%;
  width: 100%;
  z-index: 1;
  justify-content: center;
  align-items: center;
  color: #ff0066;
  font-size: 8rem;
  transition: all 0.3s;
`;

const Popup = ({ copied }) => {
  return (
    <StyledPopup display={copied}>
      POW!
    </StyledPopup>
  )
}

export default Popup;

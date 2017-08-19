import React from 'react';
import styled, { keyframes } from 'styled-components';

const StyledSpinnner = styled.div`
    width: 40px;
    height: 40px;
    position: relative;
    margin: 50px auto;
`;

const bounce = keyframes`
    0%, 100% {
      transform: scale(0.0);
    } 50% {
      transform: scale(1.0);
    }
`;

const Bounce = styled.div`
    /* Box model */
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;

    /* Visual */
    background-color: #ff0066;
    animation: ${bounce} 2.0s infinite ease-in-out;
    opacity: 1;
    border-radius: 50%;
`;

const Bounce2 = styled(Bounce)`
    animation-delay: -1.0s;
    background-color: #ffd800;
`;

const Spinner = () => (
    <StyledSpinnner>
        <Bounce />
        <Bounce2 />
    </StyledSpinnner>
);

export default Spinner;

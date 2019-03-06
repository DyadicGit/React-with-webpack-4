import React from 'react';
import styled from 'styled-components';

const LoadingText = styled.div`
  font-size: 1.3rem;
  color: white;
  position: absolute;
  top: 50%;
  left: 50%;
  &:after { 
    content: ' .';
    animation: dots 1s steps(5, end) infinite;
  }

  @keyframes dots {
    0%, 20% {
      color: rgba(0,0,0,0);
      text-shadow:
        .25em 0 0 rgba(0,0,0,0),
        .5em 0 0 rgba(0,0,0,0);
        }
    40% {
      color: white;
      text-shadow:
        .25em 0 0 rgba(0,0,0,0),
        .5em 0 0 rgba(0,0,0,0);
        }
    60% {
      text-shadow:
        .25em 0 0 white,
        .5em 0 0 rgba(0,0,0,0);
        }
    80%, 100% {
      text-shadow:
        .25em 0 0 white,
        .5em 0 0 white;
        }
  }
`;

const Component = () => (
  <LoadingText>loading</LoadingText>
);

export default Component;

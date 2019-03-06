import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { SpanOpenSans } from '../../components';

const FilterGo = styled.div`
  grid-area: filterGo;
  display: flex;
  place-items: center;
  padding-left: 5%;
`;

const Button = styled.button`
    background: transparent;
    border: rgba(78, 133, 136, 0.82) 2px solid;
    transition: 0.3s;
    border-radius: 15px;
    height: 40%;
    width: 70%;
    :hover {
      cursor: pointer;
      border: rgba(78, 133, 136, 0.82) 4px solid;
    }
`;

const View = ({ className }) => (
  <FilterGo className={className}>
    <Button onClick={() => alert('upsi implemented debounced filtering')}><SpanOpenSans>FILTER</SpanOpenSans></Button>
  </FilterGo>
);

View.propTypes = {
  className: PropTypes.string,
};

export default View;

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { SpanOpenSans } from '../../components';
import CONST from '../../config/constants';

const FilterGo = styled.div`
  grid-area: filterGo;
  display: flex;
  place-items: center;
  padding-left: 5%;
`;

const Button = styled.button`
    background: transparent;
    border: ${CONST.borderSetting};
    transition: 0.3s;
    border-radius: ${CONST.borderRadius};
    height: 40%;
    width: 70%;
    :hover {
      cursor: pointer;
      box-shadow: ${CONST.boxShadowSetting};
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

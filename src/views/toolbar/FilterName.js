import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const FilterName = styled.div`
  grid-area: filterName;
  place-content: center;
  display: flex;
  place-items: center;
`;
const RoundInput = styled.input`
  width: 80%;
  height: 40%;
  border-radius: 15px;
  font-size: larger;
  padding-left: 5%;
`;

const View = ({ className }) => (
  <FilterName className={className}>
    <RoundInput type="text" placeholder="Name" />
  </FilterName>
);

View.propTypes = {
  className: PropTypes.string,
};

export default View;

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const FilterName = styled.div`
  grid-area: filterName;
`;
const View = ({ className }) => (
  <FilterName className={className}></FilterName>
);

View.propTypes = {
  className: PropTypes.string,
};

export default View;

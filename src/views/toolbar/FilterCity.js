import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const FilterCity = styled.div`
  grid-area: filterCity;
`;
const View = ({ className }) => (
  <FilterCity className={className}></FilterCity>
);

View.propTypes = {
  className: PropTypes.string,
};

export default View;

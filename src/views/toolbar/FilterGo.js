import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const FilterGo = styled.div`
  grid-area: filterGo;
`;

const View = ({ className }) => (
  <FilterGo className={className}></FilterGo>
);

View.propTypes = {
  className: PropTypes.string,
};

export default View;

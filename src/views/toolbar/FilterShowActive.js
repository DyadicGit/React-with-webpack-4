import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const FilterShowActive = styled.div`
  grid-area: filterShowActive;
`;

const View = ({ className }) => (
  <FilterShowActive className={className}></FilterShowActive>
);

View.propTypes = {
  className: PropTypes.string,
};

export default View;

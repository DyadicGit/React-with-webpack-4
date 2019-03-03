import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Search = styled.div`
  grid-area: search;
`;

const View = ({ className }) => (
  <Search className={className}></Search>
);

View.propTypes = {
  className: PropTypes.string,
};

export default View;

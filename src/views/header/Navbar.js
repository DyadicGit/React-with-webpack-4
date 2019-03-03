import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Navbar = styled.div`
  grid-area: navbar;
`;

const View = ({ className }) => (
  <Navbar className={className} />
);

View.propTypes = {
  className: PropTypes.string,
};

export default View;

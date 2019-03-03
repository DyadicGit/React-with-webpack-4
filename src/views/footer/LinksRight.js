import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const LinksRight = styled.div`
  grid-area: linksRight;
`;

const View = ({ className }) => (
  <LinksRight className={className}></LinksRight>
);

View.propTypes = {
  className: PropTypes.string,
};

export default View;

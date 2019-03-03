import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const LastSynced = styled.div`
  grid-area: lastSynced;
`;

const View = ({ className }) => (
  <LastSynced className={className}></LastSynced>
);

View.propTypes = {
  className: PropTypes.string,
};

export default View;

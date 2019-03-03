import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ForceSync = styled.div`
  grid-area: forceSync;
`;

const View = ({ className }) => (
  <ForceSync className={className}></ForceSync>
);

View.propTypes = {
  className: PropTypes.string,
};

export default View;

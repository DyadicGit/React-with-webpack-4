import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const LastSyncedLogo = styled.div`
  grid-area: lastSyncedLogo;
`;

const View = ({ className }) => (
  <LastSyncedLogo className={className}></LastSyncedLogo>
);

View.propTypes = {
  className: PropTypes.string,
};

export default View;

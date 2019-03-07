import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const LastSyncedLogo = styled.div`
  grid-area: lastSyncedLogo;
  display: flex;
  place-content: center;
  place-items: center;
`;

const View = ({ className }) => (
  <LastSyncedLogo className={className}>
    <FontAwesomeIcon icon="cloud-upload-alt" color="white" style={{ width: '85%', height: '85%' }} />
  </LastSyncedLogo>
);

View.propTypes = {
  className: PropTypes.string,
};

export default View;

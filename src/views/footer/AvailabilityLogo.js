import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const AvailabilityLogo = styled.div`
  grid-area: availabilityLogo;
  display: flex;
  place-content: center;
  place-items: center;
`;

const View = ({ className }) => (
  <AvailabilityLogo className={className}>
    <FontAwesomeIcon icon="stethoscope" color="white" style={{ width: '85%', height: '85%' }} />
  </AvailabilityLogo>
);

View.propTypes = {
  className: PropTypes.string,
};

export default View;

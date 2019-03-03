import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const AvailabilityLogo = styled.div`
  grid-area: availabilityLogo;
`;

const View = ({ className }) => (
  <AvailabilityLogo className={className}></AvailabilityLogo>
);

View.propTypes = {
  className: PropTypes.string,
};

export default View;

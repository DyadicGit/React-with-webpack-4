import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Availability = styled.div`
  grid-area: availability;
`;

const View = ({ className }) => (
  <Availability className={className}></Availability>
);

View.propTypes = {
  className: PropTypes.string,
};

export default View;

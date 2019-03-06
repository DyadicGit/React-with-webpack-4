import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Button = styled.button`
  background-color: rgba(0,0,0,0);
  border: rgba(0,0,0,0);
  cursor: pointer;
`;
const Component = ({ icon, className, onClick, ...props }) => (
  <Button className={className} onClick={onClick}>
    <FontAwesomeIcon icon={icon} {...props} />
  </Button>
);
Component.propTypes = {
  className: PropTypes.string,
  icon: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

export default Component;

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Login = styled.div`
  grid-area: login;
`;

const View = ({ className }) => (
  <Login className={className}></Login>
);

View.propTypes = {
  className: PropTypes.string,
};

export default View;

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import utils from '../utils';
import CONST from '../config/constants';

const SearchInput = styled.input`
  width: 80%;
  height: 40%;
  border-radius: ${CONST.borderRadius};
  font-size: larger;
  padding-left: 5%;
`;

const Component = ({ className, placeholder, handleChange }) => (
  <SearchInput
    className={className}
    type="text"
    placeholder={placeholder}
    onChange={utils.debouncedOnChange(handleChange)}
  />
);

export default Component;

Component.propTypes = {
  className: PropTypes.string,
  handleChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
};

Component.defaultProps = {
  placeholder: '',
};

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Utils from '../../utils'

const Table = styled.div`
  grid-area: table;
`;

const View = ({ className }) => {
  Utils.handleResponse()
  return (
    <Table className={className}></Table>
  )
};

View.propTypes = {
  className: PropTypes.string,
};

export default View;

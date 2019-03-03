import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const AddNewContract = styled.div`
  grid-area: addNewContract;
`;

const View = ({ className }) => (
  <AddNewContract className={className}></AddNewContract>
);

View.propTypes = {
  className: PropTypes.string,
};

export default View;

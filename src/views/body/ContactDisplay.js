import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ContactDisplay = styled.div`
  grid-area: contactDisplay;
`;

const View = ({ className }) => (
  <ContactDisplay className={className}></ContactDisplay>
);

View.propTypes = {
  className: PropTypes.string,
};

export default View;

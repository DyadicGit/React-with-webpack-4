import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { SpanOpenSans } from '../../../components';

const About = styled.div`
  grid-area: about;
`;

const View = ({ className }) => (
  <About className={className}>
    <SpanOpenSans>&#x24B8; 2015 Contactify <u>About</u> <u>Privacy</u></SpanOpenSans>
  </About>
);

View.propTypes = {
  className: PropTypes.string,
};

export default View;

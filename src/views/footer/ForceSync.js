import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { SpanOpenSans } from '../../components';

const ForceSync = styled.div`
  grid-area: forceSync;
  display: flex;
  place-items: center;
  place-content: space-evenly;
`;

const View = ({ className }) => (
  <ForceSync className={className}>
    <FontAwesomeIcon icon="sync-alt" color="white" />
    <SpanOpenSans>Force sync</SpanOpenSans>
  </ForceSync>
);

View.propTypes = {
  className: PropTypes.string,
};

export default View;

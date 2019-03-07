import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { SpanOpenSans } from '../../components';

const LastSynced = styled.div`
  grid-area: lastSynced;
  display: flex;
  place-content: flex-start;
  place-items: center;
  padding-left: 1.5vw;
`;

const View = ({ className }) => {
  const currDate = new Date();
  const cuurDateString = `${currDate.toLocaleDateString('eu-EU', { year: 'numeric', month: '2-digit', day: '2-digit' })}
  ${currDate.toLocaleTimeString('en-US', { hour12: false })}`;
  return (
    <LastSynced className={className}>
      <SpanOpenSans>
        Last synced:<br />
        {cuurDateString
        }
      </SpanOpenSans>
    </LastSynced>
  );
};

View.propTypes = {
  className: PropTypes.string,
};

export default View;

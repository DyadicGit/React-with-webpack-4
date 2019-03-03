import React from 'react';
import Proptypes from 'prop-types';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SectionLogo = styled.div`
  grid-area: logo;
  display: flex;
  flex-direction: row;
  justify-items: center;
  align-items: center;
`;
const TextLogo = styled.div`
  font-size: 2.5vw;
  color: white;
  font-family: "Open Sans Semibold", sans-serif;
  font-weight: 900;
  text-transform: uppercase;
  display: flex;
  justify-items: flex-end;
  align-items: flex-end;
`;
const LetterWithIcon = styled.span`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const View = ({ className }) => (
  <SectionLogo className={className}>
    <TextLogo>
      <span>Contact</span>
      <LetterWithIcon>
        <FontAwesomeIcon
          icon="user-circle"
          style={{
            width: '2vw',
            height: '2vh',
          }}
        />
        <span>i</span>
      </LetterWithIcon>
      <span>fy</span>
    </TextLogo>
  </SectionLogo>
);

View.propTypes = {
  className: Proptypes.string.isRequired,
};

export default View;

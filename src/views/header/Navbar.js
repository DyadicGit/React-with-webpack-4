import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { SpanOpenSans } from '../../components';

const lightBlueColor = '#0CA2BB';
const borderRadius = '15px';

const Navbar = styled.div`
  grid-area: navbar;
  display: flex;
  place-items: center;
  place-content: center;
  div {
    width: 80%;
    max-width: 100%;
    height: 35%;
    display: flex;
    button {
      :first-of-type {
        padding-left: 1.5vw;
        border-bottom-left-radius: ${borderRadius};
        border-top-left-radius: ${borderRadius};
      }
      :last-of-type {
        padding-right: 1.5vw;
        border-bottom-right-radius: ${borderRadius};
        border-top-right-radius: ${borderRadius};
      }
    }
  }
`;
const Button = styled.button`
  background: ${lightBlueColor};
  border: solid 2px ${lightBlueColor};
  transition: 0.3s;
  display: flex;
  align-items: center;
  :hover {
    cursor: pointer;
    box-shadow: 0 0 0 2px rgba(78, 133, 136, 0.82), 0 0 0 2px rgba(78, 133, 136, 0.82);
  }
  :focus {
    background: #198592;
  }
`;

const View = ({ className }) => (
  <Navbar className={className}>
    <div>
      <Button onClick={() => alert('no requirement')}>
        <SpanOpenSans>DASHBOARD</SpanOpenSans>
      </Button>
      <Button onClick={() => alert('no requirement')}>
        <SpanOpenSans>CONTACTS</SpanOpenSans>
      </Button>
      <Button onClick={() => alert('no requirement')}>
        <SpanOpenSans>NOTIFICATIONS</SpanOpenSans>
      </Button>
    </div>
  </Navbar>
);

View.propTypes = {
  className: PropTypes.string,
};

export default View;

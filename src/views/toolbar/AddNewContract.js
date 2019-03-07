import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { SpanOpenSans } from '../../components';

const AddNewContract = styled.div`
  grid-area: addNewContract;
  display: flex;
  place-items: center;
  place-content: flex-end;
`;
const Button = styled.button`
    background: rgba(35,117,111,0.79);
    border: rgba(78, 133, 136, 0.82) 2px solid;
    transition: 0.3s;
    border-radius: 15px;
    height: 40%;
    width: 48%;
    display: flex;
    align-items: center;
    :hover {
      cursor: pointer;
      box-shadow: 0 0 0 2px rgba(78, 133, 136, 0.82), 0 0 0 2px rgba(78, 133, 136, 0.82);
    }
    span {
      padding-left: 1vw;
    }
`;
const Icon = styled(FontAwesomeIcon)`
  height: 100%;
  color: rgb(25,54,48);
`;

const View = ({ className }) => (
  <AddNewContract className={className}>
    <Button onClick={() => alert('no requirement')}>
      <Icon icon="plus-circle" style={{ width: 'auto' }} />
      <SpanOpenSans>ADD NEW CONTRACT</SpanOpenSans>
    </Button>
  </AddNewContract>
);

View.propTypes = {
  className: PropTypes.string,
};

export default View;

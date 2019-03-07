import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { SpanOpenSans } from '../../components';
import CONST from '../../config/constants';

const AddNewContract = styled.div`
  grid-area: addNewContract;
  display: flex;
  place-items: center;
  place-content: flex-end;
`;
const Button = styled.button`
    background: ${CONST.darkerGreen};
    border: ${CONST.borderSetting};
    transition: 0.3s;
    border-radius: ${CONST.borderRadius};
    height: 40%;
    width: 48%;
    display: flex;
    align-items: center;
    :hover {
      cursor: pointer;
      box-shadow: ${CONST.boxShadowSetting};
    }
    span {
      padding-left: 1vw;
    }
`;
const Icon = styled(FontAwesomeIcon)`
  height: 100%;
  color: ${CONST.darkestGreen};
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

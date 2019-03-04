import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const EyeRow = styled.div`
  place-items: center;
  place-content: center;
  display: flex;
  position: relative;
  height: 100%;
`;

const Row = styled.tr`
  cursor: pointer;
  background: ${props => (props.selected ? 'rgba(0,162,195,0.15)' : 'inherit')};
`;
const TdIcons = styled.td`
  height: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  color:  ${props => (props.selected ? '#1AB6CF' : 'inherit')};
  svg {
    border: #1AB6CF solid 6px;
    border-radius: 30%;
    background: #1AB6CF;
    color: white;
  }
`;

const View = ({ contact, handlers }) => (
  <Row id={contact.id} selected={contact && contact.selected} onClick={handlers.handleRowClick(contact)}>
    <td>
      <EyeRow>{contact.active
        ? <FontAwesomeIcon icon="eye" />
        : <FontAwesomeIcon icon="eye-slash" flip="horizontal" />}
      </EyeRow>
    </td>
    <td>{contact.name}</td>
    <td>{contact.surname}</td>
    <td>{contact.city}</td>
    <td>{contact.email}</td>
    <td>{contact.phone}</td>
    <TdIcons selected={contact && contact.selected}>
      <FontAwesomeIcon icon="pencil-alt" />
      <FontAwesomeIcon icon="trash-alt" />
    </TdIcons>
  </Row>
);

View.propTypes = {
  contact: PropTypes.shape({
    active: PropTypes.bool,
    city: PropTypes.string,
    email: PropTypes.string,
    id: PropTypes.number,
    name: PropTypes.string,
    phone: PropTypes.string,
    surname: PropTypes.string,
  }).isRequired,
  handlers: PropTypes.shape({
    handleRowClick: PropTypes.func.isRequired,
  }).isRequired,
};

export default View;

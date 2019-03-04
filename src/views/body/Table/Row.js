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


const View = ({ contact, handlers }) => (
  <tr id={contact.id} onClick={handlers.handleRowClick(contact)}>
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
    <td>
      <div>E</div>
      <div>T</div>
    </td>
  </tr>
);

View.propTypes = {
  contact: PropTypes.shape({
    active: PropTypes.bool,
    city: PropTypes.string,
    email: PropTypes.string,
    id: PropTypes.number,
    name: PropTypes.string,
    phone: PropTypes.string,
    surname: PropTypes.string
  }).isRequired,
  handlers: PropTypes.shape({
    handleRowClick: PropTypes.func.isRequired
  }).isRequired
};

export default View;

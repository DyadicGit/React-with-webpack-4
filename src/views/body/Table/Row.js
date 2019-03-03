import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const View = ({ contact }) => (
  <tr id={contact.id}>
    <td>{String(contact.active)}</td>
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
    surname: PropTypes.string,
  }).isRequired,
};

export default View;

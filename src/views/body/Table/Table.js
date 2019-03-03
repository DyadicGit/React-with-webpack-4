import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Row from './Row';

const SectionTable = styled.div`
  grid-area: table;
`;
const Table = styled.table`
  position: relative;
  width: 100%;
  padding-top: 20px;
  font-family: "Open Sans Regular", sans-serif;
  font-size: 1rem;
`;

const Header = styled.thead`
  color: white;
`;
const Body = styled.tbody`
  color: rgba(0,0,0,0.69);
`;

const View = ({ className, contacts }) => {
  return (
    <SectionTable className={className}>
      <Table>
        <Header>
          <tr>
            <th>Active</th>
            <th>Name</th>
            <th>Surname</th>
            <th>City</th>
            <th>Email</th>
            <th>Phone</th>
            <th />
          </tr>
        </Header>
        <Body>
          {contacts.map(contact => <Row key={contact.id} contact={contact} />)}
        </Body>
      </Table>
    </SectionTable>
  );
};

View.propTypes = {
  className: PropTypes.string.isRequired,
  contacts: PropTypes.array.isRequired,
};

export default View;

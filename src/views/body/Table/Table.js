import React from 'react';
import PropTypes from 'prop-types';
import { SectionTable, Table, Header, ColumnWithSort, IconButtonToggle, Body } from './Table.styles';
import Row from './Row';

const View = ({ className, contacts, sortOrderName }) => (
  <SectionTable className={className}>
    <Table>
      <Header>
        <tr>
          <th />
          <ColumnWithSort>
            <span>Name</span>
            <IconButtonToggle
              icon="arrow-down"
              size="lg"
              style={sortOrderName === 'asc' ? {} : { transform: 'rotate(180deg)' }}
              onClick={() => console.log('llll')}
            />
          </ColumnWithSort>
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

View.propTypes = {
  className: PropTypes.string.isRequired,
  contacts: PropTypes.array.isRequired,
  sortOrderName: PropTypes.oneOf('asc', 'desc'),
};

export default View;

View.defaultProps = {
  sortOrderName: 'asc',
};

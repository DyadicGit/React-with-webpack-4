import React from 'react';
import styled from 'styled-components';

const LinksLeft = styled.div`
  grid-area: linksLeft;
`;
const List = styled.ul`
  list-style-type: none;
`;

const view = () => (
  <LinksLeft>
    <List>
      <li>
        <u>Dashboard</u>
      </li>
      <li>
        <u>Contacts</u>
      </li>
      <li>
        <u>Notifications</u>
      </li>
    </List>
  </LinksLeft>
);

export default view;

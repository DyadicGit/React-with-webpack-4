import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const LinksLeft = styled.div`
  grid-area: linksLeft;
`;
const List = styled.ul`
  list-style-type: none;
  line-height: 3.2vh;
  font-family: "Open Sans Semibold", sans-serif;
  font-size: 1.2vmax;
  color: white;
  padding-left: 0;
`;

const View = ({ className }) => (
  <LinksLeft className={className}>
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

View.propTypes = {
  className: PropTypes.string.isRequired,
};

export default View;

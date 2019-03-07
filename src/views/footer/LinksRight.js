import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const LinksRight = styled.div`
  grid-area: linksRight;
`;

const List = styled.ul`
  list-style-type: none;
  line-height: 3.2vh;
  font-family: "Open Sans Semibold", sans-serif;
  font-size: 1.2rem;
  color: white;
  padding-left: 1.5vw;
`;

const View = ({ className }) => (
  <LinksRight className={className}>
    <List>
      <li>
        <u>Groups</u>
      </li>
      <li>
        <u>Frequently contacted</u>
      </li>
      <li>
        <u>Preferences</u>
      </li>
      <li>
        <u>Log out</u>
      </li>
    </List>
  </LinksRight>
);

View.propTypes = {
  className: PropTypes.string.isRequired,
};

export default View;

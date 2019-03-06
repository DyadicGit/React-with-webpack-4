import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { SearchInput } from '../../components';

const Container = styled.div`
  grid-area: filterName;
  place-content: center;
  display: flex;
  place-items: center;
`;

const View = ({ className, handlers }) => (
  <Container className={className}>
    <SearchInput placeholder="Name" handleChange={handlers.handleNameSearchResult} />
  </Container>
);

View.propTypes = {
  className: PropTypes.string,
  handlers: PropTypes.shape({
    handleNameSearchResult: PropTypes.func.isRequired,
  }).isRequired,
};

export default View;

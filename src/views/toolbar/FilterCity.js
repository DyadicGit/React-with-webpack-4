import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { SearchInput } from '../../components';

const Container = styled.div`
  grid-area: filterCity;
  place-content: center;
  display: flex;
  place-items: center;
`;

const View = ({ className, handlers }) => (
  <Container className={className}>
    <SearchInput placeholder="City" handleChange={handlers.handleCitySearchResult} />
  </Container>
);

View.propTypes = {
  className: PropTypes.string,
  handlers: PropTypes.shape({
    handleCitySearchResult: PropTypes.func.isRequired,
  }).isRequired,
};

export default View;

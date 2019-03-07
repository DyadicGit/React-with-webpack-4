import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { SpanOpenSans } from '../../components';

const FilterName = styled.div`
  grid-area: filterShowActive;
  place-content: center;
  display: flex;
  place-items: center;
  label {
    padding-left: 5px;
    &:hover {
      cursor: pointer;
    }
  }
  input:hover {
    cursor: pointer;
  }
`;

const View = ({ className, handlers }) => (
  <FilterName className={className}>
    <input
      id="show-active-checkbox"
      type="checkbox"
      onChange={event => handlers.handleShowActiveClick(event.target.checked)}
    />
    <label htmlFor="show-active-checkbox"><SpanOpenSans>Show active</SpanOpenSans></label>
  </FilterName>
);

View.propTypes = {
  className: PropTypes.string,
  handlers: PropTypes.shape({
    handleShowActiveClick: PropTypes.func.isRequired,
  }).isRequired,
};

export default View;

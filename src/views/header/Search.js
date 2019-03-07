import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { SearchInput } from '../../components';
import CONST from '../../config/constants';

const SearchSection = styled.div`
  grid-area: search;
  display: flex;
  place-content: center;
  place-items: center;
  div {
    height: 100%;
    width: 100%;
    display: flex;
    place-content: center;
    place-items: center;
    position: relative;
    input {
      height: 3.6vh;
      background: ${CONST.gainsboro};
      border: ${CONST.borderSetting};
      :hover {
        box-shadow: ${CONST.boxShadowSetting};
      }
    }
    svg {
      position: absolute;
      right: 1.2vw;
      background: ${CONST.gainsboroDarker};
      border: solid ${CONST.gainsboroDarker} 0.95vh;
      border-bottom-right-radius: ${CONST.borderRadius};
      border-top-right-radius: ${CONST.borderRadius};
    }
  }
`;

const View = ({ className }) => (
  <SearchSection className={className}>
    <div>
      <SearchInput
        handleChange={searchTerm => alert(`No requirement: ${searchTerm}`)}
        placeholder="Search"
      />
      <FontAwesomeIcon icon="search" />
    </div>

  </SearchSection>
);

View.propTypes = {
  className: PropTypes.string,
};

export default View;

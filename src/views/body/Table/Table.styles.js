import React from 'react';
import styled from 'styled-components';
import { IconButton } from '../../../components';

const borderRadiusSize = '6px';

const SectionTable = styled.div`
  grid-area: table;
  padding-top: 20px;
  padding-bottom: 40px;
`;
const Table = styled.table`
  position: relative;
  width: 100%;
  height: 100%;
  font-family: "Open Sans Regular", sans-serif;
  font-size: 1rem;
  
  border: rgba(0,0,0,0) solid 1px;
  border-radius: ${borderRadiusSize};
  border-spacing: 0;
  tr:first-of-type th:first-child {
    border-top-left-radius: ${borderRadiusSize};    
  }
  tr:first-of-type th:last-child {
    border-top-right-radius: ${borderRadiusSize};    
  }
  tr:last-of-type td:first-child {
    border-bottom-left-radius: ${borderRadiusSize};    
  }
  tr:last-of-type td:last-child {
    border-bottom-right-radius: ${borderRadiusSize};    
  }
/*tr:nth-child(odd) {
  background-color: #EEEEEE;
}*/
`;
const Header = styled.thead`
  color: white;
  text-align: left;
  background-image: linear-gradient(to right, #0184ae 0%, #16c0d7 100%);
  tr {
    height: 6.41vh;
  }
  th:nth-of-type(1) { width: 3.125vw; }
  th:nth-of-type(2) { width: auto; }
  th:nth-of-type(3) { width: 11.328vw; }
  th:nth-of-type(4) { width: 11.328vw; }
  th:nth-of-type(5) { width: 17.97vw; }
  th:nth-of-type(6) { width: 12.89vw; }
  th:nth-of-type(7) { width: 60px; }
`;
const Body = styled.tbody`
  color: rgba(0,0,0,0.69);
  background-color: rgba(255, 255, 255, 0.98);
  tr {
    height: 5.61vh;
  }
  tr:hover {
    background-color: rgba(0,162,195,0.29);
  }
  tr>td {
    border-top: rgba(0,0,0,0.10) solid 1px;
  }
`;
const ColumnWithSort = styled.th`
  display: flex;
  place-items: center;
  height: 100%;
  width: 100%;
  span {
    flex-basis: 80%;
  }
  div {
    flex-basis: 20%;
  }
`;
const IconButtonToggle = styled(IconButton)`
  color: white;
  svg {
    transition-duration: 0.5s;
    transition-property: transform;
  }
`;

export {
  SectionTable,
  Table,
  Header,
  Body,
  ColumnWithSort,
  IconButtonToggle,
};

import React from 'react';
import styled from 'styled-components';

const Page = styled.div`
    display: grid;
    grid-template-columns: 3.125vw 18.75vw 14.06vw 5.47vw 5.47vw 12.5vw 8.59vw 9.375vw 19.53vw 3.13vw;
    grid-template-rows: 11.54vh 10.26vh 58.97vh 9.615vh 4.495vh 5.12vh;
    grid-template-areas: 
    "left logo navbar navbar navbar navbar search search login right"
    "left filterName filterCity filterShowActive filterShowActive filterGo addNewContract addNewContract addNewContract right"
    "left contactDisplay table table table table table table table right"
    "left linksLeft linksLeft linksLeft lastSyncedLogo lastSynced lastSynced forceSync linksRight right"
    "left linksLeft linksLeft linksLeft availabilityLogo availability availability availability linksRight right"
    "left about about about availabilityLogo availability availability availability linksRight right";
`;
const Left = styled.div`
  grid-area: left;
`;
const Logo = styled.div`
  grid-area: logo;
`;
const Navbar = styled.div`
  grid-area: navbar;
`;
const Search = styled.div`
  grid-area: search;
`;
const Login = styled.div`
  grid-area: login;
`;
const Right = styled.div`
  grid-area: right;
`;
const FilterName = styled.div`
  grid-area: filterName;
`;
const FilterCity = styled.div`
  grid-area: filterCity;
`;
const FilterShowActive = styled.div`
  grid-area: filterShowActive;
`;
const FilterGo = styled.div`
  grid-area: filterGo;
`;
const AddNewContract = styled.div`
  grid-area: addNewContract;
`;
const ContactDisplay = styled.div`
  grid-area: contactDisplay;
`;
const Table = styled.div`
  grid-area: table;
`;
const LinksLeft = styled.div`
  grid-area: linksLeft;
`;
const LastSyncedLogo = styled.div`
  grid-area: lastSyncedLogo;
`;
const LastSynced = styled.div`
  grid-area: lastSynced;
`;
const ForceSync = styled.div`
  grid-area: forceSync;
`;
const LinksRight = styled.div`
  grid-area: linksRight;
`;
const AvailabilityLogo = styled.div`
  grid-area: availabilityLogo;
`;
const Availability = styled.div`
  grid-area: availability;
`;
const About = styled.div`
  grid-area: about;
`;


const App = () => (
  <Page>
    <Left>Left</Left>
    <Logo>Logo</Logo><Navbar>Navbar</Navbar><Search>Search</Search><Login>Login</Login>
    <Right>Right</Right>
    <FilterName>FilterNAme</FilterName><FilterCity>FilterCity</FilterCity><FilterShowActive>ShowActive</FilterShowActive>
    <FilterGo>Go</FilterGo><AddNewContract>Add NEw Contract</AddNewContract>
    <ContactDisplay>Display</ContactDisplay><Table>Table</Table>
    <LinksLeft>Links Left</LinksLeft>
    <LastSyncedLogo>LS LOGo</LastSyncedLogo><LastSynced>Last SYnced</LastSynced><ForceSync>Force sync</ForceSync>
    <LinksRight>Links Right</LinksRight>
    <About>About section</About>
    <AvailabilityLogo>AvailabilityLogo</AvailabilityLogo><Availability>Availability</Availability>
  </Page>
);

export default App;

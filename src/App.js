import React from 'react';
import styled from 'styled-components';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import LinksLeft from './views/footer/section-linksLeft';
import Logo from './views/header/section-logo';
import About from './views/footer/section-about';

library.add(faUserCircle);

const Page = styled.div`
    display: grid;
    grid-template-columns: 3.125vw 18.75vw 14.06vw 5.47vw 5.47vw 12.5vw 8.59vw 9.375vw 19.53vw 3.13vw;
    grid-template-rows: 11.54vh 10.26vh 58.97vh 9.615vh 4.495vh 5.12vh;
    grid-template-areas: 
    "leftHeader logo navbar navbar navbar navbar search search login rightHeader"
    "leftToolbar filterName filterCity filterShowActive filterShowActive filterGo addNewContract addNewContract addNewContract rightToolbar"
    "leftBody contactDisplay table table table table table table table rightBody"
    "leftFooter linksLeft linksLeft linksLeft lastSyncedLogo lastSynced lastSynced forceSync linksRight rightFooter"
    "leftFooter linksLeft linksLeft linksLeft availabilityLogo availability availability availability linksRight rightFooter"
    "leftFooter about about about availabilityLogo availability availability availability linksRight rightFooter";
    background-image: linear-gradient(135deg, #1D817B, #1C3C6B);
    
    .header {
      background-color: rgba(27, 60, 67, 0.79);
    }
    .toolbar {
      background-color: rgba(27, 77, 91, 0.60);
    }
    .body {
      
    }
    .footer {
      background-color: rgba(31, 43, 61, 0.35);
      &.darker {
        background-color: rgba(31, 43, 61, 0.65);
      }
    }
`;

const LeftHeader = styled.div`
  grid-area: leftHeader;
`;
const LeftToolbar = styled.div`
  grid-area: leftToolbar;
`;
const LeftBody = styled.div`
  grid-area: leftBody;
`;
const LeftFooter = styled.div`
  grid-area: leftFooter;
`;
const RightHeader = styled.div`
  grid-area: rightHeader;
`;
const RightToolbar = styled.div`
  grid-area: rightToolbar;
`;
const RightBody = styled.div`
  grid-area: rightBody;
`;
const RightFooter = styled.div`
  grid-area: rightFooter;
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

const App = () => (
  <Page>
    <LeftHeader className="header" />
    <LeftToolbar className="toolbar" />
    <LeftBody className="body" />
    <LeftFooter className="footer" />
    <RightHeader className="header" />
    <RightToolbar className="toolbar" />
    <RightBody className="body" />
    <RightFooter className="footer" />

    <Logo className="header" />
    <Navbar className="header" />
    <Search className="header" />
    <Login className="header" />

    <FilterName className="toolbar" />
    <FilterCity className="toolbar" />
    <FilterShowActive className="toolbar" />
    <FilterGo className="toolbar" />
    <AddNewContract className="toolbar" />

    <ContactDisplay className="body" />
    <Table className="body" />

    <LinksLeft className="footer" />
    <LastSyncedLogo className="footer darker" />
    <LastSynced className="footer darker" />
    <ForceSync className="footer darker" />
    <LinksRight className="footer" />
    <About className="footer" />
    <AvailabilityLogo className="footer darker" />
    <Availability className="footer darker" />
  </Page>
);

export default App;

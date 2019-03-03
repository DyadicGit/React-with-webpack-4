import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import {
  LeftHeader, LeftToolbar, LeftBody, LeftFooter,
  RightHeader, RightToolbar, RightBody, RightFooter,
  Page,
} from './App.styles';
import Logo from './views/header/Logo';
import Navbar from './views/header/Navbar';
import Search from './views/header/Search';
import Login from './views/header/Login';

import FilterName from './views/toolbar/FilterName';
import FilterCity from './views/toolbar/FilterCity';
import FilterShowActive from './views/toolbar/FilterShowActive';
import FilterGo from './views/toolbar/FilterGo';
import AddNewContract from './views/toolbar/AddNewContract';

import ContactDisplay from './views/body/ContactDisplay';
import Table from './views/body/Table';

import About from './views/footer/About';
import LinksLeft from './views/footer/LinksLeft';
import LastSyncedLogo from './views/footer/LastSyncedLogo';
import LastSynced from './views/footer/LastSynced';
import ForceSync from './views/footer/ForceSync';
import LinksRight from './views/footer/LinksRight';
import AvailabilityLogo from './views/footer/AvailabilityLogo';
import Availability from './views/footer/Availability';

library.add(faUserCircle);

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

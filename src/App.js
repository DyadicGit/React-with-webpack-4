import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faUserCircle, faEye, faEyeSlash, faArrowDown } from '@fortawesome/free-solid-svg-icons';
import {
  LeftHeader, LeftToolbar, LeftBody, LeftFooter,
  RightHeader, RightToolbar, RightBody, RightFooter,
  Page,
} from './App.styles';
import { LoadingComponent } from './components';
import utils from './utils';
// header
import Logo from './views/header/Logo';
import Navbar from './views/header/Navbar';
import Search from './views/header/Search';
import Login from './views/header/Login';
// toolbar
import FilterName from './views/toolbar/FilterName';
import FilterCity from './views/toolbar/FilterCity';
import FilterShowActive from './views/toolbar/FilterShowActive';
import FilterGo from './views/toolbar/FilterGo';
import AddNewContract from './views/toolbar/AddNewContract';
// body
import ContactDisplay from './views/body/ContactDisplay';
import Table from './views/body/Table/Table';
// footer
import About from './views/footer/About';
import LinksLeft from './views/footer/LinksLeft';
import LastSyncedLogo from './views/footer/LastSyncedLogo';
import LastSynced from './views/footer/LastSynced';
import ForceSync from './views/footer/ForceSync';
import LinksRight from './views/footer/LinksRight';
import AvailabilityLogo from './views/footer/AvailabilityLogo';
import Availability from './views/footer/Availability';

library.add(faUserCircle, faEye, faEyeSlash, faArrowDown);


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      loading: false,
      contacts: [],
      activeContact: null,
      sortOrderName: 'asc',
    };
  }

  componentDidMount = async () => {
    this.setState({ loading: true });
    await this.fetchContacts();
  };

  fetchContacts = async () => {
    try {
      const response = await fetch('../../misc/contacts.json');
      const data = await utils.handleResponse(response);
      this.setState({ loading: false, contacts: data });
      console.log(this.state.contacts);
    } catch (e) {
      console.error(e);
      this.setState({ loading: false });
    }
  };

  setActiveContact = () => { console.log('active'); };

  toggleSortOrderName = () => {
    const { sortOrderName, contacts } = this.state;
    const comparator = sortOrderName === 'asc'
      ? (a, b) => a.name.localeCompare(b.name)
      : (a, b) => b.name.localeCompare(a.name);

    this.setState({
      sortOrderName: sortOrderName === 'asc' ? 'desc' : 'asc',
      contacts: contacts.sort(comparator),
    });
  };

  handlers = {
    setActiveContact: this.setActiveContact,
    toggleSortOrderName: this.toggleSortOrderName,
  };

  render() {
    return (
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

        <ContactDisplay className="body" activeContact={this.state.activeContact} />
        <Table
          className="body"
          contacts={this.state.contacts}
          sortOrderName={this.state.sortOrderName}
          handlers={this.handlers}
        />

        <LinksLeft className="footer" />
        <LastSyncedLogo className="footer darker" />
        <LastSynced className="footer darker" />
        <ForceSync className="footer darker" />
        <LinksRight className="footer" />
        <About className="footer" />
        <AvailabilityLogo className="footer darker" />
        <Availability className="footer darker" />
        {this.state.loading && <LoadingComponent />}
      </Page>
    );
  }
}

export default App;

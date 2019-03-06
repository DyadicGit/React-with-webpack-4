import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faUserCircle, faEye, faEyeSlash,
  faArrowDown, faPencilAlt, faTrashAlt,
} from '@fortawesome/free-solid-svg-icons';
import {
  LeftHeader, LeftToolbar, LeftBody, LeftFooter,
  RightHeader, RightToolbar, RightBody, RightFooter,
  Page,
} from './App.styles';
import { LoadingText as LoadingComponent } from './components';
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

library.add(faUserCircle, faEye, faEyeSlash, faArrowDown, faPencilAlt, faTrashAlt);


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      loading: false,
      contacts: [],
      activeContact: null,
      sortOrderName: 'asc',
      searchTerms: {
        name: '',
        city: '',
        showActive: false,
      },
    };
  }

  componentDidMount = async () => {
    this.setState({ loading: true });
    await this.fetchContacts();
  };

  fetchContacts = async () => {
    try {
      const response = await fetch('../../assets/contacts.json');
      const data = await utils.handleResponse(response);
      this.setState({ loading: false, contacts: data });
      console.log(this.state.contacts);
    } catch (e) {
      console.error(e);
      this.setState({ loading: false });
    }
  };

  setSelectedFlag = (activeContact) => {
    const { contacts } = this.state;
    const selectedContact = contacts.find(contact => contact.id === activeContact.id);
    const index = contacts.indexOf(selectedContact);
    const clearedContacts = contacts.map(contact => ({ ...contact, selected: false }));
    clearedContacts[index] = { ...selectedContact, selected: true };
    this.setState({ contacts: clearedContacts });
  };

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

  handleRowClick = activeContact => () => {
    this.setState({ activeContact });
    this.setSelectedFlag(activeContact);
  };

  handleNameSearchResult = (searchTerm) => {
    const { searchTerms } = this.state;
    this.setState({ searchTerms: { ...searchTerms, name: this.processString(searchTerm) } });
  };

  processString = str => str.toString().toLowerCase().trimLeft();

  getFilteredContacts = () => {
    const { contacts, searchTerms } = this.state;
    const filterPredicate = (contact) => {
      return this.processString(contact.name).includes(searchTerms.name);
    };

    return contacts.filter(filterPredicate);
  };

  handlers = {
    toggleSortOrderName: this.toggleSortOrderName,
    handleRowClick: this.handleRowClick,
    handleNameSearchResult: this.handleNameSearchResult,
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

        <FilterName className="toolbar" handlers={this.handlers} />
        <FilterCity className="toolbar" />
        <FilterShowActive className="toolbar" />
        <FilterGo className="toolbar" />
        <AddNewContract className="toolbar" />

        <ContactDisplay className="body" activeContact={this.state.activeContact} />
        <Table
          className="body"
          contacts={this.getFilteredContacts()}
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

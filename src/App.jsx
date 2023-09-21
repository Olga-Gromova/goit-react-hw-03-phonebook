import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from './components/ContactForm/ContactForm';
import { ContactList } from './components/ContactList/ContactList';
import { Filter } from './components/Filter/Filter';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  }

      componentDidMount() {
    const contactsFromLocalStorage = localStorage.getItem('contactList');
    const parsedContacts = JSON.parse(contactsFromLocalStorage);

    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  }

  componentDidUpdate(_, prevState) {
    const prevStateContacts = prevState.contacts;
    const nextStayContacts = this.state.contacts;

    if (prevStateContacts !== nextStayContacts) {
      localStorage.setItem('contactList', JSON.stringify(nextStayContacts));
    }
  }

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    const id = nanoid();
    const name = event.name;
    const number = event.number;
    const contactsLists = [...this.state.contacts];

    if (contactsLists.findIndex(contact => name === contact.name) !== -1) {
      alert(`${name} is included in contacts already.`);
    } else {
      contactsLists.push({ name, id, number });
    }

    this.setState({ contacts: contactsLists });
  };

  handleDelete = event => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== event),
    }));
  };

  getFilteredContacts = () => {
    const filterContactsList = this.state.contacts.filter(contact => {
      return contact.name
        .toLowerCase()
        .includes(this.state.filter.toLowerCase());
    });

    return filterContactsList;
  };


  render() {
    const { filter } = this.state;
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 20,
          color: '#010101',
        }}
      >
        <h1>Phonebook</h1>
        <ContactForm handleSubmit={this.handleSubmit} />
        <h2> Contacts</h2>
        <Filter filter={filter} handleChange={this.handleChange} />
        <ContactList
          contacts={this.getFilteredContacts()}
          handleDelete={this.handleDelete}
        />
      </div>
    );
  }

};


import { useState, useEffect } from 'react';
import React from 'react';
import { nanoid } from 'nanoid';

import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { ContactForm } from 'components/ContactForm/ContactForm';
import css from 'App.module.css';

export const App = () => {
  const [contacts, setContacts] = useState(() => {
    const storedContacts = localStorage.getItem('contacts');
    return storedContacts ? JSON.parse(storedContacts) : [];
  });
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const handleSubmit = newContact => {
    const isContactExicts = contacts.find(
      contact =>
        contact.name.toLocaleLowerCase() === newContact.name.toLocaleLowerCase()
    );
    if (isContactExicts) {
      return alert(
        `Please, pay attention: Contact with name "${newContact.name}" have already included in this phonebook.`
      );
    }
    const contactToAdd = {
      ...newContact,
      id: nanoid(),
    };
    setContacts(prevContacts => {
      return [...prevContacts, contactToAdd];
    });
  };

  //  const onChangeFilter = ({ target: { value } }) => {
  //     setFilter(value);
  //   };

  const onChangeFilter = event => {
    setFilter(event.currentTarget.value);
  };

  const handleDeleteContacts = contactId => {
    setContacts(prevContacts =>
      prevContacts.filter(contact => contact.id !== contactId)
    );
  };

  const getFilteredContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const filterContacts = getFilteredContacts();

  return (
    <div className={css.mainDiv}>
      <h1 className={css.mainTitle}>Phonebook</h1>
      <ContactForm onSubmit={handleSubmit} />
      <h2 className={css.mainTitleContacts}> Contacts</h2>
      <Filter value={filter} onChange={onChangeFilter} />
      <ContactList
        contacts={filterContacts}
        handleDelete={handleDeleteContacts}
      />
    </div>
  );
};
export default App;

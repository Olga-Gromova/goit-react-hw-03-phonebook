import { ContactElement } from 'components/ContactElement/ContactElement';

export const ContactList = ({ contacts, handleDelete }) => (
  <ul>
    {contacts.map(({ id, name, number }) => (
      <ContactElement
        key={id}
        name={name}
        number={number}
        id={id}
        handleDelete={handleDelete}
      />
    ))}
  </ul>
);

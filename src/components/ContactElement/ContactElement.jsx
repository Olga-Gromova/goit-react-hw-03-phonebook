import React from 'react';
import css from './ContactElement.module.css';

export const ContactElement = ({ id, name, number, handleDelete }) => (
  <li key={id} className={css.contactListItem}>
    {name}: {number}
    <button
      type="button"
      className={css.contactListItemBtn}
      onClick={() => handleDelete(id)}
    >
      Delete
    </button>
  </li>
);

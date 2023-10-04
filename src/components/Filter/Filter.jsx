import React from 'react';
import css from './Filter.module.css';

export const Filter = ({ filter, onChange }) => (
  <div>
    <label>
      Find contacts by Name
      <input
        className={css.filterName}
        type="text"
        name="filter"
        placeholder="Enter filter"
        value={filter}
        onChange={onChange}
      />
    </label>
  </div>
);

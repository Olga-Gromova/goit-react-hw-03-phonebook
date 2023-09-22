import css from './Filter.module.css';

export const Filter = ({ filter, handleChange }) => (
  <div>
    <label className={css.filterLabel}>Find contacts by Name
    <input
      className={css.filterName}
      type="text"
      name="filter"
      placeholder="Enter filter"
      value={filter}
      onChange={handleChange}
    />
    </label>
    
  </div>
);

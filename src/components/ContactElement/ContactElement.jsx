import propTypes from 'prop-types';
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

ContactElement.propTypes = {
  id: propTypes.string.isRequired,
  name: propTypes.string.isRequired,
  number: propTypes.string.isRequired,
  handleDelete: propTypes.func.isRequired,
};
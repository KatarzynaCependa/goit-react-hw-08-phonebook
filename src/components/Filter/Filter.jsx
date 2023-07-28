import { useDispatch } from 'react-redux';
import { filterContact } from 'redux/contacts/filtersSlice';
import css from 'components/Filter/Filter.module.css';

export const Filter = () => {
  const dispatch = useDispatch();

  const handleFilter = e => {
    const filterValue = e.target.value;
    dispatch(filterContact(filterValue));
  };

  return (
    <label className={css.filterLabel}>
      Find your contacts by name
      <input
        type="text"
        placeholder="Search"
        onChange={handleFilter}
        className={css.inputEl}
      />
    </label>
  );
};

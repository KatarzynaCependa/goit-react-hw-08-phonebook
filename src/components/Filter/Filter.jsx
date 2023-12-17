import { useDispatch } from 'react-redux';
import { filterContact } from 'redux/contacts/filtersSlice';
import css from 'components/Filter/Filter.module.css';

import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';

export const Filter = () => {
  const dispatch = useDispatch();

  const handleFilter = e => {
    const filterValue = e.target.value;
    dispatch(filterContact(filterValue));
  };

  return (
    <label className={css.filterLabel}>
      Find your contacts by name
      <TextField
        margin="normal"
        fullWidth
        label="Search"
        name="search"
        autoFocus
        onChange={handleFilter}
      >
        <SearchIcon />
      </TextField>
    </label>
  );
};

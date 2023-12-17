import { useSelector, useDispatch } from 'react-redux';
import css from 'components/ContactList/ContactList.module.css';
import { deleteContact } from 'redux/contacts/operations';
import { selectFilter } from 'redux/contacts/filtersSlice';

import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

export const ContactList = () => {
  const contacts = useSelector(state => state.contacts.contacts);
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const handleDelete = id => {
    dispatch(deleteContact(id));
  };

  const filteredContacts = [...contacts]
    .sort((firstContact, secondContact) =>
      firstContact.name.localeCompare(secondContact.name)
    )
    .filter(contact =>
      contact.name.toLowerCase().includes(filter && filter.toLowerCase())
    );

  return filteredContacts.length <= 0 ? (
    <p>No contacts to display.</p>
  ) : (
    <ul>
      {filteredContacts.map(contact => (
        <li key={contact.id} className={css.listEl}>
          {contact.name}: {contact.number}
          <IconButton
            aria-label="delete"
            size="small"
            onClick={() => handleDelete(contact.id)}
            className={css.delBtn}
          >
            <DeleteIcon fontSize="inherit" />
          </IconButton>
        </li>
      ))}
    </ul>
  );
};

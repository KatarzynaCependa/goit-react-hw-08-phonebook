// import { useSelector, useDispatch } from 'react-redux';
// import css from 'components/ContactList/ContactList.module.css';
// import { deleteContact } from 'redux/contacts/operations';
// import { selectFilteredContacts } from 'redux/contacts/selectors';

// export const ContactList = () => {
//   const contacts = useSelector(state => state.contacts.contacts);
//   const filter = useSelector(selectFilteredContacts);
//   const dispatch = useDispatch();

//   const handleDelete = id => {
//     dispatch(deleteContact(id));
//   };

//   const filteredContacts = [...contacts]
//     .sort((firstContact, secondContact) =>
//       firstContact.name.localeCompare(secondContact.name)
//     )
//     .filter(contact =>
//       contact.name.toLowerCase().includes(filter && filter.toLowerCase())
//     );

//   return filteredContacts.length <= 0 ? (
//     <p>No contacts to display.</p>
//   ) : (
//     <ul>
//       {filteredContacts.map(contact => (
//         <li key={contact.id} className={css.listEl}>
//           {contact.name} = {contact.number}
//           <button onClick={() => handleDelete(contact.id)}>Delete</button>
//         </li>
//       ))}
//     </ul>
//   );
// };

import { useSelector, useDispatch } from 'react-redux';
import css from 'components/ContactList/ContactList.module.css';
import { deleteContact } from 'redux/contacts/operations';
import { selectFilter } from 'redux/contacts/filtersSlice';

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
          {contact.name} = {contact.number}
          <button onClick={() => handleDelete(contact.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

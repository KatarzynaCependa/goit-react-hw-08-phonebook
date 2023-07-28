// import { useDispatch, useSelector } from 'react-redux';
// import css from 'components/ContactForm/ContactForm.module.css';
// import { addContact } from 'redux/auth/operations';
// import { selectContacts } from 'redux/auth/selectors';

// export const ContactForm = () => {
//   const dispatch = useDispatch();

//   const stateContacts = useSelector(selectContacts);
//   const stateContactsNames = stateContacts.map(contact => contact.name);

//   const handleSubmit = e => {
//     e.preventDefault();
//     const form = e.target;
//     const name = form.elements.name.value;
//     const phone = form.elements.number.value;

//     const contact = {
//       name,
//       phone,
//     };

//     if (stateContactsNames.includes(name)) {
//       form.reset();
//       return alert(`${name} is alredy in contacts`);
//     }

//     dispatch(addContact(contact));

//     form.reset();
//   };

//   return (
//     <form onSubmit={handleSubmit} className={css.form}>
//       <label className={css.contactFormLabel}>
//         Name
//         <input
//           type="text"
//           name="name"
//           pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//           title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//           required
//         />
//       </label>
//       <label className={css.contactFormLabel}>
//         Number
//         <input
//           type="tel"
//           name="number"
//           pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//           title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//           required
//         />
//       </label>
//       <button type="submit">Add contact</button>
//     </form>
//   );
// };

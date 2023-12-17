// import { useDispatch, useSelector } from 'react-redux';
// import css from 'components/ContactForm/ContactForm.module.css';
// import { addContact } from 'redux/contacts/operations';

// export const ContactForm = () => {
//   const dispatch = useDispatch();
//   const contacts = useSelector(state => state.contacts.contacts);

//   const handleSubmit = e => {
//     e.preventDefault();

//     const form = e.target;
//     const name = form.elements.name.value;
//     const number = form.elements.number.value;

//     const contact = {
//       name,
//       number,
//     };

//     const contactExists = contacts.some(
//       existingContact =>
//         existingContact.name === name && existingContact.number === number
//     );

//     if (contactExists) {
//       form.reset();
//       return alert(`${name} is already in contacts`);
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
//           className={css.inputEl}
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
//           className={css.inputEl}
//         />
//       </label>
//       <button type="submit" className={css.button}>
//         Add contact
//       </button>
//     </form>
//   );
// };

import { useDispatch, useSelector } from 'react-redux';
import css from 'components/ContactForm/ContactForm.module.css';
import { addContact } from 'redux/contacts/operations';

import FormControl from '@mui/material/FormControl';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import Button from '@mui/material/Button';

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.contacts);

  const handleSubmit = e => {
    e.preventDefault();

    const form = e.target;
    const name = form.elements.name.value;
    const number = form.elements.number.value;

    const contact = {
      name,
      number,
    };

    const contactExists = contacts.some(
      existingContact =>
        existingContact.name === name && existingContact.number === number
    );

    if (contactExists) {
      form.reset();
      return alert(`${name} is already in contacts`);
    }

    dispatch(addContact(contact));
    form.reset();
  };

  return (
    <form onSubmit={handleSubmit} className={css.form}>
      <FormControl variant="standard">
        <InputLabel htmlFor="component-simple">Name</InputLabel>
        <Input
          id="component-simple"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces."
          required
        />
      </FormControl>
      <FormControl variant="standard">
        <InputLabel htmlFor="component-simple">Number</InputLabel>
        <Input
          id="component-simple"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </FormControl>
      <Button size="small" variant="contained" type="submit">
        Add contact
      </Button>
    </form>
  );
};

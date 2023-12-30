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

  const validateName = name => {
    const regex = /^[a-zA-Zа-яА-Я]+([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*$/;
    return regex.test(name);
  };

  const validateNumber = number => {
    const regex = /^\+(?:[0-9] ?){6,14}[0-9]$/;
    return regex.test(number);
  };

  const handleSubmit = e => {
    e.preventDefault();

    const form = e.target;
    const name = form.elements.name.value;
    const number = form.elements.number.value;

    if (!validateName(name)) {
      return alert('Invalid name format. Name must contain only letters.');
    }

    if (!validateNumber(number)) {
      return alert(
        'Invalid phone number format. The numbers should start with a plus sign, followed by the country code and national number. Sequence must be of 6 to 14 digits.'
      );
    }

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
      <FormControl variant="standard" fullWidth>
        <InputLabel htmlFor="component-simple">Name</InputLabel>
        <Input id="component-simple" name="name" required />
      </FormControl>
      <FormControl variant="standard" fullWidth>
        <InputLabel htmlFor="component-simple">Number</InputLabel>
        <Input id="component-simple" name="number" required />
      </FormControl>
      <Button
        className={css.button}
        size="small"
        variant="contained"
        type="submit"
      >
        Add contact
      </Button>
    </form>
  );
};

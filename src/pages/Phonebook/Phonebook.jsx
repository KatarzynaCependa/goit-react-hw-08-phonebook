import { Filter } from 'components/Filter/Filter';
import { ContactList } from 'components/ContactList/ContactList';
import { Helmet, HelmetProvider } from 'react-helmet-async';

const Phonebook = () => (
  <div>
    <HelmetProvider>
      <Helmet>
        <title>Phonebook</title>
      </Helmet>
    </HelmetProvider>
    <h2>Phonebook</h2>
    <Filter />
    {isLoading ? <p>Loading contacts...</p> : <ContactList />}
    {error && <p>Data loading error</p>}
  </div>
);

export default Phonebook;

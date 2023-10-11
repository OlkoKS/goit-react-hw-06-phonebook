import { ContactForm } from 'components';
import { ContactList } from 'components';
import { Filter } from 'components';

export const App = () => {
  return (
    <div className="phoneBookContainer">
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
};

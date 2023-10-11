import { ContactItem } from 'components';
import { ListContainer } from './ContactList.styled';
import { useSelector } from 'react-redux';
import { getContacts, getFilter } from 'redux/selectors';
import { handleDelete } from 'redux/contactsSlice';

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const handleContacts = () =>
    filter
      ? contacts.filter(({ name }) =>
          name.toLowerCase().includes(filter.toLowerCase())
        )
      : contacts;

  return (
    <div>
      <h2>ContactList</h2>
      <ListContainer>
        {handleContacts().map(({ id, name, number }) => {
          return (
            <ContactItem
              key={id}
              id={id}
              name={name}
              number={number}
              handleDelete={handleDelete}
            />
          );
        })}
      </ListContainer>
    </div>
  );
};

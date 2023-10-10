import { useDispatch } from 'react-redux';
import { ListItemContainer, DeleteBtn } from './ContactItem.styled';
import { handleDelete } from 'redux/contactsSlice';

export const ContactItem = ({ id, name, number }) => {
  const dispatch = useDispatch();

  return (
    <ListItemContainer>
      <h3>{name}: </h3>
      <p>{number}</p>
      <DeleteBtn type="button" onClick={() => dispatch(handleDelete(id))}>
        Delete
      </DeleteBtn>
    </ListItemContainer>
  );
};

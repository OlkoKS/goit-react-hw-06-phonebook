import { useDispatch } from 'react-redux';
import { FilterContainer } from './Filter.styled';
import { InputContainer } from 'components/ContactForm/ContactForm.styled';
import { handleFilter } from 'redux/filterSlice';

export const Filter = () => {
  const dispatch = useDispatch();

  const handleChange = ({ target: { value } }) => dispatch(handleFilter(value));

  return (
    <FilterContainer>
      <label>Find contacts by name</label>
      <InputContainer type="text" onChange={handleChange} name="filter" />
    </FilterContainer>
  );
};

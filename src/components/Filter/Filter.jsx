import { useDispatch } from 'react-redux';
import { SearchContainer, SearchInput } from './Filter.styled';
import { changeFilter } from 'redux/filterSlice';

export const Filter = () => {
  const dispatch = useDispatch();

  return (
    <SearchContainer>
      <p>Find contacts by name</p>
      <SearchInput
        onChange={e => dispatch(changeFilter(e.target.value))}
        type="text"
      />
    </SearchContainer>
  );
};

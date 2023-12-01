import { useDispatch, useSelector } from 'react-redux';
import { SearchContainer, SearchInput } from './Filter.styled';
import { changeFilter, getFilter } from 'redux/filter/filterSlice';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);

  return (
    <SearchContainer>
      <p>Find contacts by name</p>
      <SearchInput
        onChange={e => dispatch(changeFilter(e.target.value))}
        type="text"
        value={filter}
      />
    </SearchContainer>
  );
};

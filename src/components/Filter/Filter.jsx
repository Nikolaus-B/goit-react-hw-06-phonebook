import { SearchContainer, SearchInput } from './Filter.styled';

export const Filter = ({ filter, onSearchPhone }) => {
  return (
    <SearchContainer>
      <p>Find contacts by name</p>
      <SearchInput onChange={e => onSearchPhone(e.target.value)} type="text" />
    </SearchContainer>
  );
};

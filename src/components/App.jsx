import { PhoneForm } from './PhoneForm/PhoneForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { GlobalStyle } from './GlobalStyle';
import { Container } from './MainPageStyle.styled';
import { NoPhoneMessage } from './NoPhoneMessage/NoPhoneMessage';
import { useSelector } from 'react-redux';
import { getContacts } from 'redux/contacts/contactsSlice';

export const App = () => {
  const contacts = useSelector(getContacts);

  return (
    <Container>
      <h1>Phonebook</h1>
      <PhoneForm />
      <h2>Contacts</h2>
      <Filter />
      {contacts.length > 0 ? <ContactList /> : <NoPhoneMessage />}
      <GlobalStyle />
    </Container>
  );
};

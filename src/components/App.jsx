import { PhoneForm } from './PhoneForm/PhoneForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { GlobalStyle } from './GlobalStyle';
import { Container } from './MainPageStyle.styled';
import { NoPhoneMessage } from './NoPhoneMessage/NoPhoneMessage';
import { useSelector } from 'react-redux';
import { getContacts } from 'redux/contactsSlice';
import { getFilter } from 'redux/filterSlice';

export const App = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const filterContacts = () => {
    return contacts.filter(contact => {
      const contactName = contact.name.toLowerCase();
      const contactNumber = contact.number;

      return (
        contactName.includes(filter.toLowerCase()) ||
        contactNumber.includes(filter)
      );
    });
  };

  const filteredUsers = filterContacts();

  return (
    <Container>
      <h1>Phonebook</h1>
      <PhoneForm />
      <h2>Contacts</h2>
      <Filter />
      {contacts.length > 0 ? (
        <ContactList items={filteredUsers} />
      ) : (
        <NoPhoneMessage />
      )}
      <GlobalStyle />
    </Container>
  );
};

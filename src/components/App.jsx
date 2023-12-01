import { PhoneForm } from './PhoneForm/PhoneForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { GlobalStyle } from './GlobalStyle';
import { Container } from './MainPageStyle.styled';
import { NoPhoneMessage } from './NoPhoneMessage/NoPhoneMessage';
import { useSelector } from 'react-redux';

export const App = () => {
  const contacts = useSelector(state => state.contacts.contacts);
  const filter = useSelector(state => state.filter.filter);

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

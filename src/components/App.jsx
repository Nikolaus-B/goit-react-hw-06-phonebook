import { useEffect, useState } from 'react';
import { PhoneForm } from './PhoneForm/PhoneForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { nanoid } from 'nanoid';
import { GlobalStyle } from './GlobalStyle';
import { Container } from './MainPageStyle.styled';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { NoPhoneMessage } from './NoPhoneMessage/NoPhoneMessage';

const storageContacts = 'contacts';

const savedContacts = window.localStorage.getItem(storageContacts);

export const App = () => {
  const [contacts, setContacts] = useState(JSON.parse(savedContacts) || []);
  const [filters, setFilters] = useState('');

  useEffect(() => {
    window.localStorage.setItem(storageContacts, JSON.stringify(contacts));
  }, [contacts]);

  const updateTopic = newTopic => {
    setFilters(newTopic);
  };

  const filterContacts = () => {
    return contacts.filter(contact => {
      const contactName = contact.name.toLowerCase();
      const contactNumber = contact.number;

      return (
        contactName.includes(filters.toLowerCase()) ||
        contactNumber.includes(filters)
      );
    });
  };

  const addPhone = newPhone => {
    if (contacts.some(contact => contact.name === newPhone.name)) {
      Notify.failure(`${newPhone.name} already in phonebook`);
      return;
    }

    const phone = {
      ...newPhone,
      id: nanoid(),
    };
    setContacts(prevContacts => [...prevContacts, phone]);

    Notify.success(`${newPhone.name} added to your contacts`);
  };

  const deletePhone = user => {
    Notify.info(`${user.name} removed from your phone book`);

    setContacts(prevContacts =>
      prevContacts.filter(item => item.id !== user.id)
    );
  };

  const filteredUsers = filterContacts();

  return (
    <Container>
      <h1>Phonebook</h1>
      <PhoneForm onAdd={addPhone} />
      <h2>Contacts</h2>
      <Filter filter={filters} onSearchPhone={updateTopic} />
      {contacts.length > 0 ? (
        <ContactList items={filteredUsers} onDelete={deletePhone} />
      ) : (
        <NoPhoneMessage />
      )}
      <GlobalStyle />
    </Container>
  );
};

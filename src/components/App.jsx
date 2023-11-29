import { useEffect, useState } from 'react';
import { PhoneForm } from './PhoneForm/PhoneForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { nanoid } from 'nanoid';
import { GlobalStyle } from './GlobalStyle';
import { Container } from './MainPageStyle.styled';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { NoPhoneMessage } from './NoPhoneMessage/NoPhoneMessage';
import { useDispatch, useSelector } from 'react-redux';
import { changeContacts } from 'redux/store';

const storageContacts = 'contacts';

export const App = () => {
  const dispatch = useDispatch();

  const reduxContacts = useSelector(state => state.contacts);
  const reduxFilter = useSelector(state => state.filter);

  useEffect(() => {
    window.localStorage.setItem(storageContacts, JSON.stringify(reduxContacts));
  }, [reduxContacts]);

  const filterContacts = () => {
    return reduxContacts.filter(contact => {
      const contactName = contact.name.toLowerCase();
      const contactNumber = contact.number;

      return (
        contactName.includes(reduxFilter.toLowerCase()) ||
        contactNumber.includes(reduxFilter)
      );
    });
  };

  const addPhone = newPhone => {
    if (reduxContacts.some(contact => contact.name === newPhone.name)) {
      Notify.failure(`${newPhone.name} already in phonebook`);
      return;
    }

    const phone = {
      ...newPhone,
      id: nanoid(),
    };

    dispatch(changeContacts([...reduxContacts, phone]));

    Notify.success(`${newPhone.name} added to your contacts`);
  };

  const deletePhone = user => {
    Notify.info(`${user.name} removed from your phone book`);

    dispatch(changeContacts(reduxContacts.filter(item => item.id !== user.id)));
  };

  const filteredUsers = filterContacts();

  return (
    <Container>
      <h1>Phonebook</h1>
      <PhoneForm onAdd={addPhone} />
      <h2>Contacts</h2>
      <Filter />
      {reduxContacts.length > 0 ? (
        <ContactList items={filteredUsers} onDelete={deletePhone} />
      ) : (
        <NoPhoneMessage />
      )}
      <GlobalStyle />
    </Container>
  );
};

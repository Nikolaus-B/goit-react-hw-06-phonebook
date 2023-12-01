import { useDispatch, useSelector } from 'react-redux';
import {
  PhonebookButton,
  PhonebookItem,
  PhonebookList,
  PhonebookNumber,
} from './ContactList.styled';
import { deleteContact, getContacts } from 'redux/contacts/contactsSlice';
import { getFilter } from 'redux/filter/filterSlice';
import { Notify } from 'notiflix';

export const ContactList = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);
  const contacts = useSelector(getContacts);

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
    <PhonebookList>
      {filteredUsers.map(item => {
        return (
          <PhonebookItem key={item.id}>
            <p>
              {item.name}: <PhonebookNumber>{item.number}</PhonebookNumber>
            </p>
            <PhonebookButton
              onClick={() => {
                Notify.info(`${item.name} removed from your phone book`);
                dispatch(deleteContact({ id: item.id, name: item.name }));
              }}
            >
              Delete
            </PhonebookButton>
          </PhonebookItem>
        );
      })}
    </PhonebookList>
  );
};

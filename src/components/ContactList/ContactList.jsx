import { useDispatch } from 'react-redux';
import {
  PhonebookButton,
  PhonebookItem,
  PhonebookList,
  PhonebookNumber,
} from './ContactList.styled';
import { deleteContact } from 'redux/contactsSlice';

export const ContactList = ({ items }) => {
  const dispatch = useDispatch();

  return (
    <PhonebookList>
      {items.map(item => {
        return (
          <PhonebookItem key={item.id}>
            <p>
              {item.name}: <PhonebookNumber>{item.number}</PhonebookNumber>
            </p>
            <PhonebookButton
              onClick={() =>
                dispatch(deleteContact({ id: item.id, name: item.name }))
              }
            >
              Delete
            </PhonebookButton>
          </PhonebookItem>
        );
      })}
    </PhonebookList>
  );
};

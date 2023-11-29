import {
  PhonebookButton,
  PhonebookItem,
  PhonebookList,
  PhonebookNumber,
} from './ContactList.styled';

export const ContactList = ({ items, onDelete }) => {
  return (
    <PhonebookList>
      {items.map(item => {
        return (
          <PhonebookItem key={item.id}>
            <p>
              {item.name}: <PhonebookNumber>{item.number}</PhonebookNumber>
            </p>
            <PhonebookButton
              onClick={() => onDelete({ id: item.id, name: item.name })}
            >
              Delete
            </PhonebookButton>
          </PhonebookItem>
        );
      })}
    </PhonebookList>
  );
};

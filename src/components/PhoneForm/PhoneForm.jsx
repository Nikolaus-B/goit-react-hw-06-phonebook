import { Formik } from 'formik';
import {
  Field,
  Form,
  FormButton,
  FormContainer,
  FormGroup,
  ErrorMessage,
} from './PhoneForm.styled';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { addContact, getContacts } from 'redux/contacts/contactsSlice';
import { Notify } from 'notiflix';
import { nanoid } from 'nanoid';

const PhonebookSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  number: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
});

export const PhoneForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  return (
    <FormContainer>
      <Formik
        initialValues={{
          name: '',
          number: '',
        }}
        validationSchema={PhonebookSchema}
        onSubmit={(values, actions) => {
          actions.resetForm();
          if (contacts.some(contact => contact.name === values.name)) {
            Notify.failure(`${values.name} already in phonebook`);
            return;
          }
          Notify.success(`${values.name} added to your contacts`);
          dispatch(addContact({ ...values, id: nanoid() }));
        }}
      >
        <Form>
          <FormGroup>
            Name
            <Field name="name" placeholder="Jane" />
            <ErrorMessage component={'span'} name="name" />
          </FormGroup>

          <FormGroup>
            Phone
            <Field name="number" placeholder="+380..." />
            <ErrorMessage component={'span'} name="number" />
          </FormGroup>

          <FormButton type="submit">Add contact</FormButton>
        </Form>
      </Formik>
    </FormContainer>
  );
};

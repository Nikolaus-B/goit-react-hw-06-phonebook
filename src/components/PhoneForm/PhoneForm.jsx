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
import { useDispatch } from 'react-redux';
import { addContact } from 'redux/contactsSlice';

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
          dispatch(addContact(values));
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

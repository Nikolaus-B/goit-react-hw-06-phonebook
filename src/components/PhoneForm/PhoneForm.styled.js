import {
  Form as StyledForm,
  Field as FormFieldStyled,
  ErrorMessage as FormikErrorMessage,
} from 'formik';
import styled from 'styled-components';

export const FormContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 auto;
  padding: 10px 10px;
  width: 300px;
  border: 2px solid #3eb2fd;
  border-radius: 20px;
`;

export const Form = styled(StyledForm)`
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-width: 400px;
`;

export const FormGroup = styled.label`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const ErrorMessage = styled(FormikErrorMessage)`
  color: red;
  font-size: 14px;
`;

export const Field = styled(FormFieldStyled)`
  padding: 4px;
  width: 100%;
  max-width: 200px;
  border: 2px solid #3eb2fd;
  font-family: inherit;
`;

export const FormButton = styled.button`

    align-items: center;
    appearance: none;
    background-color: #3eb2fd;
    background-image: linear-gradient(1deg, #4f58fd, #149bf3 99%);
    background-size: calc(100% + 20px) calc(100% + 20px);
    border-radius: 100px;
    border-width: 0;
    box-shadow: none;
    box-sizing: border-box;
    color: #ffffff;
    cursor: pointer;
    display: inline-flex;
    font-family: CircularStd, sans-serif;
    font-size: 1rem;
    height: auto;
    justify-content: center;
    line-height: 1.5;
    padding: 6px 20px;
    position: relative;
    text-align: center;
    text-decoration: none;
    transition: background-color 0.2s, background-position 0.2s;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
    vertical-align: top;
    white-space: nowrap;
    max-width:150px;
    margin: 0 auto;
  }

  &:active,
  &:focus {
    outline: none;
  }

  &:hover {
    background-position: -20px -20px;
  
`;

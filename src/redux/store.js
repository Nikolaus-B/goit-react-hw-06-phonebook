import { devToolsEnhancer } from '@redux-devtools/extension';
import { createStore } from 'redux';

const initialState = {
  contacts: [],
  filter: '',
};

export const changeContacts = newContact => {
  return {
    type: 'contacts/changeContact',
    payload: newContact,
  };
};

export const changeFilter = newFilter => {
  return {
    type: 'filter/changeFilter',
    payload: newFilter,
  };
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'contacts/changeContact':
      return {
        ...state,
        contacts: action.payload,
      };

    case 'filter/changeFilter':
      return {
        ...state,
        filter: action.payload,
      };

    default:
      return state;
  }
};

const enhancer = devToolsEnhancer();

export const store = createStore(rootReducer, enhancer);

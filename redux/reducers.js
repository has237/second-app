import { combineReducers } from 'redux';

const initialState = {
  contacts: [],
};

const contactReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_CONTACT':
      return {
        ...state,
        contacts: [...state.contacts, action.payload],
      };
    case 'UPDATE_CONTACT':
      return {
        ...state,
        contacts: state.contacts.map((contact) =>
          contact.id === action.payload.id ? action.payload : contact
        ),
      };
    case 'DELETE_CONTACT':
      return {
        ...state,
        contacts: state.contacts.filter((contact) => contact.id !== action.payload),
      };
    case 'TOGGLE_FAVORITE':
      return {
        ...state,
        contacts: state.contacts.map((contact) =>
          contact.id === action.payload ? { ...contact, isFavorite: !contact.isFavorite } : contact
        ),
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  contact: contactReducer,
});

export default rootReducer;

import * as actionTypes from '../Actions/actionTypes';

const initialState = {
  contacts: [],
  contact: null,
};

const ContactReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.CREATE_CONTACT:
      return {
        ...state,
      };
    case actionTypes.GET_CONTACT:
      let arr = state.contacts.filter(
        (contact) => contact.id === action.payload
      );
      arr = arr.values();
      for (let val of arr) {
        arr = val;
      }
      return {
        ...state,
        contact: arr,
      };
    case actionTypes.SET_CONTACTS:
      state.contacts = action.payload;

      return {
        ...state,
        contacts: action.payload
      }

    case actionTypes.UPDATE_CONTACT:
      return {
        ...state,
      };

    case actionTypes.SET_CONTACT:
      return {
        ...state,
        contact: state.contacts.find((contact) =>
          contact.id === action.payload
        )
      }

    case actionTypes.DELETE_CONTACT:
      return {
        ...state,

      };
    default:
      return state;
  }
};

export default ContactReducer;
import * as actionTypes from './actionTypes';
import axios from '../../axios';


export const addContact = (data) => {
  return dispatch => {
    axios.post('/contacts.json', data).then(r => {
      console.log(r);
      dispatch({
        type: actionTypes.CREATE_CONTACT,
        payload: data,
      })
    })
  }
};

export const getContact = (id) => ({
  type: actionTypes.GET_CONTACT,
  payload: id,
});

export const updateContact = (contact) => {
  return dispatch => {
    axios.put(`/contacts/${contact.id}.json`, contact).then(r =>
      console.log(r))
    dispatch({
      type: actionTypes.UPDATE_CONTACT,
      payload: contact,
    })
  }
};

export const setContacts = (contact) => ({
  type: actionTypes.SET_CONTACTS,
  payload: contact,
})

export const deleteContact = (id) => {
  return dispatch => {
    axios.delete(`/contacts/${id}.json`).then(r =>
      console.log(r))
    dispatch({
      type: actionTypes.DELETE_CONTACT,
      payload: id,
    })
  }
};

export const setContact = (id) => ({
  type: actionTypes.SET_CONTACT,
  payload: id,
})







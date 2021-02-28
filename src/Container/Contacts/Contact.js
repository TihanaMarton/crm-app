import React from "react";
import { Link, useHistory } from "react-router-dom";
import { deleteContact, setContacts } from "../../Store/Actions/ContactAction";
import { useDispatch } from "react-redux";
import { Button } from 'react-bootstrap';
import style from './Contacts.module.css'
import axios from '../../axios';
import mapToArray from '../../Util/MapToArray';


const Contact = ({ contact }) => {
  const dispatch = useDispatch();
  let history = useHistory();
  const { name, phone, email, id } = contact;

  const delete_Contact = () => {

    dispatch(deleteContact(id))

    axios.get("/contacts.json").then(r => {
      let contactsData = (mapToArray(r.data))
      dispatch(setContacts(contactsData))
      history.push('/contacts');
    })
  };

  return (

    <tr className={style.cursorPointer}>
      <td>{id}</td>
      <td>{name}</td>
      <td>{phone}</td>
      <td>{email}</td>
      <td >
        <Link to={`/contacts/edit/${id}`}>
          <Button variant='info' className='mx-1' >edit</Button>
        </Link>
        <Link to={`/contacts/${id}`}>
          <Button
            variant='danger'
            onClick={delete_Contact}
          >
            remove
        </Button>
        </Link>
      </td>
    </tr >
  )
};

export default Contact;
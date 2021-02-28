import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Contact from './Contact';
import { Table, Button } from 'react-bootstrap'
import mapToArray from '../../Util/MapToArray';
import axios from '../../axios'
import { setContacts } from '../../Store/Actions/ContactAction';
import SearchContacts from './SearchContacts';


const Contacts = () => {
  const dispatch = useDispatch();
  let { id } = useParams();
  const contacts = useSelector((state) => state.contact.contacts);


  useEffect(() => {
    axios.get('/contacts.json').then(
      r => {
        let contactsData = (mapToArray(r.data))
        dispatch(setContacts(contactsData))
      })
  }, [])

  return (
    <>
      <Table striped bordered hover>
        <thead>
          <SearchContacts />
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Phone</th>
            <th>E-mail</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact) => <Contact key={contact.id} contact={contact} />)}
        </tbody>
      </Table>
      <Link to={`/contacts/add/`}>
        <Button variant='info'  >Add New</Button>
      </Link>
    </>
  );
};

export default Contacts;


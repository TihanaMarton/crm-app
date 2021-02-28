import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addContact, setContacts } from '../../Store/Actions/ContactAction';
import { useHistory } from 'react-router-dom';
import { Card, Button, Form } from 'react-bootstrap'
import axios from '../../axios';
import mapToArray from '../../Util/MapToArray'


const AddContact = () => {
  let history = useHistory();
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');


  const craeteContact = (e) => {
    e.preventDefault();
    const newContact = {
      name: name,
      phone: phone,
      email: email,
    };

    dispatch(addContact(newContact));

    axios.get('/contacts.json').then(r => {
      let contactsData = (mapToArray(r.data))
      dispatch(setContacts(contactsData))
      history.push('/contacts');
    })
  };


  return (
    <Card border='secondary'>
      <Card.Header className='text-info'>Add a Contact</Card.Header>
      <Card.Body>
        <Form onSubmit={(e) => craeteContact(e)}>
          <Form.Group>
            <Form.Control
              type='text'
              placeholder='Name'
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>
          <Form.Group>
            <Form.Control
              type='text'
              placeholder='Phone Number'
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </Form.Group>
          <Form.Group>
            <Form.Control
              type='text'
              placeholder='E-mail Address'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>
          <Button variant='info' type='submit'>
            Create Contact
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default AddContact;
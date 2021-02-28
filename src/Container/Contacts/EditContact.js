import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setContact, updateContact } from '../../Store/Actions/ContactAction';
import { useHistory, withRouter, useParams } from 'react-router-dom';
import { Card, Form, Button } from 'react-bootstrap'
import mapToArray from '../../Util/MapToArray';
import axios from '../../axios'
import { setContacts } from "../../Store/Actions/ContactAction";

const EditContact = () => {
  let { id } = useParams();
  let history = useHistory();
  const dispatch = useDispatch();
  const contact = useSelector((state) => state.contact.contact);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  useEffect(() => {
    if (contact != null) {
      setName(contact.name);
      setPhone(contact.phone);
      setEmail(contact.email);
      return;
    }
    dispatch(setContact(id))
  }, [contact]);


  const onUpdateContact = (e) => {
    e.preventDefault();

    const update_contact = {
      id: id,
      name: name,
      phone: phone,
      email: email,
    };


    dispatch(updateContact(update_contact));
    axios.get("/contacts.json").then(r => {
      let contactsData = (mapToArray(r.data))
      dispatch(setContacts(contactsData))
    })
    dispatch(setContact(null))
    history.push("/contacts")
  };

  return (
    <Card border='secondary'>
      <Card.Header className='text-info'>Edit Contact</Card.Header>
      <Card.Body className='card-body'>
        <Form onSubmit={(e) => onUpdateContact(e)}>
          <Form.Group>
            <Form.Control
              type='text'
              placeholder='Enter Name'
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>

          <Form.Group>
            <Form.Control
              type='text'
              className='form-control'
              placeholder='Enter Phone Number'
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </Form.Group>
          <Form.Group>
            <Form.Control
              type='text'
              placeholder='Enter E-mail Address'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>
          <Button variant='info' type='submit'>
            Update Contact
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default withRouter(EditContact);
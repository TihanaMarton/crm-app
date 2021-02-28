import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Card, Button, Form } from 'react-bootstrap'
import { database, storage } from '../../database';


const AddProduct = () => {
  let history = useHistory();
  const [image, setImage] = useState('');
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [imageURL, setImageURL] = useState('');
  const [items, setItems] = useState([]);

  const handleChange = (e) => {
    const file = e.target.files[0]
    const storageRef = storage.ref()
    const fileRef = storageRef.child(file.name)
    fileRef.put(file).then(() => {
      console.log('upload')
      storage.ref().child(file.name).getDownloadURL().then(url => setImageURL(url))
    })
  };


  const handleSubmit = (e) => {
    e.preventDefault()
    const itemsRef = database.ref('products');
    const item = {
      name: name,
      imageURL: imageURL,
      price: price
    }
    itemsRef.push(item);
    history.push('/products')
  };

  useEffect(() => {
    const itemsRef = database.ref('produtcs');
    itemsRef.on('value', (snapshot) => {
      let items = snapshot.val();
      let newState = [];
      for (let item in items) {
        newState.push({
          id: item,
          name: items[item].name,
          price: items[item].price,
          imageURL: items[item].imageURL
        });
        setItems(newState);
        history.push('/products');
      }
    });
  }, []);

  return (

    <Card border='secondary'>
      <Card.Header className='text-info'>Add a Product</Card.Header>
      <Card.Body>
        <Form onSubmit={(e) => handleSubmit(e)}>
          <Form.Group>
            <Form.Control
              type='file'

              className='form-control'
              onChange={handleChange}
            />

          </Form.Group>
          <Form.Group>
            <Form.Control
              type='text'
              className='form-control'
              placeholder='Product Name'
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>
          <Form.Group>
            <input
              type='text'
              className='form-control'
              placeholder='Price'
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </Form.Group>
          <Button variant='info' type='submit'>
            Create Product
          </Button>
        </Form>
      </Card.Body>
    </Card>

  );
};

export default AddProduct;
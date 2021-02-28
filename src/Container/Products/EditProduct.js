import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, withRouter, useParams } from 'react-router-dom';
import { Card, Form, Button } from 'react-bootstrap'
import mapToArray from '../../Util/MapToArray';
import axios from '../../axios'
import { setProducts, updateProduct, setProduct, deleteStorage, deleteProductURL } from '../../Store/Actions/ProductAction'
import { database, storage } from '../../database';

const EditProduct = () => {
  let { id } = useParams();
  let history = useHistory();
  const dispatch = useDispatch();
  const product = useSelector((state) => state.product.product);
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [imageURL, setImageURL] = useState('');
  const [items, setItems] = useState([]);

  useEffect(() => {
    if (product != null) {
      setName(product.name);
      setPrice(product.price);
      setImageURL(product.imageURL);
      return;
    }
    dispatch(setProduct(id))
  }, [product]);

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


  const onUpdateProduct = (e) => {
    e.preventDefault();

    const update_product = {
      id: id,
      name: name,
      imageURL: imageURL,
      price: price
    };

    dispatch(updateProduct(update_product));
    axios.get("/products.json").then(r => {
      let productsData = (mapToArray(r.data))
      dispatch(setProducts(productsData))
    })
    dispatch(setProduct(null))
    history.push("/products")
  };

  const deleteImage = (e) => {
    e.preventDefault();
    dispatch(deleteStorage(imageURL))
    dispatch(deleteProductURL(id))
  }

  return (
    <Card border='secondary'>
      <Card.Header className='text-info'>Edit Product</Card.Header>
      <Card.Body className="card-body">
        <Form onSubmit={(e) => onUpdateProduct(e)}>
          <Form.Group>
            <img src={imageURL} width='200px' ></img>
            <Form.Control
              type='file'
              className='form-control'
              onChange={handleChange}
            />
            <Button variant='info' type='submit' size='sm' onClick={deleteImage}>Delete</Button>
          </Form.Group>

          <Form.Group>
            <Form.Control
              type='text'
              className='form-control'
              placeholder='Enter product name'
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>
          <Form.Group>
            <Form.Control
              type='text'
              placeholder='Enter product price'
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </Form.Group>
          <Button variant='info' type='submit' size='m' >
            Update Product
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
};
export default withRouter(EditProduct);
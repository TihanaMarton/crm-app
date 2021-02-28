import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { deleteProduct, setProducts, deleteStorage } from '../../Store/Actions/ProductAction';
import { useDispatch } from 'react-redux';
import { Button } from 'react-bootstrap';
import style from './Products.module.css';
import axios from '../../axios';
import mapToArray from '../../Util/MapToArray';


const Product = ({ product }) => {
  const dispatch = useDispatch();
  let history = useHistory();
  const { name, imageURL, price, id } = product;

  const delete_Product = () => {

    dispatch(deleteStorage(imageURL))

    dispatch(deleteProduct(id))

    axios.get('/products.json').then(r => {
      let productsData = (mapToArray(r.data))
      dispatch(setProducts(productsData))
      history.push('/products');
    })
  };

  return (

    <tr className={style.cursorPointer}>
      <td>{id}</td>
      <td><img src={imageURL} width='100px' ></img></td>
      <td>{name}</td>
      <td>{price}</td>
      <td >
        <Link to={`/products/edit/${id}`}>
          <Button variant='info' className='mx-1' >edit</Button>
        </Link>
        <Link to={`/products/${id}`}>
          <Button
            variant='danger'
            onClick={delete_Product}
          >
            remove
        </Button>
        </Link>
      </td>
    </tr >
  );
};

export default Product;
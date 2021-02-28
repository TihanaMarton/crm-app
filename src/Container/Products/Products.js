import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { Table, Button } from 'react-bootstrap'
import mapToArray from '../../Util/MapToArray';
import axios from '../../axios'
import { setProducts } from '../../Store/Actions/ProductAction';
import Product from './Product';
import SearchProdcuts from './SearchProducts';


const Products = () => {
  const dispatch = useDispatch();
  let { id } = useParams();
  const products = useSelector((state) => state.product.products);


  useEffect(() => {
    axios.get('/products.json').then(
      r => {
        let productsData = (mapToArray(r.data))
        dispatch(setProducts(productsData))
      })
  }, []);

  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <SearchProdcuts />
          <tr>
            <th>ID</th>
            <th>Product</th>
            <th>Product Name</th>
            <th>Price</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => <Product key={product.id} product={product} />)}
        </tbody>
      </Table>
      <Link to={`/products/add/`}>
        <Button variant='info'  >Add New</Button>
      </Link>
    </div>
  );
};

export default Products;

import React, { useState } from 'react';
import axios from '../../axios';
import { setProducts } from '../../Store/Actions/ProductAction';
import mapToArray from '../../Util/MapToArray';
import { Button, Form, FormControl } from 'react-bootstrap'
import * as FaIcons from 'react-icons/fa';
import { useDispatch } from "react-redux";


const SearchProdcuts = () => {
  const dispatch = useDispatch();
  const [search, setSearch] = useState('');

  const handleButton = (e) => {
    e.preventDefault(e)
    axios.get('/products.json').then(r => {
      let productsData = [];
      productsData = (mapToArray(r.data)).filter(p => p.name.toLowerCase().includes(search.toLowerCase()))
      dispatch(setProducts(productsData))
    })
  };
  return (

    <tr>
      <th>
        <Form inline className='ml-auto '>
          <FormControl type='text' placeholder='Search'
            onChange={(e) => setSearch(e.target.value)}
          />
          <Button variant='outline-info' className='mr-4 ml-1'
            onClick={handleButton}
          >
            <FaIcons.FaSearch />
          </Button>
        </Form>
      </th>
    </tr>
  );
};

export default SearchProdcuts;
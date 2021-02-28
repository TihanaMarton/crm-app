import * as actionTypes from './actionTypes';
import axios from '../../axios';


export const getProduct = (id) => ({
  type: actionTypes.GET_PRODUCT,
  payload: id,
});

export const updateProduct = (product) => {
  return dispatch => {

    let updateProduct = {
      name: product.name,
      imageURL: product.imageURL,
      price: product.price
    }

    axios.put(`/products/${product.id}.json`, updateProduct).then(r =>
      console.log(r))
    dispatch({
      type: actionTypes.UPDATE_PRODUCT,
      payload: product,
    })
  }
};

export const setProducts = (product) => ({
  type: actionTypes.SET_PRODUCTS,
  payload: product,
})

export const deleteStorage = (url) => {
  return dispatch => {
    axios.delete(url).then(r =>
      console.log(r))
    dispatch({
      type: actionTypes.DELETE_STORAGE,
      payload: url
    })
  }
}

export const deleteProduct = (id) => {
  return dispatch => {
    axios.delete(`/products/${id}.json`).then(r =>
      console.log(r))
    dispatch({
      type: actionTypes.DELETE_PRODUCT,
      payload: id,
    })
  }
};

export const deleteProductURL = (id) => {
  return dispatch => {
    axios.delete(`/products/${id}/imageURL.json`).then(r => console.log(r), err => console.log(err))
    dispatch({
      type: actionTypes.DELETE_PRODUCT_URL,
      payload: id,
    })
  }
}

export const setProduct = (id) => ({
  type: actionTypes.SET_PRODUCT,
  payload: id,
})









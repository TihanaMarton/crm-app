import * as actionTypes from '../Actions/actionTypes';


const initialState = {
  products: [],
  product: null
};

const ProductReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.CREATE_PRODUCT:
      return {
        ...state,
      };
    case actionTypes.GET_PRODUCT:
      let arr = state.products.filter(
        (product) => product.id === action.payload
      );
      arr = arr.values();
      for (let val of arr) {
        arr = val;
      }
      return {
        ...state,
        product: arr,
      };
    case actionTypes.SET_PRODUCTS:
      state.products = action.payload;

      return {
        ...state,
        products: action.payload
      }

    case actionTypes.UPDATE_PRODUCT:
      return {
        ...state,
      };

    case actionTypes.SET_PRODUCT:
      return {
        ...state,
        product: state.products.find((product) =>
          product.id === action.payload
        )
      };

    case actionTypes.DELETE_PRODUCT:
      return {
        ...state,
      }
    case actionTypes.DELETE_STORAGE:
      return {
        ...state,
      };

    case actionTypes.DELETE_PRODUCT_URL:
      return {
        ...state
      };

    default:
      return state;
  }
};

export default ProductReducer;
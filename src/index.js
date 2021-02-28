import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import 'bootstrap/dist/css/bootstrap.min.css';
import ContactReducer from './Store/Reducers/ContactReducer';
import ProductReducer from './Store/Reducers/ProductReducer'
import registerServiceWorker from './registerServiceWorker';
import { composeWithDevTools } from 'redux-devtools-extension';
import * as actionCreators from './Store/Actions/actionTypes';



const rootReducer = combineReducers({
  contact: ContactReducer,
  product: ProductReducer
});

const composeEnhancers = composeWithDevTools({
  actionCreators,
  trace: true,
  traceLimit: 25,
})

const store = createStore(rootReducer,
  composeEnhancers(
    applyMiddleware(thunk)
  )
);


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  ,
  document.getElementById('root')
); registerServiceWorker();



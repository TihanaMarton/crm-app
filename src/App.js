import React from 'react';
import './index.module.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavbarComponent from './Container/Navbar/Navbar';
import Contacts from './Container/Contacts/Contacts';
import AddContact from './Container/Contacts/AddContact';
import EditContact from './Container/Contacts/EditContact';
import Products from './Container/Products/Products';
import AddProduct from './Container/Products/AddProduct';
import EditProduct from './Container/Products/EditProduct';
import Auth from './Container/Auth/Auth';

function App() {
  return (

    <Router>
      <Switch>
        <Route exact path='/' component={Auth}></Route>
        <Route>
          <NavbarComponent />
          <Route exact path='/contacts' component={Contacts}></Route>
          <Route exact path='/contacts/add' component={AddContact}></Route>
          <Route exact path='/contacts/edit/:id' component={EditContact}></Route>
          <Route exact path='/products' component={Products}></Route>
          <Route exact path='/products/add' component={AddProduct}></Route>
          <Route exact path='/products/edit/:id' component={EditProduct}></Route>
        </Route>
      </Switch>
    </Router>

  );
};

export default App;

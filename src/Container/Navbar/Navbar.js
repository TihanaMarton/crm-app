import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Navbar, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { SidebarData } from './SidebarData';
import classes from './Sidebar.module.css';
import { auth } from '../../database';


const NavbarComponent = () => {
  const [sidebar, setSidebar] = useState('');
  let history = useHistory();
  const showSidebar = () => {
    setSidebar(!sidebar);
  }

  const handleLogout = (e) => {
    e.preventDefault();
    auth.signOut();
    history.push('/')
  };

  return (
    <div>
      <Navbar bg='light' expand='lg' width='100%'>
        <div>
          <Link to='#' className={classes.menuBars} >
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
        </div>

        <Navbar.Brand className='ml-4' >CRM</Navbar.Brand>
        <div className='ml-auto'>
          <Button variant='info' type='submit' size='sm'
            onClick={handleLogout}
          >Logout</Button>
        </div>
      </Navbar>
      <div>
        <nav className={sidebar ? classes.active : classes.menu}>
          <ul className={classes.menuItems} >
            <li className={classes.menuToggle} onClick={showSidebar}>
              <Link to='#' className={classes.menuBars} >
                <AiIcons.AiOutlineClose className={classes.menuText} style={{ 'fontSize': '45px' }} />
              </Link>
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={classes.menuToggle} onClick={showSidebar}>
                  <Link className={classes.menuText} to={item.path} >
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              )
            })};
          </ul>
        </nav>
      </div>
    </div>
  )
};

export default NavbarComponent; 
import React, { useState } from 'react';
// import * as FaIcons from 'react-icons/fa';
// import * as AiIcons from 'react-icons/ai';
// import { Link } from 'react-router-dom';

import MenuIcon from '@material-ui/icons/Menu'
import CloseIcon from '@material-ui/icons/Close';

import { Sidebar } from './Sidebar';

import './Navbar.css';
// import { IconContext } from 'react-icons';

function Navbar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <div>
      {/* <IconContext.Provider value={{ color: '#fff' }}> */}
        <div className='navbar'>
          {/* <Link to='#' className='menu-bars'> */}
            <MenuIcon onClick={showSidebar} />
            <h1>Heading</h1>
            <h4>Yoo</h4>
          {/* </Link> */}
        </div>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul >

                                                                         {/* <li className='navbar-toggle'> */}
                {/* <MenuIcon onClick={showSidebar} />                                                    <Link to='#' className='menu-bars'> */}
                <MenuIcon onClick={showSidebar} className="nav-menu-left"/>
                                                                            {/* </Link> */}{/* </li> */}
            {Sidebar.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                                                                                    {/* <Link to={item.path}> */}
                    {item.icon}
                    <span>{item.title}</span>
                                                                                      {/* </Link> */}
                </li>
              );
            })}
          </ul>
        </nav>
      {/* </IconContext.Provider> */}
    </div>
  );
}

export default Navbar;
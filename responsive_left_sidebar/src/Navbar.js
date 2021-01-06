import React, { useState } from 'react';

import Header from './Header.js'
import Nav2 from './Nav2.js'

import './Navbar.css';

function Navbar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <div>
      <Header sidebar={sidebar} setSidebar={setSidebar}/>

        <Nav2 sidebar={sidebar} setSidebar={setSidebar}/>
    </div>
  );
}

export default Navbar;
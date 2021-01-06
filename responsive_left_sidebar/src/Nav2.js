import React from 'react'
import './Nav2.css'
import MenuIcon from '@material-ui/icons/Menu'
import { Sidebar } from './Sidebar';


function Nav2({sidebar,setSidebar}) {
 const showSidebar = () => setSidebar(!sidebar);

    return (
        <div>

            <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
            <ul >    <h2>Nav2</h2>                                                  
                    <MenuIcon onClick={showSidebar} className="nav-menu-left"/>
                    {Sidebar.map((item, index) => {
                        return (
                            <li key={index} className={item.cName}>
                                {item.icon}
                                <span>{item.title}</span>
                            </li>
                        );
                    })}
            </ul>
            </nav>
            
        </div>
    )
}

export default Nav2

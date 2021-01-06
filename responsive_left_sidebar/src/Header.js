import React from 'react'
import MenuIcon from '@material-ui/icons/Menu';
import './Header.css'

function Header({sidebar,setSidebar}) {
    const showSidebar = () => setSidebar(!sidebar);


    return (
        <div>
            <div className='header-compo'>
                <MenuIcon onClick={showSidebar}/>
                <h1>Heading Component</h1>
                <h4>Yoo</h4>
            </div>
        </div>
    )
}

export default Header

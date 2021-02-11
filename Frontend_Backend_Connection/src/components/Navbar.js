import React from 'react'
import {Link} from  "react-router-dom";

function Navbar() {
    return (
        <div>
            <Link to="/"> 
                <button >List</button>

            </Link>

            <Link to="/edit"> 
               <button >Edit</button>
             </Link>

             <Link to="/creates"> 
                <button >Create</button>
            </Link>

            <Link to="/user"> 
                <button >User</button>
            </Link>

            <Link to="/search"> 
                <button >Search</button>
            </Link>

        </div>
    )
}

export default Navbar

import React from 'react'
import './Pagination2.css'

function Pagination2({postPerPage,totalPost,paginate}) {
    const PgNo=[];
    for(let i=1;i<=Math.ceil(totalPost/postPerPage);i++)
    {
        PgNo.push(i)
    }
    return (
        <div className="page2">
            {PgNo.map(num => (
                // <li key={num}>
                // <div className="button_space">
                <button  className="button_space" onClick={()=>{paginate(num)}}>

                         {/* num ===10 ?<h1>HI</h1>: null */}
                     {/* <a onClick={()=>{paginate(num)}} href="#"> */}
                        {num}
                     {/* </a> */}
                 </button>
            
                //  </div>
                // </li>
            ))}
        </div>
    )
}

export default Pagination2

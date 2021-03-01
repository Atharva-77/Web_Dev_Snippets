import React from 'react'

function EventHandler() {
    function clickHandler()
    {
        console.log("FUN BUTTON clicked")
    }
    return (
        <div>
            <button onClick={clickHandler}>Click here</button>
            <button onClick={()=>{console.log("hello")}}>Click here 2.0</button>
        </div>
    )
}

export default EventHandler









// import React, { Component } from 'react'

// class EventHandler extends Component {

//     clickHandler()
//     {
//         console.log("BUtton clicked")
//     }

//     render() {
//         return (
//             <div>
//                 <button onClick={this.clickHandler}>Click here</button>
                
//             </div>
//         )
//     }
// }

// export default EventHandler

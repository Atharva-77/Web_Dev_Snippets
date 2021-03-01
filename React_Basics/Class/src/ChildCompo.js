import React, { Component } from 'react'

class ChildCompo extends Component {
    render() {
        return (
            <div>
                {/* <button onClick={this.props.greetHandler}>Greet Parent</button> */}
                <button onClick={()=>this.props.greetHandler("Atharva-77 github repo")}>Greet Parent</button>
            </div>
        )
    }
}

export default ChildCompo

// import React from 'react'

// function ChildCompo(props) {
//     return (
//         <div>
//             <button onClick={props.greetHandler}>Greet Parent</button>
//         </div>
//     )
// }

// export default ChildCompo

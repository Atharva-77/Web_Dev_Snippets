import React from 'react'

function Children_func(props) {
    return (
        <div>
            <h2>Name:-{props.name}, hero:-  {props.hero}</h2>
            Children {props.children}
        </div>
    )
}

export default Children_func

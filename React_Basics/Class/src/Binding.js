

import React, { Component } from 'react'

class Binding extends Component {
    constructor(props)
    {
       super(props)
       this.state=
        {
            message:"Hello"
        }
        this.handler=this.handler.bind(this)
    }
    clickHandler()
    {
        this.setState(
        {
            message:"Goodbye"
        })
        console.log(this);
    }
    handler()
    {
        this.setState(
        {
            message:"Goodbye handler"
        })
        console.log(this);
    }

    arrowhandler=()=>
    {
        this.setState(
        {
            message:"Binding via arrow method"
        })
        console.log(this);
    }
    render() {
        return (
            <div>
                <h1>{this.state.message} </h1>
             

                <button onClick={this.clickHandler}>Click w/o arrow</button>
                {/* undefined thrown by this keyword .Thus error is setState is uncommented
                Binding is required. */}

                {/* Binding:- */}
                {/* 1st method */}
                <button onClick={()=>this.clickHandler()}>Click arrow</button> 
                {/* this keyword gives obj as o/p if arrow func is used */}

                {/* 2nd method */}
                <button onClick={this.clickHandler.bind(this)}>Binding w/o arrow</button>
                {/* 3rd method */}
                <button onClick={this.handler}>Binding in class constructor</button>
                {/* 4th method */}
                <button onClick={this.arrowhandler}>Binding via arrow method</button>


            </div>
        )
    }
}

export default Binding

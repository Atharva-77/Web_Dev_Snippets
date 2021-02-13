import React, { Component } from 'react'

class State_class extends Component {
    constructor()
    {
        super() //Call is to be made to base class constructor
        this.state=
        {
            message: 'Welcome to YT Channel'
        }
    }

    changeMessage()
    {
        //setState has an obj.
        this.setState(
            {
               message: 'Thanks for subscribing' 
            }
            )
    }
    render() {
        return (
            <div>
                <h2>{this.state.message}</h2>
                <button onClick={() => this.changeMessage()}>Subscribe</button>
            </div>
        )
    }
}

export default State_class

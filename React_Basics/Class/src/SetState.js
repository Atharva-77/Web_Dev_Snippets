import React, { Component } from 'react'

export class SetState extends Component {
    constructor() {
        super()
    
        this.state =
        {
             count: 0
        }
    }
    increment()
    {
        this.state.count = this.state.count + 1
        console.log(this.state.count)
     
    }
    
    render() {
        return (
            <div>
                <div>Count- {this.state.count}</div>
                <button onClick={()=> this.increment()}>Increment</button>
            </div>
        )
    }
}

export default SetState

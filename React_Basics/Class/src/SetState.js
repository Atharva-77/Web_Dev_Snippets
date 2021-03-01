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
        		//this.state.count = this.state.count + 1
                // console.log(this.state.count)

        // this.setState(
        //     {
        //         count: this.state.count+ 1
        //     },
        //     () =>
        //     {
        //         console.log("Callback value",this.state.count)
        //     }
        // ) 
        // console.log(this.state.count) //lag by 1. Therefore put all code after setState in callback

        //If obj is passed, opof incrementFive is 1 as all 5 statements are combined & 1 call made.Thus pass function NOT obj.

        this.setState((prevCnt,props)=>(
        {
            count:prevCnt.count + 1 //+props.addVal
        }),
        ()=>
        {
          console.log("Callback 5 value",this.state.count)
        }
        )
     
    }

    incrementFive()
    {
        this.increment()
        this.increment()
        this.increment()
        this.increment()
        this.increment()
    }
    
    render() {
        return (
            <div>
                <div>Count- {this.state.count}</div>
                <button onClick={()=> this.increment()}>Increment</button>
                <button onClick={()=> this.incrementFive()}>Increment5</button>

            </div>
        )
    }
}

export default SetState

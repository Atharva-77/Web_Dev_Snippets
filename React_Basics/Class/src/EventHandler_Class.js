import React, { Component } from 'react'

class EventHandler_Class extends Component {

    clickHandler()
    {
        console.log("Class button clicked");
    }   
    handler()
    {
        console.log("Cannot click Class button");
    }   
    render() {
        return (
            <div>
             <button onClick={this.clickHandler}>Click here</button>
             <button onClick={this.handler()}>Can't Click here</button>
             {/* because of brackets (),it becomes function call */}

            </div>
        )
    }
}

export default EventHandler_Class

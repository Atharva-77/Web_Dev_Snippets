import React, { Component } from 'react'

export class Children_class extends Component {
    render() {
        return (
            <div>
                <h2>Cname:-{this.props.name}, Chero:-{this.props.hero}</h2>
                {this.props.children}
            </div>
        )
    }
}

export default Children_class

import React, { Component } from "react";

class PersonComponent extends Component {
    render () {
        return (
            <p>I am a {this.props.name} and I am {this.props.age} years old!</p>
        );
    }
}

export default PersonComponent;
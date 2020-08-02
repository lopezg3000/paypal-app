import React, { Component } from 'react'


class Modal extends Component {
    render() {
        if (!this.props.show) {
            return null;
        }
        return <h1>Hello Modal</h1>;
    }
}

export default Modal;
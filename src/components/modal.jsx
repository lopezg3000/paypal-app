import React, { Component } from 'react'


class Modal extends Component {
    render() {
        const { show, onClose } = this.props;

        if (!show) {
            return null;
        }
        return (
            <div>
                <div>{this.props.children}</div>
                <div>
                    <button onClick={onClose} > Close</button>
                </div>
            </div>
        );
    }
}

export default Modal;
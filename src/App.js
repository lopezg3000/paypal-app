import React, { Component } from 'react';
import Modal from './components/modal';
import './App.css';


class App extends Component {
  state = {
    show: false
  }

  handleShowModal = () => {
    this.setState({ show: true });
  }

  render() {
    return (
      <div className="App">
        <h1>Hello PayPal Homepage</h1>
        <button onClick={this.handleShowModal}>Show Modal</button>
        <Modal show={this.state.show} />
      </div>
    );
  }
}

export default App;

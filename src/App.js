import React, { Component } from 'react';
import Navbar from './components/navbar';
import Wallet from './components/wallet/wallet';
import Modal from './components/modal';
import './App.css';


class App extends Component {
  state = {
    show: false
  }

  handleShowModal = () => {
    const show = !this.state.show;

    this.setState({ show });
  }

  render() {
    return (
      <div className="App">
        <Navbar />
        <Wallet />

        {/* <div className='show-btn'>
          <button onClick={this.handleShowModal}>Show Modal</button>
        </div>
        <Modal onClose={this.handleShowModal} show={this.state.show}>
          <h1>Message in Modal</h1>
        </Modal> */}
      </div>
    );
  }
}

export default App;

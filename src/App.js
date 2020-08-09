import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Navbar from './components/navbar';
import Wallet from './components/wallet/wallet';
import NotFound from './components/notFound';
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
        <Switch>
          <Route path='/wallet' component={Wallet} />
          <Route path='/notFound' component={NotFound} />
          <Redirect path='/' exact to='/wallet' />
          <Redirect to='/notFound' />
        </Switch>


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

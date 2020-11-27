import React, { Component } from 'react';
import Button from '../common/button';
import PaypalFilledIcon from '../../assets/wallet/paypalFilledIcon.svg';
import SecurityCodeLogo from '../../assets/wallet/logosWallet.png';
import './newCard.css';

class NewCard extends Component {

    handleCloseModal = () => {
        this.props.history.goBack();
    };

    handleSubmit = () => {
        console.log('form submitted');
    }

    styles = {
        position: 'absolute',
        right: '0',
        top: '0',
        width: '3.2em',
        height: '3em',
        background: `url(${SecurityCodeLogo}) no-repeat`,
        backgroundPosition: '0% 48%',
        backgroundSize: '153%'
    }

    render() {
        return (
            <div className='wallet modal-container'>
                <div className='modal-content'>
                    <header className='modal-header'>
                        <div className='eyebrow'>
                            <img src={PaypalFilledIcon} />
                            <div className='close-icon' onClick={this.handleCloseModal}>&times;</div>
                        </div>
                        <h2 className='headline'>Link a Card</h2>
                    </header>
                    <div className='modal-body'>
                        <div className='form-container'>
                            <form onSubmit={this.handleSubmit}>
                                <div className='form-group'>
                                    <label className='overlay' htmlFor='card-number'>Debit or credit card number</label>
                                    <input
                                        name='card-number'
                                        id='card-number'
                                        type='text'
                                        className='form-control'
                                        placeholder='Enter Card Number'
                                    />
                                </div>
                                <div className='form-group'>
                                    <label htmlFor='card-type'>Card type</label>
                                    <select
                                        name='card-type'
                                        id='card-type'
                                        className='form-control'
                                    >
                                        <option value='placeholder'>Select your card type</option>
                                        <option value='visa'>Visa</option>
                                        <option value='mastercard'>MasterCard</option>
                                        <option value='americanExpress'>American Express</option>
                                        <option value='discover'>Discover</option>
                                    </select>
                                </div>
                                <div className='form-group'>
                                    <label htmlFor='expiration-date'>Expiration date</label>
                                    <input
                                        name='expiration-date'
                                        id='expiration-date'
                                        type='text'
                                        className='form-control'
                                        placeholder='mm/yy'
                                    >
                                    </input>
                                </div>
                                <div className='form-group' style={{ position: 'relative' }}>
                                    <label htmlFor='security-code'>Security code</label>
                                    <input
                                        name='security-code'
                                        id='security-code'
                                        type='text'
                                        className='form-control'
                                        placeholder='Enter security code'
                                    >
                                    </input>
                                    <span style={this.styles}></span>
                                </div>
                                <div className='form-group'>
                                    <label htmlFor='billing-address'>Billing Address</label>
                                    <input
                                        name='billing-address'
                                        id='billing-address'
                                        type='text'
                                        className='form-control'
                                        placeholder='Enter billing address'
                                    >
                                    </input>
                                </div>
                            </form>
                        </div>
                    </div>
                    <Button text='Link a card' />
                </div>
            </div>
        );
    }
}

export default NewCard;
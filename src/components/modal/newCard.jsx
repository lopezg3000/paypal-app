import React, { Component } from 'react';
import Joi from 'joi';
import Button from '../common/button';
import Input from '../common/input';
import PaypalFilledIcon from '../../assets/wallet/paypalFilledIcon.svg';
import SecurityCodeLogo from '../../assets/wallet/logosWallet.png';
import sampleCard from '../../assets/wallet/sampleCard.webp';
import './newCard.css';

class NewCard extends Component {
    state = {
        fieldsActive: {
            cardNumber: false,
            cardType: false,
            expirationDate: false,
            securityCode: false,
            billingAddress: false
        },
        data: {
            cardNumber: '',
            cardType: '',
            expirationDate: '',
            securityCode: '',
            billingAddress: ''
        },
        errors: {}
    };


    handleCloseModal = () => {
        this.props.history.goBack();
    };

    validate = () => {
        const errors = {};

        const { data } = this.state;
        if (data.cardNumber.trim() === "")
            errors.cardNumber = 'Card Number is required';

        if (data.expirationDate.trim() === "")
            errors.expirationDate = 'Expiration Date is required';

        return Object.keys(errors).length === 0 ? null : errors;
    }

    handleSubmit = e => {
        e.preventDefault();

        const errors = this.validate();
        console.log(errors);
        this.setState({ errors: errors || {} });
        if (errors) return;

        //Call the server

        console.log('form submitted');
    };

    handleChange = ({ currentTarget: input }) => {
        const data = { ...this.state.data };
        data[input.name] = input.value;

        this.setState({ data });

        this.handleActiveField(input.name);
    };

    handleActiveField = (name) => {
        const fieldsActive = { ...this.state.fieldsActive };
        fieldsActive[name] = true;

        this.setState({ fieldsActive });
    };

    handleDisableField = ({ currentTarget: input }) => {
        const fieldsActive = { ...this.state.fieldsActive };

        if (input.value === "") {
            fieldsActive[input.name] = false;

            this.setState({ fieldsActive });
        }
    };

    insertDash(date) {
        if (date) {
            const dateClone = date.split('/').join('');
            const formattedDate = dateClone.match(/.{1,2}/g).join('/');

            return formattedDate;
        }

        return date;
    };

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
        const { fieldsActive, data, errors } = this.state;

        return (
            <div className='wallet modal-container'>
                <div className='modal-content'>
                    <header className='modal-header'>
                        <div className='eyebrow'>
                            <img src={PaypalFilledIcon} />
                            <div className='close-icon' onClick={this.handleCloseModal}>&times;</div>
                        </div>
                        <h2 className='headline'>Link a Card</h2>
                        <img className='sample-card' src={sampleCard} />
                    </header>
                    <div className='modal-body'>
                        <div className='form-container'>
                            <form onSubmit={this.handleSubmit}>
                                <Input
                                    name='cardNumber'
                                    label='Debit or credit card number'
                                    value={data.cardNumber}
                                    placeholderText='Enter card number'
                                    active={fieldsActive.cardNumber}
                                    onChange={this.handleChange}
                                    onFocus={this.handleChange}
                                    onBlur={this.handleDisableField}
                                    error={errors.cardNumber}
                                // errors={errors.cardNumber}
                                />
                                <div className='form-group'>
                                    <label
                                        className={fieldsActive.cardType ? 'floating-label select' : ''}
                                        htmlFor='cardType'
                                    >
                                        Card type
                                    </label>
                                    <select
                                        name='cardType'
                                        id='cardType'
                                        className='form-control'
                                        value={data.cardType}
                                        onChange={this.handleChange}
                                        onFocus={this.handleChange}
                                        onBlur={this.handleDisableField}

                                    // value=''
                                    //need to fix the value of the select input
                                    >
                                        <option value=''>Select your card type</option>
                                        <option value='visa'>Visa</option>
                                        <option value='mastercard'>MasterCard</option>
                                        <option value='americanExpress'>American Express</option>
                                        <option value='discover'>Discover</option>
                                    </select>
                                </div>
                                <Input
                                    name='expirationDate'
                                    label='Expiration date'
                                    value={this.insertDash(data.expirationDate)}
                                    placeholderText='mm/yy'
                                    active={fieldsActive.expirationDate}
                                    onChange={this.handleChange}
                                    onFocus={this.handleChange}
                                    onBlur={this.handleDisableField}
                                    error={errors.expirationDate}
                                />
                                <Input
                                    name='securityCode'
                                    label='Security code'
                                    value={data.securityCode}
                                    placeholderText='Enter security code'
                                    active={fieldsActive.securityCode}
                                    onChange={this.handleChange}
                                    onFocus={this.handleChange}
                                    onBlur={this.handleDisableField}
                                />
                                <Input
                                    name='billingAddress'
                                    label='Billing Address'
                                    value={data.billingAddress}
                                    placeholderText='Enter billing address'
                                    active={fieldsActive.billingAddress}
                                    onChange={this.handleChange}
                                    onFocus={this.handleChange}
                                    onBlur={this.handleDisableField}
                                />
                                <input type='submit' text='submit' />
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


//Need to figure out how to add security logo
{/*      
<div className='form-group' style={{ position: 'relative' }}>
    <label
        className={securityCode.active ? 'floating-label' : ''}
        htmlFor='securityCode'
    >
        Security code
    </label>
    <input
        className='form-control'
        name='securityCode'
        id='securityCode'
        value={securityCode.value}
        type='text'
        placeholder={securityCode.active ? "Enter security code" : ""}
        onChange={this.handleChange}
        onFocus={this.handleChange}
        onBlur={this.handleDisableField}
    >
    </input>
    <span style={this.styles}></span>
</div> */}
import React, { Component } from 'react';
import Button from '../common/button';
import PaypalFilledIcon from '../../assets/wallet/paypalFilledIcon.svg';
import SecurityCodeLogo from '../../assets/wallet/logosWallet.png';
import sampleCard from '../../assets/wallet/sampleCard.webp';
import './newCard.css';

class NewCard extends Component {
    state = {
        data: [
            { id: "cardNumber", cardNumber: "", active: false },
            { id: "cardType", cardType: "", active: false },
            { id: "expirationDate", expirationDate: "", active: false },
            { id: "securityCode", securityCode: "", active: false },
            { id: "billingAddress", billingAddress: "", active: false }
        ]
    };

    handleCloseModal = () => {
        this.props.history.goBack();
    };

    handleSubmit = () => {
        console.log('form submitted');
    };

    getInputObject = (id) => {
        const inputs = [...this.state.data];
        const index = inputs.findIndex((input) => input.id === id);
        const input = { ...inputs[index] };

        return input;
    };

    handleChange = ({ currentTarget: input }) => {
        const inputs = [...this.state.data];
        const index = inputs.findIndex((i) => i.id === input.id);

        inputs[index][input.id] = input.value;
        this.setState({ inputs });

        this.handleActiveField(input);
    };

    handleActiveField = (input) => {
        const inputs = [...this.state.data];
        const index = inputs.findIndex((i) => i.id === input.id);
        inputs[index].active = true;

        this.setState({ inputs });
    };

    handleDisableField = ({ currentTarget: input }) => {
        const inputs = [...this.state.data];
        const index = inputs.findIndex((i) => i.id === input.id);

        if (input.value === "") {
            inputs[index].active = false;

            this.setState({ inputs });
        }
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
        const { cardNumber, active: cardNumberActive } = this.getInputObject("cardNumber");
        const { cardType, active: cardTypeActive } = this.getInputObject("cardType");
        const { expirationDate, active: expirationDateActive } = this.getInputObject("expirationDate");
        const { securityCode, active: securityCodeActive } = this.getInputObject("securityCode");
        const { billingAddress, active: billingAddressActive } = this.getInputObject("billingAddress");


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
                                <div className='form-group'>
                                    <label
                                        className={cardNumberActive ? 'floating-label' : ''}
                                        htmlFor='cardNumber'
                                    >
                                        Debit or credit card number
                                    </label>
                                    <input
                                        className='form-control'
                                        name='cardNumber'
                                        id='cardNumber'
                                        value={cardNumber}
                                        type='text'
                                        placeholder={cardNumberActive ? "Enter card number" : ""}
                                        onChange={this.handleChange}
                                        onFocus={this.handleChange}
                                        onBlur={this.handleDisableField}
                                    />
                                </div>
                                <div className='form-group'>
                                    <label
                                        className={cardTypeActive ? 'floating-label select' : ''}
                                        htmlFor='cardType'
                                    >
                                        Card type
                                    </label>
                                    <select
                                        name='cardType'
                                        id='cardType'
                                        className='form-control'
                                        value={cardType}
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
                                <div className='form-group'>
                                    <label
                                        className={expirationDateActive ? 'floating-label' : ''}
                                        htmlFor='expirationDate'
                                    >
                                        Expiration date
                                    </label>
                                    <input
                                        className='form-control'
                                        name='expirationDate'
                                        value={expirationDate}
                                        id='expirationDate'
                                        type='text'
                                        placeholder={expirationDateActive ? "mm/yy" : ""}
                                        onChange={this.handleChange}
                                        onFocus={this.handleChange}
                                        onBlur={this.handleDisableField}
                                    >
                                    </input>
                                </div>
                                <div className='form-group' style={{ position: 'relative' }}>
                                    <label
                                        className={securityCodeActive ? 'floating-label' : ''}
                                        htmlFor='securityCode'
                                    >
                                        Security code
                                    </label>
                                    <input
                                        className='form-control'
                                        name='securityCode'
                                        id='securityCode'
                                        value={securityCode}
                                        type='text'
                                        placeholder={securityCodeActive ? "Enter security code" : ""}
                                        onChange={this.handleChange}
                                        onFocus={this.handleChange}
                                        onBlur={this.handleDisableField}
                                    >
                                    </input>
                                    <span style={this.styles}></span>
                                </div>
                                <div className='form-group'>
                                    <label
                                        className={billingAddressActive ? 'floating-label' : ''}
                                        htmlFor='billingAddress'
                                    >
                                        Billing Address
                                    </label>
                                    <input
                                        className='form-control'
                                        name='billingAddress'
                                        value={billingAddress}
                                        id='billingAddress'
                                        type='text'
                                        placeholder={billingAddressActive ? "Enter billing address" : ""}
                                        onChange={this.handleChange}
                                        onFocus={this.handleChange}
                                        onBlur={this.handleDisableField}
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
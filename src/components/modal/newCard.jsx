import React, { Component } from 'react';
import Button from '../common/button';
import PaypalFilledIcon from '../../assets/wallet/paypalFilledIcon.svg';
import SecurityCodeLogo from '../../assets/wallet/logosWallet.png';
import sampleCard from '../../assets/wallet/sampleCard.webp';
import './newCard.css';

class NewCard extends Component {
    state = {
        data: [
            { id: "cardNumber", value: "", active: false },
            { id: "cardType", value: "", active: false },
            { id: "expirationDate", value: "", active: false },
            { id: "securityCode", value: "", active: false },
            { id: "billingAddress", value: "", active: false }
        ]
    };

    handleCloseModal = () => {
        this.props.history.goBack();
    };

    handleSubmit = e => {
        e.preventDefault();
        console.log('form submitted');
    };

    // getInputObject = (id) => {
    //     const inputs = [...this.state.data];
    //     const index = inputs.findIndex((input) => input.id === id);
    //     const input = { ...inputs[index] };

    //     return input;
    // };

    handleChange = ({ currentTarget: input }) => {
        console.log(input);
        const inputs = [...this.state.data];
        const index = inputs.findIndex((i) => i.id === input.id);

        inputs[index].value = input.value;
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
        // const { cardNumber, active: cardNumberActive } = this.getInputObject("cardNumber");
        // const { cardType, active: cardTypeActive } = this.getInputObject("cardType");
        // const { expirationDate, active: expirationDateActive } = this.getInputObject("expirationDate");
        // const { securityCode, active: securityCodeActive } = this.getInputObject("securityCode");
        // const { billingAddress, active: billingAddressActive } = this.getInputObject("billingAddress");
        const [cardNumber, cardType, expirationDate, securityCode, billingAddress] = this.state.data;

        console.log(cardNumber);



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
                                        className={cardNumber.active ? 'floating-label' : ''}
                                        htmlFor='cardNumber'
                                    >
                                        Debit or credit card number
                                    </label>
                                    <input
                                        className='form-control'
                                        name='cardNumber'
                                        id='cardNumber'
                                        value={cardNumber.value}
                                        type='text'
                                        placeholder={cardNumber.active ? "Enter card number" : ""}
                                        onChange={this.handleChange}
                                        onFocus={this.handleChange}
                                        onBlur={this.handleDisableField}
                                    />
                                </div>
                                <div className='form-group'>
                                    <label
                                        className={cardType.active ? 'floating-label select' : ''}
                                        htmlFor='cardType'
                                    >
                                        Card type
                                    </label>
                                    <select
                                        name='cardType'
                                        id='cardType'
                                        className='form-control'
                                        value={cardType.value}
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
                                        className={expirationDate.active ? 'floating-label' : ''}
                                        htmlFor='expirationDate'
                                    >
                                        Expiration date
                                    </label>
                                    <input
                                        className='form-control'
                                        name='expirationDate'
                                        value={expirationDate.value}
                                        id='expirationDate'
                                        type='text'
                                        placeholder={expirationDate.active ? "mm/yy" : ""}
                                        onChange={this.handleChange}
                                        onFocus={this.handleChange}
                                        onBlur={this.handleDisableField}
                                    >
                                    </input>
                                </div>
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
                                </div>
                                <div className='form-group'>
                                    <label
                                        className={billingAddress.active ? 'floating-label' : ''}
                                        htmlFor='billingAddress'
                                    >
                                        Billing Address
                                    </label>
                                    <input
                                        className='form-control'
                                        name='billingAddress'
                                        value={billingAddress.value}
                                        id='billingAddress'
                                        type='text'
                                        placeholder={billingAddress.active ? "Enter billing address" : ""}
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
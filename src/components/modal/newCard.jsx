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
        data: [
            { id: "cardNumber", value: "", active: false },
            { id: "cardType", value: "", active: false },
            { id: "expirationDate", value: "", active: false },
            { id: "securityCode", value: "", active: false },
            { id: "billingAddress", value: "", active: false }
        ],
        errors: []
    };

    // schema = Joi.object({
    //     data: Joi.array().items(
    //         Joi.object({
    //             value: Joi.number().required()
    //         })
    //     )
    // });

    // validate = () => {
    //     this.schema.validate(this.state.data);
    // }

    handleCloseModal = () => {
        this.props.history.goBack();
    };

    handleSubmit = e => {
        e.preventDefault();
        console.log('form submitted');
    };

    handleChange = ({ currentTarget: input }) => {
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
        const { data, errors } = this.state;
        const [cardNumber, cardType, expirationDate, securityCode, billingAddress] = data;

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
                                    value={cardNumber.value}
                                    placeholderText='Enter card number'
                                    active={cardNumber.active}
                                    onChange={this.handleChange}
                                    onFocus={this.handleChange}
                                    onBlur={this.handleDisableField}
                                    errors={errors.cardNumber}
                                />
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
                                <Input
                                    name='expirationDate'
                                    label='Expiration date'
                                    value={this.insertDash(expirationDate.value)}
                                    placeholderText='mm/yy'
                                    active={expirationDate.active}
                                    onChange={this.handleChange}
                                    onFocus={this.handleChange}
                                    onBlur={this.handleDisableField}
                                />
                                <Input
                                    name='securityCode'
                                    label='Security code'
                                    value={securityCode.value}
                                    placeholderText='Enter security code'
                                    active={securityCode.active}
                                    onChange={this.handleChange}
                                    onFocus={this.handleChange}
                                    onBlur={this.handleDisableField}
                                />
                                <Input
                                    name='billingAddress'
                                    label='Billing Address'
                                    value={billingAddress.value}
                                    placeholderText='Enter billing address'
                                    active={billingAddress.active}
                                    onChange={this.handleChange}
                                    onFocus={this.handleChange}
                                    onBlur={this.handleDisableField}
                                />
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
import React from 'react';
import Button from '../common/button';
import addCardOrBankIcon from '../../assets/wallet/addCardOrBankIcon.svg';
import '../wallet/noBalance.css';


const NoBalanceContainer = () => {
    return (
        <div className='no-balance container'>
            <img alt='Add Card or Bank' src={addCardOrBankIcon} />
            <div className='row'>
                <h2>You haven’t linked anything yet</h2>
                <p>
                    Join the millions of customers who have linked a
                    card to their PayPal account and use it
                    as a payment method to pay with PayPal
                </p>
                <Button text='Link a card' linkPath='/myaccount/money/cards/new' />
                <hr className='divider'></hr>
            </div>
        </div>
    );
}

export default NoBalanceContainer;
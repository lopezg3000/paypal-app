import React from 'react';
import addCardOrBankIcon from '../../assets/wallet/addCardOrBankIcon.svg';
import '../wallet/noBalance.css';


const NoBalanceContainer = () => {
    return (
        <div className='no-balance container'>
            <img alt='Add Card or Bank' src={addCardOrBankIcon} />
        </div>
    );
}

export default NoBalanceContainer;
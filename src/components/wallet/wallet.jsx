import React from 'react'
import NoBalance from './noBalance';

const Wallet = () => {
    return (
        <section className='no-balance section' style={{ background: '#f5f7fa' }}>
            <NoBalance />
        </section>
    );
}

export default Wallet;
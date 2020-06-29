import React from  'react';
import LoanCard from './LoanCard.js'

import './Homepage.css';

//The main body of our homepage
export default class Homepage extends React.Component {
    state = {
        
    }
    render () {
        return (
            <div className='Homepage'>
                <h1>Welcome!</h1>
                <h2>Select a loan for more details.</h2>
                <LoanCard></LoanCard>
                <LoanCard></LoanCard>
                <LoanCard></LoanCard>
            </div>
        )
    }
}

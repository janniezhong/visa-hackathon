import React from  'react';
import LoanCard from './LoanCard.js'

import './Homepage.css';

//The main body of our homepage
export default class Homepage extends React.Component {
    state = {

    }

    render () {
        const loan_arr = this.props.parentState.loanList.map((obj) => {
            return (<LoanCard key={obj.loanNum} loanID={obj.loanNum} name={obj.name} info={obj.info}
            displayHandler={this.props.displayHandler}></LoanCard>)
        })
        return (
            <div className='Homepage'>
                <h1>Welcome!</h1>
                <h2>Select a loan for more details.</h2>
                {this.props.parentState.name}
                {/* <LoanCard loanID='hi' displayHandler={this.props.displayHandler}></LoanCard>
                <LoanCard></LoanCard>
                <LoanCard></LoanCard> */}
                {loan_arr}

            </div>
        )
    }
}

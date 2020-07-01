import React, { useState } from  'react';
import LoanCard from './LoanCard.js'

import './Homepage.css';
import { Collapse, Button} from 'reactstrap';
import CustomForm from './CustomForm.js';

//The main body of our homepage
export default class Homepage extends React.Component {
    state = {
        showLoans: false
    }

    showCreateHandler = () => {
        this.setState({
            showLoans: !this.state.showLoans
        })
    }
    
    render () {

        const loan_arr = this.props.parentState.loanList.map((obj) => {
            return (<LoanCard key={obj.loanNum} loanID={obj.loanNum} name={obj.name} info={obj.info}
            displayHandler={this.props.displayHandler}></LoanCard>)
        })
        return (
            <div className='Homepage'>
                <h1>Welcome!</h1>
                <div>{""}</div>
                
                <h3 style={{marginTop: "50px"}}>Create a new loan or select an existing loan for full details.</h3>

                <Button color="primary"  onClick={this.showCreateHandler} style={{ marginTop:'40px', marginBottom:'40px' }}>Create New Loan</Button>

                {this.state.showLoans ? 
                <CustomForm></CustomForm>: null}


                {/* <LoanCard loanID='hi' displayHandler={this.props.displayHandler}></LoanCard>
                <LoanCard></LoanCard>
                <LoanCard></LoanCard> */}
                {loan_arr}

            </div>
        )
    }
}


import React from  'react';
import './LoanCard.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'reactstrap';

export default class LoanCard extends React.Component {

    callDisplayHandler = () => {
        this.props.displayHandler(this.props.loanID)
    }



    render () {
        return (
            <div className='LoanCard'>
                <h1 style={{marginBottom:'20px'}}>{this.props.name} </h1>
                <p>Loan ID Number: {this.props.loanID} </p>
                <p>Company Description: {this.props.info}</p>
                
                <Button color="primary" onClick={this.callDisplayHandler}>View</Button>
            </div>
            
        )
    }
}
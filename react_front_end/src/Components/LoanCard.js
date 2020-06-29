import React from  'react';
import './LoanCard.css';

export default class LoanCard extends React.Component {

    callDisplayHandler = () => {
        this.props.displayHandler(this.props.loanID)
    }



    render () {
        return (
            <div className='LoanCard'>
                <p>Card Component </p>
                <p>{this.props.name} </p>
                <p>{this.props.loanID} </p>
                <p>{this.props.info}</p>
                
                <button onClick={this.callDisplayHandler}>View</button>
            </div>
            
        )
    }
}
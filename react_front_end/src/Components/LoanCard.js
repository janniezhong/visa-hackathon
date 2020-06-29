import React from  'react';
import './LoanCard.css';

export default class LoanCard extends React.Component {

    render () {
        return (
            <div className='LoanCard'>
                <p>Card Component</p>
                <button onClick={this.props.displayHandler}>View</button>
            </div>
            
        )
    }
}
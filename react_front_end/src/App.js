import React, { Component } from 'react';
import axios from 'axios';

//Import Components and CSS Files
import './App.css';
import Homepage from './Components/Homepage.js';
import './Components/LoanPage.js'
import LoanPage from './Components/LoanPage.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import visalogo from './visalogo.jpg'

class App extends Component {

  constructor () {
    super()
    this.displayHandler = this.displayHandler.bind(this)
    this.backHandler = this.backHandler.bind(this)
  }

  state = {
    loanList: [],
    loanSelected: false,
    selectedLoanID: '',
    selectedLoan: null
  }

  //Changes state so that the main page now displays full details of selected loanID
  displayHandler = (loanID) => {
    this.setState({
      loanSelected: true,
      selectedLoanID: loanID,
      selectedLoan: null
    })
  } 

  backHandler = () => {
    this.setState({
      loanSelected: false
    })
  }


  componentDidMount () {
    this.setState({
      loanList: [
        {name:'Apple', loanNum:1, info:'Next generation computers, phones, tablets...'},
        {name:'Visa', loanNum:2, info:'Payment processing, transactions and authentications, ...'},
        {name:'Google', loanNum:3, info:'Search engine, mobile devices, ...'}
      ]
    })

    axios.get('http://localhost:8080/rest/get')
        .then(response => {
          console.log("hi there!");
        })
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={visalogo} className="App-logo"/>
        </header>
        

        {!this.state.loanSelected ?
        <Homepage className='Homepage' displayHandler={this.displayHandler} parentState={this.state}></Homepage> :

          <div>
            <LoanPage parentState={this.state} backHandler={this.backHandler}></LoanPage>
          </div>
        }


        

      
      </div>
    );
  }
}

export default App;

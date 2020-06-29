import React, { Component } from 'react';
import logo from './logo.svg';
import axios from 'axios';

//Import Components and CSS Files
import './App.css';
import Homepage from './Components/Homepage.js';
import './Components/LoanPage.js'
import LoanPage from './Components/LoanPage.js';

class App extends Component {

  constructor () {
    super()
    this.displayHandler = this.displayHandler.bind(this)
  }

  state = {
    name: 'Austin',
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




  componentDidMount () {
    this.setState({
      loanList: [
        {name:'Apple', loanNum:10, info:'Macbooks are cool.'},
        {name:'Visa', loanNum:9, info:'Credit cards are cool'},
        {name:'Google', loanNum:20, info:'lol'}
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
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">This is the navbar</h1>
        </header>

        {!this.state.loanSelected ?
        <Homepage className='Homepage' displayHandler={this.displayHandler} parentState={this.state}></Homepage> :

          <div>
            {this.state.selectedLoanID}
            <LoanPage parentState={this.state}></LoanPage>
          </div>
        }

      
      </div>
    );
  }
}

export default App;

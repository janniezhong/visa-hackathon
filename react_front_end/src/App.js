import React, { Component } from 'react';
import logo from './logo.svg';
import axios from 'axios';

//Import Components and CSS Files
import './App.css';
import Homepage from './Components/Homepage.js';
import './Components/Homepage.css'

class App extends Component {

  constructor () {
    super()
    this.displayHandler = this.displayHandler.bind(this)
  }

  state = {
    name: 'Austin',
    loanSelected: false,
    selectedLoan: ''
  }

  displayHandler = () => {
    this.setState({
      loanSelected: true,
      selectedLoan: 'sucess'
    })
  } 




  componentDidMount () {
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


          <div>{this.state.selectedLoan}</div>
        }

      
      </div>
    );
  }
}

export default App;

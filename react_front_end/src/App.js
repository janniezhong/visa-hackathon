import React, { Component } from 'react';
import logo from './logo.svg';
import axios from 'axios';

//Import Components and CSS Files
import './App.css';
import Homepage from './Components/Homepage.js';
import './Components/Homepage.css'

class App extends Component {

  componentDidMount () {
    axios.get('http://localhost:8080/rest/get')
        .then(response => {
          console.log("hi there!");
        })
  }

  state = {
    name: 'Austin',
    pageSelected: false
  }



  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">This is the navbar</h1>
        </header>

        {!this.state.pageSelected ?
        <Homepage className='Homepage'></Homepage> :


          <div>Page not selected</div>
        }

      
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

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
          <div className="App-homepage">
            <h1>Welcome!</h1>
            {this.state.name}
          </div> :


          <div>Page not selected</div>
        }

      
      </div>
    );
  }
}

export default App;

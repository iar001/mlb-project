import React, { Component } from 'react';
import './App.css';
import { player } from './services/api-helper';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  
  componentDidMount = async () => {
    let mlb = await player()
    console.log(mlb)
  }

  render() {
    return (
      <div className="App">
        <h1>test</h1>
      </div>
    );
  }
  
}

export default App;

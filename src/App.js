import React, { Component } from 'react';
import './App.css';
import { player,player2 } from './services/api-helper';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  
  componentDidMount = async () => {
    let mlb = await player()
    let mlb2 = await player2()
    console.log(mlb)
    console.log(mlb2)
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

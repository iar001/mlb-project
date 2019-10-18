import React, { Component } from 'react';
import './App.css';
import { playerID, playerName } from './services/api-helper';
import Header from './components/Header';
import HomePage from './components/HomePage';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playerByID: {},
      playerByName: {}
    }
  }
  
  componentDidMount = async () => {
    let playerByID = await playerID()
    let playerByName = await playerName()
    this.setState({
      playerByID: playerByID,
      playerByName: playerByName
    })
    console.log(playerByID)
    console.log(playerByName)
  }

  render() {
  
      return (
        <div className="App">
          <Header />
          <HomePage playerByID={this.state.playerByID}
            playerByName={this.state.playerByName}
          />
        </div>
      )
    
  }
  
}

export default App;

import React, { Component } from 'react';
import './App.css';
import { playerID, playerName, playerIDVariable } from './services/api-helper';
import Header from './components/Header';
import HomePage from './components/HomePage';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playerByID: {},
      playerByName: {},
      ID: ""
    }
  }
  
  componentDidMount = async () => {
    let playerByID = await playerID()
    let playerByName = await playerName()
    let ID = await playerIDVariable(playerByName.player_id)
    this.setState({
      playerByID: playerByID,
      playerByName: playerByName,
      ID: ID
    })
    console.log(playerByID)
    console.log(playerByName)
    console.log(ID)
  }

  render() {
  
      return (
        <div className="App">
          <Header />
          <HomePage playerByID={this.state.playerByID}
            playerByName={this.state.playerByName}
            ID={this.state.ID}
          />
        </div>
      )
    
  }
  
}

export default App;

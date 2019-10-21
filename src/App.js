import React, { Component } from 'react';
import './App.css';
import { playerID, playerName, playerIDVariable, playerNameVariable } from './services/api-helper';
import Header from './components/Header';
import HomePage from './components/HomePage';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ID: "",
      playerStats: "",
      name: "",
      playerStatsNameIDInfo: "",
      judge: "aaron_judge",
    }
  }
  
  handleChange = (e) => {
    this.setState({
      ID: e.target.value
    })
    console.log(this.state.ID)
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    const playerStats = await playerIDVariable(this.state.ID)
    this.setState({
      playerStats: playerStats
    })
    console.log(playerStats)
  }

  handleChange1 = (e) => {
    this.setState({
      name: e.target.value
    })
    console.log(this.state.name)
  }

  handleSubmit1 = async (e) => {
    e.preventDefault();
    const playerStatsName = await playerNameVariable(this.state.name)
    const playerStatsNameID = playerStatsName.player_id
    const playerStatsNameIDInfo = await playerIDVariable(playerStatsNameID)
    this.setState({
      playerStatsNameIDInfo: playerStatsNameIDInfo
    })
    console.log(this.state.playerStatsNameIDInfo)
  }

  render() {
  
      return (
        <div className="App">
          <Header />
          <HomePage 
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
            playerStats={this.state.playerStats}
            handleChange1={this.handleChange1}
            handleSubmit1={this.handleSubmit1}
            playerStatsNameIDInfo={this.state.playerStatsNameIDInfo}
          />
        </div>
      )
    
  }
  
}

export default App;

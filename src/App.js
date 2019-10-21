import React, { Component } from 'react';
import './App.css';
import { playerID, playerName, playerIDVariable, playerNameVariable } from './services/api-helper';
import Header from './components/Header';
import HomePage from './components/HomePage';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playerByID: {},
      playerByName: {},
      ID: "",
      value: "",
      playerStats: "",
      name: ""
    }
  }
  
  componentDidMount = async () => {
    let playerByID = await playerID()
    let playerByName = await playerName()
    this.setState({
      playerByID: playerByID,
      playerByName: playerByName,
    })
    console.log(playerByID)
    console.log(playerByName)
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

  render() {
  
      return (
        <div className="App">
          <Header />
          <HomePage playerByID={this.state.playerByID}
            playerByName={this.state.playerByName}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
            playerStats={this.state.playerStats}
          />
        </div>
      )
    
  }
  
}

export default App;

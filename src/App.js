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
      ID: "",
      formData: {
        ID1: ""
      },
      judge: 493316,
      playerStats: ""
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

  handleChange = (e) => {
    let name = e.target.name
    let judge = e.target.value
    this.setState(prevState => ({
      formData: {
        ...prevState.formData,
        name: judge
      }
    }))
    // console.log(myvalue)
    console.log(this.state.judge)
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    const playerStats = await playerIDVariable(this.state.judge)
    this.setState({
      playerStats: playerStats
    })
    // console.log(playerStats)
    // console.log(this.state.judge)
  }

  render() {
  
      return (
        <div className="App">
          <Header />
          <HomePage playerByID={this.state.playerByID}
            playerByName={this.state.playerByName}
            ID={this.state.ID}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
            playerStats={this.state.playerStats}
          />
        </div>
      )
    
  }
  
}

export default App;

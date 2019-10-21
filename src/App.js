import React, { Component } from 'react';
import './App.css';
import { playerIDVariable, playerNameVariable, pitcherNameVariable, pitcherIDVariable } from './services/api-helper';
import Header from './components/Header';
import Footer from './components/Footer'
import HomePage from './components/HomePage';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ID: "",
      name: "",
      playerStatsName: "",
      playerStatsNameIDInfo: "",
      pitcherName: "",
      pitcherStatsNameIDInfo: "",
      // judge: "aaron_judge",
    }
  }
  
  handleChange = (e) => {
    this.setState({
      ID: e.target.value
    })
    // console.log(this.state.ID)
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    const playerStats = await playerIDVariable(this.state.ID)
    this.setState({
      playerStats
    })
    // console.log(playerStats)
  }

  handleChange1 = (e) => {
    this.setState({
      name: e.target.value
    })
    // console.log(this.state.name)
  }

  handleSubmit1 = async (e) => {
    e.preventDefault();
    const playerStatsName = await playerNameVariable(this.state.name)
    const playerStatsNameID = playerStatsName.player_id
    const playerStatsNameIDInfo = await playerIDVariable(playerStatsNameID)
    this.setState({
      playerStatsName,
      playerStatsNameIDInfo
    })
    // console.log(this.state.playerStatsNameIDInfo)
  }

  handleChangePitcher = (e) => {
    this.setState({
      pitcherName: e.target.value
    })
    // console.log(this.state.pitcherName)
  }

  handleSubmitPitcher = async (e) => {
    e.preventDefault();
    const pitcherName = await pitcherNameVariable(this.state.pitcherName)
    const pitcherStatsNameID = pitcherName.player_id
    const pitcherStatsNameIDInfo = await pitcherIDVariable(pitcherStatsNameID)
    this.setState({
      pitcherName,
      pitcherStatsNameIDInfo
    })
    // console.log(pitcherName)
    // console.log(this.state.pitcherStatsNameIDInfo)

    
  }

  render() {
  
      return (
        <div className="app">
          <Header />
          <HomePage 
            handleChange1={this.handleChange1}
            handleSubmit1={this.handleSubmit1}
            playerStatsName={this.state.playerStatsName}
            playerStatsNameIDInfo={this.state.playerStatsNameIDInfo}
            handleChangePitcher={this.handleChangePitcher}
            handleSubmitPitcher={this.handleSubmitPitcher}
            pitcherName={this.state.pitcherName}
            pitcherStatsNameIDInfo={this.state.pitcherStatsNameIDInfo}
          />
          <Footer />
        </div>
      )
    
  }
  
}

export default App;

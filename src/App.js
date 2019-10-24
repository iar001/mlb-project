import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import { playerIDVariable, playerNameVariable, pitcherNameVariable, pitcherIDVariable, historicalPlayerID, historicalPlayerName, historicalPitcherID, historicalPitcherName } from './services/api-helper';
import Header from './components/Header';
import Footer from './components/Footer'
import Players from './components/Players';
import HomePage from './components/HomePage';
import Pitchers from './components/Pitchers';
import HistoricalPlayers from './components/HistoricalPlayers';
import HistoricalPitchers from './components/HistoricalPitchers';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      playerStatsName: "",
      playerStatsNameIDInfo: "",
      name2: "",
      playerStatsName2: "",
      playerStatsNameIDInfo2: "",
      pName: "",
      pitcherName: "",
      pitcherStatsNameIDInfo: "",
      pitcherName2: "",
      pitcherStatsNameIDInfo2: "",
      historicalName: "",
      historicalNamePlayerIDInfo: "",
      historicalName2: "",
      historicalNamePlayerIDInfo2: "",
      historicalPitcher: "",
      historicalPitcherIDInfo: "",
      historicalPitcher2: "",
      historicalPitcherIDInfo2: "",
    }
  }

  handleChange1 = (e) => {
    debugger
    this.setState({
      name: e.target.value
    })
  }
  handleSubmit1 = async (playerName) => {
    const playerStatsName = await playerNameVariable(playerName)
    const playerStatsNameIDInfo = await playerIDVariable(playerStatsName.player_id)
    this.setState({
      playerStatsName,
      playerStatsNameIDInfo
    })
  }

  handleChange2 = (e) => {
    this.setState({
      name2: e.target.value
    })
  }
  handleSubmit2 = async (playerName) => {
    const playerStatsName2 = await playerNameVariable(playerName)
    const playerStatsNameIDInfo2 = await playerIDVariable(playerStatsName2.player_id)
    this.setState({
      playerStatsName2,
      playerStatsNameIDInfo2
    })
  }

  handleChangePitcher = (e) => {
    this.setState({
      pName: e.target.value
    })
  }
  handleSubmitPitcher = async (playerName) => {
    const pitcherName = await pitcherNameVariable(playerName)
    const pitcherStatsNameIDInfo = await pitcherIDVariable(pitcherName.player_id)
    this.setState({
      pitcherName,
      pitcherStatsNameIDInfo
    })
  }

  handleChangePitcher2 = (e) => {
    this.setState({
      pitcherName2: e.target.value
    })
  }
  handleSubmitPitcher2 = async (playerName) => {
    const pitcherName2 = await pitcherNameVariable(playerName)
    const pitcherStatsNameIDInfo2 = await pitcherIDVariable(pitcherName2.player_id)
    this.setState({
      pitcherName2,
      pitcherStatsNameIDInfo2
    })
  }

  handleChangeHistory = (e) => {
    this.setState({
      historicalName: e.target.value
    })
  }
  handleSubmitHistory = async (playerName) => {
    const historicalName = await historicalPlayerName(playerName)
    const historicalNamePlayerIDInfo = await historicalPlayerID(historicalName.player_id)
    this.setState({
      historicalName,
      historicalNamePlayerIDInfo
    })
  }

  handleChangeHistory2 = (e) => {
    this.setState({
      historicalName2: e.target.value
    })
  }
  handleSubmitHistory2 = async (playerName) => {
    const historicalName2 = await historicalPlayerName(playerName)
    const historicalNamePlayerIDInfo2 = await historicalPlayerID(historicalName2.player_id)
    this.setState({
      historicalName2,
      historicalNamePlayerIDInfo2
    })
  }

  handleChangePitcherHistory = (e) => {
    this.setState({
      historicalPitcher: e.target.value
    })
  }
  handleSubmitPitcherHistory = async (playerName) => {
    const historicalPitcher = await historicalPitcherName(playerName)
    const historicalPitcherIDInfo = await historicalPitcherID(historicalPitcher.player_id)
    this.setState({
      historicalPitcher,
      historicalPitcherIDInfo
    })
  }

  handleChangePitcherHistory2 = (e) => {
    this.setState({
      historicalPitcher2: e.target.value
    })
  }
  handleSubmitPitcherHistory2 = async (playerName) => {
    const historicalPitcher2 = await historicalPitcherName(playerName)
    const historicalPitcherIDInfo2 = await historicalPitcherID(historicalPitcher2.player_id)
    this.setState({
      historicalPitcher2,
      historicalPitcherIDInfo2
    })
  }

  render() {
    return (
      <div className="app">
        <Header
        />
        <Route exact path="/" component={HomePage}
        />
        <Route exact path="/hitters" render={() => (
          <Players
            handleChange1={this.handleChange1}
            handleSubmit1={this.handleSubmit1}
            playerStatsName={this.state.playerStatsName}
            playerStatsNameIDInfo={this.state.playerStatsNameIDInfo}
            handleChange2={this.handleChange2}
            handleSubmit2={this.handleSubmit2}
            playerStatsName2={this.state.playerStatsName2}
            playerStatsNameIDInfo2={this.state.playerStatsNameIDInfo2}
          />
        )}
        />
        <Route exact path="/pitchers" render={() => (
          <Pitchers
            handleChangePitcher={this.handleChangePitcher}
            handleSubmitPitcher={this.handleSubmitPitcher}
            pitcherName={this.state.pitcherName}
            pitcherStatsNameIDInfo={this.state.pitcherStatsNameIDInfo}
            handleChangePitcher2={this.handleChangePitcher2}
            handleSubmitPitcher2={this.handleSubmitPitcher2}
            pitcherName2={this.state.pitcherName2}
            pitcherStatsNameIDInfo2={this.state.pitcherStatsNameIDInfo2}
          />
        )}
        />
        <Route exact path="/historicalhitters" render={() => (
          <HistoricalPlayers
            handleChangeHistory={this.handleChangeHistory}
            handleSubmitHistory={this.handleSubmitHistory}
            historicalName={this.state.historicalName}
            historicalNamePlayerIDInfo={this.state.historicalNamePlayerIDInfo}
            handleChangeHistory2={this.handleChangeHistory2}
            handleSubmitHistory2={this.handleSubmitHistory2}
            historicalName2={this.state.historicalName2}
            historicalNamePlayerIDInfo2={this.state.historicalNamePlayerIDInfo2}
          />
        )}
        />
        <Route exact path="/historicalpitchers" render={() => (
          <HistoricalPitchers
            handleChangePitcherHistory={this.handleChangePitcherHistory}
            handleSubmitPitcherHistory={this.handleSubmitPitcherHistory}
            historicalPitcher={this.state.historicalPitcher}
            historicalPitcherIDInfo={this.state.historicalPitcherIDInfo}
            handleChangePitcherHistory2={this.handleChangePitcherHistory2}
            handleSubmitPitcherHistory2={this.handleSubmitPitcherHistory2}
            historicalPitcher2={this.state.historicalPitcher2}
            historicalPitcherIDInfo2={this.state.historicalPitcherIDInfo2}
          />
        )}
        />
        <Footer
        />
      </div>
    )
  }
}

export default App;
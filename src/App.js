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
import Dropdown from './components/Dropdown';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ID: "",
      name: "",
      playerStatsName: "",
      playerStatsNameIDInfo: "",
      name2: "",
      playerStatsName2: "",
      playerStatsNameIDInfo2: "",
      pitcherName: "",
      pitcherStatsNameIDInfo: "",
      pitcherName2: "",
      pitcherStatsNameIDInfo2: "",
      historicalName: "",
      historicalNamePlayerID: "",
      historicalNamePlayerIDInfo: "",
      historicalName2: "",
      historicalNamePlayerID2: "",
      historicalNamePlayerIDInfo2: "",
      historicalPitcher: "",
      historicalPitcherID: "",
      historicalPitcherIDInfo: "",
      historicalPitcher2: "",
      historicalPitcherID2: "",
      historicalPitcherIDInfo2: "",
    }
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

  handleChange2 = (e) => {
    this.setState({
      name2: e.target.value
    })
    // console.log(this.state.ID)
  }
  handleSubmit2 = async (e) => {
    e.preventDefault();
    const playerStatsName2 = await playerNameVariable(this.state.name2)
    const playerStatsNameID2 = playerStatsName2.player_id
    const playerStatsNameIDInfo2 = await playerIDVariable(playerStatsNameID2)
    this.setState({
      playerStatsName2,
      playerStatsNameIDInfo2
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

  handleChangePitcher2 = (e) => {
    this.setState({
      pitcherName2: e.target.value
    })
    // console.log(this.state.pitcherName)
  }
  handleSubmitPitcher2 = async (e) => {
    e.preventDefault();
    const pitcherName2 = await pitcherNameVariable(this.state.pitcherName2)
    const pitcherStatsNameID2 = pitcherName2.player_id
    const pitcherStatsNameIDInfo2 = await pitcherIDVariable(pitcherStatsNameID2)
    this.setState({
      pitcherName2,
      pitcherStatsNameIDInfo2
    })
    // console.log(pitcherName)
    // console.log(this.state.pitcherStatsNameIDInfo)
  }

  handleChangeHistory = (e) => {
    this.setState({
      historicalName: e.target.value
    })
    // console.log(this.state.historicalName)
  }
  handleSubmitHistory = async (e) => {
    e.preventDefault();
    const historicalName = await historicalPlayerName(this.state.historicalName)
    const historicalNamePlayerID = historicalName.player_id
    const historicalNamePlayerIDInfo = await historicalPlayerID(historicalNamePlayerID)
    this.setState({
      historicalName,
      historicalNamePlayerIDInfo
    })
    // console.log(historicalNamePlayerIDInfo)    
  }

  handleChangeHistory2 = (e) => {
    this.setState({
      historicalName2: e.target.value
    })
    // console.log(this.state.historicalName2)
  }
  handleSubmitHistory2 = async (e) => {
    e.preventDefault();
    const historicalName2 = await historicalPlayerName(this.state.historicalName2)
    const historicalNamePlayerID2 = historicalName2.player_id
    const historicalNamePlayerIDInfo2 = await historicalPlayerID(historicalNamePlayerID2)
    this.setState({
      historicalName2,
      historicalNamePlayerIDInfo2
    })
    // console.log(historicalNamePlayerIDInfo2)    
  }

  handleChangePitcherHistory = (e) => {
    this.setState({
      historicalPitcher: e.target.value
    })
  }
  handleSubmitPitcherHistory = async (e) => {
    e.preventDefault();
    const historicalPitcher = await historicalPitcherName(this.state.historicalPitcher)
    const historicalPitcherID1 = historicalPitcher.player_id
    const historicalPitcherIDInfo = await historicalPitcherID(historicalPitcherID1)
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
  handleSubmitPitcherHistory2 = async (e) => {
    e.preventDefault();
    const historicalPitcher2 = await historicalPitcherName(this.state.historicalPitcher2)
    const historicalPitcherID2 = historicalPitcher2.player_id
    const historicalPitcherIDInfo2 = await historicalPitcherID(historicalPitcherID2)
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
        <Route exact path="/dropdown" render={() => (
          <Dropdown
            options={[
            "Papaya",
            "Persimmon",
            "Paw Paw",
            "Prickly Pear",
            "Peach",
            "Pomegranate",
            "Pineapple"
          ]}
          />
        )}
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

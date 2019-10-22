import React from 'react';
import { Link } from 'react-router-dom';

export default function HistoricalPitchers(props) {
  return (
    <div className="historical-pitchers">

      <div>
        <form id="pitcher-form-name" onSubmit={props.handleSubmitPitcherHistory}>
          <input id="input" type="text" onChange={props.handleChangePitcherHistory} placeholder="Enter a Historical Pitcher" />
          <h1>Pitcher</h1>
          <h3>Name: {props.historicalPitcher.name_display_first_last}</h3>
          <h3>Wins: {props.historicalPitcherIDInfo.w}</h3>
          <h3>ERA: {props.historicalPitcherIDInfo.era}</h3>
          <h3>WHIP: {props.historicalPitcherIDInfo.whip}</h3>
          <h3>K per 9: {props.historicalPitcherIDInfo.k9}</h3>
          <h3>Saves: {props.historicalPitcherIDInfo.sv}</h3>
          <h3>Player ID: {props.historicalPitcherIDInfo.player_id}</h3>
        </form>
      </div>

      <div>
        <form id="pitcher-form-name" onSubmit={props.handleSubmitPitcherHistory2}>
          <input id="input" type="text" onChange={props.handleChangePitcherHistory2} placeholder="Enter a Historical Pitcher" />
          <h1>Pitcher</h1>
          <h3>Name: {props.historicalPitcher2.name_display_first_last}</h3>
          <h3>Wins: {props.historicalPitcherIDInfo2.w}</h3>
          <h3>ERA: {props.historicalPitcherIDInfo2.era}</h3>
          <h3>WHIP: {props.historicalPitcherIDInfo2.whip}</h3>
          <h3>K per 9: {props.historicalPitcherIDInfo2.k9}</h3>
          <h3>Saves: {props.historicalPitcherIDInfo2.sv}</h3>
          <h3>Player ID: {props.historicalPitcherIDInfo2.player_id}</h3>
        </form>
      </div>
    </div>

  )
}
import React from 'react';
import Dropdown from '../components/Dropdown';


export default function HistoricalPitchers(props) {
  return (
    <div className="historical-pitchers">

      <div>
        <Dropdown
          type="text"
          handleSubmit1={props.handleSubmitPitcherHistory}
          options={[
            "Cy Young",
            "Sandy Koufax",
            "Steve Carlton",
            "Roger Clemens",
            "Mariano Rivera",
            "Trevor Hoffman",
            "Ron Guidry",
            "Andy Pettite"
          ]}
          onChange1={props.handleChangePitcherHistory}
          placeholder="Enter a Historical Batter"
        />
        <h1>Pitcher</h1>
        <h3>Name: {props.historicalPitcher.name_display_first_last}</h3>
        <h3>Wins: {props.historicalPitcherIDInfo.w}</h3>
        <h3>ERA: {props.historicalPitcherIDInfo.era}</h3>
        <h3>WHIP: {props.historicalPitcherIDInfo.whip}</h3>
        <h3>K per 9: {props.historicalPitcherIDInfo.k9}</h3>
        <h3>Saves: {props.historicalPitcherIDInfo.sv}</h3>
      </div>

      <div>
        <Dropdown
          type="text"
          handleSubmit1={props.handleSubmitPitcherHistory2}
          options={[
            "Cy Young",
            "Sandy Koufax",
            "Steve Carlton",
            "Roger Clemens",
            "Mariano Rivera",
            "Trevor Hoffman",
            "Ron Guidry"
          ]}
          onChange1={props.handleChangePitcherHistory2}
          placeholder="Enter a Historical Batter"
        />
        <h1>Pitcher</h1>
        <h3>Name: {props.historicalPitcher2.name_display_first_last}</h3>
        <h3>Wins: {props.historicalPitcherIDInfo2.w}</h3>
        <h3>ERA: {props.historicalPitcherIDInfo2.era}</h3>
        <h3>WHIP: {props.historicalPitcherIDInfo2.whip}</h3>
        <h3>K per 9: {props.historicalPitcherIDInfo2.k9}</h3>
        <h3>Saves: {props.historicalPitcherIDInfo2.sv}</h3>
      </div>
    </div>

  )
}
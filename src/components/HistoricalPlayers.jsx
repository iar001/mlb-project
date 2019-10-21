import React from 'react';
import { Link } from 'react-router-dom';


export default function HistoricalPlayers(props) {
  return (
    <div className="historical-batters">

      <div className="historical-batter-name">
        <form id="batter-form-name" onSubmit={props.handleSubmitHistory}>
          <input id="input" type="text" onChange={props.handleChangeHistory} placeholder="Enter a Historical Batter"/>
          <h1>Batter</h1>   
          <h3>Name: {props.historicalName.name_display_first_last}</h3>
          <h3>Average: {props.historicalNamePlayerIDInfo.avg}</h3>
          <h3>Home Runs: {props.historicalNamePlayerIDInfo.hr}</h3>
          <h3>Runs Batted In: {props.historicalNamePlayerIDInfo.rbi}</h3>
          <h3>Slugging Percentage: {props.historicalNamePlayerIDInfo.slg}</h3>
          <h3>On Base Percentage: {props.historicalNamePlayerIDInfo.obp}</h3>
          <h3>Player ID: {props.historicalNamePlayerIDInfo.player_id}</h3>
        </form>
      </div>

      <div className="historical-batter-name">
        <form id="batter-form-name" onSubmit={props.handleSubmitHistory2}>
          <input id="input" type="text" onChange={props.handleChangeHistory2} placeholder="Enter a Historical Batter"/>
          <h1>Batter</h1>   
          <h3>Name: {props.historicalName2.name_display_first_last}</h3>
          <h3>Average: {props.historicalNamePlayerIDInfo2.avg}</h3>
          <h3>Home Runs: {props.historicalNamePlayerIDInfo2.hr}</h3>
          <h3>Runs Batted In: {props.historicalNamePlayerIDInfo2.rbi}</h3>
          <h3>Slugging Percentage: {props.historicalNamePlayerIDInfo2.slg}</h3>
          <h3>On Base Percentage: {props.historicalNamePlayerIDInfo2.obp}</h3>
          <h3>Player ID: {props.historicalNamePlayerIDInfo2.player_id}</h3>
        </form>
      </div>
    </div>
  )
}


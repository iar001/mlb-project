import React from 'react';
import { Link } from 'react-router-dom';

export default function Players(props) {
  return (
    <div className="players">

      <div className="batter-name">
        <form id="batter-form-name" onSubmit={props.handleSubmit1}>
          <input id="input" type="text" onChange={props.handleChange1} placeholder="Type a Batter Name" />
          <h1>Batter</h1>   
          <h3>Name: {props.playerStatsName.name_display_first_last}</h3>
          <h3>Average: {props.playerStatsNameIDInfo.avg}</h3>
          <h3>Home Runs: {props.playerStatsNameIDInfo.hr}</h3>
          <h3>Runs Batted In: {props.playerStatsNameIDInfo.rbi}</h3>
          <h3>Slugging Percentage: {props.playerStatsNameIDInfo.slg}</h3>
          <h3>On Base Percentage: {props.playerStatsNameIDInfo.obp}</h3>
          <h3>Player ID: {props.playerStatsNameIDInfo.player_id}</h3>
        </form>
      </div>

      <div className="pitcher-name">
        <form id="pitcher-form-name" onSubmit={props.handleSubmitPitcher}>
          <input id="input" type="text" onChange={props.handleChangePitcher} placeholder="Type a Pitcher" />
          <h1>Pitcher</h1>
          <h3>Name: {props.pitcherName.name_display_first_last}</h3>
          <h3>Wins: {props.pitcherStatsNameIDInfo.w}</h3>
          <h3>ERA: {props.pitcherStatsNameIDInfo.era}</h3>
          <h3>WHIP: {props.pitcherStatsNameIDInfo.whip}</h3>
          <h3>K per 9: {props.pitcherStatsNameIDInfo.k9}</h3>
          <h3>Saves: {props.pitcherStatsNameIDInfo.sv}</h3>
          <h3>Player ID: {props.pitcherStatsNameIDInfo.player_id}</h3> 
        </form>
      </div>

    </div>
  )
  
}


import React from 'react';
// import { Link } from 'react-router-dom';

export default function Players(props) {
  return (
    <div className="players">

      <div className="batter-name">
        <form id="batter-form-name" onSubmit={props.handleSubmit1}>
          <input id="input" type="text" onChange={props.handleChange1} placeholder="Enter a Current Batter" />
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

      <div className="batter-name-2">
        <form id="batter-form-name-2" onSubmit={props.handleSubmit2}>
          <input id="input" type="text" onChange={props.handleChange2} placeholder="Enter Another Batter" />
          <h1>Batter</h1>   
          <h3>Name: {props.playerStatsName2.name_display_first_last}</h3>
          <h3>Average: {props.playerStatsNameIDInfo2.avg}</h3>
          <h3>Home Runs: {props.playerStatsNameIDInfo2.hr}</h3>
          <h3>Runs Batted In: {props.playerStatsNameIDInfo2.rbi}</h3>
          <h3>Slugging Percentage: {props.playerStatsNameIDInfo2.slg}</h3>
          <h3>On Base Percentage: {props.playerStatsNameIDInfo2.obp}</h3>
          <h3>Player ID: {props.playerStatsNameIDInfo2.player_id}</h3>
        </form>
      </div>

    </div>
  )
  
}


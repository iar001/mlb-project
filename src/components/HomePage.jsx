import React from 'react';



export default function HomePage(props) {
  return (
    <div className="homepage">
      <form id="player-form-name" onSubmit={props.handleSubmit1}>
      <input id="input" type="text" onChange={props.handleChange1} placeholder="Type a Player Name" />
        <h1>Player Name</h1>
        <h3>Average: {props.playerStatsNameIDInfo.avg}</h3>
        <h3>Home Runs: {props.playerStatsNameIDInfo.hr}</h3>
        <h3>Runs Batted In: {props.playerStatsNameIDInfo.rbi}</h3>
        <h3>Homers: {props.playerStatsNameIDInfo.player_id}</h3>
      </form>

      <div className="playerID">
        <form id="player-form-id" onSubmit={props.handleSubmit}>
          <input id="input" type="text" onChange={props.handleChange} placeholder="Type a Player ID" />
          <h1>Player ID</h1>
          <h3>Average: {props.playerStats.avg}</h3>
          <h3>Home Runs: {props.playerStats.hr}</h3>
          <h3>RBI: {props.playerStats.rbi}</h3>
          <h3>Player ID: {props.playerStats.player_id}</h3>
        </form>
        
      </div>
    </div>
  )
  
}


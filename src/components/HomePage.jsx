import React from 'react';



export default function HomePage(props) {
  return (
    <div className="homepage">
      <div id="playerID">
        <h1>Player ID</h1>
        <h3>Average: {props.playerByID.avg}</h3>
        <h3>Home Runs: {props.playerByID.hr}</h3>
        <h3>Runs Batted In: {props.playerByID.rbi}</h3>
      </div>

      <div className="playerName">
        <form id="player-form" onSubmit={props.handleSubmit}>
          <input id="input" type="text" name="ID1" onChange={props.handleChange} placeholder="Type a Player" />
          <h1>Player Stats</h1>
          <h3>Average: {props.playerStats.avg}</h3>
          <h3>Home Runs: {props.playerStats.hr}</h3>
          <h3>RBI: {props.playerStats.rbi}</h3>
          <h3>Home Runs: {props.playerStats.player_id}</h3>
        </form>
        
      </div>
    </div>
  )
  
}


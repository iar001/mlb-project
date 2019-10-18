import React from 'react';



export default function HomePage(props) {
  return (
    <div className="homepage">
      <div id="playerID">
        <h1>This is the HomePage</h1>
        <h3>Average: {props.playerByID.avg}</h3>
        <h3>Home Runs: {props.playerByID.hr}</h3>
        <h3>Runs Batted In: {props.playerByID.rbi}</h3>
      </div>

      <div id="playerName">
        <h1>This is the HomePage</h1>
        <h3>First Name: {props.playerByName.name_first}</h3>
        <h3>Last Name: {props.playerByName.name_last}</h3>
        <h3>Player ID: {props.playerByName.player_id}</h3>
      </div>
    </div>
  )
  
}


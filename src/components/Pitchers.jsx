import React from 'react';
// import { Link } from 'react-router-dom';
import Dropdown from '../components/Dropdown';



export default function Pitchers(props) {
  return (
    <div className="pitchers">
      <div>
        {/* <form id="pitcher-form-name" onSubmit={props.handleSubmitPitcher}> */}
        <Dropdown
          type="text"
          handleSubmit1={props.handleSubmitPitcher}
          options={[
            "Justin Verlander",
            "Sonny Gray",
            "Jacob deGrom",
            "Zach Wheeler",
            "Max Scherzer",
            "Clayton Kershaw",
            "Dakota Hudson"
          ]}
          onChange1={props.handleChangePitcher}
          placeholder="Enter a Current Pitcher"
        />
        <h1>Pitcher</h1>
        <h3>Name: {props.pitcherName.name_display_first_last}</h3>
        <h3>Wins: {props.pitcherStatsNameIDInfo.w}</h3>
        <h3>ERA: {props.pitcherStatsNameIDInfo.era}</h3>
        <h3>WHIP: {props.pitcherStatsNameIDInfo.whip}</h3>
        <h3>K per 9: {props.pitcherStatsNameIDInfo.k9}</h3>
        <h3>Saves: {props.pitcherStatsNameIDInfo.sv}</h3>
        {/* </form> */}
      </div>

      <div>
        {/* <form id="pitcher-form-name2" onSubmit={props.handleSubmitPitcher2}> */}
        <Dropdown
          type="text"
          handleSubmit1={props.handleSubmitPitcher2}
          options={[
            "Justin Verlander",
            "Sonny Gray",
            "Jacob deGrom",
            "Zach Wheeler",
            "Max Scherzer",
            "Clayton Kershaw",
            "Dakota Hudson"
          ]}
          onChange1={props.handleChangePitcher2}
          placeholder="Enter a Current Pitcher"
        />
        <h1>Pitcher</h1>
        <h3>Name: {props.pitcherName2.name_display_first_last}</h3>
        <h3>Wins: {props.pitcherStatsNameIDInfo2.w}</h3>
        <h3>ERA: {props.pitcherStatsNameIDInfo2.era}</h3>
        <h3>WHIP: {props.pitcherStatsNameIDInfo2.whip}</h3>
        <h3>K per 9: {props.pitcherStatsNameIDInfo2.k9}</h3>
        <h3>Saves: {props.pitcherStatsNameIDInfo2.sv}</h3>
        {/* </form> */}
      </div>

    </div>

  )


}
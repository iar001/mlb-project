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
            'Mariano Rivera',
            'Pedro Martinez',
            'Jim Devlin',
            'Jacob deGrom',
            'Lefty Grove',
            'Walter Johnson',
            'Hoyt Wilhelm',
            'Dan Quisenberry',
            'Smoky Joe Wood',
            'Roger Clemens',
            'Brandon Webb',
            'Trevor Hoffman',
            'Kid Nichols',
            'Mordecai Brown',
            'John Franco',
            'Cy Young',
            'Christy Mathewson',
            'Johan Santana',
            'Bruce Sutter',
            'Pete Alexander',
            'Randy Johnson',
            'Rube Waddell',
            'John Hiller',
            'Harry Brecheen ',
            'John Clarkson',
            'Whitey Ford',
            'Spud Chandler',
            'Noodles Hahn',
            'Greg Maddux',
            'Lee Smith',
            'Al Spalding',
            'Dizzy Dean',
            'Roy Halladay',
            'Roberto Hernandez',
            'Sandy Koufax',
            'Carl Hubbell',
            'Hal Newhouser',
            'Doug Jones',
            'Sparky Lyle',
            'Jack Pfiester',
            'Kevin Brown',
            'Stan Coveleski',
            'Nig Cuppy',
            'Bob Gibson',
            'Sal Maglie',
            'Roy Oswalt',
            'Curt Schilling',
            'Tom Seaver',
            'Tommy Bridges',
            'Rich Gossage',
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
            'Mariano Rivera',
            'Pedro Martinez',
            'Jim Devlin',
            'Jacob deGrom',
            'Lefty Grove',
            'Walter Johnson',
            'Hoyt Wilhelm',
            'Dan Quisenberry',
            'Smoky Joe Wood',
            'Roger Clemens',
            'Brandon Webb',
            'Trevor Hoffman',
            'Kid Nichols',
            'Chris Sale ',
            'Mordecai Brown',
            'John Franco',
            'Cy Young',
            'Christy Mathewson',
            'Johan Santana',
            'Bruce Sutter',
            'Pete Alexander',
            'Randy Johnson',
            'Rube Waddell',
            'John Hiller',
            'Harry Brecheen ',
            'John Clarkson',
            'Whitey Ford',
            'Spud Chandler',
            'Noodles Hahn',
            'Greg Maddux',
            'Lee Smith',
            'Al Spalding',
            'Dizzy Dean',
            'Roy Halladay',
            'Roberto Hernandez',
            'Sandy Koufax',
            'Carl Hubbell',
            'Hal Newhouser',
            'Doug Jones',
            'Sparky Lyle',
            'Jack Pfiester',
            'Kevin Brown',
            'Stan Coveleski',
            'Nig Cuppy',
            'Bob Gibson',
            'Sal Maglie',
            'Roy Oswalt',
            'Curt Schilling',
            'Tom Seaver',
            'Tommy Bridges',
            'Rich Gossage',
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
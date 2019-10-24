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
            'Gerrit Cole',
            'Justin Verlander',
            'Shane Bieber',
            'Jacob DeGrom',
            'Trevor Bauer',
            'Stephen Strasburg',
            'Lance Lynn',
            'Max Scherzer',
            'Charlie Morton',
            'Patrick Corbin',
            'Matthew Boyd',
            'Robbie Ray',
            'Jack Flaherty',
            'Aaron Nola',
            'Yu Darvish',
            'Lucas Giolito',
            'Luis Castillo',
            'Chris Sale',
            'Walker Buehler',
            'Eduardo Rodriguez',
            'Sonny Gray',
            'Madison Bumgarner',
            'Noah Syndergaard',
            'Mike Minor',
            'Jose Berrios',
            'Zack Wheeler',
            'Clayton Kershaw',
            'Zack Greinke',
            'James Paxton',
            'Jake Odorizzi',
            'German Marquez',
            'Max Fried',
            'Mike  levinger',
            'Reynaldo Lopez',
            'Kenta Maeda',
            'Caleb Smith',
            'Anthony DeSclafani',
            'Jon Lester',
            'Jakob  unis',
            'Hyun-Jin Ryu',
            'Julio Teheran',
            'Dylan Bundy',
            'Kyle Gibson',
            'Marcus Stroman',
            'Merrill Kelly',
            'Joey Lucchesi',
            'Tanner Roark',
            'Joe Musgrove',
            'Domingo German',
            'Adam Wainwright',
            'Steven Matz',
            'Chris Paddack',
            'Jose Quintana',
            'Sandy  lcantara',
            'Kyle Hendricks',
            'Jon Gray',
            'Homer Bailey',
            'Masahiro Tanaka',
            'Trent Thornton',
            'Marco Gonzales',
            'Blake Snell',
            'Jordan Lyles',
            'Spencer Turnbull',
            'Miles Mikolas',
            'Ric  Porcello',
            'Brandon Woodruff',
            'Cole Hamels',
            'Chris Archer',
            'Mike Soroka',
            'Chris Bassitt',
            'Wade Miley',
            'J.A. Happ',
            'Jeff Samardzija',
            'Michael Pineda',
            'Eric Lauer',
            'Josh Hader',
            'Drew  Velasquez',
            'Zach Eflin',
            'Tyler Mahle',
            'David Price',
            'Mike Leake',
            'Trevor Richards',
            'Mike Fiers',
            'Daniel Norris',
            'Chase Anderson',
            'Jason Vargas',
            'Liam Hendriks',
            'Bra  Keller',
            'John Means',
            'Drew Smyly',
            'Matt Strahm',
            'Andrew Heaney',
            'Ryan Yarbrough',
            'Adrian Houser',
            'Yusei Kikuchi',
            'Danny Duffy',
            'Freddy Peralta',
            'Aaron Sanchez',
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
            'Gerrit Cole',
            'Justin Verlander',
            'Shane Bieber',
            'Jacob DeGrom',
            'Trevor Bauer',
            'Stephen Strasburg',
            'Lance Lynn',
            'Max Scherzer',
            'Charlie Morton',
            'Patrick Corbin',
            'Matthew Boyd',
            'Robbie Ray',
            'Jack Flaherty',
            'Aaron Nola',
            'Yu Darvish',
            'Lucas Giolito',
            'Luis Castillo',
            'Chris Sale',
            'Walker Buehler',
            'Eduardo Rodriguez',
            'Sonny Gray',
            'Madison Bumgarner',
            'Noah Syndergaard',
            'Mike Minor',
            'Jose Berrios',
            'Zack Wheeler',
            'Clayton Kershaw',
            'Zack Greinke',
            'James Paxton',
            'Jake Odorizzi',
            'German Marquez',
            'Max Fried',
            'Mike  levinger',
            'Reynaldo Lopez',
            'Kenta Maeda',
            'Caleb Smith',
            'Anthony DeSclafani',
            'Jon Lester',
            'Jakob  unis',
            'Hyun-Jin Ryu',
            'Julio Teheran',
            'Dylan Bundy',
            'Kyle Gibson',
            'Marcus Stroman',
            'Merrill Kelly',
            'Joey Lucchesi',
            'Tanner Roark',
            'Joe Musgrove',
            'Domingo German',
            'Adam Wainwright',
            'Steven Matz',
            'Chris Paddack',
            'Jose Quintana',
            'Sandy  lcantara',
            'Kyle Hendricks',
            'Jon Gray',
            'Homer Bailey',
            'Masahiro Tanaka',
            'Trent Thornton',
            'Marco Gonzales',
            'Blake Snell',
            'Jordan Lyles',
            'Spencer Turnbull',
            'Miles Mikolas',
            'Ric  Porcello',
            'Brandon Woodruff',
            'Cole Hamels',
            'Chris Archer',
            'Mike Soroka',
            'Chris Bassitt',
            'Wade Miley',
            'J.A. Happ',
            'Jeff Samardzija',
            'Michael Pineda',
            'Eric Lauer',
            'Josh Hader',
            'Drew  Velasquez',
            'Zach Eflin',
            'Tyler Mahle',
            'David Price',
            'Mike Leake',
            'Trevor Richards',
            'Mike Fiers',
            'Daniel Norris',
            'Chase Anderson',
            'Jason Vargas',
            'Liam Hendriks',
            'Bra  Keller',
            'John Means',
            'Drew Smyly',
            'Matt Strahm',
            'Andrew Heaney',
            'Ryan Yarbrough',
            'Adrian Houser',
            'Yusei Kikuchi',
            'Danny Duffy',
            'Freddy Peralta',
            'Aaron Sanchez',
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
import React from 'react';
// import { Link } from 'react-router-dom';
import Dropdown from '../components/Dropdown';


export default function HistoricalPlayers(props) {
  return (
    <div className="historical-batters">

      <div className="historical-batter-name">
        {/* <form id="batter-form-name" onSubmit={props.handleSubmitHistory}> */}
        <Dropdown
          type="text"
          handleSubmit1={props.handleSubmitHistory}
          options={[
            'Barry Bonds',
            'Hank Aaron',
            'Babe Ruth',
            'Alex Rodriguez',
            'Willie Mays',
            'Ken Griffey Jr.',
            'Jim Thome',
            'Sammy Sosa',
            'Frank Robinson',
            'Mark McGwire',
            'Harmon Killebrew',
            'Rafael Palmeiro',
            'Reggie Jackson',
            'Manny Ramirez',
            'Mike Schmidt',
            'David Ortiz',
            'Mickey Mantle',
            'Jimmie Foxx',
            'Willie McCovey',
            'Frank Thomas',
            'Ted Williams',
            'Ernie Banks',
            'Eddie Mathews',
            'Mel Ott',
            'Gary Sheffield',
            'Eddie Murray',
            'Lou Gehrig',
            'Fred McGriff',
            'Adrian Beltre',
            'Miguel Cabrera',
            'Stan Musial',
            'Willie Stargell',
            'Carlos Delgado',
            'Chipper Jones',
            'Dave Winfield',
            'Jose Canseco',
            'Adam Dunn',
            'Carl Yastrzemski',
            'Jeff Bagwell',
            'Vladimir Guerrero',
            'Dave Kingman',
            'Jason Giambi',
            'Paul Konerko',
            'Andre Dawson',
            'Carlos Beltran',
            'Juan Gonzalez',
            'Andruw  ones',
            'Cal Ripken',
            'Mike Piazza',
            'Billy Williams',
            'Edwin Encarnacion',
            'Darrell Evans',
            'Alfonso Soriano',
            'Mark Teixeira',
            'Duke Snider',
            'Nelson Cruz',
            'Andres Galarraga',
            'Al Kaline',
            'Dale Murphy',
            'Joe Carter',
            'Jim Edmonds',
            'Graig Nettles',
            'Johnny Bench',
            'Aramis Ramirez',
            'Dwight Evans',
            'Harold Baines',
            'Larry Walker',
            'Frank Howard',
            'Ryan Howard',
            'Jim Rice',
            'Albert Belle',
            'Orlando Cepeda',
            'Tony Perez',
            'Matt Williams',
            'Norm Cash',
            'Jeff Kent',
            'Carlton Fisk',
            'Rocky Colavito',
            'Gil Hodges',
            'Todd Helton',
            'Ralph Kiner',
            'Lance Berkman',
            'Joe DiMaggio',
            'Gary Gaetti',
            'Johnn Mize',
            'Yogi Berra',
            'Carlos Lee',
            'Greg Vaughn',
            'Luis Gonzalez',
            'Lee May',
            'Torii Hunter',
            'Ellis Burks',
            'Dick Allen',
            'Chili Davis',
            'George Foster',
            'Jose Bautista ',
            'Ryan Braun',
            'Ron Santo',
            'Jack Clark',
            'Tino Martinez',
            'Dave Parker',
            'Boog Powell',
            'Don Baylor',
            'Joe Adcock',
            'Darryl Strawberry',
          ]}
          onChange1={props.handleChangeHistory}
          placeholder="Enter a Historical Batter"
        />
        <h1>Batter</h1>
        <h3>Name: {props.historicalName.name_display_first_last}</h3>
        <h3>Average: {props.historicalNamePlayerIDInfo.avg}</h3>
        <h3>Home Runs: {props.historicalNamePlayerIDInfo.hr}</h3>
        <h3>Runs Batted In: {props.historicalNamePlayerIDInfo.rbi}</h3>
        <h3>Slugging Percentage: {props.historicalNamePlayerIDInfo.slg}</h3>
        <h3>On Base Percentage: {props.historicalNamePlayerIDInfo.obp}</h3>
        {/* </form> */}
      </div>

      <div className="historical-batter-name">
        {/* <form id="batter-form-name" onSubmit={props.handleSubmitHistory2}> */}
        <Dropdown
          type="text"
          handleSubmit1={props.handleSubmitHistory2}
          options={[
            'Barry Bonds',
            'Hank Aaron',
            'Babe Ruth',
            'Alex Rodriguez',
            'Willie Mays',
            'Ken Griffey Jr.',
            'Jim Thome',
            'Sammy Sosa',
            'Frank Robinson',
            'Mark McGwire',
            'Harmon Killebrew',
            'Rafael Palmeiro',
            'Reggie Jackson',
            'Manny Ramirez',
            'Mike Schmidt',
            'David Ortiz',
            'Mickey Mantle',
            'Jimmie Foxx',
            'Willie McCovey',
            'Frank Thomas',
            'Ted Williams',
            'Ernie Banks',
            'Eddie Mathews',
            'Mel Ott',
            'Gary Sheffield',
            'Eddie Murray',
            'Lou Gehrig',
            'Fred McGriff',
            'Adrian Beltre',
            'Miguel Cabrera',
            'Stan Musial',
            'Willie Stargell',
            'Carlos Delgado',
            'Chipper Jones',
            'Dave Winfield',
            'Jose Canseco',
            'Adam Dunn',
            'Carl Yastrzemski',
            'Jeff Bagwell',
            'Vladimir Guerrero',
            'Dave Kingman',
            'Jason Giambi',
            'Paul Konerko',
            'Andre Dawson',
            'Carlos Beltran',
            'Juan Gonzalez',
            'Andruw  ones',
            'Cal Ripken',
            'Mike Piazza',
            'Billy Williams',
            'Edwin Encarnacion',
            'Darrell Evans',
            'Alfonso Soriano',
            'Mark Teixeira',
            'Duke Snider',
            'Nelson Cruz',
            'Andres Galarraga',
            'Al Kaline',
            'Dale Murphy',
            'Joe Carter',
            'Jim Edmonds',
            'Graig Nettles',
            'Johnny Bench',
            'Aramis Ramirez',
            'Dwight Evans',
            'Harold Baines',
            'Larry Walker',
            'Frank Howard',
            'Ryan Howard',
            'Jim Rice',
            'Albert Belle',
            'Orlando Cepeda',
            'Tony Perez',
            'Matt Williams',
            'Norm Cash',
            'Jeff Kent',
            'Carlton Fisk',
            'Rocky Colavito',
            'Gil Hodges',
            'Todd Helton',
            'Ralph Kiner',
            'Lance Berkman',
            'Joe DiMaggio',
            'Gary Gaetti',
            'Johnn Mize',
            'Yogi Berra',
            'Carlos Lee',
            'Greg Vaughn',
            'Luis Gonzalez',
            'Lee May',
            'Torii Hunter',
            'Ellis Burks',
            'Dick Allen',
            'Chili Davis',
            'George Foster',
            'Jose Bautista ',
            'Ryan Braun',
            'Ron Santo',
            'Jack Clark',
            'Tino Martinez',
            'Dave Parker',
            'Boog Powell',
            'Don Baylor',
            'Joe Adcock',
            'Darryl Strawberry',
          ]}
          onChange1={props.handleChangeHistory2}
          placeholder="Enter a Historical Batter"
        />
        <h1>Batter</h1>
        <h3>Name: {props.historicalName2.name_display_first_last}</h3>
        <h3>Average: {props.historicalNamePlayerIDInfo2.avg}</h3>
        <h3>Home Runs: {props.historicalNamePlayerIDInfo2.hr}</h3>
        <h3>Runs Batted In: {props.historicalNamePlayerIDInfo2.rbi}</h3>
        <h3>Slugging Percentage: {props.historicalNamePlayerIDInfo2.slg}</h3>
        <h3>On Base Percentage: {props.historicalNamePlayerIDInfo2.obp}</h3>
        {/* </form> */}
      </div>
    </div>
  )
}


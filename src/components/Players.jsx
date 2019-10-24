import React from 'react';
// import { Link } from 'react-router-dom';
import Dropdown from '../components/Dropdown';

export default function Players(props) {
  return (
    <div className="players">

      <div className="batter-name">
        {/* <form id="batter-form-name" onSubmit={props.handleSubmit1}> */}
        <Dropdown
          type="text"
          handleSubmit1={props.handleSubmit1}
          options={[
            'Rafael Devers',
            'DJ LeMahieu',
            'Xander Bogaerts',
            'Ozzie Albies',
            'Marcus Semien',
            'Ketel Marte',
            'Jorge Polanco',
            'Nolan Arenado',
            'Charlie Blackmon',
            'Jose Abreu',
            'Michael Brantley',
            'Nicholas Castellanos',
            'Amed Rosario',
            'Freddie Freeman',
            'Mookie Betts',
            'Jonathan Villar',
            'Ronald Acuna Jr.',
            'J.D. Martinez',
            'Trey Mancini',
            'Anthony Rendon',
            'Trevor Story',
            'David Fletcher',
            'Starlin Castro',
            'Eduardo Escobar',
            'Cesar Hernandez',
            'Cody Bellinger',
            'Francisco Lindor',
            'Yuli Gurriel',
            'Tim Anderson',
            'Elvis Andrus',
            'Alex Bregman',
            'Eric Hosmer',
            'Jeff McNeil',
            'Christian Yelich',
            'Carlos Santana',
            'Yoan Moncada',
            'Jean Segura',
            'Leury Garcia',
            'Hanser Alberto',
            'Starling Marte',
            'Kevin Pillar',
            'Adam Eaton',
            'Eugenio Suarez',
            'Jorge Soler',
            'Pete Alonso',
            'Paul Goldschmidt',
            'Eddie Rosario',
            'Tommy Pham',
            'Trea Turner',
            'Austin Meadows',
            'Bryan Reynolds',
            'Adam Frazier',
            'Juan Soto',
            'Kris Bryant',
            'Gleyber Torres',
            'Kevin Newman',
            'Manny Machado',
            'Anthony Rizzo',
            'Bryce Harper',
            'Jose Altuve',
            'Javier Baez',
            'Shin-Soo Choo',
            'J.T. Realmuto',
            'Yasiel Puig',
            'Alex Gordon',
            'Josh Bell',
            'Hunter Dozier',
            'Lorenzo Cain',
            'Matt Chapman',
            'Freddy Galvis',
            'Jose Iglesias',
            'Andrew Benintendi',
            'Josh Donaldson',
            'Nelson Cruz',
            'Michael Conforto',
            'Nick Ahmed',
            'George Springer',
            'Justin Turner',
            'Gio Urshela',
            'Victor Robles',
            'Miguel Cabrera',
            'Avisail Garcia',
            'Josh Reddick',
            'Mike Trout',
            'Christian Walker',
            'Joey Votto',
            'Miguel Rojas',
            'Randal Grichuk',
            'Paul DeJong',
            'Wilson Ramos',
            'Kolten Wong',
            'Willy Adames',
            'Danny Santana',
            'LgAvg per 600 PA',
            'Mike Moustakas',
            'Christian Vazquez',
            'Corey Seager',
            'Kyle Schwarber',
            'Max Kepler',
            'Renato Nunez',
            'Ryan Braun',
            'Matt Olson',
            'Rhys Hoskins',
            'Jason Heyward',
            'Colin Moran',
            'Kole Calhoun',
            'Yasmani Grandal',
            'J.D. Davis',
            'Adam Jones',
            'Vladimir Guerrero Jr.',
            'Eloy Jimenez',
            'Ramon Laureano',
            'Yolmer Sanchez',
            'Franmil Reyes',
            'Brett Gardner',
            'Jose Ramirez',
            'Brandon Belt',
            'Max Muncy',
            'Daniel Murphy',
            'Dansby Swanson',
            'Ryan McMahon',
            'Albert Pujols',
            'Brian Anderson',
            'James McCann',
            'Omar Narvaez',
            'Scott Kingery',
            'Oscar Mercado',
            'Nick Markakis',
            'Marcell Ozuna',
            'Raimel Tapia',
            'C.J. Cron',
            'Dexter Fowler',
            'Asdrubal Cabrera',
            'Harold Ramirez',
            'Mallex Smith',
            'Evan Longoria',
            'Nomar Mazara',
            'Howie Kendrick',
            'Eric Sogard',
            'Domingo Santana',
            'Brandon Crawford',
            'Luke Voit',
            'Ian Desmond',
            'Jorge Alfaro',
            'David Dahl',
            'Yadier Molina',
            'Joc Pederson',
            'Mark Canha',
            'Todd Frazier',
            'Jason Kipnis',
            'Marwin Gonzalez',
            'Jonathan Schoop',
            'Jackie Bradley Jr.',
            'Shohei Ohtani',
            'Orlando Arcia',
            'Adalberto Mondesi',
            'Luis Arraez',
            'Brian Goodwin',
            'Dee Gordon',
            'Rougned Odor',
            'Ji-Man Choi',
            'Garrett  ooper',
            'Joe Panik',
            'Khris Davis',
            'Fernando Tatis Jr.',
            'Melky Cabrera',
            'Niko Goodrum',
            'David Peralta',
            'Andrelton Simmons',
            'Wil Myers',
            'Buster Posey',
            'Aaron Judge',
            'Harold Castro',
            'Edwin Encarnacion',
            'Kevin Kiermaier',
            'Mike  astrzemski',
            'Alex Verdugo',
            'Robbie Grossman',
            'Jurickson Profar',
            'Robinson Cano',
            'Brian Dozier',
            'Anthony Santander',
            'Tommy Edman',
            'Yordan Alvarez',
            'Eric Thames',
            'Willson Contreras',
            'Enrique Hernandez',
            'Brandon Dixon',
            'Daniel Vogelbach',
            'Teoscar Hernandez',
            'Nick Senzel',
            'Chris Taylor',
            'Hunter Renfroe',
            'Keston Hiura',
            'Miguel Sano',
            'Kyle Seager',
            'Matt Carpenter',
            'Tony Wolters',
            'Roberto Perez',
            'Manuel Margot',
            'Gary Sanchez',
            'Jarrod Dyson',
            'Maikel Franco',
            'Jesse Winker',
            'Brandon Drury',
            'Nicky Lopez',
            'Jose Martinez',
            'Jose Peraza',
            'Stephen Piscotty',
            'Delino DeShields',
            'Michael Chavis',
            'Neil Walker',
            'Lourdes Gurriel Jr.',
            'Robinson Chirinos',
            'Justin Smoak',
            'Tommy La Stella',
            'Dwight Smith Jr.',
            'Rio Ruiz',
            'Christin Stewart',
            'Mitch Garver',
            'Hunter Pence',
            'Luis Rengifo',
            'Rowdy Tellez',
            'Jake Bauers',
            'Wilmer Flores',
            'Victor Reyes',
            'Willie Calhoun',
            'Cavan Biggio',
            'A.J. Pollock',
            'Yandy Diaz',
          ]}
          onChange1={props.handleChange1}
          placeholder="Enter a Current Batter"
        />
        <h1>Batter</h1>
        <h3>Name: {props.playerStatsName.name_display_first_last}</h3>
        <h3>Average: {props.playerStatsNameIDInfo.avg}</h3>
        <h3>Home Runs: {props.playerStatsNameIDInfo.hr}</h3>
        <h3>Runs Batted In: {props.playerStatsNameIDInfo.rbi}</h3>
        <h3>Slugging Percentage: {props.playerStatsNameIDInfo.slg}</h3>
        <h3>On Base Percentage: {props.playerStatsNameIDInfo.obp}</h3>
        {/* <h3>Player ID: {props.playerStatsNameIDInfo.player_id}</h3> */}
        {/* </form> */}
      </div>

      <div className="batter-name-2">
        {/* <form id="batter-form-name-2" onSubmit={props.handleSubmit2}> */}
        {/* <input id="input" type="text" onChange={props.handleChange2} placeholder="Enter Another Batter" /> */}
        <Dropdown
          type="text"
          handleSubmit1={props.handleSubmit2}
          options={[
            'Rafael Devers',
            'DJ LeMahieu',
            'Xander Bogaerts',
            'Ozzie Albies',
            'Marcus Semien',
            'Ketel Marte',
            'Jorge Polanco',
            'Nolan Arenado',
            'Charlie Blackmon',
            'Jose Abreu',
            'Michael Brantley',
            'Nicholas Castellanos',
            'Amed Rosario',
            'Freddie Freeman',
            'Mookie Betts',
            'Jonathan Villar',
            'Ronald Acuna Jr.',
            'J.D. Martinez',
            'Trey Mancini',
            'Anthony Rendon',
            'Trevor Story',
            'David Fletcher',
            'Starlin Castro',
            'Eduardo Escobar',
            'Cesar Hernandez',
            'Cody Bellinger',
            'Francisco Lindor',
            'Yuli Gurriel',
            'Tim Anderson',
            'Elvis Andrus',
            'Alex Bregman',
            'Eric Hosmer',
            'Jeff McNeil',
            'Christian Yelich',
            'Carlos Santana',
            'Yoan Moncada',
            'Jean Segura',
            'Leury Garcia',
            'Hanser Alberto',
            'Starling Marte',
            'Kevin Pillar',
            'Adam Eaton',
            'Eugenio Suarez',
            'Jorge Soler',
            'Pete Alonso',
            'Paul Goldschmidt',
            'Eddie Rosario',
            'Tommy Pham',
            'Trea Turner',
            'Austin Meadows',
            'Bryan Reynolds',
            'Adam Frazier',
            'Juan Soto',
            'Kris Bryant',
            'Gleyber Torres',
            'Kevin Newman',
            'Manny Machado',
            'Anthony Rizzo',
            'Bryce Harper',
            'Jose Altuve',
            'Javier Baez',
            'Shin-Soo Choo',
            'J.T. Realmuto',
            'Yasiel Puig',
            'Alex Gordon',
            'Josh Bell',
            'Hunter Dozier',
            'Lorenzo Cain',
            'Matt Chapman',
            'Freddy Galvis',
            'Jose Iglesias',
            'Andrew Benintendi',
            'Josh Donaldson',
            'Nelson Cruz',
            'Michael Conforto',
            'Nick Ahmed',
            'George Springer',
            'Justin Turner',
            'Gio Urshela',
            'Victor Robles',
            'Miguel Cabrera',
            'Avisail Garcia',
            'Josh Reddick',
            'Mike Trout',
            'Christian Walker',
            'Joey Votto',
            'Miguel Rojas',
            'Randal Grichuk',
            'Paul DeJong',
            'Wilson Ramos',
            'Kolten Wong',
            'Willy Adames',
            'Danny Santana',
            'LgAvg per 600 PA',
            'Mike Moustakas',
            'Christian Vazquez',
            'Corey Seager',
            'Kyle Schwarber',
            'Max Kepler',
            'Renato Nunez',
            'Ryan Braun',
            'Matt Olson',
            'Rhys Hoskins',
            'Jason Heyward',
            'Colin Moran',
            'Kole Calhoun',
            'Yasmani Grandal',
            'J.D. Davis',
            'Adam Jones',
            'Vladimir Guerrero Jr.',
            'Eloy Jimenez',
            'Ramon Laureano',
            'Yolmer Sanchez',
            'Franmil Reyes',
            'Brett Gardner',
            'Jose Ramirez',
            'Brandon Belt',
            'Max Muncy',
            'Daniel Murphy',
            'Dansby Swanson',
            'Ryan McMahon',
            'Albert Pujols',
            'Brian Anderson',
            'James McCann',
            'Omar Narvaez',
            'Scott Kingery',
            'Oscar Mercado',
            'Nick Markakis',
            'Marcell Ozuna',
            'Raimel Tapia',
            'C.J. Cron',
            'Dexter Fowler',
            'Asdrubal Cabrera',
            'Harold Ramirez',
            'Mallex Smith',
            'Evan Longoria',
            'Nomar Mazara',
            'Howie Kendrick',
            'Eric Sogard',
            'Domingo Santana',
            'Brandon Crawford',
            'Luke Voit',
            'Ian Desmond',
            'Jorge Alfaro',
            'David Dahl',
            'Yadier Molina',
            'Joc Pederson',
            'Mark Canha',
            'Todd Frazier',
            'Jason Kipnis',
            'Marwin Gonzalez',
            'Jonathan Schoop',
            'Jackie Bradley Jr.',
            'Shohei Ohtani',
            'Orlando Arcia',
            'Adalberto Mondesi',
            'Luis Arraez',
            'Brian Goodwin',
            'Dee Gordon',
            'Rougned Odor',
            'Ji-Man Choi',
            'Garrett  ooper',
            'Joe Panik',
            'Khris Davis',
            'Fernando Tatis Jr.',
            'Melky Cabrera',
            'Niko Goodrum',
            'David Peralta',
            'Andrelton Simmons',
            'Wil Myers',
            'Buster Posey',
            'Aaron Judge',
            'Harold Castro',
            'Edwin Encarnacion',
            'Kevin Kiermaier',
            'Mike  astrzemski',
            'Alex Verdugo',
            'Robbie Grossman',
            'Jurickson Profar',
            'Robinson Cano',
            'Brian Dozier',
            'Anthony Santander',
            'Tommy Edman',
            'Yordan Alvarez',
            'Eric Thames',
            'Willson Contreras',
            'Enrique Hernandez',
            'Brandon Dixon',
            'Daniel Vogelbach',
            'Teoscar Hernandez',
            'Nick Senzel',
            'Chris Taylor',
            'Hunter Renfroe',
            'Keston Hiura',
            'Miguel Sano',
            'Kyle Seager',
            'Matt Carpenter',
            'Tony Wolters',
            'Roberto Perez',
            'Manuel Margot',
            'Gary Sanchez',
            'Jarrod Dyson',
            'Maikel Franco',
            'Jesse Winker',
            'Brandon Drury',
            'Nicky Lopez',
            'Jose Martinez',
            'Jose Peraza',
            'Stephen Piscotty',
            'Delino DeShields',
            'Michael Chavis',
            'Neil Walker',
            'Lourdes Gurriel Jr.',
            'Robinson Chirinos',
            'Justin Smoak',
            'Tommy La Stella',
            'Dwight Smith Jr.',
            'Rio Ruiz',
            'Christin Stewart',
            'Mitch Garver',
            'Hunter Pence',
            'Luis Rengifo',
            'Rowdy Tellez',
            'Jake Bauers',
            'Wilmer Flores',
            'Victor Reyes',
            'Willie Calhoun',
            'Cavan Biggio',
            'A.J. Pollock',
            'Yandy Diaz',
          ]}
          onChange1={props.handleChange2}
          placeholder="Enter a Current Batter"
        />
        <h1>Batter</h1>
        <h3>Name: {props.playerStatsName2.name_display_first_last}</h3>
        <h3>Average: {props.playerStatsNameIDInfo2.avg}</h3>
        <h3>Home Runs: {props.playerStatsNameIDInfo2.hr}</h3>
        <h3>Runs Batted In: {props.playerStatsNameIDInfo2.rbi}</h3>
        <h3>Slugging Percentage: {props.playerStatsNameIDInfo2.slg}</h3>
        <h3>On Base Percentage: {props.playerStatsNameIDInfo2.obp}</h3>
        {/* <h3>Player ID: {props.playerStatsNameIDInfo2.player_id}</h3> */}
        {/* </form> */}
      </div>

    </div>
  )

}


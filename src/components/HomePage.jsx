import React from 'react';
import { Link } from 'react-router-dom';
import baseballPic from '../baseball-pic.png'

export default function HomePage(props) {
  return (
    <div className="HomePage">
      <Link to="/hitters" key="hitters">
        <button>Hitter Page</button>
      </Link>

      <Link to="/pitchers" key="pitchers">
        <button>Pitcher Page</button>
      </Link>

      <Link to="/historicalhitters" key="historical-hitters">
        <button>Historical Hitter Page</button>
      </Link>
      <Link to='historicalpitchers' key="historical-pitchers">
      <button><img src={baseballPic} width="150px" height= "150px"/></button>
      </Link>
    </div>
  )
}
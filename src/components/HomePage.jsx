import React from 'react';
import { Link } from 'react-router-dom';

export default function HomePage(props) {
  return (
    <div className="HomePage">
      <Link to="/hitters" key="hitters">
        <button>Hitter Page</button>
      </Link>
      
      <Link to="/pitchers" key="pitchers">
        <button>Pitcher Page</button>
      </Link>
      
    </div>
  )
}
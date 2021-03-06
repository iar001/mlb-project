import React from 'react';
import { Link } from 'react-router-dom';

export default function Header(props) {
  return (
    <div className="header">
      <Link to="/">
        <h3>Home</h3>
      </Link>
      <Link to="/hitters">
        <h3>Active Hitters</h3>
      </Link>
      <Link to="/pitchers">
        <h3>Active Pitchers</h3>
      </Link>
      <Link to="/historicalhitters">
        <h3>Legendary Hitters</h3>
      </Link>
      <Link to="/historicalpitchers">
        <h3>Legendary Pitchers</h3>
      </Link>

    </div>
  )
}
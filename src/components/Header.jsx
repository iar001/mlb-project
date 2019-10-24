import React from 'react';
import { Link } from 'react-router-dom';

export default function Header(props) {
  return (
    <div className="header">
      <Link to="/">
        <h2>Home</h2>
      </Link>
      <Link to="/hitters">
        <h3>Modern Hitters</h3>
      </Link>
      <Link to="/pitchers">
        <h3>Modern Pitchers</h3>
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
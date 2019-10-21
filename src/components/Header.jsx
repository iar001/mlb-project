import React from 'react';
import { Link } from 'react-router-dom';

export default function Header(props) {
  return (
    <div className="header">
    <Link to="/">
      <h1>Home</h1>
    </Link>
      <h1>Baseball Players</h1>
    </div>
  )
}
import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <h1>Shubhushan Kattel</h1>
      <nav>
        <ul>
          <li>
            <NavLink to="/about" activeClassName="active">
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/projects" activeClassName="active">
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink to="/education" activeClassName="active">
              Education
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

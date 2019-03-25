import React from 'react';
import {NavLink} from 'react-router-dom';

const Nav = (props) => {
  return (
    <nav className="navbar navbar-default navbar-fixed-top">
        <div className="container">

            <div className="navbar-header">

                <NavLink to="/">
                <a className="navbar-brand">
                    Explore the Now
                </a>
                </NavLink>
            </div>
              <ul className="navbar-nav ml-auto">
              <li className="nav-item">
              <NavLink to="/login">
                <button type="button" className="navbar-toggler">Log in</button>
              </NavLink>
              </li>
              <li className="nav-item">
              <NavLink to="/signup">
              <button type="button" className="navbar-toggler">Sign up</button>
              </NavLink>
              </li>
              </ul>


        </div>
    </nav>
  )
}

export default Nav;

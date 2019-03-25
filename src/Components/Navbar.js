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
<<<<<<< HEAD
              <ul className="navbar-nav ml-auto">
              <li className="nav-item">
              <NavLink to="/login">
                <button type="button" className="navbar-toggler">Log in</button>
              </NavLink>
              </li>
              <li className="nav-item">
              <NavLink to="/signup">
              <button type="button" className="navbar-toggler">Sign up</button>
=======
              <NavLink to="/login">
                <button type="button" className="btn btn-light navbar-btn navbar-right">Log in</button>
              </NavLink>
              <NavLink to="/signup">
              <button type="button" className="btn btn-light navbar-btn navbar-right">Sign up</button>
>>>>>>> 501c432526b2d5ffa625dd61fabfb40dedbed413
              </NavLink>
              </li>
              </ul>


        </div>
    </nav>
  )
}

export default Nav;

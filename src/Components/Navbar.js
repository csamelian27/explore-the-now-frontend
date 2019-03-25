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
              <NavLink to="/login">
                <button type="button" className="btn btn-light navbar-btn navbar-right">Log in</button>
              </NavLink>
              <NavLink to="/signup">
              <button type="button" className="btn btn-light navbar-btn navbar-right">Sign up</button>
              </NavLink>

              <p className="navbar-text">Signed in as Jon</p>

        </div>
    </nav>
  )
}

export default Nav;

import React from 'react';
import {NavLink} from 'react-router-dom';

const Nav = (props) => {

  const handleLogout = () => {
    localStorage.removeItem('token')
  }

  return (
    <nav className="navbar navbar-default navbar-fixed-top">
        <div className="container">

            <div className="navbar-header">

                <NavLink to="/">
                <a className="navbar-brand">
                    Explore the Now
                </a>
                </NavLink>
                <NavLink to="/experiences-home">
                <a className="navbar-brand">
                    Experiences
                </a>
                </NavLink>
                <NavLink to="/activities-home">
                <a className="navbar-brand">
                    Activities
                </a>
                </NavLink>
                <NavLink to="/profile">
                <a className="navbar-brand">
                    View Profile
                </a>
                </NavLink>
            </div>
              <NavLink to="/login">
                {props.user && localStorage.token ? <button type="button" className="btn btn-light navbar-btn navbar-right" onClick={handleLogout} >Log Out</button> : <button type="button" className="btn btn-light navbar-btn navbar-right">Log in</button>}
              </NavLink>
              <NavLink to="/signup">
              <button type="button" className="btn btn-light navbar-btn navbar-right">Sign up</button>
              </NavLink>

        </div>
    </nav>
  )
}

export default Nav;

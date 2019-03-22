import React from 'react';

const Nav = (props) => {
  return (
    <nav className="navbar navbar-default navbar-fixed-top">
        <div className="container">

            <div className="navbar-header">

                <a className="navbar-brand">
                    Explore the Now
                </a>
            </div>





              <button type="button" className="btn btn-light navbar-btn navbar-right">Log in</button>
              <button type="button" className="btn btn-light navbar-btn navbar-right">Sign up</button>


              <p className="navbar-text">Signed in as Mark Otto</p>

        </div>
    </nav>
  )
}

export default Nav;

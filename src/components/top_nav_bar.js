import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class TopNavBar extends Component {
  render() {
    const { user, handleSignout } = this.props;
    return (
      <nav className="navbar navbar-expand-md ">
        <div className="navbar-brand abs">
          <i className="fas fa-seedling"></i> Gennit
          <small>a site for meetups and discussions</small>
        </div>

        <div className="navbar-collapse collapse" id="collapsingNavbar">
          <ul className="navbar-nav"></ul>
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link" href="/">
                About
              </a>
            </li>
            <li className="nav-item">
              <NavLink to="/" className="nav-link">
                Find a Community
              </NavLink>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#myAlert" data-toggle="collapse">
                My Communities
              </a>
            </li>
            <li className="nav-item">
              <NavLink to="/profile" className="nav-link">
                Profile
              </NavLink>
            </li>
            <li className="nav-item">
              <button type="warning" onClick={handleSignout}>
                Sign Out
              </button>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default TopNavBar;

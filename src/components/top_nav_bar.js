import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class TopNavBar extends Component {
  render() {
    const { user, handleSignout } = this.props;
    return (
      <nav className="navbar navbar-expand-md ">
        <div className="navbar-brand abs">
          <i className="fas fa-seedling"></i> Gennit
          <small> a site for meetups and discussions</small>
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
                <i class="fas fa-search"></i> Find a Community
              </NavLink>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#myAlert" data-toggle="collapse">
                <i class="fas fa-user-friends"></i> My Communities
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#myAlert" data-toggle="collapse">
                <i class="fas fa-envelope"></i> Messages
              </a>
            </li>
            <li className="nav-item">
              <NavLink to="/profile" className="nav-link">
                <i class="fas fa-user"></i> Profile
              </NavLink>
            </li>
            <li className="nav-item">
              <button className="nav-link" onClick={handleSignout}>
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

import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class TopNavBar extends Component {
  render() {
    const { handleSignout, communityUrl, communityDescription } = this.props;
    return (
      <nav>
        <div className="navbar-brand">
          <i className="fas fa-bars menu-toggle"></i>
          <i className="fas fa-seedling"></i> gennit.net
          {communityUrl ? (
            <span>
              /c/<span className="name-in-topnav">{communityUrl}</span>
            </span>
          ) : (
            <small> a site for meetups and discussions</small>
          )}
          {communityDescription ? <small>{communityDescription}</small> : null}
        </div>
        <ul className="topnav-right-buttons">
          <li className="nav-item">
            <NavLink to="/" className="nav-link">
              <i className="fas fa-plus"></i> Create
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/find" className="nav-link">
              <i className="fas fa-search"></i> Find
            </NavLink>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#myAlert" data-toggle="collapse">
              <i className="fas fa-star"></i> Shortlist
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#myAlert" data-toggle="collapse">
              <i className="fas fa-envelope"></i>
            </a>
          </li>
          <li className="nav-item">
            <NavLink to="/profile" className="nav-link">
              <i className="fas fa-user"></i>
            </NavLink>
          </li>
          <li className="nav-item">
            <div className="nav-link" onClick={handleSignout} href="/">
              <i className="fas fa-sign-out-alt"></i>
            </div>
          </li>
        </ul>
      </nav>
    );
  }
}

export default TopNavBar;

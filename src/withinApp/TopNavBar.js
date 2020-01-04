import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class TopNavBar extends Component {
  render() {
    const { handleSignout } = this.props;
    return (
      <nav className="navbar navbar-expand-md no-gap">
        <div className="navbar-brand abs">
          <i className="fas fa-bars menu-toggle"></i>
          <i className="fas fa-seedling"></i> Gennit
          <small> a site for meetups and discussions</small>
        </div>

        <div className="navbar-collapse collapse" id="collapsingNavbar">
          <ul className="navbar-nav"></ul>
          <ul className="navbar-nav ml-auto">
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
              <div
                className="nav-link"
                onClick={handleSignout}
                href="/"
                data-toggle="collapse"
              >
                <i className="fas fa-sign-out-alt"></i>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default TopNavBar;

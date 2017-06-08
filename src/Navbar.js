import React, { Component } from 'react';

class Navbar extends Component {
  render() {
    return (
      <nav className="grey darken-4">
        <div className="nav-wrapper">
          <a href="#" className="brand-logo center orange-text">LOL Champs</a>
          <ul id="nav-mobile" className="left hide-on-med-and-down">
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;

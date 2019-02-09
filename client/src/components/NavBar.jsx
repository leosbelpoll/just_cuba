import React, { Component } from 'react';
import { NavLink, HashRouter } from 'react-router-dom';

class NavBar extends Component {
  render() {
    return (
      <HashRouter>
      <nav>
        <h1>NavBar_Jost_Cuba_0.1</h1>
        <ul id="navBar">
          <li><NavLink to="./Home.jsx">Home</NavLink></li>
          <li><NavLink to="./WhoWeAre.jsx">Who we are</NavLink></li>
          <li><NavLink to="./Contact.jsx">Contact</NavLink></li>
        </ul>
      </nav>
      </HashRouter>
    );
  }
}

export default NavBar;
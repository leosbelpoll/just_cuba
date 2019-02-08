import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Home from './basicPages/Home';
import WhoWeAre from './basicPages/WhoWeAre';
import Contact from './basicPages/Contact';

class Section extends Component {
  render() {
    return (
      <section>
        <Route path='./basicPages/Home.jsx' basicPages = {Home}/>
        <Route path='./basicPages/WhoWeAre.jsx' basicPages = {WhoWeAre}/>
        <Route path='./basicPages/Contact.jsx' basicPages = {Contact}/>
      </section>
    );
  }
}

export default Section;
import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Home from './Home';
import WhoWeAre from './WhoWeAre';
import Contact from './Contact';

class Section extends Component {
  render() {
    return (
      <section>
        <Route path="./Home.jsx" components = {Home}/>
        <Route path="./WhoWeAre.jsx" components = {WhoWeAre}/>
        <Route path="./Contact.jsx" components = {Contact}/>
      </section>
    );
  }
}

export default Section;
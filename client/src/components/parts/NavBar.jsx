import React, { Component } from "react";
import { Link } from "react-router-dom";

class NavBar extends Component {
    render() {
        return (
            <nav>        
                <h1>NavBar_Jost_Cuba_0.1</h1>
                <ul>
                    <Link to="/">HOME</Link>
                    <Link to="/who-we-are">WHO WE ARE</Link>
                    <Link to="/contact">CONTACT</Link>
                </ul>
            </nav>
        );
    }
}

export default NavBar;
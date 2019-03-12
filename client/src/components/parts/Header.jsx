import React from "react";
<<<<<<< Updated upstream
import styled from "styled-components";

import NavLink from "components/parts/NavLink";
import Search from "components/parts/Search";
import Logo from "logo.jpg";

const HeaderStyled = styled.header`
    background: rgba(0, 0, 0, .2);
    padding: 40px;
    text-align: center;

    h1 {
        font-size: 4em;
        font-weight: 100;
        margin-bottom: 30px;
    }
    img {
        width : 50px;
    }
=======
import { Link } from "react-router-dom";
import { styled } from "styled-component"

import  Logo  from "logo.jpg";

const imgLogo = styled.img`
  width : 30px;
>>>>>>> Stashed changes
`;

const Header = () => {
    return (
<<<<<<< Updated upstream
        <HeaderStyled>
            <h1>Just in Cuba</h1>
            <img alt="logo" src={Logo} />
            <nav>        
                <ul>
                    <NavLink to="/">HOME</NavLink>
                    <NavLink to="/who-we-are">WHO WE ARE</NavLink>
                    <NavLink to="/contact">CONTACT</NavLink>
                    <NavLink to="/login">LOGIN</NavLink>
                    <Search />
                </ul>
            </nav>

        </HeaderStyled>
=======
        <header>
            <imgLogo alt="logo" src={Logo} />
            <h1>Just in Cuba</h1>
            <nav>        
                <ul>
                    <Link to="/">HOME</Link>
                    <Link to="/who-we-are">WHO WE ARE</Link>
                    <Link to="/contact">CONTACT</Link>
                </ul>
            </nav>
        </header>
>>>>>>> Stashed changes
    );
}

export default Header;
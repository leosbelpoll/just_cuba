import React from "react";
import styled from "styled-components";

import NavLink from "components/parts/NavLink";
import Search from "components/parts/Search";
import Logo from "logo.jpg";

const HeaderStyled = styled.header`
    background: rgba(0, 0, 0, .1);
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
`;

const Header = () => {
    return (
        <HeaderStyled>
            <h1>Just in Cuba</h1>
            <img alt="logo" src={Logo} />
            <nav>        
                <ul>
                    <NavLink to="/">HOME</NavLink>
                    <NavLink to="/who-we-are">WHO WE ARE</NavLink>
                    <NavLink to="/contact">CONTACT</NavLink>
                    <Search />
                </ul>
            </nav>

        </HeaderStyled>
    );
}

export default Header;
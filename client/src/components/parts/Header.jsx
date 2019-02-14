import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import Button from "components/parts/Button";
import  Logo  from "logo.jpg";

const imgLogo = styled.img`
    width : 30px;
`;

const HeaderStyled = styled.header`
    background: rgba(0, 0, 0, .1);
    padding: 40px;
    text-align: center;

    h1 {
        font-size: 4em;
        font-weight: 100;
        margin-bottom: 30px;
    }
`;

const Header = () => {
    return (
        <HeaderStyled>
            <h1>Header Styled</h1>
            <imgLogo alt="logo" src={Logo} />
            <Button />
            <Button value="Ir a pepe" />
            <Button />
            <Button value="Hacer algo mas" />
            <Button />
            <nav>        
                <ul>
                    <Link to="/">HOME</Link>
                    <Link to="/who-we-are">WHO WE ARE</Link>
                    <Link to="/contact">CONTACT</Link>
                </ul>
            </nav>
        </HeaderStyled>
    );
}

export default Header;
import React from "react";
import styled from "styled-components";

import Button from "components/parts/Button";
import Text from "components/parts/Text";
import Date from "components/parts/Date";
import Select from "components/parts/Select";
import NavLink from "components/parts/NavLink";
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
`;

const imgLogo = styled.img`
    width : 50px;
`;

const Header = () => {
    return (
        <HeaderStyled>
            <h1>Just in Cuba</h1>
            <imgLogo alt="logo" src={Logo} />
            <nav>        
                <ul>
                    <NavLink to="/">HOME</NavLink>
                    <NavLink to="/who-we-are">WHO WE ARE</NavLink>
                    <NavLink to="/contact">CONTACT</NavLink>
                    <Text type="text" />
                    <Date type="date" />
                    <Select />
                    <Button value="Search"/>
                </ul>
            </nav>

        </HeaderStyled>
    );
}

export default Header;
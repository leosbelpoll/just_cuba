import React from "react";
import styled from "styled-components";


const FooterStyled = styled.footer`
    background: rgba(0, 0, 0, .1);
    text-align: center;
    bottom: 0;
    width: 100%;

    h1 {
        font-size: 4em;
        font-weight: 100;
        margin-bottom: 30px;
    }
`;

const Footer = () => {
    return (
        <FooterStyled>
            <h1>This is the footer</h1>
        </FooterStyled>
    );
}

export default Footer;

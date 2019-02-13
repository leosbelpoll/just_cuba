import React from "react";
import styled from "styled-components";

import Button from "components/parts/Button";

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
            <Button />
            <Button value="Ir a pepe" />
            <Button />
            <Button value="Hacer algo mas" />
            <Button />
        </HeaderStyled>
    );
}

export default Header;

import React from "react";
import styled from "styled-components";

const SelectStyled = styled.select`
    background: white;
    padding: 10px 25px;
    border: none;
    cursor: pointer;
    font-weight: 300;

    option {
        background: white;
        padding: 10px 25px;
        border: none;
        cursor: pointer;
        font-weight: 300;
    }
`;

const Select = (props) => {
    return (
        <SelectStyled { ...props } />
    );
}

export default Select;
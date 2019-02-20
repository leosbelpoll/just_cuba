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

const Select = () => {
    return (
        <SelectStyled value="Huespedes">
            <option value="1 Huesped">1 Huesped</option>
            <option value="2 Huespedes">2 Huespedes</option>
            <option value="3 Huespedes">3 Huespedes</option>
            <option value="4 Huespedes">4 Huespedes</option>
        </SelectStyled>
    );
}

export default Select;
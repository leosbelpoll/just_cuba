import styled from "styled-components";

import { Link } from "react-router-dom";

const NavLink = styled(Link)`
    background: white;
    padding: 10px 25px;
    border: none;
    cursor: pointer;
    font-weight: 300;
    text-decoration: none;

    :hover {
        background: rgba(0, 0, 0, 0.05);
    }
`;

export default NavLink;

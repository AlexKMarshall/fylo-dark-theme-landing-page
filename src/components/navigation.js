import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

const StyledNav = styled.nav`
  font-size: 16px;
  ul {
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  ul > li {
    margin-left: 55px;
  }
`;

const Navigation = ({ links }) => (
  <StyledNav>
    <ul>
      {links.map((link) => (
        <li key={link.name}>
          <Link to={link.link}>{link.name}</Link>
        </li>
      ))}
    </ul>
  </StyledNav>
);

export default Navigation;

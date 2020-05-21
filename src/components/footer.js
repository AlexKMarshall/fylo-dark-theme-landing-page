import React from "react";
import styled from "styled-components";
import Navigation from "./navigation";
import Logo from "./logo";

const StyledFooter = styled.footer`
  margin-left: 110px;

  Logo {
    background: red;
  }
`;

const Footer = ({ children, links }) => (
  <StyledFooter>
    <Logo style={{ marginBottom: `35px` }} />
    <div>
      <ul>
        <li>14 Tottenham Court Road London England W1T 1JY</li>
        <li>+1-543-123-4567</li>
        <li>example@fylo.com</li>
      </ul>
      <Navigation links={links} />
    </div>
    {children}
  </StyledFooter>
);

export default Footer;

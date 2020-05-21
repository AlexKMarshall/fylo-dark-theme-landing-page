import React from "react";
import styled from "styled-components";
import Navigation from "./navigation";
import Logo from "./logo";

import iconLocation from "./../images/icon-location.svg";

const StyledFooter = styled.footer`
  margin-left: 110px;
`;

const StyledAddress = styled.ol`
  margin-left: 30px;
  position: relative;

  &::before {
    content: " ";
    position: absolute;
    top: 5px;
    left: -30px;
    width: 13px;
    height: 18px;
    background-image: url(${iconLocation});
  }
`;

const Footer = ({ children, links }) => (
  <StyledFooter>
    <Logo style={{ marginBottom: `35px` }} />
    <StyledAddress>
      <li>14 Tottenham Court Road </li>
      <li>London</li>
      <li>England</li>
      <li>W1T 1JY</li>
    </StyledAddress>
    <div>
      <ul>
        <li>+1-543-123-4567</li>
        <li>example@fylo.com</li>
      </ul>
      <Navigation links={links} />
    </div>
    {children}
  </StyledFooter>
);

export default Footer;

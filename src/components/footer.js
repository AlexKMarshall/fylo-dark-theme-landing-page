import React from "react";
import styled from "styled-components";
import Navigation from "./navigation";
import Logo from "./logo";

import iconLocation from "./../images/icon-location.svg";
import iconPhone from "./../images/icon-phone.svg";
import iconEmail from "./../images/icon-email.svg";

const StyledFooterWrapper = styled.footer`
  margin-left: 110px;
  margin-right: 70px;
`;

const StyledFooter = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 16px;
  letter-spacing: 0.05em;
  line-height: 1.5em;
`;

const StyledAddress = styled.ol`
  margin-left: 40px;
  position: relative;

  &::before {
    content: " ";
    position: absolute;
    top: 5px;
    left: -40px;
    width: 13px;
    height: 18px;
    background-image: url(${iconLocation});
  }
`;

const StyledContacts = styled.ul`
  display: grid;
  grid-template-rows: 40px 40px;

  li {
    margin-left: 40px;
    position: relative;

    &:first-child::before {
      position: absolute;
      content: " ";
      width: 18px;
      height: 18px;
      top: 3px;
      left: -40px;
      background-image: url(${iconPhone});
    }

    &:last-child::before {
      position: absolute;
      content: " ";
      width: 20px;
      height: 16px;
      top: 4px;
      left: -40px;
      background-image: url(${iconEmail});
    }
  }
`;

const StyledFooterNav = styled(Navigation)`
  ul {
    display: grid;
    grid-template-rows: repeat(4, 40px);
    grid-auto-flow: column;
    grid-auto-columns: auto;
    column-gap: 75px;
  }
`;

const Footer = ({ children, links }) => (
  <StyledFooterWrapper>
    <Logo style={{ marginBottom: `35px` }} />
    <StyledFooter>
      <StyledAddress>
        <li>14 Tottenham Court Road </li>
        <li>London</li>
        <li>England</li>
        <li>W1T 1JY</li>
      </StyledAddress>
      <StyledContacts>
        <li>+1-543-123-4567</li>
        <li>example@fylo.com</li>
      </StyledContacts>

      <div>
        <StyledFooterNav links={links} />
      </div>
    </StyledFooter>
    {/* {children} */}
  </StyledFooterWrapper>
);

export default Footer;

import React from "react";
import Navigation from "./navigation";
import Logo from "./logo";

const Footer = ({ children, links }) => (
  <footer>
    <Logo />
    <div>
      <ul>
        <li>Address</li>
        <li>+1-543-123-4567</li>
        <li>example@fylo.com</li>
      </ul>
      <Navigation links={links} />
    </div>
    {children}
  </footer>
);

export default Footer;

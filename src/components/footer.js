import React from "react";
import Navigation from "./navigation";

const Footer = ({ siteTitle, children, links }) => (
  <footer>
    <div>{siteTitle}</div>
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

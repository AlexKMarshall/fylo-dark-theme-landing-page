import React from "react";

const Footer = ({ siteTitle, children }) => (
  <footer>
    <div>{siteTitle}</div>
    <div>
      <ul>
        <li>Address</li>
        <li>+1-543-123-4567</li>
        <li>example@fylo.com</li>
      </ul>
      <ul>
        <li>About Us</li>
        <li>Jobs</li>
        <li>Press</li>
        <li>Blog</li>
        <li>Contact Us</li>
        <li>Terms</li>
        <li>Privacy</li>
      </ul>
    </div>
  </footer>
);

export default Footer;

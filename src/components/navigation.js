import React from "react";
import { Link } from "gatsby";

const Navigation = ({ links }) => (
  <nav>
    <ul>
      {links.map((link) => (
        <li key={link.name}>
          <Link to={link.link}>{link.name}</Link>
        </li>
      ))}
    </ul>
  </nav>
);

export default Navigation;

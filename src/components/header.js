import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import Logo from "./logo";
import headerStyles from "./header.module.css";

const Header = ({ children }) => (
  <header className={headerStyles.header}>
    <Link to="/">
      <Logo />
    </Link>
    {children}
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;

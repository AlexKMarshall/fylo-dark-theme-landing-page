import React from "react";
import logo from "./../images/logo.svg";

const Logo = (props) => (
  <img
    src={logo}
    alt="Fylo logo"
    className={props.className}
    style={props.style}
  />
);

export default Logo;

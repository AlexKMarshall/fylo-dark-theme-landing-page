/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";

import Header from "./header";
import "./layout.css";
import Navigation from "./navigation";

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title}>
        <Navigation />
      </Header>
      <div>
        <main>{children}</main>
        <footer>
          <p class="attribution">
            Challenge by{" "}
            <a href="https://www.frontendmentor.io?ref=challenge">
              Frontend Mentor
            </a>
            . Coded by{" "}
            <a href="https://github.com/AlexKMarshall/">Alex Marshall</a>.
          </p>
        </footer>
      </div>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;

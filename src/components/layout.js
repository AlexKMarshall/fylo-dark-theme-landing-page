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
import Footer from "./footer";
import "./layout.css";
import Navigation from "./navigation";

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          primaryLinks {
            link
            name
          }
          secondaryLinks {
            link
            name
          }
        }
      }
    }
  `);

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title}>
        <Navigation links={data.site.siteMetadata.primaryLinks} />
      </Header>
      <div>
        <main>{children}</main>
        <Footer
          siteTitle={data.site.siteMetadata.title}
          links={data.site.siteMetadata.secondaryLinks}
        >
          <p class="attribution">
            Challenge by{" "}
            <a href="https://www.frontendmentor.io?ref=challenge">
              Frontend Mentor
            </a>
            . Coded by{" "}
            <a href="https://github.com/AlexKMarshall/">Alex Marshall</a>.
          </p>
        </Footer>
      </div>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;

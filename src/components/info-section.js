import React from "react";
import { Link } from "gatsby";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import styled from "styled-components";
import iconArrow from "./../images/icon-arrow.svg";

const StyledInfoSection = styled.div`
  margin: 0 70px 170px 70px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 40px;
  align-items: center;
  h2 {
    font-size: 40px;
    line-height: 1.25em;
    letter-spacing: 0.01em;
    font-weight: 700;
    margin-bottom: 24px;
  }
  p {
    font-size: 16px;
    line-height: 1.5em;
    margin-bottom: 1em;
  }
`;

const StyledLink = styled(Link)`
  color: #62e0d9;
  padding-bottom: 2px;
  border-bottom: 1px solid #62e0d9;
  font-size: 16px;

  &:visited {
    color: #62e0d9;
  }
  &:hover {
    color: #62e0d9;
  }
`;

const Illustration = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(
        relativePath: { eq: "illustration-stay-productive.png" }
      ) {
        childImageSharp {
          fluid(maxWidth: 720) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <Img
      fluid={data.placeholderImage.childImageSharp.fluid}
      alt="Illustration of three people working together"
    />
  );
};

const InfoSection = () => (
  <StyledInfoSection>
    <Illustration />
    <section>
      <h2>Stay productive, wherever you are</h2>
      <p>
        Never let location be an issue when accessing your files. Fylo has you
        covered for all of your file storage needs.
      </p>
      <p>
        Securely share files and folders with friends, family and colleagues for
        live collaboration. No email attachments required.
      </p>
      <StyledLink to={`/`}>
        See how Fylo works{" "}
        <img
          src={iconArrow}
          alt="Right arrow icon"
          css={{ verticalAlign: "middle" }}
        />
      </StyledLink>
    </section>
  </StyledInfoSection>
);

export default InfoSection;

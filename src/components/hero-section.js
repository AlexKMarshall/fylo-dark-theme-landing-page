import React from "react";
import styled from "styled-components";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import CallToAction from "./call-to-action";

const StyledHeroSection = styled.section`
  max-width: 720px;
  margin: 0 auto;
  padding-bottom: 160px;
  text-align: center;
  h1 {
    margin: 40px 0;
    font-weight: 700;
  }
  p {
    font-size: 20px;
    line-height: 1.5em;
    max-width: 90%;
    margin: 0 auto;
    margin-bottom: 30px;
  }
`;

const HeroImage = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "illustration-intro.png" }) {
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
      alt="Illustration of two people adding files to a folder"
    />
  );
};

const HeroSection = () => (
  <StyledHeroSection>
    <HeroImage />
    <h1> All your files in one secure location, accessible anywhere.</h1>
    <p>
      Fylo stores all your most important files in one secure location. Access
      them wherever you need, share and collaborate with friends family, and
      co-workers.
    </p>
    <CallToAction>Get Started</CallToAction>
  </StyledHeroSection>
);

export default HeroSection;

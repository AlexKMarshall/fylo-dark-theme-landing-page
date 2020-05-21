import React from "react";
import { Link } from "gatsby";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

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
  <div>
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
      <Link to={`/`}>See how Fylo works</Link>
    </section>
  </div>
);

export default InfoSection;

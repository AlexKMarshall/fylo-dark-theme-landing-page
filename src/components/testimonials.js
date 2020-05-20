import React from "react";
import { useStaticQuery, graphql } from "gatsby";

const Testimonials = () => {
  const data = useStaticQuery(graphql`
    query testimonials {
      allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/testimonials/" } }
      ) {
        edges {
          node {
            id
            rawMarkdownBody
            frontmatter {
              name
              position
              company
            }
          }
        }
      }
    }
  `);

  return (
    <div>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <figure key={node.id}>
          <blockquote>{node.rawMarkdownBody}</blockquote>
          <figcaption>
            <h5>
              <cite>{node.frontmatter.name}</cite>
            </h5>
            {`${node.frontmatter.position}, ${node.frontmatter.company}`}
          </figcaption>
        </figure>
      ))}
    </div>
  );
};

export default Testimonials;

import React from "react";
import { useStaticQuery, graphql } from "gatsby";

const KeyFeatures = () => {
  const data = useStaticQuery(graphql`
    query KeyFeatures {
      allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/feature/" } }
        sort: { fields: frontmatter___priority, order: ASC }
      ) {
        nodes {
          rawMarkdownBody
          frontmatter {
            title
          }
          id
        }
      }
    }
  `);

  return (
    <ul>
      {data.allMarkdownRemark.nodes.map((node) => (
        <li key={node.id}>
          <h4>{node.frontmatter.title}</h4>
          <p>{node.rawMarkdownBody}</p>
        </li>
      ))}
    </ul>
  );
};

export default KeyFeatures;

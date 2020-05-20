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
          html
        }
      }
    }
  `);

  return (
    <ul>
      {data.allMarkdownRemark.nodes.map((node) => (
        <li key={node.id} dangerouslySetInnerHTML={{ __html: node.html }}>
          {/* <h4>{node.frontmatter.title}</h4>
          <p>{node.rawMarkdownBody}</p> */}
        </li>
      ))}
    </ul>
  );
};

export default KeyFeatures;

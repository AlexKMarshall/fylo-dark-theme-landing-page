import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import styled from "styled-components";

const StyledUl = styled.ul`
  max-width: 900px;
  margin: 0 auto;
  margin-bottom: 120px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  column-gap: 150px;
  row-gap: 85px;
  li {
    text-align: center;
    display: flex;
    flex-direction: column;
    p {
      &:first-child {
        flex-basis: 95px;
      }
    }
  }
  h4 {
    font-size: 20px;
    font-weight: 700;
    letter-spacing: 0.05em;
    margin-top: 35px;
    margin-bottom: 18px;
  }
`;

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
    <StyledUl>
      {data.allMarkdownRemark.nodes.map((node) => (
        <li key={node.id} dangerouslySetInnerHTML={{ __html: node.html }}>
          {/* <h4>{node.frontmatter.title}</h4>
          <p>{node.rawMarkdownBody}</p> */}
        </li>
      ))}
    </StyledUl>
  );
};

export default KeyFeatures;

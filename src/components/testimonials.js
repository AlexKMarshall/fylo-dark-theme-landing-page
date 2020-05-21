import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import styled from "styled-components";
import Img from "gatsby-image";

const StyledTestimonials = styled.div`
  margin: 0 70px;
  display: flex;
  justify-content: space-between;

  figure {
    padding: 45px 25px 25px 25px;
    border-radius: 10px;
    background: hsl(219, 30%, 18%);
  }

  blockquote {
    margin: 0;
  }
`;

const Avatar = styled.div`
  width: 25px;
  height: 25px;
  border-radius: 50%;
  overflow: hidden;
`;

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
              picture {
                childImageSharp {
                  fluid(maxWidth: 24) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
      }
    }
  `);

  return (
    <StyledTestimonials>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <figure key={node.id}>
          <blockquote>{node.rawMarkdownBody}</blockquote>
          <figcaption>
            <h5>
              <cite>{node.frontmatter.name}</cite>
            </h5>
            {`${node.frontmatter.position}, ${node.frontmatter.company}`}
            <Avatar>
              <Img fluid={node.frontmatter.picture.childImageSharp.fluid} />
            </Avatar>
          </figcaption>
        </figure>
      ))}
    </StyledTestimonials>
  );
};

export default Testimonials;

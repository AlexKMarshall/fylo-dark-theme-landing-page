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
    margin-bottom: 20px;
    letter-spacing: 0.03em;
  }

  figcaption {
    display: flex;
    align-items: flex-end;
  }
`;

const ProfilePicture = styled.div`
  width: 25px;
  height: 25px;
  border-radius: 50%;
  overflow: hidden;
`;

const Author = styled.div`
  margin-left: 7px;
  font-size: 8px;
  line-height: 1em;

  cite {
    display: block;
    font-family: Raleway, sans-serif;
    font-size: 12px;
    font-style: normal;
    font-weight: 700;
    margin-bottom: 8px;
  }
`;

const Testimonials = () => {
  const data = useStaticQuery(graphql`
    query testimonials {
      allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/testimonials/" } }
        sort: { fields: fileAbsolutePath }
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
            <ProfilePicture>
              <Img fluid={node.frontmatter.picture.childImageSharp.fluid} />
            </ProfilePicture>
            <Author>
              <cite>{node.frontmatter.name}</cite>
              {`${node.frontmatter.position}, ${node.frontmatter.company}`}
            </Author>
          </figcaption>
        </figure>
      ))}
    </StyledTestimonials>
  );
};

export default Testimonials;

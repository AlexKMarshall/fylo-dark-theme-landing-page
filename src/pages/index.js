import React from "react";
import { graphql, Link } from "gatsby";

import Layout from "../components/layout";
// import Image from "../components/image";
import SEO from "../components/seo";

const IndexPage = ({ data }) => {
  console.log(data.allMarkdownRemark);
  return (
    <Layout>
      <SEO title="Landing Page" />
      <h1> All your files in one secure location, accessible anywhere.</h1>
      <p>
        Fylo stores all your most important files in one secure location. Access
        them wherever you need, share and collaborate with friends family, and
        co-workers.
      </p>
      <button>Get Started</button>

      <ul>
        <li>
          <h4>Access your files, anywhere</h4>
          <p>
            The ability to use a smartphone, tablet, or computer to access your
            account means your files follow you everywhere.
          </p>
        </li>
        <li>
          <h4>Security you can trust</h4>
          <p>
            2-factor authentication and user-controlled encryption are just a
            couple of the security features we allow to help secure your files.
          </p>
        </li>
        <li>
          <h4>Real-time collaboration</h4>
          <p>
            Securely share files and folders with friends, family and colleagues
            for live collaboration. No email attachments required.
          </p>
        </li>
        <li>
          <h4>Store any type of file</h4>
          <p>
            Whether you're sharing holidays photos or work documents, Fylo has
            you covered allowing for all file types to be securely stored and
            shared.
          </p>
        </li>
      </ul>

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

      <h3>Get early access today</h3>
      <p>
        It only takes a minute to sign up and our free starter tier is extremely
        generous. If you have any questions, our support team would be happy to
        help you.
      </p>
      <input type="text" />
      <button>Get Started For Free</button>

      {/* <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div> */}
    </Layout>
  );
};

export default IndexPage;

export const query = graphql`
  query {
    allMarkdownRemark {
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
`;

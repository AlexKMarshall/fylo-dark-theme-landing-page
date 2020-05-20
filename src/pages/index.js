import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
// import Image from "../components/image";
import SEO from "../components/seo";
import Testimonials from "../components/testimonials";
import KeyFeatures from "../components/key-features";

const IndexPage = ({ data }) => {
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
      <KeyFeatures />

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

      <Testimonials />

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

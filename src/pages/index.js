import React from "react";
// import { Link } from "gatsby";

import Layout from "../components/layout";
// import Image from "../components/image";
import SEO from "../components/seo";

const IndexPage = () => (
  <Layout>
    <SEO title="Landing Page" />
    <h1> All your files in one secure location, accessible anywhere.</h1>
    <p>
      Fylo stores all your most important files in one secure location. Access
      them wherever you need, share and collaborate with friends family, and
      co-workers.
    </p>
    <button>Get Started</button>

    {/* <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div> */}
  </Layout>
);

export default IndexPage;

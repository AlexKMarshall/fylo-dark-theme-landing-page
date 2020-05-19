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

    <ul>
      <li>
        <header>Access your files, anywhere</header>
        <section>
          The ability to use a smartphone, tablet, or computer to access your
          account means your files follow you everywhere.
        </section>
      </li>
      <li>
        <header>Security you can trust</header>
        <section>
          2-factor authentication and user-controlled encryption are just a
          couple of the security features we allow to help secure your files.
        </section>
      </li>
      <li>
        <header>Real-time collaboration</header>
        <section>
          Securely share files and folders with friends, family and colleagues
          for live collaboration. No email attachments required.
        </section>
      </li>
      <li>
        <header>Store any type of file</header>
        <section>
          Whether you're sharing holidays photos or work documents, Fylo has you
          covered allowing for all file types to be securely stored and shared.
        </section>
      </li>
    </ul>

    {/* <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div> */}
  </Layout>
);

export default IndexPage;

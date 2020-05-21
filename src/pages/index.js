import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import HeroSection from "../components/hero-section";
import SEO from "../components/seo";
import Testimonials from "../components/testimonials";
import KeyFeatures from "../components/key-features";
import InfoSection from "../components/info-section";

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="Landing Page" />

      <HeroSection />
      <KeyFeatures />
      <InfoSection />

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

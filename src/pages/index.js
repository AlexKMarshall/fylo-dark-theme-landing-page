import React from "react";

import Layout from "../components/layout";
import HeroSection from "../components/hero-section";
import SEO from "../components/seo";
import Testimonials from "../components/testimonials";
import KeyFeatures from "../components/key-features";
import InfoSection from "../components/info-section";
import SignUp from "../components/sign-up";

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="Landing Page" />

      <HeroSection />
      <KeyFeatures />
      <InfoSection />

      <Testimonials />

      <SignUp />
    </Layout>
  );
};

export default IndexPage;

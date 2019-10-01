import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import Image from "../components/image";
import SEO from "../components/seo";

const IndexPage = () => (
  <Layout>
    <SEO title="Healthy Climate Tree Finder" />
    {/* <h1>Tropical Tree Finder</h1> */}
    <p>Welcome to Healthy Climate's tree finder.</p>
    <p>Let's find the right tree for you.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem`, border: `1px solid #eee`, padding: `8px`, boxSizing: 'border-box', boxShadow: '0 1px 2px 1px #eee'}}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
);

export default IndexPage;

import React from 'react';
// import { Link } from 'gatsby';
import './index.css';

import Layout from '../components/layout';

const IndexPage = () => (
  <Layout>
    <div className="core">
      <h1 className="logo">Elementary</h1>
      <p className="sub-logo">Ruthlessly Common React Components</p>
      <a className="glow-button">Get Started</a>
      <a className="glow-button">Github</a>
    </div>
  </Layout>
);

export default IndexPage;

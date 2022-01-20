import React from 'react';
import Layout from '../components/layout';

const content = {
  title: "À propos",
}

const AboutPage = () => {
  return (
    <Layout title="À propops">
      <div className="site-about">
        <h1>{content.title}</h1>
      </div>
    </Layout>
  )
}

export default AboutPage;
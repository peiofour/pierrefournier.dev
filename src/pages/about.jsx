import React from 'react';
import Layout from '../components/layout';
import { graphql } from 'gatsby';

export const pageQuery = graphql`
query {
  markdownRemark(frontmatter: {title: {eq: "À propos de moi"}}) {
    html
  }
}
`

const AboutPage = ({ data: { markdownRemark }}) => {
  const { html } = markdownRemark;
  return (
    <Layout title="À propos">
      <div className="post site-about" dangerouslySetInnerHTML={{__html: html}} />
    </Layout>
  )
}

export default AboutPage;
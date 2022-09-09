import React from 'react';
import Layout from '../components/Layout';
import Seo from "../components/Seo"

import { graphql } from 'gatsby';

export const pageQuery = graphql`
query {
  markdownRemark(frontmatter: {title: {eq: "À propos"}}) {
    html
  }
}
`

const AboutPage = ({ data: { markdownRemark }}) => {
  const { html } = markdownRemark;
  return (
    <Layout>
      <Seo 
        title={"À propos"}
        description={"Je m'appelle Pierre Fournier, j'ai 25 ans, je suis développeur fullstack freelance."}
        image={"https://res.cloudinary.com/pierrefournier-dev/image/upload/v1648208768/about/DSCF7848_nobjf9.jpg"}
        slug={"about"}
        type="website"
        keywords={["pierre fournier", "développeur","freelance", "blog", "pierre", "fournier", "tech", "startup", "politique"]}
      />
      <div className="post site-about" dangerouslySetInnerHTML={{__html: html}} />
    </Layout>
  )
}

export default AboutPage;
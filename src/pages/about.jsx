import React from 'react';
import Layout from '../components/Layout';
import Seo from "../components/Seo"

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
    <Layout>
      <Seo 
        title={"À propos"}
        description={"J'ai 24 ans, j'habite à Toulouse, dans le sud de la France, je suis originaire du Pays Basque."}
        image={"https://res.cloudinary.com/pierrefournier-dev/image/upload/v1648208768/about/DSCF7848_nobjf9.jpg"}
        slug={"about"}
        type="website"
      />
      <div className="post site-about" dangerouslySetInnerHTML={{__html: html}} />
    </Layout>
  )
}

export default AboutPage;
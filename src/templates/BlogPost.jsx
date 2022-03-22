import React from 'react';
import Layout from '../components/layout';
import { graphql } from "gatsby"

export const query = graphql`
 query($id: String!) {
    markdownRemark(id: {eq: $id}) {
      html
      frontmatter {
        date
        title
        headimage
      }
    }
  }
`

const options = { year: 'numeric', month: 'long', day: 'numeric' };

const BlogPost = ({ data }) => {
  const clearDate = new Date(data.markdownRemark.frontmatter.date).toLocaleDateString("fr-FR", options)

  return (
    <Layout className="post" title={data.markdownRemark.frontmatter.title}>
      <img src={data.markdownRemark.frontmatter.headimage} alt={data.markdownRemark.frontmatter.title}/>
      <h5>{clearDate}</h5>
      <div dangerouslySetInnerHTML={{__html: data.markdownRemark.html}} />
    </Layout>
  )
}

export default BlogPost;
import React from 'react';
import Layout from '../components/Layout';
import Seo from '../components/Seo'
import { graphql } from "gatsby"

export const query = graphql`
 query SinglePostQuery($id: String!) {
    markdownRemark(id: {eq: $id}) {
      html
      frontmatter {
        date
        title
        description
        image
        imagedescription
        author
        slug
      }
    }
  }
`

const options = { year: 'numeric', month: 'long', day: 'numeric' };

const BlogPost = ({ data }) => {
  const clearDate = new Date(data.markdownRemark.frontmatter.date).toLocaleDateString("fr-FR", options)

  return (
      
      <Layout className="post" title={data.markdownRemark.frontmatter.title}>
        <Seo 
          title={data.markdownRemark.frontmatter.title}
          description={data.markdownRemark.frontmatter.description}
          image={data.markdownRemark.frontmatter.image}
          author={data.markdownRemark.frontmatter.author}
          keywords={data.markdownRemark.frontmatter.keywords}
          url={`https://www.pierrefournier.dev/blog/${data.markdownRemark.frontmatter.slug}`}
        />
        <img src={data.markdownRemark.frontmatter.image} alt={data.markdownRemark.frontmatter.title}/>
        <em>{data.markdownRemark.frontmatter.imagedescription}</em>
        <h1>{data.markdownRemark.frontmatter.title}</h1>
        <h5>{data.markdownRemark.frontmatter.author} - {clearDate}</h5>
        <h3>{data.markdownRemark.frontmatter.description}</h3>
        <div dangerouslySetInnerHTML={{__html: data.markdownRemark.html}} />
      </Layout>
  )
}

export default BlogPost;
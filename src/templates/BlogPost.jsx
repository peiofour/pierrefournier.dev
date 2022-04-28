import React from 'react';
import Layout from '../components/Layout';
import Seo from '../components/Seo'
import { RiLinkedinFill, RiTelegramFill, RiTwitterFill, RiFacebookFill, RiWhatsappFill } from "react-icons/ri"
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

const ShareButtons = ({data}) => (
  <>
    <div className="share-buttons">
      <button className="share-button twitter"$
        onClick={() => window.open(`https://twitter.com/share?url=https://www.pierrefournier.dev/blog/${data.markdownRemark.frontmatter.slug}&text=${'"'+data.markdownRemark.frontmatter.title+'" - Le Blog de Pierre'}`, '_blank').focus()}  >
        <RiTwitterFill size={25} /> 
        <h5>Tweeter</h5>
      </button>
      <button className="share-button facebook"
        onClick={() => window.open(`https://www.facebook.com/sharer.php?u=https://www.pierrefournier.dev/blog/${data.markdownRemark.frontmatter.slug}&t=${'"'+data.markdownRemark.frontmatter.title+'" - Le Blog de Pierre'}`, '_blank').focus()} >
        <RiFacebookFill size={25} /> 
        <h5>Partager</h5>
      </button>
      <button className="share-button telegram" 
        onClick={() => window.open(`https://t.me/share/url?url=https://www.pierrefournier.dev/blog/${data.markdownRemark.frontmatter.slug}&text=${'"'+data.markdownRemark.frontmatter.title+'" - Le Blog de Pierre'}`, '_blank').focus()} >
        <RiTelegramFill size={25} /> 
        <h5>Partager</h5>
      </button>
      <button className="share-button whatsapp" 
        onClick={() => window.open(`https://wa.me/?text=https://www.pierrefournier.dev/blog/${data.markdownRemark.frontmatter.slug}`, '_blank').focus()}
      >
        <RiWhatsappFill size={25} /> 
        <h5>Partager</h5>
      </button>
      <button className="share-button linkedin"
        onClick={() => window.open(`https://www.linkedin.com/sharing/share-offsite/?url=https://www.pierrefournier.dev/blog/${data.markdownRemark.frontmatter.slug}`, '_blank').focus()}
      >
        <RiLinkedinFill size={25} /> 
        <h5>Partager</h5>
      </button>
    </div>
  </>
)

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
        <ShareButtons data={data} />
        <h3>{data.markdownRemark.frontmatter.description}</h3>
        <div dangerouslySetInnerHTML={{__html: data.markdownRemark.html}} />
      </Layout>
  )
}




export default BlogPost;
import React from "react"
import Layout from "../components/layout"
import BlogCard from "../components/blog-card";
import { Link, graphql } from 'gatsby'
import { StaticImage } from "gatsby-plugin-image"
import { RiInstagramFill, RiLinkedinFill, RiGithubFill, RiTelegramFill } from "react-icons/ri"

export const pageQuery = graphql`
query {
  allMarkdownRemark(filter: {frontmatter: {type: {eq: "blog"}}}, sort: {fields: frontmatter___date}) {
    edges {
      node {
        frontmatter {
          title
          subtitle
          date
          headimage
          slug
        }
        id
      }
    }
    totalCount
  }
}
`

const content = {
  title: "Salut, moi c'est Pierre.",
  text: "Je suis développeur, je vis à Toulouse dans le sud de la France. Ici je poste des articles de blog sur la tech, les startups, le numérique en France et dans le monde, et sur bien d'autres sujets.",
  more: "En savoir plus"
}

// markup
const IndexPage = ({ data: { allMarkdownRemark }}) => {
  return (
    <Layout>
      <div className="site-index flex-row">
        <div className="site-index__image">
          <StaticImage
            src="https://res.cloudinary.com/pierrefournier-dev/image/upload/v1648208768/about/DSCF7848_nobjf9.jpg"
            alt="Moi"
            width="350"
            height="350"
            loading="lazy"
            style={{borderRadius: '50%'}}
          />
        </div>
        <div className="site-index__content">
          <h1>{content.title}</h1>
          <p>{content.text}</p>
          <div className="site-index__content--button">
            <Link to="/about" className="button">{content.more}</Link>
          </div>
          
          <div className="site-index__content--social-icons">
            <Link to="https://www.instagram.com/pierref0urn1er" target="_blank">
              <RiInstagramFill />
            </Link>
            <Link to="https://www.linkedin.com/in/pierrefournier1" target="_blank">
              <RiLinkedinFill />
            </Link>
            <Link to="https://github.com/peiofour" target="_blank">
              <RiGithubFill />
            </Link>
            <Link to="https://t.me/superbasque" target="_blank">
              <RiTelegramFill />
            </Link>
          </div>
        </div>
      </div>

      <h2>Derniers posts</h2>

      <ul className="card-list">
        {
          allMarkdownRemark.edges.map((edge) =>
            <BlogCard
              title={edge.node.frontmatter.title}
              subtitle={edge.node.frontmatter.subtitle}
              date={edge.node.frontmatter.date}
              image={edge.node.frontmatter.headimage}
              link={`blog/${edge.node.frontmatter.slug}`}
            />
          )
        }
        
      </ul>
    </Layout>
  )
}

export default IndexPage

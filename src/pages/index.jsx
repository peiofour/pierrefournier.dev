import React from "react"
import Layout from "../components/Layout"
import BlogCard from "../components/BlogCard";
import Seo from "../components/Seo"
import { Link, graphql } from 'gatsby'
import { StaticImage } from "gatsby-plugin-image"
import { RiInstagramFill, RiLinkedinFill, RiGithubFill, RiTelegramFill } from "react-icons/ri"
import MaltIcon from "../assets/svg/malt.svg"

export const pageQuery = graphql`
query {
  allMarkdownRemark(filter: {frontmatter: {type: {eq: "blog"}}}, sort: {fields: frontmatter___date}) {
    edges {
      node {
        frontmatter {
          title
          description
          date
          image
          imagedescription
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
  text: "Je suis développeur fullstack en freelance, je vis à Toulouse dans le sud de la France. Ici je poste des articles de blog sur la tech, les startups, le numérique en France et dans le monde, et sur bien d'autres sujets.",
  more: "En savoir plus"
}

// markup
const IndexPage = ({ data: { allMarkdownRemark }}) => {
  return (
    <Layout>
      <Seo
        description={content.text}
        image={"https://res.cloudinary.com/pierrefournier-dev/image/upload/v1648208768/about/DSCF7848_nobjf9.jpg"}
        keywords={["pierre fournier", "développeur","freelance", "blog", "pierre",
        "fournier", "tech", "startup", "politique", "react", "react-native", "ruby on rails", "rails", "node.js", "next.js", "vue.js"]}
        slug=""
        type="website"
      />
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
            <Link to="https://www.linkedin.com/in/pierrefournier1" target="_blank">
              <RiLinkedinFill className="svg_icon" />
            </Link>
            <Link to="https://github.com/peiofour" target="_blank">
              <RiGithubFill className="svg_icon" />
            </Link>
            <Link to="https://www.malt.fr/profile/pierrefournier2" target="_blank">
              <MaltIcon stroke="currentColor" fill="currentColor" width="1em" height="1em" className="svg_icon" />
            </Link>
            <Link to="https://www.instagram.com/pierrefournier__" target="_blank">
              <RiInstagramFill className="svg_icon" />
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
              subtitle={edge.node.frontmatter.description}
              date={edge.node.frontmatter.date}
              image={edge.node.frontmatter.image}
              link={`blog/${edge.node.frontmatter.slug}`}
            />
          )
        }
        
      </ul>
    </Layout>
  )
}

export default IndexPage

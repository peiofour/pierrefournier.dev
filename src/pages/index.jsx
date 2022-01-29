import React from "react"
import Layout from "../components/layout"
// import BlogCard from "../components/blog-card";
import { Link } from 'gatsby'
import { StaticImage } from "gatsby-plugin-image"
import { RiInstagramFill, RiLinkedinFill, RiGithubFill, RiTelegramFill } from "react-icons/ri"


const content = {
  title: "Salut, moi c'est Pierre.",
  text: "Je suis développeur, je vis à Toulouse dans le sud de la France. Ici je poste des articles de blog sur la tech, les startups, le numérique en France et dans le monde, et sur bien d'autres sujets.",
  more: "En savoir plus"
}

// markup
const IndexPage = () => {
  return (
    <Layout title="Le blog de Pierre">
      <div className="site-index flex-row">
        <div className="site-index__image">
          <StaticImage
            src="https://media-exp1.licdn.com/dms/image/C4D03AQE1VW3HWTPxWA/profile-displayphoto-shrink_800_800/0/1636909960904?e=1648080000&v=beta&t=jFu5FHHjifKeyrrcYMcGWz6nDqxPZDFOCrpN5NbhfTU"
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
        
      </ul>
    </Layout>
  )
}

export default IndexPage

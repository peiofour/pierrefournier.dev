import React from "react"
import Layout from "../components/layout"
import { Link } from 'gatsby'
import { StaticImage } from "gatsby-plugin-image"


const content = {
  title: "Salut, moi c'est Pierre.",
  text: "Je suis développeur, je vis à Toulouse dans le sud de la France. Ici je post des articles de blog sur la tech, les startups, le numérique en France et dans le monde, et sur bien d'autres sujets.",
  more: "En savoir plus"
}

// markup
const IndexPage = () => {
  return (
    <Layout title="Le blog de Pierre">
      <div className="site-index">
        <div className="site-index__content flex-col">
          <h1>
            {content.title}
          </h1>
          <p>{content.text}</p>
          <Link to="/about">{content.more}</Link>
          
          <div className="social-icons">

          </div>
        </div>
        <div className="site-index__image flex-col">
          <StaticImage
            src="https://placekitten.com/800/600"
            alt="Moi"
            width={800}
            height={600}
          />
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage

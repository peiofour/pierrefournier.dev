import React from "react"
import Layout from "../components/layout"
import BlogCard from "../components/blog-card";
import { Link } from 'gatsby'
import { StaticImage } from "gatsby-plugin-image"
import { RiInstagramFill, RiLinkedinFill, RiGithubFill } from "react-icons/ri"


const content = {
  title: "Salut, moi c'est Pierre.",
  text: "Je suis développeur, je vis à Toulouse dans le sud de la France. Ici je post des articles de blog sur la tech, les startups, le numérique en France et dans le monde, et sur bien d'autres sujets.",
  more: "En savoir plus"
}

// markup
const IndexPage = () => {
  return (
    <Layout title="Le blog de Pierre">
      <div className="site-index flex-row">
        <div className="site-index__image">
          <StaticImage
            src="https://placekitten.com/800/600"
            alt="Moi"
            width="350"
            height="350"
          />
        </div>
        <div className="site-index__content">
          <h1>{content.title}</h1>
          <p>{content.text}</p>
          <div className="site-index__content--button">
            <Link to="/about" className="button">{content.more}</Link>
          </div>
          
          <div className="site-index__content--social-icons">
            <Link to="https://www.instagram.com/pierref0urn1er" >
              <RiInstagramFill />
            </Link>
            <Link to="https://www.linkedin.com/in/pierrefournier1">
              <RiLinkedinFill />
            </Link>
            <Link to="https://github.com/peiofour">
              <RiGithubFill />
            </Link>
          </div>
        </div>
      </div>

      <h2>Derniers posts</h2>

      <ul className="card-list">
        <BlogCard title="Test 1" subtitle="lorem ipsum mes " link="/" />
        <BlogCard title="Test 1" subtitle="lorem ipsum mes " link="/" />
        <BlogCard title="Test 1" subtitle="lorem ipsum mes " link="/" />
        <BlogCard title="Test 1" subtitle="lorem ipsum mes " link="/" />
        <BlogCard title="Test 1" subtitle="lorem ipsum mes " link="/" />
        <BlogCard title="Test 1" subtitle="lorem ipsum mes " link="/" />
        <BlogCard title="Test 1" subtitle="lorem ipsum mes " link="/" />
      </ul>
    </Layout>
  )
}

export default IndexPage

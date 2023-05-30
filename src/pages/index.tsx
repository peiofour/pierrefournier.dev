import React from 'react'
import Layout from '../components/Layout'
import BlogCard from '../components/BlogCard'
import { Link, graphql } from 'gatsby'
import { RiInstagramFill } from '@react-icons/all-files/ri/RiInstagramFill'
import { RiGithubFill } from '@react-icons/all-files/ri/RiGithubFill'
import { RiLinkedinFill } from '@react-icons/all-files/ri/RiLinkedinFill'
import Seo from '../components/Seo'
import { StaticImage } from 'gatsby-plugin-image'

export const pageQuery = graphql`
	query {
		allMarkdownRemark(
			filter: { frontmatter: { type: { eq: "blog" } } },
			sort: { fields: frontmatter___date, order: DESC },
			limit: 10
		) {
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
					excerpt
					id
				}
			}
			totalCount
		}
	}
`

const content = {
	title: "Salut, moi c'est Pierre.",
	text: "Je suis développeur fullstack en freelance, je vis à Toulouse dans le sud de la France. Ici je publie des articles de blog sur la tech, les startups, la politique, le numérique en France et dans le monde.",
	more: 'En savoir plus',
}

export function Head() {
  return (
    <Seo
      description={content.text}
      image={
        'https://res.cloudinary.com/pierrefournier-dev/image/upload/v1663322170/about/DSCF7848_Original_h5wxfy.jpg'
      }
      keywords={[
        'pierre fournier',
				'jeunes avec macron',
				'renaissance',
        'développeur',
        'freelance',
        'blog',
        'pierre',
        'fournier',
        'tech',
        'startup',
        'politique',
      ]}
      slug=''
      type='website'
    />
  )
}

// const MaltIcon = require('../assets/svg/malt.svg') as React.FunctionComponent<React.SVGAttributes<SVGElement>>

interface IndexPageProps {
  data: {
    allMarkdownRemark: {
      edges: {
        node: {
          frontmatter: {
            title: string
            description: string
            date: string
            image: string
            imagedescription: string
            slug: string
          }
					excerpt: string
          id: string
        }
      }[]
      totalCount: number
    }
  }
}

const IndexPage = ({ data: { allMarkdownRemark } }: IndexPageProps) => {
	return (
		<Layout>
			<div className='site-index flex-row'>
				<div className='site-index__image'>
					<StaticImage
						src='https://res.cloudinary.com/pierrefournier-dev/image/upload/v1684932586/about/IMG_0373_eml1fx.jpg'
						alt='Pierre Fournier'
						width={350}
					/>
				</div>
				<div className='site-index__content'>
					<h1>{content.title}</h1>
					<p>{content.text}</p>
					<div className='site-index__content--button'>
						<Link to='/about' className='button'>
							{content.more}
						</Link>
					</div>

					<div className='site-index__content--social-icons'>
						<Link
							to='https://www.linkedin.com/in/pierrefournier1'
							target='_blank'
						>
							<RiLinkedinFill className='svg_icon' />
						</Link>
						<Link to='https://github.com/peiofour' target='_blank'>
							<RiGithubFill className='svg_icon' />
						</Link>
						{/* <Link
							to='https://www.malt.fr/profile/pierrefournier2'
							target='_blank'
						>
							<MaltIcon
								stroke='currentColor'
								fill='currentColor'
								width='1em'
								height='1em'
								className='svg_icon'
							/>
						</Link> */}
						<Link
							to='https://www.instagram.com/pierrefournier__'
							target='_blank'
						>
							<RiInstagramFill className='svg_icon' />
						</Link>
					</div>
				</div>
			</div>

			<h2 className='text-center'>Derniers posts</h2>

			<ul className='card-list row justify-content-center px-0'>
				{allMarkdownRemark.edges.map((edge) => (
					<li className='col-10 col-md d-flex'>
						<BlogCard
							title={edge.node.frontmatter.title}
							subtitle={edge.node.excerpt}
							date={edge.node.frontmatter.date}
							image={edge.node.frontmatter.image}
							link={`blog/${edge.node.frontmatter.slug}`}
						/>
					</li>
				))}
			</ul>
		</Layout>
	)
}

export default IndexPage

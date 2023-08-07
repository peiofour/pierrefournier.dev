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
			filter: { frontmatter: { type: { eq: "blog" } } }
			sort: { fields: frontmatter___date, order: DESC }
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
	text: 'Je suis développeur freelance, je vis à Toulouse dans le sud de la France. Ici je publie des articles de blog sur la tech, les startups, la politique, le numérique en France et dans le monde.',
	more: 'En savoir plus',
}

export function Head() {
	return (
		<Seo
			description={content.text}
			image={
				'https://res.cloudinary.com/pierrefournier-dev/image/upload/v1691334155/4F7A6F07-9294-4BC2-BEA5-8B4F9E9E8C3F-1227-000000C3A1705D79-min_ucmyu0.jpg'
			}
			keywords={[
				'pierre fournier',
				'développeur',
				'freelance',
				'fullstack',
				'Toulouse',
				'blog',
				'pierre',
				'fournier',
				'tech',
				'startup',
				'politique',
				'numérique',
				'France',
			]}
			slug=''
			type='website'
		/>
	)
}


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
						src='https://res.cloudinary.com/pierrefournier-dev/image/upload/v1691334155/4F7A6F07-9294-4BC2-BEA5-8B4F9E9E8C3F-1227-000000C3A1705D79-min_ucmyu0.jpg'
						alt='Pierre Fournier'
						width={350}
						placeholder='blurred'
					/>
				</div>
				<div className='site-index__content'>
					<h1>{content.title}</h1>
					<p>{content.text}</p>
					<p>Collaborez avec moi ⬇️</p>
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
						<Link
							to='https://www.malt.fr/profile/pierrefournier2'
							target='_blank'
						>
							<svg
								stroke='currentColor'
								fill='currentColor'
								className='svg_icon'
								viewBox="0 0 40 40"
								stroke-width="0"
								width='1em'
								height='1em'
								xmlns="http://www.w3.org/2000/svg"
							>
								<g id='Calque_2_00000151527634446526193930000009604411442482412418_'>
									<g id='Calque_1-2'>
										<path d='M32.2,5.4c-2.8-2.8-5.9-1-7.8,0.9L6.5,24.3C4.6,26.2,2.6,29,5.6,32s5.9,1,7.8-0.9l17.9-17.9C33.2,11.3,35,8.3,32.2,5.4z' />
										<path
											d='M15.1,4.7l3.8,3.8l3.9-3.9c0.3-0.3,0.5-0.5,0.8-0.7c-0.2-2.4-2.3-4.1-4.7-3.9c-3.1,0-4.3,1.9-4.7,3.9
			C14.5,4.1,14.8,4.4,15.1,4.7z'
										/>
										<path d='M22.7,32.9L18.9,29l-3.8,3.8c-0.3,0.3-0.6,0.5-0.9,0.8c0.4,2.1,1.7,4,4.7,4s4.2-1.9,4.7-4C23.2,33.4,23,33.2,22.7,32.9z' />
										<path d='M13.4,13.9H6.1c-2.7,0-6.1,0.9-6.1,4.9c0,3,1.9,4.2,4,4.7C4.2,23.1,13.4,13.9,13.4,13.9z' />
										<path d='M33.7,14.1c-0.2,0.3-9.5,9.5-9.5,9.5h7.2c2.7,0,6.1-0.6,6.1-4.9C37.8,16.4,36.1,14.3,33.7,14.1z' />
										<path d='M15.9,11.5l1.3-1.3l-3.8-3.8c-1.9-1.9-4.8-3.9-7.8-0.9c-1.8,1.5-2,4.2-0.5,6.1C5.4,11.5,15.9,11.5,15.9,11.5z' />
										<path d='M21.9,26l-1.3,1.3l3.9,3.9c1.9,1.9,4.9,3.7,7.8,0.9c2.1-2.1,1.6-4.3,0.5-6.1C32.3,26,21.9,26,21.9,26z' />
									</g>
								</g>
							</svg>
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

import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Seo from '../components/Seo'

export const pageQuery = graphql`
	query PortfolioQuery {
		allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/portfolio/" } }) {
			edges {
				node {
					html
				}
			}
		}
	}
`

export function Head() {
	return (
		<Seo
			title='Portfolio'
			description='Portfolio de Pierre Fournier, développeur freelance à Toulouse.'
			image='https://res.cloudinary.com/pierrefournier-dev/image/upload/c_scale,h_1566,q_100/v1691334155/4F7A6F07-9294-4BC2-BEA5-8B4F9E9E8C3F-1227-000000C3A1705D79-min_ucmyu0.webp'
			keywords={[
				'portfolio',
				'pierre',
				'fournier',
				'développeur',
				'freelance',
				'web',
				'fullstack',
				'javascript',
				'react',
				'gatsby',
			]}
		/>
	)
}

const PortfolioPage = ({ data: { allMarkdownRemark } }) => {
	return (
		<Layout>
			<div className='max-w-4xl flex flex-col gap-10'>
				<div className='flex flex-col gap-5'>
					<h1 className='text-center'>Portfolio</h1>
					<p>
						Vous trouverez ici les projets que j'ai réalisé en tant que
						freelance, en tant que salarié, ainsi que mes projets personnels.
					</p>
				</div>
				<div
					className='post'
					dangerouslySetInnerHTML={{
						__html: allMarkdownRemark.edges[0].node.html,
					}}
				></div>
			</div>
		</Layout>
	)
}

export default PortfolioPage

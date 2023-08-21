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
			<div className='post site-about'>
				<h1>Portfolio</h1>
				<img src='' alt='' />
				<p>
					Vous trouverez ici les projets que j'ai réalisé en tant que freelance,
					en tant que salarié, ainsi que mes projets personnels.
				</p>
			</div>
			<div className='post'>
				<div
					dangerouslySetInnerHTML={{
						__html: allMarkdownRemark.edges[0].node.html,
					}}
				></div>
			</div>
		</Layout>
	)
}

export default PortfolioPage

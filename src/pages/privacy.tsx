import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Seo from '../components/Seo'

export const pageQuery = graphql`
	query PrivacyQuery {
		allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/privacy/" } }) {
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
			title='Politique de confidentialité'
			description='Politique de confidentialité'
		/>
	)
}

const PortfolioPage = ({ data: { allMarkdownRemark } }) => {
	return (
		<Layout>
			<div className='post site-about'>
				<h1>Politique de confidentialité</h1>
			</div>
			<div
				className='post'
				dangerouslySetInnerHTML={{
					__html: allMarkdownRemark.edges[0].node.html,
				}}
			></div>
		</Layout>
	)
}

export default PortfolioPage

import React from 'react'
import Layout from '../components/Layout'
import Seo from '../components/Seo'
import { RiTwitterFill } from '@react-icons/all-files/ri/RiTwitterFill'
import { RiFacebookFill } from '@react-icons/all-files/ri/RiFacebookFill'
import { RiLinkedinFill } from '@react-icons/all-files/ri/RiLinkedinFill'
import { RiTelegramFill } from '@react-icons/all-files/ri/RiTelegramFill'
import { RiWhatsappFill } from '@react-icons/all-files/ri/RiWhatsappFill'
import { Link, graphql } from 'gatsby'

export const query = graphql`
	query SinglePostQuery($id: String!) {
		markdownRemark(id: { eq: $id }) {
			html
			frontmatter {
				date
				title
				description
				image
				imagedescription
				author
				slug
				keywords
			}
		}
	}
`

function openLink(link: string) {
	const win = window.open(link, '_blank')
	if (win) {
		win.focus()
	}
}

interface BlogPostProps {
	data: {
		markdownRemark: {
			html: string
			frontmatter: {
				date: string
				title: string
				description: string
				image: string
				imagedescription: string
				author: string
				slug: string
				keywords: string[]
			}
		}
	}
}

const ShareButtons = ({ data }: BlogPostProps) => (
	<>
		<div className='share-buttons'>
			<Link
				to={`https://twitter.com/share?url=https://www.pierrefournier.dev/blog/${
					data.markdownRemark.frontmatter.slug
				}&text=${
					'"' +
					data.markdownRemark.frontmatter.title +
					'" - Le Blog de Pierre'
				}`}
				target='_blank'
			>
				<RiTwitterFill size={25} />
			</Link>
			<Link
				to={`https://www.facebook.com/sharer.php?u=https://www.pierrefournier.dev/blog/${
					data.markdownRemark.frontmatter.slug
				}&t=${
					'"' +
					data.markdownRemark.frontmatter.title +
					'" - Le Blog de Pierre'
				}`}
				target='_blank'
			>
				<RiFacebookFill size={25} />
			</Link>
			<Link
				to={`https://t.me/share/url?url=https://www.pierrefournier.dev/blog/${
					data.markdownRemark.frontmatter.slug
				}&text=${
					'"' +
					data.markdownRemark.frontmatter.title +
					'" - Le Blog de Pierre'
				}`}
				target='_blank'
			>
				<RiTelegramFill size={25} />
			</Link>
			<Link
				to={`https://wa.me/?text=https://www.pierrefournier.dev/blog/${data.markdownRemark.frontmatter.slug}`}
				target='_blank'
			>
				<RiWhatsappFill size={25} />
			</Link>
			<Link
				to={`https://www.linkedin.com/shareArticle?mini=true&url=https://www.pierrefournier.dev/blog/${
					data.markdownRemark.frontmatter.slug
				}&title=${
					'"' +
					data.markdownRemark.frontmatter.title +
					'" - Le Blog de Pierre'
				}`}
				target='_blank'
			>
				<RiLinkedinFill size={25} />
			</Link>
		</div>
	</>
)

export function Head({ data }: BlogPostProps) {
	return (
		<Seo
			title={data.markdownRemark.frontmatter.title}
			description={data.markdownRemark.frontmatter.description}
			image={data.markdownRemark.frontmatter.image}
			keywords={data.markdownRemark.frontmatter.keywords}
			slug={data.markdownRemark.frontmatter.slug}
			type='article'
		/>
	)
}

const options: Intl.DateTimeFormatOptions = {
	year: 'numeric',
	month: 'long',
	day: 'numeric',
}

const BlogPost = ({ data }: BlogPostProps) => {
	const clearDate = new Date(
		data.markdownRemark.frontmatter.date,
	).toLocaleDateString('fr-FR', options)

	return (
		<Layout className='post'>
			<div className='post__head-image'>
				<img
					src={data.markdownRemark.frontmatter.image}
					alt={data.markdownRemark.frontmatter.title}
					className='mb-1'
				/>
				<em className='mb-0'>
					{data.markdownRemark.frontmatter.imagedescription}
				</em>
			</div>

			<h1 className='mt-3'>{data.markdownRemark.frontmatter.title}</h1>
			<p className='mt-0 mb-1'>Publié le {clearDate}</p>

			<div className='mt-3 mb-4'>
				<ShareButtons data={data} />
			</div>
			<hr />
			<div
				className='my-4'
				dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}
			/>
			<hr />
			<p className='mt-4 mb-2'>
				Partagez cet article sur les réseaux sociaux :				
			</p>
			<ShareButtons data={data} />
		</Layout>
	)
}

export default BlogPost

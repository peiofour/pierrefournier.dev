import React from 'react'
import Layout from '../components/Layout'
import Seo from '../components/Seo'
import {
	RiLinkedinFill,
	RiTelegramFill,
	RiTwitterFill,
	RiFacebookFill,
	RiWhatsappFill,
} from 'react-icons/ri'
import { graphql } from 'gatsby'

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
			<button
				className='share-button twitter'
				onClick={() =>
					openLink(
						`https://twitter.com/share?url=https://www.pierrefournier.dev/blog/${
							data.markdownRemark.frontmatter.slug
						}&text=${
							'"' +
							data.markdownRemark.frontmatter.title +
							'" - Le Blog de Pierre'
						}`,
					)
				}
			>
				<RiTwitterFill size={25} />
				<div>Tweeter</div>
			</button>
			<button
				className='share-button facebook'
				onClick={() =>
					openLink(
						`https://www.facebook.com/sharer.php?u=https://www.pierrefournier.dev/blog/${
							data.markdownRemark.frontmatter.slug
						}&t=${
							'"' +
							data.markdownRemark.frontmatter.title +
							'" - Le Blog de Pierre'
						}`,
					)
				}
			>
				<RiFacebookFill size={25} />
				<div>Partager</div>
			</button>
			<button
				className='share-button telegram'
				onClick={() =>
					openLink(
						`https://t.me/share/url?url=https://www.pierrefournier.dev/blog/${
							data.markdownRemark.frontmatter.slug
						}&text=${
							'"' +
							data.markdownRemark.frontmatter.title +
							'" - Le Blog de Pierre'
						}`,
					)
				}
			>
				<RiTelegramFill size={25} />
				<div>Partager</div>
			</button>
			<button
				className='share-button whatsapp'
				onClick={() =>
					openLink(
						`https://wa.me/?text=https://www.pierrefournier.dev/blog/${data.markdownRemark.frontmatter.slug}`,
					)
				}
			>
				<RiWhatsappFill size={25} />
				<div>Partager</div>
			</button>
			<button
				className='share-button linkedin'
				onClick={() =>
					openLink(
						`https://www.linkedin.com/sharing/share-offsite/?url=https://www.pierrefournier.dev/blog/${data.markdownRemark.frontmatter.slug}`,
					)
				}
			>
				<RiLinkedinFill size={25} />
				<div>Partager</div>
			</button>
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
				/>
				<em>{data.markdownRemark.frontmatter.imagedescription}</em>
			</div>

			<h1>{data.markdownRemark.frontmatter.title}</h1>
			<p style={{ marginBottom: 0, marginTop: 0 }}>
				<b>par {data.markdownRemark.frontmatter.author}</b>
			</p>
			<p style={{ marginTop: 0 }}>
				<i>Publié le {clearDate}</i>
			</p>

			<ShareButtons data={data} />
			<h3>{data.markdownRemark.frontmatter.description}</h3>
			<div
				dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}
			/>
		</Layout>
	)
}

export default BlogPost

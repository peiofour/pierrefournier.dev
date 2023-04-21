import React from 'react'
import { Link } from 'gatsby'

interface BlogCardProps {
	link: string
	title: string
	subtitle: string
	image: string
	date: string
}

const BlogCard = ({ link, title, subtitle, image, date }: BlogCardProps) => {
	const dateLocale = new Date(date).toLocaleDateString('fr-FR', {
		year: 'numeric',
		month: 'long',
		day: 'numeric',
	})
	return (
		<div className='card my-3 mx-auto'>
			<Link to={link}>
				<img src={image} alt={title} width='100%' />
				<div className='px-3 pb-2'>
					<h2>{title}</h2>
					<i>Le {dateLocale}</i>
					<p>{subtitle}</p>
				</div>
			</Link>
		</div>
	)
}

export default BlogCard

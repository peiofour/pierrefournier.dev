import React from 'react'
import { navigate } from 'gatsby'
import { Card } from 'react-bootstrap'

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
		<Card className='card my-3 mx-auto' onClick={() => navigate(link)}>
			<Card.Img src={image} alt={title} height={200} variant='top' />
			<Card.Body className='mt-0 pt-0'>
				<Card.Title className='mt-3 mb-0'>{title}</Card.Title>
				<Card.Subtitle className='mt-2'>{dateLocale}</Card.Subtitle>
				<Card.Text className='card-text'>
					<div dangerouslySetInnerHTML={{ __html: subtitle }} />
				</Card.Text>
			</Card.Body>
		</Card>
	)
}

export default BlogCard

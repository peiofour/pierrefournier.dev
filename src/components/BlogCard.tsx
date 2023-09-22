import React from 'react'
import { navigate } from 'gatsby'

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
		<div
			className='max-w-xs border-solid border-[1px] border-[#00000014] shadow-md rounded-xl my-3 mx-auto cursor-pointer'
			onClick={() => navigate(link)}
		>
			<img className='rounded-t-xl' src={image} alt={title} height={200} />
			<div className='px-4 py-2'>
				<h2 className='mt-3 mb-0'>{title}</h2>
				<h4 className='mt-2'>{dateLocale}</h4>
				<p className=''>
					<div dangerouslySetInnerHTML={{ __html: subtitle }} />
				</p>
			</div>
		</div>
	)
}

export default BlogCard

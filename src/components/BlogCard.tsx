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
			className='max-w-xs border-solid border-[1px] border-[#00000014] shadow-md rounded-xl my-3 mx-auto cursor-pointer w-[300px] h-[500px]'
			onClick={() => navigate(link)}
		>
			<img className='rounded-t-xl h-[200px] object-cover' src={image} alt={title} height={200} />
			<div className='px-4 py-3 gap-4 flex flex-col'>
				<div>
					<h2 className='text-xl font-bold'>{title}</h2>
					<h6 className='text-base font-medium'>{dateLocale}</h6>
				</div>
				<p className='text-[18px] '>
					<div dangerouslySetInnerHTML={{ __html: subtitle }} />
				</p>
			</div>
		</div>
	)
}

export default BlogCard

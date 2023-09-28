import React from 'react'
import { Link } from 'gatsby'
import { BsFillHeartFill } from '@react-icons/all-files/bs/BsFillHeartFill'
import { BsCodeSlash } from '@react-icons/all-files/bs/BsCodeSlash'

const Footer = () => (
	<footer className='absolute w-full clear-both bottom-0 mt-10 flex flex-wrap justify-between items-center p-5'>
		<div className='flex flex-col justify-center items-center'>
			<p className='text-normal text-center'>
			<BsCodeSlash className='inline-block text-red-500' />{' '}avec <BsFillHeartFill className='inline-block text-red-500' />{' '}
				 par Pierre Fournier
			</p>
		</div>
		<Link
			className='text-normal no-underline'
			to='/privacy'
		>
			Politique de confidentialité
		</Link>
	</footer>
)

export default Footer

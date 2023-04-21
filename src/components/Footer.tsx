import React from 'react'
import { BsFillHeartFill } from '@react-icons/all-files/bs/BsFillHeartFill'
import { BsCodeSlash } from '@react-icons/all-files/bs/BsCodeSlash'

const Footer = () => (
	<footer>
		<div className='site-footer'>
			<p>
				<span className='icon'>
					<BsCodeSlash />
				</span>{' '}
				with{' '}
				<span className='icon'>
					<BsFillHeartFill />
				</span>{' '}
				by Pierre Fournier
			</p>
		</div>
	</footer>
)

export default Footer

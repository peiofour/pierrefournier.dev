import React from 'react'
import { Link } from 'gatsby'
import { BsFillHeartFill } from '@react-icons/all-files/bs/BsFillHeartFill'
import { BsCodeSlash } from '@react-icons/all-files/bs/BsCodeSlash'

const Footer = () => (
	<footer>
		<div className='site-footer'>
			<div>
				<span className='icon'>
					<BsCodeSlash />
				</span>{' '}
				with{' '}
				<span className='icon'>
					<BsFillHeartFill />
				</span>{' '}
				by Pierre Fournier
			</div>
			<div>
				<Link style={{
					textDecoration: 'none',
					color: 'var(--textNormal)',
				}} to='/privacy'>Politique de confidentialité</Link>
			</div>
		</div>
	</footer>
)

export default Footer

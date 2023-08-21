import React, { useState } from 'react'
import { Link } from 'gatsby'
import { BsList } from '@react-icons/all-files/bs/BsList'
import { BsListNested } from '@react-icons/all-files/bs/BsListNested'

const MenuItems = [
	{
		path: '/',
		title: 'Blog',
	},
	{
		path: '/about',
		title: 'À propos',
	},
	{
		path: '/portfolio',
		title: 'Portfolio',
	}
]

interface ListLinkProps {
	children: React.ReactNode
	to: string
}

const ListLink = ({ children, to }: ListLinkProps) => (
	<li>
		<Link to={to}>{children}</Link>
	</li>
)
const listMenuItems = MenuItems.map((menuItem, i) => (
	<ListLink key={i} to={menuItem.path}>
		{menuItem.title}
	</ListLink>
))

const Header = () => {
	const [showMenu, setShowMenu] = useState(false)

	return (
		<header className='header'>
			<div className='site-header'>
				<div className='site-header__title'>
					<Link to='/'>pierre.</Link>
				</div>

				<nav>
					<button
						className='menu-icon'
						onClick={() => setShowMenu(!showMenu)}
					>
						{showMenu ? <BsListNested /> : <BsList />}
					</button>
					<ul className={showMenu ? 'menu-show' : 'menu-close'}>
						{listMenuItems}
					</ul>
				</nav>
			</div>
		</header>
	)
}

export default Header

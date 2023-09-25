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
	},
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
		<header className='p-4 flex items-center mb-10'>
			<Link className='text-4xl font-extrabold no-underline flex-1' to='/'>
				pierre.
			</Link>
			<nav className='static p-0 bg-transparent font-bold flex-0'>
				<button className=' block lg:hidden menu-icon' onClick={() => setShowMenu(!showMenu)}>
					{showMenu ? <BsListNested /> : <BsList />}
				</button>
				<ul className='hidden lg:flex gap-6'>
					{listMenuItems}
				</ul>
			</nav>
		</header>
	)
}

export default Header

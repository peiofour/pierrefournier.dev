import React, { useEffect, useState } from 'react'
import { Link } from 'gatsby'

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

function setAttributeSlowly(
	element: HTMLElement,
	attribute: string,
	finalValue: string,
	delay = 300,
) {
	const initialValue = element.getAttribute(attribute)
	const difference = Number(finalValue) - Number(initialValue)
	const increment = difference / (delay / 10)
	let currentValue = Number(initialValue)

	let interval: NodeJS.Timeout
	// Go through each step of the animation and set the attribute. Clear when the final value is reached.

	if (increment > 0) {
		interval = setInterval(() => {
			if (currentValue >= Number(finalValue)) {
				clearInterval(interval)
			} else {
				currentValue += increment
				element.setAttribute(attribute, String(currentValue))
			}
		}, 10)
	} else {
		interval = setInterval(() => {
			if (currentValue <= Number(finalValue)) {
				clearInterval(interval)
			} else {
				currentValue += increment
				element.setAttribute(attribute, String(currentValue))
			}
		}, 10)
	}
}

const Header = () => {
	const [showMenu, setShowMenu] = useState(false)

	useEffect(() => {
		const svg = document.getElementById('svg')
		const line1 = document.getElementById('line1')
		const line2 = document.getElementById('line2')

		if (!svg || !line1 || !line2) return
		if (showMenu) {
			// svg.classList.replace('rotate-0', '-rotate-90')

			//setAttributeSlowly(line1, 'x1', '4.8')
			//setAttributeSlowly(line1, 'x2', '27.2')
			setAttributeSlowly(line1, 'y1', '4.8')
			setAttributeSlowly(line1, 'y2', '27.2')

			//setAttributeSlowly(line2, 'x1', '0')
			// setAttributeSlowly(line2, 'x2', '32')
			setAttributeSlowly(line2, 'y1', '4.8')
			setAttributeSlowly(line2, 'y2', '27.2')
		} else {
			//setAttributeSlowly(line1, 'x1', '4.8')
			//setAttributeSlowly(line1, 'x2', '27.2')
			setAttributeSlowly(line1, 'y1', '9.6')
			setAttributeSlowly(line1, 'y2', '9.6')

			//setAttributeSlowly(line2, 'x1', '27.2')
			// setAttributeSlowly(line2, 'x2', '4.8')
			setAttributeSlowly(line2, 'y1', '22.4')
			setAttributeSlowly(line2, 'y2', '22.4')
			// svg.classList.replace('-rotate-90', 'rotate-0')
		}
	})

	return (
		<header className='p-4 flex items-center mb-10'>
			<Link className='text-4xl font-extrabold no-underline flex-1' to='/'>
				pierre.
			</Link>
			<nav className='static flex-0 p-0 bg-transparent font-bold'>
				<button
					className=' block lg:hidden menu-icon'
					onClick={() => setShowMenu(!showMenu)}
				>
					<svg
						id='svg'
						xmlns='http://www.w3.org/2000/svg'
						className='w-8 h-8 block origin-center rotate-0 transition-all ease-in-out duration-500'
					>
						<line
							x1='4.8'
							y1='9.6'
							x2='27.2'
							y2='9.6'
							stroke='black'
							strokeWidth='3'
							strokeLinecap='round'
							id='line1'
						></line>
						<line
							x1='27.2'
							y1='22.4'
							x2='4.8'
							y2='22.4'
							stroke='black'
							strokeWidth='3'
							strokeLinecap='round'
							id='line2'
						></line>
					</svg>
				</button>
				<ul className='hidden lg:flex gap-3 lg:gap-6'>
					{MenuItems.map((menuItem, i) => (
						<li key={i}>
							<Link to={menuItem.path}>{menuItem.title}</Link>
						</li>
					))}
				</ul>
			</nav>
		</header>
	)
}

export default Header

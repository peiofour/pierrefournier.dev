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
			setAttributeSlowly(line1, 'y1', '4.8')
			setAttributeSlowly(line1, 'y2', '27.2')

			setAttributeSlowly(line2, 'y1', '4.8')
			setAttributeSlowly(line2, 'y2', '27.2')
		} else {
			setAttributeSlowly(line1, 'y1', '9.6')
			setAttributeSlowly(line1, 'y2', '9.6')

			setAttributeSlowly(line2, 'y1', '22.4')
			setAttributeSlowly(line2, 'y2', '22.4')
		}

		const mobileMenu = document.getElementById('mobileMenu')
		const mobileMenuItems = document.getElementById('mobileMenuItems')
		const main = document.getElementById('layout')
		if (!mobileMenu || !main || !mobileMenuItems) return

		if (showMenu) {
			mobileMenu.classList.replace('-z-10', 'z-10')
			mobileMenu.classList.replace('opacity-0', 'opacity-100')
			main.classList.add('blur-[8px]')

			setTimeout(() => {
				mobileMenuItems.classList.replace('-ml-72', 'ml-10')
			}, 200)
		} else {
			mobileMenu.classList.replace('z-10', '-z-10')
			mobileMenu.classList.replace('opacity-100', 'opacity-0')
			main.classList.remove('blur-[8px]')

			mobileMenuItems.classList.replace('ml-10', '-ml-72')
		}
	}, [showMenu])

	return (
		<header className='p-4 flex items-center mb-10 '>
			<Link className='text-4xl font-extrabold no-underline flex-1 z-20' to='/'>
				pierre.
			</Link>
			<nav className='static flex-0 p-0 bg-transparent font-bold z-20'>
				<button className='lg:hidden' onClick={() => setShowMenu(!showMenu)}>
					<svg
						id='svg'
						xmlns='http://www.w3.org/2000/svg'
						className='w-8 h-8 origin-center'
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
			<div
				id='mobileMenu'
				className='absolute -z-10 opacity-0 left-0 top-0 w-full h-full bg-background-p-transparent transition-all duration-300 ease-linear'
			>
				<div id='mobileMenuItems' className='flex flex-col gap-3 lg:gap-6 h-full pt-20 -ml-72 transition-all duration-300 ease-out'>
					{MenuItems.map((menuItem, i) => (
						<h3 key={i}>
							<Link to={menuItem.path}>{menuItem.title}</Link>
						</h3>
					))}
				</div>
			</div>
		</header>
	)
}

export default Header

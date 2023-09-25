import React, { useEffect } from 'react'
import Header from './Header'
import Footer from './Footer'
import '../assets/scss/style.scss'
import '../styles/global.css'

interface LayoutProps {
	children: React.ReactNode
	className?: string
}

const Layout = ({ children, className }: LayoutProps) => {
	// on children change, scroll to top
	useEffect(() => {
		window.scrollTo(0, 0)
	}, [children])

	// on children change, add smooth transition to container class
	useEffect(() => {
		const container = document.getElementById('layout')
		if (container) {
			container.classList.replace('translate-y-12', 'translate-y-0')
			container.classList.replace('opacity-0', 'opacity-100')
		}
	}, [children])

	return (
		<div className='min-h-screen flex flex-col relative bg-[#edf6f9] text-[#333]'>
			<Header />
			<main className={className}>
				<div
					id='layout'
					className='mx-auto max-w-7xl px-4 mb-20 h-full block duration-700 relative transform opacity-0 transition-all translate-y-12 ease-out'
				>
					{children}
				</div>
			</main>
			<Footer />
		</div>
	)
}

export default Layout

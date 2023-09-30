import React, { useEffect } from 'react'
import Header from './Header'
import Footer from './Footer'
import '../styles/global.css'

import { defineCustomElements as deckDeckGoHighlightElement } from '@deckdeckgo/highlight-code/dist/loader'
deckDeckGoHighlightElement()

interface LayoutProps {
	children: React.ReactNode
	className?: string
}

const Layout = ({ children, className }: LayoutProps) => {
	// on children change, scroll to top
	useEffect(() => {
		window.scrollTo(0, 0)
	}, [children])

	// on page loading, set opacity to 1 and translate-y to 0
	useEffect(() => {
		const layout = document.getElementById('layout')
		if (layout) {
			layout.style.opacity = '1'
			layout.style.transform = 'translateY(0)'
		}
	}, [])

	// on navigation, set opacity to 0 and translate-y to 12
	

	return (
		<div className='min-h-screen flex flex-col relative bg-[#edf6f9] text-[#333]'>
			<Header />
			<main
				className={`px-4 self-center max-w-7x pb-32 h-full block duration-700 relative transform opacity-0 transition-all translate-y-12 ease-out ${className}`}
				id='layout'
			>
				{children}
			</main>
			<Footer />
		</div>
	)
}

export default Layout

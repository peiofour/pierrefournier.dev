import React, { useEffect } from 'react'
import Header from './Header'
import Footer from './Footer'
import '../assets/scss/style.scss'
import { defineCustomElements as deckDeckGoHighlightElement } from "@deckdeckgo/highlight-code/dist/loader";
deckDeckGoHighlightElement();

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
		const container = document.querySelector('.container')
		if (container) {
			container.style.opacity = '0'
			setTimeout(() => {
				container.style.opacity = '1'
			}, 100)
		}
	}, [children])
	

	return (
		<div className='primary-container'>
			<Header />
			<main className={className}>
				<div className='container'>{children}</div>
			</main>
			<Footer />
		</div>
	)
}

export default Layout

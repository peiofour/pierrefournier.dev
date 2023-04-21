import React from 'react'
import Header from './Header'
import Footer from './Footer'
import '../assets/scss/style.scss'

interface LayoutProps {
	children: React.ReactNode
	className?: string
}

const Layout = ({ children, className }: LayoutProps) => {
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

import React from 'react'
import Header from './header'
import Footer from './footer'

import "../assets/scss/style.scss"



const Layout = ({ children, className, title, props }) => {
  const lastTitle = title === undefined ? "Le blog de Pierre" : `${title} - Le blog de Pierre`
  return (
    <div className="primary-container">
      <title>{lastTitle}</title>
      <Header />
      <main className={className}>
        <div className="container">
          { children }
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default Layout;
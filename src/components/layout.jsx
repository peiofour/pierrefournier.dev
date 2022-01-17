import React from 'react'
import Header from './header'
import Footer from './footer'

import "../assets/scss/style.scss"



const Layout = ({ children, className, title, props }) => {

  return (
    <div className="primary-container">
      <title>{title}</title>
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
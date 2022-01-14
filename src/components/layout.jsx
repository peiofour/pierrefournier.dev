import React from 'react'
import Header from './header'
import Footer from './footer'

import "../assets/scss/style.scss"



const Layout = ({ children, className, props }) => {

  return (
    <div className="primary-container">
      <Header />
      <main className={className}>
        { children }
      </main>
      <Footer />
    </div>
  )
}

export default Layout;
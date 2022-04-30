import React from 'react'
import Header from './Header'
import Footer from './Footer'
import "../assets/scss/style.scss"

const Layout = ({ children, className, props }) => {
  return (
    <div className="primary-container">
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

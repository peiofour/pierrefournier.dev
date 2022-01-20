import React, { useState } from 'react'
import { Link } from 'gatsby'
import { useStaticQuery, graphql } from 'gatsby'


const MenuItems = [
  {
    path: "/",
    title: "Home"
  },
  {
    path: "/about",
    title: "About"
  },
  {
    path: "/contact",
    title: "Contact"
  },
]

/**
 * Returns link to path
 * @param {String} to 
 * @param {String} children 
 */
const ListLink = ({children, to}) => (
  <li>
    <Link to={to}>{children}</Link>
  </li>
)

const Header = () => {

  const [dark, setDark] = useState(true);

  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  )

  const listMenuItems = MenuItems.map((menuItem, i) => <ListLink key={i} to={menuItem.path}>{menuItem.title}</ListLink>)

  return (
    <header className="header">
      <div className="site-header container">
        <div className="site-header__title">
          <Link to="/">
            pierre
          </Link>
        </div>
        
        <nav>
          <ul className="site-header__menu-items">
            {listMenuItems}
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header;
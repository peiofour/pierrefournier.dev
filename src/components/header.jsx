import React, { useState } from 'react'
import { Link, useStaticQuery, graphql  } from 'gatsby'
import { BsList, BsListNested } from 'react-icons/bs'

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
const listMenuItems = MenuItems.map((menuItem, i) => <ListLink key={i} to={menuItem.path}>{menuItem.title}</ListLink>)

const Header = () => {

  const [dark, setDark] = useState(true);
  const [showMenu, setShowMenu] = useState(false);

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

  return (
    <header className="header">
      <div className="site-header container">
        <div className="site-header__title">
          <Link to="/">
            pierre
          </Link>
        </div>
        
        <nav>
          <button
            className="menu-icon"
            onClick={() => setShowMenu(!showMenu)}  
          >
            {
              showMenu ?
              <BsListNested />
              :
              <BsList />
            }
          </button>
          <ul className={showMenu ? "menu-show" : "menu-close"}>
            {listMenuItems}
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header;
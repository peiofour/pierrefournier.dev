import React from 'react'
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
const ListLink = props => (
  <li>
    <Link to={props.to}>{props.children}</Link>
  </li>
)

const Header = () => {

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
    <nav className="site-navigation">
      <Link to={'/'} className='col-6'>
        Pierre Fournier
      </Link>

      <ul>
        {listMenuItems}
      </ul>

    </nav>
  )
}

export default Header;
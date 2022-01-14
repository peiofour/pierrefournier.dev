import React from 'react'
import { Link } from 'gatsby'
import { BsFillHeartFill } from "react-icons/bs"

const MenuItems = [
  {
    path: "https://github.com/peiofour",
    title: "Github"
  },
  {
    path: "https://www.instagram.com/pierref0urn1er",
    title: "Instagram"
  },
  {
    path: "https://www.linkedin.com/in/pierrefournier1/",
    title: "LinkedIn"
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

const Footer = () => {
  
  const listMenuItems = MenuItems.map((menuItem, i) => <ListLink to={menuItem.path} key={i}>{menuItem.title}</ListLink>)

  return (
    <footer className="site-footer">
      <div>
        <ul className="row">
          {listMenuItems}
        </ul>
        
        <div>
          Made with{" "}
          <span>
            <BsFillHeartFill />
          </span>
          {" "} by Pierre
        </div>
      </div>
    </footer>
  )
}

export default Footer;
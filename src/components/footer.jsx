import React from 'react'
import { BsFillHeartFill, BsCodeSlash } from "react-icons/bs"

const Footer = () => (
  <footer>
    <div className="site-footer container">
      <p>
        <span className="icon">
          <BsCodeSlash />
        </span>
        {" "}with{" "}
        <span className="icon">
          <BsFillHeartFill />
        </span>
        {" "} by Pierre
      </p>
    </div>
  </footer>
)


export default Footer;
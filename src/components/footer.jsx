import React from 'react'
import { BsFillHeartFill, BsCodeSlash } from "react-icons/bs"

const Footer = () => (
  <footer>
    <div className="site-footer container">
      <div>
        <span>
          <BsCodeSlash />
        </span>
        {" "}with{" "}
        <span>
          <BsFillHeartFill />
        </span>
        {" "} by Pierre
      </div>
    </div>
  </footer>
)


export default Footer;
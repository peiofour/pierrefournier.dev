import React from 'react';
import { Link } from 'gatsby';
import { StaticImage } from "gatsby-plugin-image"

const BlogCard = ({ link, title, subtitle }) => {

  return (
    <li className="card">
      <Link to={link}>
        <StaticImage
          src="https://placekitten.com/800/600"
          alt="Moi"
          width={345}
          height={260}
        />
        <h2>
          {title}
        </h2>
        <p>
          {subtitle}
        </p>
      </Link>
    </li>
  )
}

export default BlogCard;
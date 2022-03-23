import React from 'react';
import { Link } from 'gatsby';

const BlogCard = ({ link, title, subtitle, image }) => {
  console.log(image)
  return (
    <li className="card">
      <Link to={link}>
        <img
          src={image}
          alt={title}
          width="100%"
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
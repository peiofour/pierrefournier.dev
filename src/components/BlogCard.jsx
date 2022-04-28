import React from 'react';
import { Link } from 'gatsby';

const BlogCard = ({ link, title, description, image }) => {
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
          {description}
        </p>
      </Link>
    </li>
  )
}

export default BlogCard;
import React from 'react';
import { Link } from 'gatsby';

const BlogCard = ({ link, title, subtitle, image, date }) => {
  const dateLocale = new Date(date).toLocaleDateString('fr-FR', { year: 'numeric', month: 'long', day: 'numeric' });
  return (
    <div className="card my-3 mx-auto">
      <Link to={link}>
        <img
          src={image}
          alt={title}
          width="100%"
        />
        <h2>
          {title}
        </h2>
        <i>Le {dateLocale}</i>
        <p>
          {subtitle}
        </p>
      </Link>
    </div>
  )
}

export default BlogCard;
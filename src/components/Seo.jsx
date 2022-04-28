import React from 'react';
import { Helmet } from 'react-helmet';

const Seo = ({title, description, image, keywords, author, url}) => {        
  return (
    <Helmet
      title={title}
      meta={[
        {
          name: `description`,
          content: description
        },
        {
          property: `og:title`,
          content: title
        },
        {
          property: `og:description`,
          content: description
        },
        {
          property: `og:type`,
          content: `website`
        },
        {
          property: `og:image`,
          content: image
        },
        {
          property: `og:url`,
          content: url
        },
        {
          property: `twitter:card`,
          content: `summary_large_image`
        },
        {
          property: `twitter:creator`,
          content: author
        },
        {
          property: `twitter:title`,
          content: title
        },
        {
          property: `twitter:description`,
          content: description
        },
        {
          property: `twitter:image`,
          content: image
        },
      ].concat(
        keywords && keywords.length > 0 ? {
          name: `keywords`,
          content: keywords.join(`, `)
        } : []
      )
    }
    />
  )
}

export default Seo;
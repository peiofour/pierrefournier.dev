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
          content: `article`
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
          property: `og:site_name`,
          content: `Le blog de Pierre`
        },
        {
          name: `twitter:card`,
          content: `summary_large_image`
        },
        {
          name: `twitter:creator`,
          content: author
        },
        {
          name: `twitter:title`,
          content: title
        },
        {
          name: `twitter:description`,
          content: description
        },
        {
          name: `twitter:image`,
          content: image
        },
        {
          name: `twitter:site`,
          content: `@_PierreFournier`
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
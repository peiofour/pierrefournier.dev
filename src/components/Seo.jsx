import React from 'react';
import { Helmet } from 'react-helmet';

const Seo = ({title, description, image, keywords, slug}) => {   
  const lastTitle = title === undefined ? "Le blog de Pierre" : `${title} - Le blog de Pierre`
  return (
    <Helmet
      title={lastTitle}
      titleTemplate={lastTitle}
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
          property: `og:url`,
          content: `https://www.pierrefournier.dev/${slug}`
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
          property: `og:site_name`,
          content: `Le blog de Pierre`
        },
        {
          property: `twitter:card`,
          content: `summary_large_image`
        },
        {
          property: `twitter:url`,
          content: `https://www.pierrefournier.dev/${slug}`
        },
        {
          property: `twitter:creator`,
          content: "@_PierreFournier"
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
        }

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
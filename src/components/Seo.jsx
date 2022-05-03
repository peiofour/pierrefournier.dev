import React from 'react';
import { Helmet } from 'react-helmet';

const Seo = ({title, description, image, keywords, slug, type}) => {   
  const lastTitle = title === undefined ? "Le blog de Pierre Fournier" : `${title} - Le blog de Pierre Fournier`
  return (
    <Helmet
      title={lastTitle}
      htmlAttributes={{
        lang: "fr"
      }}
      meta={[
        {
          name: "description",
          content: description
        },
        {
          property: "og:title",
          content: lastTitle
        },
        {
          name: "twitter:title",
          content: lastTitle
        },

        {
          property: "og:description",
          content: description
        },
        {
          name: "twitter:description",
          content: description
        },

        {
          property: "og:url",
          content: `https://www.pierrefournier.dev/${slug}`
        },
        {
          name: "twitter:url",
          content: `https://www.pierrefournier.dev/${slug}`
        },

        {
          property: "og:type",
          content: type ?? "website"
        },
        {
          property: "og:image",
          content: image
        },
        {
          name: "twitter:image",
          content: image
        },
        {
          property: "og:site_name",
          content: "Le blog de Pierre Fournier"
        },
        {
          name: "twitter:card",
          content: "summary_large_image"
        },
        
        {
          name: "twitter:creator",
          content: "@_PierreFournier"
        },
        {
          name: "twitter:site",
          content: "@_PierreFournier"
        },
        
      ].concat(
        keywords && keywords.length > 0 ? {
          name: "keywords",
          content: keywords.join(`,`)
        } : []
      )
    }
    />
  )
}

export default Seo;
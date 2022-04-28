module.exports = {
  siteMetadata: {
    title: "Le blog de Pierre",
    siteUrl: `https://www.pierrefournier.dev`,
    description: `Blog de Pierre Fournier. Je partage sur mes passions, sur mes projets, ainsi que sur mes voyages.`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        query: `
        {
          site{
            siteMetadata {
              siteUrl
            }
          }

          allSitePage {
            edges {
              node {
                path
                context {
                  isCanonical
                }
              }
            }
          }
        }
        `
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Le blog de Pierre`,
        short_name: `Le blog de Pierre`,
        start_url: `/`,
        description: `Site et blog de Pierre Fournier. Je partage sur mes passions, je les fait intéragir entre elles. J'écris également sur mes projets, ainsi que sur mes voyages.`,
        background_color: `#edf6f9`,
        theme_color: `#a2466c`,
        display: `standalone`,
        icon: `src/images/icon.png`
      },
    },
    "gatsby-plugin-sass",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data`,
      },
    },
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          process.env.GOOGLE_ANALYTICS_ID, // Google Analytics / GA
          // "AW-CONVERSION_ID", // Google Ads / Adwords / AW
          // "DC-FLOODIGHT_ID", // Marketing Platform advertising products (Display & Video 360, Search Ads 360, and Campaign Manager)
        ],
        // This object gets passed directly to the gtag config command
        // This config will be shared across all trackingIds
        // gtagConfig: {
        //   optimize_id: "OPT_CONTAINER_ID",
        //   anonymize_ip: true,
        //   cookie_expires: 0,
        // },
        // This object is used for configuration specific to this plugin
        pluginConfig: {
          // Puts tracking script in the head instead of the body
          head: true,
          // Setting this parameter is also optional
          respectDNT: false,
          // Avoids sending pageview hits from custom paths
          exclude: [],
        },
      },
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://www.pierrefournier.dev',
        sitemap: 'https://www.pierrefournier.dev/sitemap.xml',
        policy: [{userAgent: '*', allow: '/'}]
      }
    }
  ],
};

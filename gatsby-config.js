module.exports = {
	siteMetadata: {
		siteUrl: `https://www.pierrefournier.dev`,
	},
	plugins: [
		`gatsby-plugin-sitemap`,
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `Le blog de Pierre Fournier`,
				short_name: `Le blog de Pierre Fournier`,
				start_url: `/`,
				description: `Je suis développeur fullstack en freelance, je vis à Toulouse dans le sud de la France. Ici je poste des articles de blog sur la tech, les startups, le numérique en France et dans le monde, et sur bien d'autres sujets.`,
				background_color: `#edf6f9`,
				theme_color: `#a2466c`,
				display: `standalone`,
				icon: `src/images/icon.png`,
			},
		},
		'gatsby-plugin-sass',
		'gatsby-plugin-image',
		'gatsby-plugin-sharp',
		'gatsby-transformer-sharp',
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
					'UA-XXXXX-Y', // Google Analytics / GA
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
				sitemap: 'https://www.pierrefournier.dev/sitemap/sitemap-0.xml',
				policy: [{ userAgent: '*', allow: '/' }],
			},
		},
	],
}

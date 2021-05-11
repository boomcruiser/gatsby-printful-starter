require('dotenv').config({
	path: `.env`
});
module.exports = {
	siteMetadata: {
		title: 'Gatsby Store'
	},
	plugins: [
		'gatsby-plugin-image',
		'gatsby-plugin-react-helmet',
		'gatsby-plugin-sitemap',
		{
			resolve: 'gatsby-plugin-manifest',
			options: {
				icon: 'src/images/icon.png'
			}
		},

		'gatsby-plugin-postcss',
		'gatsby-plugin-sharp',
		'gatsby-transformer-sharp',
		`gatsby-remark-images`,
		{
			resolve: `gatsby-plugin-mdx`,
			options: {
				defaultLayouts: {
					blog: require.resolve("./src/layout/blog.tsx"),
					default: require.resolve("./src/layout/blog.tsx"),
				  },
				gatsbyRemarkPlugins: [
					{
						resolve: `gatsby-remark-images`
					}
				]
			}
		},
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'images',
				path: './src/images/'
			},
			__key: 'images'
		},
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'pages',
				path: './src/pages/'
			},
			__key: 'pages'
		},
		{
			resolve: `gatsby-source-printful`,
			options: {
				apiKey: process.env.PRINTFUL_API_KEY,
				paginationLimit: 100 // Default value is 20
			}
		},
		{
			resolve: `gatsby-plugin-snipcart-advanced`,
			options: {
				version: '3.0.29',
				publicApiKey: process.env.SNIPCART_KEY, // use public api key here or in environment variable
				openCartOnAdd: false,
				useSideCart: true,
				styles: false
			}
		},
		{
            resolve: "gatsby-plugin-breakpoints",
            options: {
                queries: {
					'sm': '(min-width: 640px)',
					// => @media (min-width: 640px) { ... }
			  
					'md': '(min-width: 768px)',
					// => @media (min-width: 768px) { ... }
			  
					'lg': '(min-width: 1024px)',
					// => @media (min-width: 1024px) { ... }
			  
					'xl': '(min-width: 1280px)',
					// => @media (min-width: 1280px) { ... }
			  
					'2xl': '(min-width: 1536px)',
				},
            },
        },

		`gatsby-plugin-graphql-codegen`
	]
};

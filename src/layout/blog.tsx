import React from 'react'
import Layout from '.';
import { MDXProvider } from "@mdx-js/react"
import { getSrc } from 'gatsby-plugin-image';
import { Helmet } from 'react-helmet';
const shortcodes = {}
export default ({ children, pageContext }) => {
    const { frontmatter: { title, featuredImage } } = pageContext;
    return <MDXProvider components={shortcodes}>

        <Layout className="blog" slug="blog">{children}</Layout>
        <Helmet>
            <title>{title}</title>
            <meta name="description" content={title} />
            <meta name="image" content={getSrc(featuredImage)} />
        </Helmet>
    </MDXProvider>

}
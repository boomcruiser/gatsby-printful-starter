import React from 'react'
import Layout from '.';
import { MDXProvider } from "@mdx-js/react"

const shortcodes = {}
export default ({ children }) => <MDXProvider components={shortcodes}><Layout className="blog" slug="blog">{children}</Layout> </MDXProvider>

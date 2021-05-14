import React from 'react';
import { graphql, Link } from 'gatsby';
import { BlogIndexQuery } from '../../../graphql-types';
import Layout from '../../layout';
import { GatsbyImage } from 'gatsby-plugin-image';
import { getImage } from 'gatsby-plugin-image';

const BlogIndex = ({ data }: { data: BlogIndexQuery }) => {
    const posts = data.allMdx.nodes;

    return <Layout slug="blog" pageTitle="Blog">
        <div className="w-full sm:p-5 my-4 max-w-3xl mx-auto grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((post, index) => <PostCard key={"Posts-" + index} post={post} />)}

        </div>
    </Layout>
}
const PostCard: React.FC<{ post: BlogIndexQuery["allMdx"]["nodes"][number] }> = ({ post }) => {
    const image = getImage(post.frontmatter.featuredImage as any);
    return <Link to={`/${post.slug}`} className="shadow relative h-56 sm:rounded-xl">
        <div className="absolute sm:rounded-xl  flex flex-col gap-1 p-2 justify-end inset-0 z-10  bg-gradient-to-t from-gray-800">
            {/* <p className="text-sm font-medium text-white sm:mb-1 sm:text-gray-500">Entire house</p> */}
            <h2 className="text-xl font-semibold text-white">{post.frontmatter.title}</h2>
        </div>

        <GatsbyImage className="inset-0 sm:rounded-xl " style={{ position: 'absolute' }} image={image} alt={post.frontmatter.title} ></GatsbyImage>
    </Link>
}
export const query = graphql`
    query BlogIndex {
      allMdx(limit: 10, filter: {slug: {regex: "/blog/"}},sort: {fields: frontmatter___date, order: ASC}) {
        nodes {
          frontmatter {
            title
            date(formatString: "Do MMM YYYY")
            featuredImage{
                childImageSharp{
                    gatsbyImageData(layout: FULL_WIDTH,placeholder: BLURRED,aspectRatio: 1)
                }
            }
          }
          slug
        }
        totalCount
      }
    }
    `

export default BlogIndex;
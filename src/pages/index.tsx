import { graphql } from 'gatsby';
import * as React from 'react';
import ProductComponent from '../components/productComponent';
import SelectedVariantProvider from '../context/selectedVariantProvider';
import { CustomerReviewList } from '../components/customerReviewComponent';
import Layout from '../layout';

export const query = graphql`
	query MainPage {
		allPrintfulProduct(limit: 10) {
			nodes {
				id
				name
				variantOptions
				variantModels
				variants {
					currency
					id
					name
					retail_price
					catalogVariant {
						color
						size
						retail_price
						in_stock
					}
					variantImage {
						childImageSharp {
							gatsbyImageData(layout: FULL_WIDTH,placeholder: BLURRED)
						}
					}
					
				}
			}
		}
		allMdx(limit: 10,sort: {fields: frontmatter___index},filter: {slug: {regex: "/reviews/"}}) {
			nodes {
			frontmatter {
				title
				index
				featuredImage{
					childImageSharp {
				 
						gatsbyImageData(layout: FULL_WIDTH,placeholder: BLURRED)
					}
				}
				customer
				date(formatString: "Do MMM YYYY")
			}
			}
			totalCount
		}
		 
	}
`;

const IndexPage = ({ data }) => {

	const products = data.allPrintfulProduct.nodes;
	const reviews = data.allMdx.nodes;

	return (

		<Layout slug="">


			<section className="grid grid-cols-12">
				<main className='col-span-12 xl:col-start-1 xl:col-span-8'>
					<section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-2 gap-y-2">
						{products.map((item) => <SelectedVariantProvider key={item.id}> <ProductComponent product={item} /></SelectedVariantProvider>)}
					</section>

				</main>
				<aside className="border-l-2 dark:border-gray-600 col-span-12 xl:col-start-9 xl:col-span-4 p-4">
					<div className="sticky top-1">
						<h1 className="text-xl font-semibold mb-3 dark:text-white">
							Fake Review Section
					</h1>
						<CustomerReviewList reviews={reviews} />
					</div>


				</aside>

			</section>

		</Layout>
	);
};



export default IndexPage;

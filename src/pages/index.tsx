import { graphql, useStaticQuery } from 'gatsby';
import * as React from 'react';
import ProductComponent from '../components/productComponent';
import { GetProductsResponse } from '../types';
import { MainPageQuery } from '../../graphql-types';
import SelectedVariantProvider from '../context/selectedVariantProvider';
import CustomerReviewComponent, { CustomerReviewList } from '../components/customerReviewComponent';
import HeaderAlert from '../components/headerAlert';
import Header from '../components/header';
import { ToastProvider } from 'react-toast-notifications'
import Layout from '../layout';

const pageQuery = graphql`
	query MainPage {
		allPrintfulProduct(limit: 10) {
			nodes {
				id
				name
				thumbnail_url
				productImage {
					childImageSharp {
						gatsbyImageData(layout: FULL_WIDTH)
					}
				}
				variantOptions
				variantModels
				variants {
					currency
					id
					name
					sku
					slug
					sync_product_id
					synced
					retail_price
					catalogVariant {
						color
						color_code
						id
						image
						size
						price
						retail_price
						in_stock
					}
					variantImage {
						childImageSharp {
							gatsbyImageData(layout: FULL_WIDTH)
							fixed{
								src
							}
						}
					}
					product {
						image
						name
						product_id
						variant_id
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

// const reviews: Review[] = [
// 	{
// 		feedback: 'Fast delivery. Authentic Product. Such a win',
// 		customerName: 'Tyler Durden',
// 		date: "22 Jan 2020",
// 		index: 0
// 	},
// 	{
// 		feedback: 'Fast delivery. Authentic Product. Such a win',
// 		customerName: 'Rusty ALan',
// 		date: "22 Jan 2020",
// 		index: 1
// 	},
// 	{
// 		feedback: 'Fast delivery. Authentic Product. Such a win',
// 		customerName: 'Art Vandelay',
// 		date: "22 Jan 2020",
// 		index: 2
// 	}, {
// 		feedback: 'Fast delivery. Authentic Product. Such a win',
// 		customerName: 'Dr Who',
// 		date: "22 Jan 2020",
// 		index: 3
// 	}
// ]
// markup
const IndexPage = (props) => {

	const mainPageResponse = useStaticQuery<MainPageQuery>(pageQuery);

	// console.log({ productsResponse })
	// const customerImageResponse = useStaticQuery<CustomerReviewImageQuery>(imageQuery);
	// console.log({productsResponse})
	const products = mainPageResponse.allPrintfulProduct.nodes;
	const reviews = mainPageResponse.allMdx.nodes;
	// console.log({ image: mainPageResponse.file.childImageSharp.gatsbyImageData })

	// console.log({ customerImage, mainPageResponse })
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

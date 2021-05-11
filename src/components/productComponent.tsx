import React, { Dispatch, SetStateAction, useState, useEffect } from 'react';
import { GatsbyImage as Img, getImage, getSrc } from 'gatsby-plugin-image';
// import { ProductNode } from '../types';
import * as styles from './productStyle.module.css'
import { useToasts } from 'react-toast-notifications';
import { ProductNode, VariantOptionType } from '../types';
const SkeletonLoader = () => {
	return <div className="border border-gray-300 shadow rounded-md p-4 max-w-sm w-full mx-auto">
		<div className="animate-pulse flex flex-col">
			<div className="rounded-md bg-gray-400 h-52 w-full"></div>
			<div className="flex-1 space-y-4 py-1">
				{/* <div className="h-4 bg-gray-400 rounded w-3/4"></div> */}
				<div className="my-5 space-y-2">
					<div className="h-8 bg-gray-400 rounded w-5/6"></div>
					<div className="h-8 bg-gray-400 rounded w-5/6"></div>
				</div>
			</div>
		</div>
	</div>

}
export const ProductList: React.FC<{ products: ProductNode[] }> = ({ products }) => {
	return <section className="grid grid-cols-1 p-4 sm:grid-cols-2 md:grid-cols-3 gap-x-2 gap-y-2">
		{products.map((item) => <ProductComponent key={item.id} product={item} />)}
	</section>
}

const ProductComponent: React.FC<{ product: ProductNode }> = ({ product }) => {
	// const [variantModels, setVariantModels] = useState(new WeakMap());
	const { addToast } = useToasts();
	const [selectedVariant, setSelectedVariant] = useState(product.variants[0]);
	const image = selectedVariant && getImage(selectedVariant.variantImage as any);
	const stockString = selectedVariant?.catalogVariant?.in_stock ? 'In stock' : 'Out of stock';
	const [options, setOptions] = useState({
		color: product.variants[0].catalogVariant.color,
		size: product.variants[0].catalogVariant.size
	})
	const sizeOptions = product?.variantOptions['size'];
	const colorOptions = product?.variantOptions['color'];
	const selectedVariantImageSrc = selectedVariant && getSrc(selectedVariant.variantImage as any)



	// console.log({ product })
	const handleOptionChange = (option: string, type: string) => {
		setOptions({
			...options,
			[type]: option
		})
	}
	useEffect(() => {
		const keys = [];
		if (options.color) {
			keys.push(options.color)
		}
		if (options.size) {
			keys.push(options.size)
		}
		const key = keys.join("_");
		const newVariantId = key && product.variantModels[key];
		if (newVariantId) {
			const newVariant = product.variants.find(item => item.id === newVariantId)
			console.log({ newVariant, newVariantId, variants: product.variants })
			newVariant && setSelectedVariant(newVariant);
		}
		// console.log({ options, key, models: product.variantModels, value: key && product.variantModels[key] })

	}, [options, product])
	if (!selectedVariant) {
		return <SkeletonLoader />
	}
	let variantNumber = 1;
	const sizeOptionsVal = sizeOptions && Object.keys(sizeOptions).join("|");
	const colorOptionsVal = colorOptions && Object.keys(colorOptions).join("|");
	const variantNames = {}
	if (sizeOptionsVal) {
		variantNames[`data-item-custom${variantNumber}-name`] = "Size";
		variantNames[`data-item-custom${variantNumber}-options`] = sizeOptionsVal;
		variantNames[`data-item-custom${variantNumber}-value`] = options.size;
		variantNumber++;
	}
	if (colorOptionsVal) {
		variantNames[`data-item-custom${variantNumber}-name`] = "Color";
		variantNames[`data-item-custom${variantNumber}-options`] = colorOptionsVal;
		variantNames[`data-item-custom${variantNumber}-value`] = options.color;
		variantNumber++;
	}
	const addToBag = () => {
		addToast("Product added to cart!")
	}



	return (

		<div className="flex flex-col p-4 shadow dark:bg-gray-800">
			<Img image={image} alt={product.name} className="dark:brightness-75 dark:contrast-125 filter" />
			<div className="flex flex-wrap items-baseline">
				<h1 className="w-full flex-none  dark:text-white font-semibold mb-2.5">{selectedVariant.name}</h1>
				<div className="text-4xl leading-7 font-bold text-purple-600">
					{selectedVariant.catalogVariant.retail_price.toLocaleString('en', {
						style: 'currency',
						currency: selectedVariant.currency
					})}
				</div>
				<div className="text-sm font-medium text-gray-400 ml-3">{stockString}</div>

				<div />
			</div>
			<section className="mt-3">
				<VariantSelector selectedOption={options.color} onOptionChanged={handleOptionChange} name={product.variantOptions['name']} variants={colorOptions} type='color' />
				<VariantSelector selectedOption={options.size} onOptionChanged={handleOptionChange} name={product.variantOptions['name']} variants={sizeOptions} type='size' />
			</section>
			<section className="mt-auto">
				<div className="flex space-x-3 mb-4 text-sm font-semibold">
					<div className="flex-auto flex space-x-3">
						<button className="snipcart-checkout snipcart-add-item w-1/2 h-9 flex items-center justify-center rounded-full bg-purple-700 text-white"
							data-item-id={selectedVariant.id}
							data-item-price={selectedVariant.retail_price}
							data-item-url="/"
							data-item-name={selectedVariant.name}
							data-item-image={selectedVariantImageSrc}
							{...variantNames}
							type="submit">
							Buy now
							</button>
						<button
							className="snipcart-add-item w-1/2 flex items-center justify-center rounded-full dark:bg-gray-700 dark:text-purple-50 bg-purple-50 text-purple-700"
							type="button"
							data-item-id={selectedVariant.id}
							data-item-price={selectedVariant.retail_price}
							data-item-url="/"
							data-item-name={selectedVariant.name}
							data-item-image={selectedVariantImageSrc}
							{...variantNames}
							onClick={addToBag}
						// data-autopop={true}
						>
							Add to bag
						</button>
					</div>

				</div>
			</section>
		</div>


	);
};

const VariantSelector = ({ variants, selectedOption, type, name, onOptionChanged }: { selectedOption: string, onOptionChanged: (option: string, type: string) => void, name: string, variants: Record<string, VariantOptionType>, type: "size" | "color" }) => {
	// console.log({ variants })
	const [checkedVal, setCheckedVal] = useState(selectedOption);
	useEffect(() => {
		onOptionChanged(checkedVal, type);
	}, [checkedVal])
	return (
		<>
			{
				variants && <div className="flex flex-col items-baseline">
					<div className="text-lg capitalize font-semibold mb-2 dark:text-white">
						{type}:
					</div>
					<div className="flex text-sm font-medium flex-wrap">
						{Object.keys(variants).map((variant) => <VariantCheckbox key={`${name}-${type}-${variants[variant][type]}`} checkedVal={checkedVal} setCheckedVal={setCheckedVal} type={type} variant={variant} variantOption={variants[variant]} />)}

					</div>
				</div>}
		</>
	);
};
const VariantCheckbox = ({ variantOption, type, variant, checkedVal, setCheckedVal }: { type: "size" | "color", variant, variantOption: VariantOptionType, checkedVal: string, setCheckedVal: Dispatch<SetStateAction<string>> }) => {
	// console.log({ checkedVal, type: variantOption[type], eq: checkedVal === variantOption[type] });
	// console.log({ variantOption });
	const isChecked = checkedVal === variantOption[type];
	return <label style={variantOption.color ? { background: variantOption.color_code } : {}} className={`${styles.variantOption} ${variantOption.size ? styles.size : ''} ${isChecked ? styles.active : ''}`}>
		<input
			className="hidden"
			name={type}
			type="radio"
			value={variant}
			checked={isChecked}
			onChange={(e) => {
				// console.log(e.target.checked)
				e.target.checked && setCheckedVal(variant)
			}}

		/>
		{variantOption.size && <span className="select-none absolute pointer-events-none top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
			{/* {variantOption && variantOption.color} */}
			{variantOption.size}
		</span>
		}

	</label>
}

export default ProductComponent;

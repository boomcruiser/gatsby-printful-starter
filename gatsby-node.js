
const groupBy = ({acc, key, curr,supergroupKey,filterKeys,additionalProperties}) => {
	const supergroup = acc[supergroupKey] ?? {};
	const group = supergroup[key] || {};
	const filterArray = filterKeys.reduce((filterObj,currentKey)=>{
		filterObj[currentKey] = curr[currentKey]
		return filterObj
	},{});
	return {...supergroup, [key]:{...group,...filterArray,...additionalProperties} }
}
exports.createResolvers = ({ createResolvers, schema }) => {
	createResolvers({
		PrintfulProduct:{
			variantModels:{
				type: `JSON`,	
				resolve(source, args, context, info) {
					const variants = context.nodeModel.getNodesByIds({
						ids:source.variants___NODE,
						type: `PrintfulVariant`,
					})
					const variantModels = variants.reduce((acc, curr) => {
						const catalogVariant = context.nodeModel.getNodeById({
							id:curr.catalogVariant___NODE,
							type: `PrintfulCatalogVariant`,
						  })
						  const keys = [];
						//   acc[curr.id] = acc[curr.id] ?? [];
						  if (catalogVariant.color){
							  keys.push(catalogVariant.color);
							//   /acc[curr.id] = {...acc[curr.id],color:catalogVariant.color};
						  } 
						  if(catalogVariant.size){
							  keys.push(catalogVariant.size);
							// acc[curr.id] = {...acc[curr.id],size:catalogVariant.size};
						  }
						  const key = keys.join("_");
						  if(key) acc[key] = curr.id
						return acc;
					}, {})
					return variantModels;
				}
			},
			sizeMap:{
				type: `JSON`,	
				resolve(source, args, context, info) {
					const variants = context.nodeModel.getNodesByIds({
						ids:source.variants___NODE,
						type: `PrintfulVariant`,
					})
					const sizeMap = variants.reduce((acc, curr) => {
						const catalogVariant = context.nodeModel.getNodeById({
							id:curr.catalogVariant___NODE,
							type: `PrintfulCatalogVariant`,
						  })
						  if (catalogVariant.color && catalogVariant.size){
							acc[catalogVariant.size] = acc[catalogVariant.size] ?? []
							acc[catalogVariant.size] = [...acc[catalogVariant.size],{color:catalogVariant.color,id:curr.id}	]
						}
						 
						return acc;
					}, {})
					return sizeMap;
				}
			},
			colorMap:{
				type: `JSON`,
				resolve(source, args, context, info) {
					const variants = context.nodeModel.getNodesByIds({
						ids:source.variants___NODE,
						type: `PrintfulVariant`,
					})
					const colorMap = variants.reduce((acc, curr) => {
						const catalogVariant = context.nodeModel.getNodeById({
							id:curr.catalogVariant___NODE,
							type: `PrintfulCatalogVariant`,
						  })
						  if (catalogVariant.size && catalogVariant.color ){
							acc[catalogVariant.color] = acc[catalogVariant.color] ?? []
							acc[catalogVariant.color] = [...acc[catalogVariant.color],{size:catalogVariant.size,id:curr.id}]
						}
						 
						return acc;
					}, {})
					return colorMap;
				}
			},
			variantOptions:{
				type: `JSON`,
				resolve(source, args, context, info) {
					const variants = context.nodeModel.getNodesByIds({
						ids:source.variants___NODE,
						type: `PrintfulVariant`,
					  })
					const variantOptions = variants.reduce((acc, curr) => {
						const catalogVariant = context.nodeModel.getNodeById({
							id:curr.catalogVariant___NODE,
							type: `PrintfulCatalogVariant`,
						  })
						if (catalogVariant.size)
						acc['size'] = groupBy({acc,  key:catalogVariant.size,curr: catalogVariant,supergroupKey:'size',filterKeys:['size'],additionalProperties:{id:curr.id}});
						if (catalogVariant.color)
						acc['color'] = groupBy({acc, key:catalogVariant.color, curr:catalogVariant,supergroupKey:'color',filterKeys:['color_code','color'],additionalProperties:{id:curr.id}});
						if(catalogVariant.name){
							acc['name']=catalogVariant.name
						}
						return acc;
					}, {})
					// console.log({variantOptions})

					return variantOptions;
				}
			}
			 
		},
		
		PrintfulVariantOptions: {
			// Modify birthday resolver so that it uses 1970-01-01 as default date
			value: {
				resolve(source, args, context, info) {
					// original resolver available as "info.originalResolver"
					if (Array.isArray(source['value'])) {
						return info.originalResolver(
							{
								...source,
								value: null
							},
							args,
							context,
							info
						);
					} else {
						return info.originalResolver(source, args, context, info);
					}
				}
			}
		}
	});
};

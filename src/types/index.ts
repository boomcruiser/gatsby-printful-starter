import { ValuesType } from "utility-types";
import { MainPageQuery } from "../../graphql-types";

export interface GetProductsResponse {
    allPrintfulProduct: AllPrintfulProduct;
}

export interface AllPrintfulProduct {
    nodes: ProductNode[];
}



export interface Fluid {
    base64: string;
    aspectRatio: number;
    src: string;
    srcSet: string;
    sizes: string;
}

export type Review = ValuesType<MainPageQuery['allMdx']['nodes']>;
export type ProductNode = ValuesType<MainPageQuery['allPrintfulProduct']['nodes']>;
export type ProductVariants = ProductNode['variants'];
export type ProductVariant = ValuesType<ProductVariants>;

export interface Variant {
    currency: string;
    id: string;
    name: string;
    sku: string;
    slug: string;
    sync_product_id: number;
    synced: boolean;
    retail_price: number;
    catalogVariant: CatalogVariant;
    variantImage: any;
    product: Product;
}

export interface CatalogVariant {
    color: string;
    color_code: string;
    id: string;
    image: string;
    size: null | string;
}


export interface Product {
    image: string;
    name: string;
    product_id: number;
    variant_id: number;
}
export type VariantOptionType = { color?: string, color_code?: string, size?: string };
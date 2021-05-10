/* eslint-disable */

declare namespace GatsbyTypes {
type Maybe<T> = T | undefined;
type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
type Scalars = {
  /** The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID. */
  ID: string;
  /** The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text. */
  String: string;
  /** The `Boolean` scalar type represents `true` or `false`. */
  Boolean: boolean;
  /** The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. */
  Int: number;
  /** The `Float` scalar type represents signed double-precision fractional values as specified by [IEEE 754](https://en.wikipedia.org/wiki/IEEE_floating_point). */
  Float: number;
  /** A date string, such as 2007-12-03, compliant with the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  Date: string;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: never;
};










type File = Node & {
  readonly sourceInstanceName: Scalars['String'];
  readonly absolutePath: Scalars['String'];
  readonly relativePath: Scalars['String'];
  readonly extension: Scalars['String'];
  readonly size: Scalars['Int'];
  readonly prettySize: Scalars['String'];
  readonly modifiedTime: Scalars['Date'];
  readonly accessTime: Scalars['Date'];
  readonly changeTime: Scalars['Date'];
  readonly birthTime: Scalars['Date'];
  readonly root: Scalars['String'];
  readonly dir: Scalars['String'];
  readonly base: Scalars['String'];
  readonly ext: Scalars['String'];
  readonly name: Scalars['String'];
  readonly relativeDirectory: Scalars['String'];
  readonly dev: Scalars['Int'];
  readonly mode: Scalars['Int'];
  readonly nlink: Scalars['Int'];
  readonly uid: Scalars['Int'];
  readonly gid: Scalars['Int'];
  readonly rdev: Scalars['Int'];
  readonly ino: Scalars['Float'];
  readonly atimeMs: Scalars['Float'];
  readonly mtimeMs: Scalars['Float'];
  readonly ctimeMs: Scalars['Float'];
  readonly atime: Scalars['Date'];
  readonly mtime: Scalars['Date'];
  readonly ctime: Scalars['Date'];
  /** @deprecated Use `birthTime` instead */
  readonly birthtime: Maybe<Scalars['Date']>;
  /** @deprecated Use `birthTime` instead */
  readonly birthtimeMs: Maybe<Scalars['Float']>;
  readonly blksize: Maybe<Scalars['Int']>;
  readonly blocks: Maybe<Scalars['Int']>;
  readonly url: Maybe<Scalars['String']>;
  /** Copy file to static directory and return public url to it */
  readonly publicURL: Maybe<Scalars['String']>;
  /** Returns all children nodes filtered by type ImageSharp */
  readonly childrenImageSharp: Maybe<ReadonlyArray<Maybe<ImageSharp>>>;
  /** Returns the first child node of type ImageSharp or null if there are no children of given type on this node */
  readonly childImageSharp: Maybe<ImageSharp>;
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};


type File_modifiedTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type File_accessTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type File_changeTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type File_birthTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type File_atimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type File_mtimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type File_ctimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};

/** Node Interface */
type Node = {
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};

type Internal = {
  readonly content: Maybe<Scalars['String']>;
  readonly contentDigest: Scalars['String'];
  readonly description: Maybe<Scalars['String']>;
  readonly fieldOwners: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly ignoreType: Maybe<Scalars['Boolean']>;
  readonly mediaType: Maybe<Scalars['String']>;
  readonly owner: Scalars['String'];
  readonly type: Scalars['String'];
};


type Directory = Node & {
  readonly sourceInstanceName: Scalars['String'];
  readonly absolutePath: Scalars['String'];
  readonly relativePath: Scalars['String'];
  readonly extension: Scalars['String'];
  readonly size: Scalars['Int'];
  readonly prettySize: Scalars['String'];
  readonly modifiedTime: Scalars['Date'];
  readonly accessTime: Scalars['Date'];
  readonly changeTime: Scalars['Date'];
  readonly birthTime: Scalars['Date'];
  readonly root: Scalars['String'];
  readonly dir: Scalars['String'];
  readonly base: Scalars['String'];
  readonly ext: Scalars['String'];
  readonly name: Scalars['String'];
  readonly relativeDirectory: Scalars['String'];
  readonly dev: Scalars['Int'];
  readonly mode: Scalars['Int'];
  readonly nlink: Scalars['Int'];
  readonly uid: Scalars['Int'];
  readonly gid: Scalars['Int'];
  readonly rdev: Scalars['Int'];
  readonly ino: Scalars['Float'];
  readonly atimeMs: Scalars['Float'];
  readonly mtimeMs: Scalars['Float'];
  readonly ctimeMs: Scalars['Float'];
  readonly atime: Scalars['Date'];
  readonly mtime: Scalars['Date'];
  readonly ctime: Scalars['Date'];
  /** @deprecated Use `birthTime` instead */
  readonly birthtime: Maybe<Scalars['Date']>;
  /** @deprecated Use `birthTime` instead */
  readonly birthtimeMs: Maybe<Scalars['Float']>;
  readonly blksize: Maybe<Scalars['Int']>;
  readonly blocks: Maybe<Scalars['Int']>;
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};


type Directory_modifiedTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type Directory_accessTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type Directory_changeTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type Directory_birthTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type Directory_atimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type Directory_mtimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type Directory_ctimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};

type Site = Node & {
  readonly buildTime: Maybe<Scalars['Date']>;
  readonly siteMetadata: Maybe<SiteSiteMetadata>;
  readonly port: Maybe<Scalars['Int']>;
  readonly host: Maybe<Scalars['String']>;
  readonly polyfill: Maybe<Scalars['Boolean']>;
  readonly pathPrefix: Maybe<Scalars['String']>;
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};


type Site_buildTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};

type SiteSiteMetadata = {
  readonly title: Maybe<Scalars['String']>;
  readonly description: Maybe<Scalars['String']>;
};

type SiteFunction = Node & {
  readonly apiRoute: Scalars['String'];
  readonly originalFilePath: Scalars['String'];
  readonly relativeCompiledFilePath: Scalars['String'];
  readonly absoluteCompiledFilePath: Scalars['String'];
  readonly matchPath: Maybe<Scalars['String']>;
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};

type SitePage = Node & {
  readonly path: Scalars['String'];
  readonly component: Scalars['String'];
  readonly internalComponentName: Scalars['String'];
  readonly componentChunkName: Scalars['String'];
  readonly matchPath: Maybe<Scalars['String']>;
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
  readonly isCreatedByStatefulCreatePages: Maybe<Scalars['Boolean']>;
  readonly pluginCreator: Maybe<SitePlugin>;
  readonly pluginCreatorId: Maybe<Scalars['String']>;
  readonly componentPath: Maybe<Scalars['String']>;
};

type ImageFormat =
  | 'NO_CHANGE'
  | 'AUTO'
  | 'jpg'
  | 'png'
  | 'webp'
  | 'avif';

type ImageFit =
  | 'cover'
  | 'contain'
  | 'fill'
  | 'inside'
  | 'outside';

type ImageLayout =
  | 'fixed'
  | 'fullWidth'
  | 'constrained';

type ImageCropFocus =
  | 'CENTER'
  | 1
  | 5
  | 2
  | 6
  | 3
  | 7
  | 4
  | 8
  | 16
  | 17;

type DuotoneGradient = {
  readonly highlight: Scalars['String'];
  readonly shadow: Scalars['String'];
  readonly opacity: Maybe<Scalars['Int']>;
};

type PotraceTurnPolicy =
  | 'black'
  | 'white'
  | 'left'
  | 'right'
  | 'minority'
  | 'majority';

type Potrace = {
  readonly turnPolicy: Maybe<PotraceTurnPolicy>;
  readonly turdSize: Maybe<Scalars['Float']>;
  readonly alphaMax: Maybe<Scalars['Float']>;
  readonly optCurve: Maybe<Scalars['Boolean']>;
  readonly optTolerance: Maybe<Scalars['Float']>;
  readonly threshold: Maybe<Scalars['Int']>;
  readonly blackOnWhite: Maybe<Scalars['Boolean']>;
  readonly color: Maybe<Scalars['String']>;
  readonly background: Maybe<Scalars['String']>;
};

type ImageSharp = Node & {
  readonly fixed: Maybe<ImageSharpFixed>;
  readonly fluid: Maybe<ImageSharpFluid>;
  readonly gatsbyImageData: Scalars['JSON'];
  readonly original: Maybe<ImageSharpOriginal>;
  readonly resize: Maybe<ImageSharpResize>;
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};


type ImageSharp_fixedArgs = {
  width: Maybe<Scalars['Int']>;
  height: Maybe<Scalars['Int']>;
  base64Width: Maybe<Scalars['Int']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  duotone: Maybe<DuotoneGradient>;
  traceSVG: Maybe<Potrace>;
  quality: Maybe<Scalars['Int']>;
  jpegQuality: Maybe<Scalars['Int']>;
  pngQuality: Maybe<Scalars['Int']>;
  webpQuality: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ImageFormat>;
  toFormatBase64?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
};


type ImageSharp_fluidArgs = {
  maxWidth: Maybe<Scalars['Int']>;
  maxHeight: Maybe<Scalars['Int']>;
  base64Width: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  duotone: Maybe<DuotoneGradient>;
  traceSVG: Maybe<Potrace>;
  quality: Maybe<Scalars['Int']>;
  jpegQuality: Maybe<Scalars['Int']>;
  pngQuality: Maybe<Scalars['Int']>;
  webpQuality: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ImageFormat>;
  toFormatBase64?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
  sizes?: Maybe<Scalars['String']>;
  srcSetBreakpoints?: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
};


type ImageSharp_gatsbyImageDataArgs = {
  layout?: Maybe<ImageLayout>;
  width: Maybe<Scalars['Int']>;
  height: Maybe<Scalars['Int']>;
  aspectRatio: Maybe<Scalars['Float']>;
  placeholder: Maybe<ImagePlaceholder>;
  blurredOptions: Maybe<BlurredOptions>;
  tracedSVGOptions: Maybe<Potrace>;
  formats: Maybe<ReadonlyArray<Maybe<ImageFormat>>>;
  outputPixelDensities: Maybe<ReadonlyArray<Maybe<Scalars['Float']>>>;
  breakpoints: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
  sizes: Maybe<Scalars['String']>;
  quality: Maybe<Scalars['Int']>;
  jpgOptions: Maybe<JPGOptions>;
  pngOptions: Maybe<PNGOptions>;
  webpOptions: Maybe<WebPOptions>;
  avifOptions: Maybe<AVIFOptions>;
  transformOptions: Maybe<TransformOptions>;
  backgroundColor: Maybe<Scalars['String']>;
};


type ImageSharp_resizeArgs = {
  width: Maybe<Scalars['Int']>;
  height: Maybe<Scalars['Int']>;
  quality: Maybe<Scalars['Int']>;
  jpegQuality: Maybe<Scalars['Int']>;
  pngQuality: Maybe<Scalars['Int']>;
  webpQuality: Maybe<Scalars['Int']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionLevel?: Maybe<Scalars['Int']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  duotone: Maybe<DuotoneGradient>;
  base64?: Maybe<Scalars['Boolean']>;
  traceSVG: Maybe<Potrace>;
  toFormat?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
};

type ImageSharpFixed = {
  readonly base64: Maybe<Scalars['String']>;
  readonly tracedSVG: Maybe<Scalars['String']>;
  readonly aspectRatio: Maybe<Scalars['Float']>;
  readonly width: Scalars['Float'];
  readonly height: Scalars['Float'];
  readonly src: Scalars['String'];
  readonly srcSet: Scalars['String'];
  readonly srcWebp: Maybe<Scalars['String']>;
  readonly srcSetWebp: Maybe<Scalars['String']>;
  readonly originalName: Maybe<Scalars['String']>;
};

type ImageSharpFluid = {
  readonly base64: Maybe<Scalars['String']>;
  readonly tracedSVG: Maybe<Scalars['String']>;
  readonly aspectRatio: Scalars['Float'];
  readonly src: Scalars['String'];
  readonly srcSet: Scalars['String'];
  readonly srcWebp: Maybe<Scalars['String']>;
  readonly srcSetWebp: Maybe<Scalars['String']>;
  readonly sizes: Scalars['String'];
  readonly originalImg: Maybe<Scalars['String']>;
  readonly originalName: Maybe<Scalars['String']>;
  readonly presentationWidth: Scalars['Int'];
  readonly presentationHeight: Scalars['Int'];
};


type ImagePlaceholder =
  | 'dominantColor'
  | 'tracedSVG'
  | 'blurred'
  | 'none';

type BlurredOptions = {
  /** Width of the generated low-res preview. Default is 20px */
  readonly width: Maybe<Scalars['Int']>;
  /** Force the output format for the low-res preview. Default is to use the same format as the input. You should rarely need to change this */
  readonly toFormat: Maybe<ImageFormat>;
};

type JPGOptions = {
  readonly quality: Maybe<Scalars['Int']>;
  readonly progressive: Maybe<Scalars['Boolean']>;
};

type PNGOptions = {
  readonly quality: Maybe<Scalars['Int']>;
  readonly compressionSpeed: Maybe<Scalars['Int']>;
};

type WebPOptions = {
  readonly quality: Maybe<Scalars['Int']>;
};

type AVIFOptions = {
  readonly quality: Maybe<Scalars['Int']>;
  readonly lossless: Maybe<Scalars['Boolean']>;
  readonly speed: Maybe<Scalars['Int']>;
};

type TransformOptions = {
  readonly grayscale: Maybe<Scalars['Boolean']>;
  readonly duotone: Maybe<DuotoneGradient>;
  readonly rotate: Maybe<Scalars['Int']>;
  readonly trim: Maybe<Scalars['Float']>;
  readonly cropFocus: Maybe<ImageCropFocus>;
  readonly fit: Maybe<ImageFit>;
};

type ImageSharpOriginal = {
  readonly width: Maybe<Scalars['Float']>;
  readonly height: Maybe<Scalars['Float']>;
  readonly src: Maybe<Scalars['String']>;
};

type ImageSharpResize = {
  readonly src: Maybe<Scalars['String']>;
  readonly tracedSVG: Maybe<Scalars['String']>;
  readonly width: Maybe<Scalars['Int']>;
  readonly height: Maybe<Scalars['Int']>;
  readonly aspectRatio: Maybe<Scalars['Float']>;
  readonly originalName: Maybe<Scalars['String']>;
};

type MdxFrontmatter = {
  readonly title: Scalars['String'];
};

type MdxHeadingMdx = {
  readonly value: Maybe<Scalars['String']>;
  readonly depth: Maybe<Scalars['Int']>;
};

type HeadingsMdx =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6';

type MdxWordCount = {
  readonly paragraphs: Maybe<Scalars['Int']>;
  readonly sentences: Maybe<Scalars['Int']>;
  readonly words: Maybe<Scalars['Int']>;
};

type Mdx = Node & {
  readonly rawBody: Scalars['String'];
  readonly fileAbsolutePath: Scalars['String'];
  readonly frontmatter: Maybe<MdxFrontmatter>;
  readonly slug: Maybe<Scalars['String']>;
  readonly body: Scalars['String'];
  readonly excerpt: Scalars['String'];
  readonly headings: Maybe<ReadonlyArray<Maybe<MdxHeadingMdx>>>;
  readonly html: Maybe<Scalars['String']>;
  readonly mdxAST: Maybe<Scalars['JSON']>;
  readonly tableOfContents: Maybe<Scalars['JSON']>;
  readonly timeToRead: Maybe<Scalars['Int']>;
  readonly wordCount: Maybe<MdxWordCount>;
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};


type Mdx_excerptArgs = {
  pruneLength?: Maybe<Scalars['Int']>;
  truncate?: Maybe<Scalars['Boolean']>;
};


type Mdx_headingsArgs = {
  depth: Maybe<HeadingsMdx>;
};


type Mdx_tableOfContentsArgs = {
  maxDepth: Maybe<Scalars['Int']>;
};

type PrintfulStore = Node & {
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
  readonly name: Maybe<Scalars['String']>;
  readonly type: Maybe<Scalars['String']>;
  readonly website: Maybe<Scalars['String']>;
  readonly currency: Maybe<Scalars['String']>;
  readonly created: Maybe<Scalars['Int']>;
};

type PrintfulCountry = Node & {
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
  readonly name: Maybe<Scalars['String']>;
  readonly code: Maybe<Scalars['String']>;
  readonly states: Maybe<ReadonlyArray<Maybe<PrintfulCountryStates>>>;
};

type PrintfulCountryStates = {
  readonly code: Maybe<Scalars['String']>;
  readonly name: Maybe<Scalars['String']>;
};

type PrintfulCatalogVariant = Node & {
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
  readonly name: Maybe<Scalars['String']>;
  readonly size: Maybe<Scalars['String']>;
  readonly color: Maybe<Scalars['String']>;
  readonly color_code: Maybe<Scalars['String']>;
  readonly image: Maybe<Scalars['String']>;
  readonly price: Maybe<Scalars['String']>;
  readonly in_stock: Maybe<Scalars['Boolean']>;
  readonly availability_regions: Maybe<PrintfulCatalogVariantAvailability_regions>;
  readonly availability_status: Maybe<ReadonlyArray<Maybe<PrintfulCatalogVariantAvailability_status>>>;
  readonly product_id: Maybe<Scalars['String']>;
  readonly retail_price: Maybe<Scalars['Float']>;
  readonly variantImage: Maybe<File>;
};

type PrintfulCatalogVariantAvailability_regions = {
  readonly US: Maybe<Scalars['String']>;
  readonly MX: Maybe<Scalars['String']>;
  readonly CA: Maybe<Scalars['String']>;
  readonly EU: Maybe<Scalars['String']>;
};

type PrintfulCatalogVariantAvailability_status = {
  readonly region: Maybe<Scalars['String']>;
  readonly status: Maybe<Scalars['String']>;
};

type PrintfulProduct = Node & {
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
  readonly external_id: Maybe<Scalars['String']>;
  readonly name: Maybe<Scalars['String']>;
  readonly synced: Maybe<Scalars['Int']>;
  readonly thumbnail_url: Maybe<Scalars['String']>;
  readonly is_ignored: Maybe<Scalars['Boolean']>;
  readonly slug: Maybe<Scalars['String']>;
  readonly variants: Maybe<ReadonlyArray<Maybe<PrintfulVariant>>>;
  readonly productImage: Maybe<File>;
};

type PrintfulVariant = Node & {
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
  readonly external_id: Maybe<Scalars['String']>;
  readonly sync_product_id: Maybe<Scalars['Int']>;
  readonly name: Maybe<Scalars['String']>;
  readonly synced: Maybe<Scalars['Boolean']>;
  readonly variant_id: Maybe<Scalars['Int']>;
  readonly retail_price: Maybe<Scalars['Float']>;
  readonly sku: Maybe<Scalars['String']>;
  readonly currency: Maybe<Scalars['String']>;
  readonly product: Maybe<PrintfulVariantProduct>;
  readonly files: Maybe<ReadonlyArray<Maybe<PrintfulVariantFiles>>>;
  readonly options: Maybe<ReadonlyArray<Maybe<PrintfulVariantOptions>>>;
  readonly is_ignored: Maybe<Scalars['Boolean']>;
  readonly slug: Maybe<Scalars['String']>;
  readonly parentProduct: Maybe<PrintfulProduct>;
  readonly catalogVariant: Maybe<PrintfulCatalogVariant>;
  readonly catalogProduct: Maybe<PrintfulCatalogProduct>;
  readonly variantImage: Maybe<File>;
};

type PrintfulVariantProduct = {
  readonly variant_id: Maybe<Scalars['Int']>;
  readonly product_id: Maybe<Scalars['Int']>;
  readonly image: Maybe<Scalars['String']>;
  readonly name: Maybe<Scalars['String']>;
};

type PrintfulVariantFiles = {
  readonly id: Maybe<Scalars['Int']>;
  readonly type: Maybe<Scalars['String']>;
  readonly hash: Maybe<Scalars['String']>;
  readonly filename: Maybe<Scalars['String']>;
  readonly mime_type: Maybe<Scalars['String']>;
  readonly size: Maybe<Scalars['Int']>;
  readonly width: Maybe<Scalars['Int']>;
  readonly height: Maybe<Scalars['Int']>;
  readonly dpi: Maybe<Scalars['Int']>;
  readonly status: Maybe<Scalars['String']>;
  readonly created: Maybe<Scalars['Int']>;
  readonly thumbnail_url: Maybe<Scalars['String']>;
  readonly preview_url: Maybe<Scalars['String']>;
  readonly visible: Maybe<Scalars['Boolean']>;
};

type PrintfulVariantOptions = {
  readonly id: Maybe<Scalars['String']>;
  readonly value: Maybe<Scalars['String']>;
};

type PrintfulCatalogProduct = Node & {
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
  readonly type: Maybe<Scalars['String']>;
  readonly type_name: Maybe<Scalars['String']>;
  readonly brand: Maybe<Scalars['String']>;
  readonly model: Maybe<Scalars['String']>;
  readonly image: Maybe<Scalars['String']>;
  readonly variant_count: Maybe<Scalars['Int']>;
  readonly currency: Maybe<Scalars['String']>;
  readonly files: Maybe<ReadonlyArray<Maybe<PrintfulCatalogProductFiles>>>;
  readonly options: Maybe<ReadonlyArray<Maybe<PrintfulCatalogProductOptions>>>;
  readonly dimensions: Maybe<PrintfulCatalogProductDimensions>;
  readonly is_discontinued: Maybe<Scalars['Boolean']>;
  readonly description: Maybe<Scalars['String']>;
  readonly productImage: Maybe<File>;
};

type PrintfulCatalogProductFiles = {
  readonly id: Maybe<Scalars['String']>;
  readonly type: Maybe<Scalars['String']>;
  readonly title: Maybe<Scalars['String']>;
  readonly additional_price: Maybe<Scalars['String']>;
};

type PrintfulCatalogProductOptions = {
  readonly id: Maybe<Scalars['String']>;
  readonly title: Maybe<Scalars['String']>;
  readonly type: Maybe<Scalars['String']>;
  readonly values: Maybe<PrintfulCatalogProductOptionsValues>;
  readonly additional_price_breakdown: Maybe<PrintfulCatalogProductOptionsAdditional_price_breakdown>;
};

type PrintfulCatalogProductOptionsValues = {
  readonly flat: Maybe<Scalars['String']>;
  readonly _3d: Maybe<Scalars['String']>;
  readonly both: Maybe<Scalars['String']>;
  readonly _FFFFFF: Maybe<Scalars['String']>;
  readonly _000000: Maybe<Scalars['String']>;
  readonly _96A1A8: Maybe<Scalars['String']>;
  readonly _A67843: Maybe<Scalars['String']>;
  readonly _FFCC00: Maybe<Scalars['String']>;
  readonly _E25C27: Maybe<Scalars['String']>;
  readonly _CC3366: Maybe<Scalars['String']>;
  readonly _CC3333: Maybe<Scalars['String']>;
  readonly _660000: Maybe<Scalars['String']>;
  readonly _333366: Maybe<Scalars['String']>;
  readonly _005397: Maybe<Scalars['String']>;
  readonly _3399FF: Maybe<Scalars['String']>;
  readonly _6B5294: Maybe<Scalars['String']>;
  readonly _01784E: Maybe<Scalars['String']>;
  readonly _7BA35A: Maybe<Scalars['String']>;
  readonly white: Maybe<Scalars['String']>;
  readonly black: Maybe<Scalars['String']>;
};

type PrintfulCatalogProductOptionsAdditional_price_breakdown = {
  readonly flat: Maybe<Scalars['String']>;
  readonly _3d: Maybe<Scalars['String']>;
  readonly both: Maybe<Scalars['String']>;
};

type PrintfulCatalogProductDimensions = {
  readonly front: Maybe<Scalars['String']>;
};

type SiteBuildMetadata = Node & {
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
  readonly buildTime: Maybe<Scalars['Date']>;
};


type SiteBuildMetadata_buildTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};

type SitePlugin = Node & {
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
  readonly resolve: Maybe<Scalars['String']>;
  readonly name: Maybe<Scalars['String']>;
  readonly version: Maybe<Scalars['String']>;
  readonly pluginOptions: Maybe<SitePluginPluginOptions>;
  readonly nodeAPIs: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly browserAPIs: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly ssrAPIs: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly pluginFilepath: Maybe<Scalars['String']>;
  readonly packageJson: Maybe<SitePluginPackageJson>;
};

type SitePluginPluginOptions = {
  readonly output: Maybe<Scalars['String']>;
  readonly createLinkInHead: Maybe<Scalars['Boolean']>;
  readonly entryLimit: Maybe<Scalars['Int']>;
  readonly query: Maybe<Scalars['String']>;
  readonly icon: Maybe<Scalars['String']>;
  readonly legacy: Maybe<Scalars['Boolean']>;
  readonly theme_color_in_head: Maybe<Scalars['Boolean']>;
  readonly cache_busting_mode: Maybe<Scalars['String']>;
  readonly crossOrigin: Maybe<Scalars['String']>;
  readonly include_favicon: Maybe<Scalars['Boolean']>;
  readonly cacheDigest: Maybe<Scalars['String']>;
  readonly extensions: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly lessBabel: Maybe<Scalars['Boolean']>;
  readonly mediaTypes: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly root: Maybe<Scalars['String']>;
  readonly base64Width: Maybe<Scalars['Int']>;
  readonly stripMetadata: Maybe<Scalars['Boolean']>;
  readonly defaultQuality: Maybe<Scalars['Int']>;
  readonly failOnError: Maybe<Scalars['Boolean']>;
  readonly name: Maybe<Scalars['String']>;
  readonly path: Maybe<Scalars['String']>;
  readonly apiKey: Maybe<Scalars['String']>;
  readonly paginationLimit: Maybe<Scalars['Int']>;
  readonly pathCheck: Maybe<Scalars['Boolean']>;
  readonly allExtensions: Maybe<Scalars['Boolean']>;
  readonly isTSX: Maybe<Scalars['Boolean']>;
  readonly jsxPragma: Maybe<Scalars['String']>;
};

type SitePluginPackageJson = {
  readonly name: Maybe<Scalars['String']>;
  readonly description: Maybe<Scalars['String']>;
  readonly version: Maybe<Scalars['String']>;
  readonly main: Maybe<Scalars['String']>;
  readonly license: Maybe<Scalars['String']>;
  readonly dependencies: Maybe<ReadonlyArray<Maybe<SitePluginPackageJsonDependencies>>>;
  readonly devDependencies: Maybe<ReadonlyArray<Maybe<SitePluginPackageJsonDevDependencies>>>;
  readonly peerDependencies: Maybe<ReadonlyArray<Maybe<SitePluginPackageJsonPeerDependencies>>>;
  readonly keywords: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
};

type SitePluginPackageJsonDependencies = {
  readonly name: Maybe<Scalars['String']>;
  readonly version: Maybe<Scalars['String']>;
};

type SitePluginPackageJsonDevDependencies = {
  readonly name: Maybe<Scalars['String']>;
  readonly version: Maybe<Scalars['String']>;
};

type SitePluginPackageJsonPeerDependencies = {
  readonly name: Maybe<Scalars['String']>;
  readonly version: Maybe<Scalars['String']>;
};

type Query = {
  readonly file: Maybe<File>;
  readonly allFile: FileConnection;
  readonly directory: Maybe<Directory>;
  readonly allDirectory: DirectoryConnection;
  readonly site: Maybe<Site>;
  readonly allSite: SiteConnection;
  readonly siteFunction: Maybe<SiteFunction>;
  readonly allSiteFunction: SiteFunctionConnection;
  readonly sitePage: Maybe<SitePage>;
  readonly allSitePage: SitePageConnection;
  readonly imageSharp: Maybe<ImageSharp>;
  readonly allImageSharp: ImageSharpConnection;
  readonly mdx: Maybe<Mdx>;
  readonly allMdx: MdxConnection;
  readonly printfulStore: Maybe<PrintfulStore>;
  readonly allPrintfulStore: PrintfulStoreConnection;
  readonly printfulCountry: Maybe<PrintfulCountry>;
  readonly allPrintfulCountry: PrintfulCountryConnection;
  readonly printfulCatalogVariant: Maybe<PrintfulCatalogVariant>;
  readonly allPrintfulCatalogVariant: PrintfulCatalogVariantConnection;
  readonly printfulProduct: Maybe<PrintfulProduct>;
  readonly allPrintfulProduct: PrintfulProductConnection;
  readonly printfulVariant: Maybe<PrintfulVariant>;
  readonly allPrintfulVariant: PrintfulVariantConnection;
  readonly printfulCatalogProduct: Maybe<PrintfulCatalogProduct>;
  readonly allPrintfulCatalogProduct: PrintfulCatalogProductConnection;
  readonly siteBuildMetadata: Maybe<SiteBuildMetadata>;
  readonly allSiteBuildMetadata: SiteBuildMetadataConnection;
  readonly sitePlugin: Maybe<SitePlugin>;
  readonly allSitePlugin: SitePluginConnection;
};


type Query_fileArgs = {
  sourceInstanceName: Maybe<StringQueryOperatorInput>;
  absolutePath: Maybe<StringQueryOperatorInput>;
  relativePath: Maybe<StringQueryOperatorInput>;
  extension: Maybe<StringQueryOperatorInput>;
  size: Maybe<IntQueryOperatorInput>;
  prettySize: Maybe<StringQueryOperatorInput>;
  modifiedTime: Maybe<DateQueryOperatorInput>;
  accessTime: Maybe<DateQueryOperatorInput>;
  changeTime: Maybe<DateQueryOperatorInput>;
  birthTime: Maybe<DateQueryOperatorInput>;
  root: Maybe<StringQueryOperatorInput>;
  dir: Maybe<StringQueryOperatorInput>;
  base: Maybe<StringQueryOperatorInput>;
  ext: Maybe<StringQueryOperatorInput>;
  name: Maybe<StringQueryOperatorInput>;
  relativeDirectory: Maybe<StringQueryOperatorInput>;
  dev: Maybe<IntQueryOperatorInput>;
  mode: Maybe<IntQueryOperatorInput>;
  nlink: Maybe<IntQueryOperatorInput>;
  uid: Maybe<IntQueryOperatorInput>;
  gid: Maybe<IntQueryOperatorInput>;
  rdev: Maybe<IntQueryOperatorInput>;
  ino: Maybe<FloatQueryOperatorInput>;
  atimeMs: Maybe<FloatQueryOperatorInput>;
  mtimeMs: Maybe<FloatQueryOperatorInput>;
  ctimeMs: Maybe<FloatQueryOperatorInput>;
  atime: Maybe<DateQueryOperatorInput>;
  mtime: Maybe<DateQueryOperatorInput>;
  ctime: Maybe<DateQueryOperatorInput>;
  birthtime: Maybe<DateQueryOperatorInput>;
  birthtimeMs: Maybe<FloatQueryOperatorInput>;
  blksize: Maybe<IntQueryOperatorInput>;
  blocks: Maybe<IntQueryOperatorInput>;
  url: Maybe<StringQueryOperatorInput>;
  publicURL: Maybe<StringQueryOperatorInput>;
  childrenImageSharp: Maybe<ImageSharpFilterListInput>;
  childImageSharp: Maybe<ImageSharpFilterInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allFileArgs = {
  filter: Maybe<FileFilterInput>;
  sort: Maybe<FileSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_directoryArgs = {
  sourceInstanceName: Maybe<StringQueryOperatorInput>;
  absolutePath: Maybe<StringQueryOperatorInput>;
  relativePath: Maybe<StringQueryOperatorInput>;
  extension: Maybe<StringQueryOperatorInput>;
  size: Maybe<IntQueryOperatorInput>;
  prettySize: Maybe<StringQueryOperatorInput>;
  modifiedTime: Maybe<DateQueryOperatorInput>;
  accessTime: Maybe<DateQueryOperatorInput>;
  changeTime: Maybe<DateQueryOperatorInput>;
  birthTime: Maybe<DateQueryOperatorInput>;
  root: Maybe<StringQueryOperatorInput>;
  dir: Maybe<StringQueryOperatorInput>;
  base: Maybe<StringQueryOperatorInput>;
  ext: Maybe<StringQueryOperatorInput>;
  name: Maybe<StringQueryOperatorInput>;
  relativeDirectory: Maybe<StringQueryOperatorInput>;
  dev: Maybe<IntQueryOperatorInput>;
  mode: Maybe<IntQueryOperatorInput>;
  nlink: Maybe<IntQueryOperatorInput>;
  uid: Maybe<IntQueryOperatorInput>;
  gid: Maybe<IntQueryOperatorInput>;
  rdev: Maybe<IntQueryOperatorInput>;
  ino: Maybe<FloatQueryOperatorInput>;
  atimeMs: Maybe<FloatQueryOperatorInput>;
  mtimeMs: Maybe<FloatQueryOperatorInput>;
  ctimeMs: Maybe<FloatQueryOperatorInput>;
  atime: Maybe<DateQueryOperatorInput>;
  mtime: Maybe<DateQueryOperatorInput>;
  ctime: Maybe<DateQueryOperatorInput>;
  birthtime: Maybe<DateQueryOperatorInput>;
  birthtimeMs: Maybe<FloatQueryOperatorInput>;
  blksize: Maybe<IntQueryOperatorInput>;
  blocks: Maybe<IntQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allDirectoryArgs = {
  filter: Maybe<DirectoryFilterInput>;
  sort: Maybe<DirectorySortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_siteArgs = {
  buildTime: Maybe<DateQueryOperatorInput>;
  siteMetadata: Maybe<SiteSiteMetadataFilterInput>;
  port: Maybe<IntQueryOperatorInput>;
  host: Maybe<StringQueryOperatorInput>;
  polyfill: Maybe<BooleanQueryOperatorInput>;
  pathPrefix: Maybe<StringQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allSiteArgs = {
  filter: Maybe<SiteFilterInput>;
  sort: Maybe<SiteSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_siteFunctionArgs = {
  apiRoute: Maybe<StringQueryOperatorInput>;
  originalFilePath: Maybe<StringQueryOperatorInput>;
  relativeCompiledFilePath: Maybe<StringQueryOperatorInput>;
  absoluteCompiledFilePath: Maybe<StringQueryOperatorInput>;
  matchPath: Maybe<StringQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allSiteFunctionArgs = {
  filter: Maybe<SiteFunctionFilterInput>;
  sort: Maybe<SiteFunctionSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_sitePageArgs = {
  path: Maybe<StringQueryOperatorInput>;
  component: Maybe<StringQueryOperatorInput>;
  internalComponentName: Maybe<StringQueryOperatorInput>;
  componentChunkName: Maybe<StringQueryOperatorInput>;
  matchPath: Maybe<StringQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
  isCreatedByStatefulCreatePages: Maybe<BooleanQueryOperatorInput>;
  pluginCreator: Maybe<SitePluginFilterInput>;
  pluginCreatorId: Maybe<StringQueryOperatorInput>;
  componentPath: Maybe<StringQueryOperatorInput>;
};


type Query_allSitePageArgs = {
  filter: Maybe<SitePageFilterInput>;
  sort: Maybe<SitePageSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_imageSharpArgs = {
  fixed: Maybe<ImageSharpFixedFilterInput>;
  fluid: Maybe<ImageSharpFluidFilterInput>;
  gatsbyImageData: Maybe<JSONQueryOperatorInput>;
  original: Maybe<ImageSharpOriginalFilterInput>;
  resize: Maybe<ImageSharpResizeFilterInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allImageSharpArgs = {
  filter: Maybe<ImageSharpFilterInput>;
  sort: Maybe<ImageSharpSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_mdxArgs = {
  rawBody: Maybe<StringQueryOperatorInput>;
  fileAbsolutePath: Maybe<StringQueryOperatorInput>;
  frontmatter: Maybe<MdxFrontmatterFilterInput>;
  slug: Maybe<StringQueryOperatorInput>;
  body: Maybe<StringQueryOperatorInput>;
  excerpt: Maybe<StringQueryOperatorInput>;
  headings: Maybe<MdxHeadingMdxFilterListInput>;
  html: Maybe<StringQueryOperatorInput>;
  mdxAST: Maybe<JSONQueryOperatorInput>;
  tableOfContents: Maybe<JSONQueryOperatorInput>;
  timeToRead: Maybe<IntQueryOperatorInput>;
  wordCount: Maybe<MdxWordCountFilterInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allMdxArgs = {
  filter: Maybe<MdxFilterInput>;
  sort: Maybe<MdxSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_printfulStoreArgs = {
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
  name: Maybe<StringQueryOperatorInput>;
  type: Maybe<StringQueryOperatorInput>;
  website: Maybe<StringQueryOperatorInput>;
  currency: Maybe<StringQueryOperatorInput>;
  created: Maybe<IntQueryOperatorInput>;
};


type Query_allPrintfulStoreArgs = {
  filter: Maybe<PrintfulStoreFilterInput>;
  sort: Maybe<PrintfulStoreSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_printfulCountryArgs = {
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
  name: Maybe<StringQueryOperatorInput>;
  code: Maybe<StringQueryOperatorInput>;
  states: Maybe<PrintfulCountryStatesFilterListInput>;
};


type Query_allPrintfulCountryArgs = {
  filter: Maybe<PrintfulCountryFilterInput>;
  sort: Maybe<PrintfulCountrySortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_printfulCatalogVariantArgs = {
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
  name: Maybe<StringQueryOperatorInput>;
  size: Maybe<StringQueryOperatorInput>;
  color: Maybe<StringQueryOperatorInput>;
  color_code: Maybe<StringQueryOperatorInput>;
  image: Maybe<StringQueryOperatorInput>;
  price: Maybe<StringQueryOperatorInput>;
  in_stock: Maybe<BooleanQueryOperatorInput>;
  availability_regions: Maybe<PrintfulCatalogVariantAvailability_regionsFilterInput>;
  availability_status: Maybe<PrintfulCatalogVariantAvailability_statusFilterListInput>;
  product_id: Maybe<StringQueryOperatorInput>;
  retail_price: Maybe<FloatQueryOperatorInput>;
  variantImage: Maybe<FileFilterInput>;
};


type Query_allPrintfulCatalogVariantArgs = {
  filter: Maybe<PrintfulCatalogVariantFilterInput>;
  sort: Maybe<PrintfulCatalogVariantSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_printfulProductArgs = {
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
  external_id: Maybe<StringQueryOperatorInput>;
  name: Maybe<StringQueryOperatorInput>;
  synced: Maybe<IntQueryOperatorInput>;
  thumbnail_url: Maybe<StringQueryOperatorInput>;
  is_ignored: Maybe<BooleanQueryOperatorInput>;
  slug: Maybe<StringQueryOperatorInput>;
  variants: Maybe<PrintfulVariantFilterListInput>;
  productImage: Maybe<FileFilterInput>;
};


type Query_allPrintfulProductArgs = {
  filter: Maybe<PrintfulProductFilterInput>;
  sort: Maybe<PrintfulProductSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_printfulVariantArgs = {
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
  external_id: Maybe<StringQueryOperatorInput>;
  sync_product_id: Maybe<IntQueryOperatorInput>;
  name: Maybe<StringQueryOperatorInput>;
  synced: Maybe<BooleanQueryOperatorInput>;
  variant_id: Maybe<IntQueryOperatorInput>;
  retail_price: Maybe<FloatQueryOperatorInput>;
  sku: Maybe<StringQueryOperatorInput>;
  currency: Maybe<StringQueryOperatorInput>;
  product: Maybe<PrintfulVariantProductFilterInput>;
  files: Maybe<PrintfulVariantFilesFilterListInput>;
  options: Maybe<PrintfulVariantOptionsFilterListInput>;
  is_ignored: Maybe<BooleanQueryOperatorInput>;
  slug: Maybe<StringQueryOperatorInput>;
  parentProduct: Maybe<PrintfulProductFilterInput>;
  catalogVariant: Maybe<PrintfulCatalogVariantFilterInput>;
  catalogProduct: Maybe<PrintfulCatalogProductFilterInput>;
  variantImage: Maybe<FileFilterInput>;
};


type Query_allPrintfulVariantArgs = {
  filter: Maybe<PrintfulVariantFilterInput>;
  sort: Maybe<PrintfulVariantSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_printfulCatalogProductArgs = {
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
  type: Maybe<StringQueryOperatorInput>;
  type_name: Maybe<StringQueryOperatorInput>;
  brand: Maybe<StringQueryOperatorInput>;
  model: Maybe<StringQueryOperatorInput>;
  image: Maybe<StringQueryOperatorInput>;
  variant_count: Maybe<IntQueryOperatorInput>;
  currency: Maybe<StringQueryOperatorInput>;
  files: Maybe<PrintfulCatalogProductFilesFilterListInput>;
  options: Maybe<PrintfulCatalogProductOptionsFilterListInput>;
  dimensions: Maybe<PrintfulCatalogProductDimensionsFilterInput>;
  is_discontinued: Maybe<BooleanQueryOperatorInput>;
  description: Maybe<StringQueryOperatorInput>;
  productImage: Maybe<FileFilterInput>;
};


type Query_allPrintfulCatalogProductArgs = {
  filter: Maybe<PrintfulCatalogProductFilterInput>;
  sort: Maybe<PrintfulCatalogProductSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_siteBuildMetadataArgs = {
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
  buildTime: Maybe<DateQueryOperatorInput>;
};


type Query_allSiteBuildMetadataArgs = {
  filter: Maybe<SiteBuildMetadataFilterInput>;
  sort: Maybe<SiteBuildMetadataSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_sitePluginArgs = {
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
  resolve: Maybe<StringQueryOperatorInput>;
  name: Maybe<StringQueryOperatorInput>;
  version: Maybe<StringQueryOperatorInput>;
  pluginOptions: Maybe<SitePluginPluginOptionsFilterInput>;
  nodeAPIs: Maybe<StringQueryOperatorInput>;
  browserAPIs: Maybe<StringQueryOperatorInput>;
  ssrAPIs: Maybe<StringQueryOperatorInput>;
  pluginFilepath: Maybe<StringQueryOperatorInput>;
  packageJson: Maybe<SitePluginPackageJsonFilterInput>;
};


type Query_allSitePluginArgs = {
  filter: Maybe<SitePluginFilterInput>;
  sort: Maybe<SitePluginSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};

type StringQueryOperatorInput = {
  readonly eq: Maybe<Scalars['String']>;
  readonly ne: Maybe<Scalars['String']>;
  readonly in: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly nin: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly regex: Maybe<Scalars['String']>;
  readonly glob: Maybe<Scalars['String']>;
};

type IntQueryOperatorInput = {
  readonly eq: Maybe<Scalars['Int']>;
  readonly ne: Maybe<Scalars['Int']>;
  readonly gt: Maybe<Scalars['Int']>;
  readonly gte: Maybe<Scalars['Int']>;
  readonly lt: Maybe<Scalars['Int']>;
  readonly lte: Maybe<Scalars['Int']>;
  readonly in: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
  readonly nin: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
};

type DateQueryOperatorInput = {
  readonly eq: Maybe<Scalars['Date']>;
  readonly ne: Maybe<Scalars['Date']>;
  readonly gt: Maybe<Scalars['Date']>;
  readonly gte: Maybe<Scalars['Date']>;
  readonly lt: Maybe<Scalars['Date']>;
  readonly lte: Maybe<Scalars['Date']>;
  readonly in: Maybe<ReadonlyArray<Maybe<Scalars['Date']>>>;
  readonly nin: Maybe<ReadonlyArray<Maybe<Scalars['Date']>>>;
};

type FloatQueryOperatorInput = {
  readonly eq: Maybe<Scalars['Float']>;
  readonly ne: Maybe<Scalars['Float']>;
  readonly gt: Maybe<Scalars['Float']>;
  readonly gte: Maybe<Scalars['Float']>;
  readonly lt: Maybe<Scalars['Float']>;
  readonly lte: Maybe<Scalars['Float']>;
  readonly in: Maybe<ReadonlyArray<Maybe<Scalars['Float']>>>;
  readonly nin: Maybe<ReadonlyArray<Maybe<Scalars['Float']>>>;
};

type ImageSharpFilterListInput = {
  readonly elemMatch: Maybe<ImageSharpFilterInput>;
};

type ImageSharpFilterInput = {
  readonly fixed: Maybe<ImageSharpFixedFilterInput>;
  readonly fluid: Maybe<ImageSharpFluidFilterInput>;
  readonly gatsbyImageData: Maybe<JSONQueryOperatorInput>;
  readonly original: Maybe<ImageSharpOriginalFilterInput>;
  readonly resize: Maybe<ImageSharpResizeFilterInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type ImageSharpFixedFilterInput = {
  readonly base64: Maybe<StringQueryOperatorInput>;
  readonly tracedSVG: Maybe<StringQueryOperatorInput>;
  readonly aspectRatio: Maybe<FloatQueryOperatorInput>;
  readonly width: Maybe<FloatQueryOperatorInput>;
  readonly height: Maybe<FloatQueryOperatorInput>;
  readonly src: Maybe<StringQueryOperatorInput>;
  readonly srcSet: Maybe<StringQueryOperatorInput>;
  readonly srcWebp: Maybe<StringQueryOperatorInput>;
  readonly srcSetWebp: Maybe<StringQueryOperatorInput>;
  readonly originalName: Maybe<StringQueryOperatorInput>;
};

type ImageSharpFluidFilterInput = {
  readonly base64: Maybe<StringQueryOperatorInput>;
  readonly tracedSVG: Maybe<StringQueryOperatorInput>;
  readonly aspectRatio: Maybe<FloatQueryOperatorInput>;
  readonly src: Maybe<StringQueryOperatorInput>;
  readonly srcSet: Maybe<StringQueryOperatorInput>;
  readonly srcWebp: Maybe<StringQueryOperatorInput>;
  readonly srcSetWebp: Maybe<StringQueryOperatorInput>;
  readonly sizes: Maybe<StringQueryOperatorInput>;
  readonly originalImg: Maybe<StringQueryOperatorInput>;
  readonly originalName: Maybe<StringQueryOperatorInput>;
  readonly presentationWidth: Maybe<IntQueryOperatorInput>;
  readonly presentationHeight: Maybe<IntQueryOperatorInput>;
};

type JSONQueryOperatorInput = {
  readonly eq: Maybe<Scalars['JSON']>;
  readonly ne: Maybe<Scalars['JSON']>;
  readonly in: Maybe<ReadonlyArray<Maybe<Scalars['JSON']>>>;
  readonly nin: Maybe<ReadonlyArray<Maybe<Scalars['JSON']>>>;
  readonly regex: Maybe<Scalars['JSON']>;
  readonly glob: Maybe<Scalars['JSON']>;
};

type ImageSharpOriginalFilterInput = {
  readonly width: Maybe<FloatQueryOperatorInput>;
  readonly height: Maybe<FloatQueryOperatorInput>;
  readonly src: Maybe<StringQueryOperatorInput>;
};

type ImageSharpResizeFilterInput = {
  readonly src: Maybe<StringQueryOperatorInput>;
  readonly tracedSVG: Maybe<StringQueryOperatorInput>;
  readonly width: Maybe<IntQueryOperatorInput>;
  readonly height: Maybe<IntQueryOperatorInput>;
  readonly aspectRatio: Maybe<FloatQueryOperatorInput>;
  readonly originalName: Maybe<StringQueryOperatorInput>;
};

type NodeFilterInput = {
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type NodeFilterListInput = {
  readonly elemMatch: Maybe<NodeFilterInput>;
};

type InternalFilterInput = {
  readonly content: Maybe<StringQueryOperatorInput>;
  readonly contentDigest: Maybe<StringQueryOperatorInput>;
  readonly description: Maybe<StringQueryOperatorInput>;
  readonly fieldOwners: Maybe<StringQueryOperatorInput>;
  readonly ignoreType: Maybe<BooleanQueryOperatorInput>;
  readonly mediaType: Maybe<StringQueryOperatorInput>;
  readonly owner: Maybe<StringQueryOperatorInput>;
  readonly type: Maybe<StringQueryOperatorInput>;
};

type BooleanQueryOperatorInput = {
  readonly eq: Maybe<Scalars['Boolean']>;
  readonly ne: Maybe<Scalars['Boolean']>;
  readonly in: Maybe<ReadonlyArray<Maybe<Scalars['Boolean']>>>;
  readonly nin: Maybe<ReadonlyArray<Maybe<Scalars['Boolean']>>>;
};

type FileConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<FileEdge>;
  readonly nodes: ReadonlyArray<File>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<FileGroupConnection>;
};


type FileConnection_distinctArgs = {
  field: FileFieldsEnum;
};


type FileConnection_maxArgs = {
  field: FileFieldsEnum;
};


type FileConnection_minArgs = {
  field: FileFieldsEnum;
};


type FileConnection_sumArgs = {
  field: FileFieldsEnum;
};


type FileConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: FileFieldsEnum;
};

type FileEdge = {
  readonly next: Maybe<File>;
  readonly node: File;
  readonly previous: Maybe<File>;
};

type PageInfo = {
  readonly currentPage: Scalars['Int'];
  readonly hasPreviousPage: Scalars['Boolean'];
  readonly hasNextPage: Scalars['Boolean'];
  readonly itemCount: Scalars['Int'];
  readonly pageCount: Scalars['Int'];
  readonly perPage: Maybe<Scalars['Int']>;
  readonly totalCount: Scalars['Int'];
};

type FileFieldsEnum =
  | 'sourceInstanceName'
  | 'absolutePath'
  | 'relativePath'
  | 'extension'
  | 'size'
  | 'prettySize'
  | 'modifiedTime'
  | 'accessTime'
  | 'changeTime'
  | 'birthTime'
  | 'root'
  | 'dir'
  | 'base'
  | 'ext'
  | 'name'
  | 'relativeDirectory'
  | 'dev'
  | 'mode'
  | 'nlink'
  | 'uid'
  | 'gid'
  | 'rdev'
  | 'ino'
  | 'atimeMs'
  | 'mtimeMs'
  | 'ctimeMs'
  | 'atime'
  | 'mtime'
  | 'ctime'
  | 'birthtime'
  | 'birthtimeMs'
  | 'blksize'
  | 'blocks'
  | 'url'
  | 'publicURL'
  | 'childrenImageSharp'
  | 'childrenImageSharp.fixed.base64'
  | 'childrenImageSharp.fixed.tracedSVG'
  | 'childrenImageSharp.fixed.aspectRatio'
  | 'childrenImageSharp.fixed.width'
  | 'childrenImageSharp.fixed.height'
  | 'childrenImageSharp.fixed.src'
  | 'childrenImageSharp.fixed.srcSet'
  | 'childrenImageSharp.fixed.srcWebp'
  | 'childrenImageSharp.fixed.srcSetWebp'
  | 'childrenImageSharp.fixed.originalName'
  | 'childrenImageSharp.fluid.base64'
  | 'childrenImageSharp.fluid.tracedSVG'
  | 'childrenImageSharp.fluid.aspectRatio'
  | 'childrenImageSharp.fluid.src'
  | 'childrenImageSharp.fluid.srcSet'
  | 'childrenImageSharp.fluid.srcWebp'
  | 'childrenImageSharp.fluid.srcSetWebp'
  | 'childrenImageSharp.fluid.sizes'
  | 'childrenImageSharp.fluid.originalImg'
  | 'childrenImageSharp.fluid.originalName'
  | 'childrenImageSharp.fluid.presentationWidth'
  | 'childrenImageSharp.fluid.presentationHeight'
  | 'childrenImageSharp.gatsbyImageData'
  | 'childrenImageSharp.original.width'
  | 'childrenImageSharp.original.height'
  | 'childrenImageSharp.original.src'
  | 'childrenImageSharp.resize.src'
  | 'childrenImageSharp.resize.tracedSVG'
  | 'childrenImageSharp.resize.width'
  | 'childrenImageSharp.resize.height'
  | 'childrenImageSharp.resize.aspectRatio'
  | 'childrenImageSharp.resize.originalName'
  | 'childrenImageSharp.id'
  | 'childrenImageSharp.parent.id'
  | 'childrenImageSharp.parent.parent.id'
  | 'childrenImageSharp.parent.parent.children'
  | 'childrenImageSharp.parent.children'
  | 'childrenImageSharp.parent.children.id'
  | 'childrenImageSharp.parent.children.children'
  | 'childrenImageSharp.parent.internal.content'
  | 'childrenImageSharp.parent.internal.contentDigest'
  | 'childrenImageSharp.parent.internal.description'
  | 'childrenImageSharp.parent.internal.fieldOwners'
  | 'childrenImageSharp.parent.internal.ignoreType'
  | 'childrenImageSharp.parent.internal.mediaType'
  | 'childrenImageSharp.parent.internal.owner'
  | 'childrenImageSharp.parent.internal.type'
  | 'childrenImageSharp.children'
  | 'childrenImageSharp.children.id'
  | 'childrenImageSharp.children.parent.id'
  | 'childrenImageSharp.children.parent.children'
  | 'childrenImageSharp.children.children'
  | 'childrenImageSharp.children.children.id'
  | 'childrenImageSharp.children.children.children'
  | 'childrenImageSharp.children.internal.content'
  | 'childrenImageSharp.children.internal.contentDigest'
  | 'childrenImageSharp.children.internal.description'
  | 'childrenImageSharp.children.internal.fieldOwners'
  | 'childrenImageSharp.children.internal.ignoreType'
  | 'childrenImageSharp.children.internal.mediaType'
  | 'childrenImageSharp.children.internal.owner'
  | 'childrenImageSharp.children.internal.type'
  | 'childrenImageSharp.internal.content'
  | 'childrenImageSharp.internal.contentDigest'
  | 'childrenImageSharp.internal.description'
  | 'childrenImageSharp.internal.fieldOwners'
  | 'childrenImageSharp.internal.ignoreType'
  | 'childrenImageSharp.internal.mediaType'
  | 'childrenImageSharp.internal.owner'
  | 'childrenImageSharp.internal.type'
  | 'childImageSharp.fixed.base64'
  | 'childImageSharp.fixed.tracedSVG'
  | 'childImageSharp.fixed.aspectRatio'
  | 'childImageSharp.fixed.width'
  | 'childImageSharp.fixed.height'
  | 'childImageSharp.fixed.src'
  | 'childImageSharp.fixed.srcSet'
  | 'childImageSharp.fixed.srcWebp'
  | 'childImageSharp.fixed.srcSetWebp'
  | 'childImageSharp.fixed.originalName'
  | 'childImageSharp.fluid.base64'
  | 'childImageSharp.fluid.tracedSVG'
  | 'childImageSharp.fluid.aspectRatio'
  | 'childImageSharp.fluid.src'
  | 'childImageSharp.fluid.srcSet'
  | 'childImageSharp.fluid.srcWebp'
  | 'childImageSharp.fluid.srcSetWebp'
  | 'childImageSharp.fluid.sizes'
  | 'childImageSharp.fluid.originalImg'
  | 'childImageSharp.fluid.originalName'
  | 'childImageSharp.fluid.presentationWidth'
  | 'childImageSharp.fluid.presentationHeight'
  | 'childImageSharp.gatsbyImageData'
  | 'childImageSharp.original.width'
  | 'childImageSharp.original.height'
  | 'childImageSharp.original.src'
  | 'childImageSharp.resize.src'
  | 'childImageSharp.resize.tracedSVG'
  | 'childImageSharp.resize.width'
  | 'childImageSharp.resize.height'
  | 'childImageSharp.resize.aspectRatio'
  | 'childImageSharp.resize.originalName'
  | 'childImageSharp.id'
  | 'childImageSharp.parent.id'
  | 'childImageSharp.parent.parent.id'
  | 'childImageSharp.parent.parent.children'
  | 'childImageSharp.parent.children'
  | 'childImageSharp.parent.children.id'
  | 'childImageSharp.parent.children.children'
  | 'childImageSharp.parent.internal.content'
  | 'childImageSharp.parent.internal.contentDigest'
  | 'childImageSharp.parent.internal.description'
  | 'childImageSharp.parent.internal.fieldOwners'
  | 'childImageSharp.parent.internal.ignoreType'
  | 'childImageSharp.parent.internal.mediaType'
  | 'childImageSharp.parent.internal.owner'
  | 'childImageSharp.parent.internal.type'
  | 'childImageSharp.children'
  | 'childImageSharp.children.id'
  | 'childImageSharp.children.parent.id'
  | 'childImageSharp.children.parent.children'
  | 'childImageSharp.children.children'
  | 'childImageSharp.children.children.id'
  | 'childImageSharp.children.children.children'
  | 'childImageSharp.children.internal.content'
  | 'childImageSharp.children.internal.contentDigest'
  | 'childImageSharp.children.internal.description'
  | 'childImageSharp.children.internal.fieldOwners'
  | 'childImageSharp.children.internal.ignoreType'
  | 'childImageSharp.children.internal.mediaType'
  | 'childImageSharp.children.internal.owner'
  | 'childImageSharp.children.internal.type'
  | 'childImageSharp.internal.content'
  | 'childImageSharp.internal.contentDigest'
  | 'childImageSharp.internal.description'
  | 'childImageSharp.internal.fieldOwners'
  | 'childImageSharp.internal.ignoreType'
  | 'childImageSharp.internal.mediaType'
  | 'childImageSharp.internal.owner'
  | 'childImageSharp.internal.type'
  | 'id'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type';

type FileGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<FileEdge>;
  readonly nodes: ReadonlyArray<File>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};

type FileFilterInput = {
  readonly sourceInstanceName: Maybe<StringQueryOperatorInput>;
  readonly absolutePath: Maybe<StringQueryOperatorInput>;
  readonly relativePath: Maybe<StringQueryOperatorInput>;
  readonly extension: Maybe<StringQueryOperatorInput>;
  readonly size: Maybe<IntQueryOperatorInput>;
  readonly prettySize: Maybe<StringQueryOperatorInput>;
  readonly modifiedTime: Maybe<DateQueryOperatorInput>;
  readonly accessTime: Maybe<DateQueryOperatorInput>;
  readonly changeTime: Maybe<DateQueryOperatorInput>;
  readonly birthTime: Maybe<DateQueryOperatorInput>;
  readonly root: Maybe<StringQueryOperatorInput>;
  readonly dir: Maybe<StringQueryOperatorInput>;
  readonly base: Maybe<StringQueryOperatorInput>;
  readonly ext: Maybe<StringQueryOperatorInput>;
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly relativeDirectory: Maybe<StringQueryOperatorInput>;
  readonly dev: Maybe<IntQueryOperatorInput>;
  readonly mode: Maybe<IntQueryOperatorInput>;
  readonly nlink: Maybe<IntQueryOperatorInput>;
  readonly uid: Maybe<IntQueryOperatorInput>;
  readonly gid: Maybe<IntQueryOperatorInput>;
  readonly rdev: Maybe<IntQueryOperatorInput>;
  readonly ino: Maybe<FloatQueryOperatorInput>;
  readonly atimeMs: Maybe<FloatQueryOperatorInput>;
  readonly mtimeMs: Maybe<FloatQueryOperatorInput>;
  readonly ctimeMs: Maybe<FloatQueryOperatorInput>;
  readonly atime: Maybe<DateQueryOperatorInput>;
  readonly mtime: Maybe<DateQueryOperatorInput>;
  readonly ctime: Maybe<DateQueryOperatorInput>;
  readonly birthtime: Maybe<DateQueryOperatorInput>;
  readonly birthtimeMs: Maybe<FloatQueryOperatorInput>;
  readonly blksize: Maybe<IntQueryOperatorInput>;
  readonly blocks: Maybe<IntQueryOperatorInput>;
  readonly url: Maybe<StringQueryOperatorInput>;
  readonly publicURL: Maybe<StringQueryOperatorInput>;
  readonly childrenImageSharp: Maybe<ImageSharpFilterListInput>;
  readonly childImageSharp: Maybe<ImageSharpFilterInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type FileSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<FileFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type SortOrderEnum =
  | 'ASC'
  | 'DESC';

type DirectoryConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<DirectoryEdge>;
  readonly nodes: ReadonlyArray<Directory>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<DirectoryGroupConnection>;
};


type DirectoryConnection_distinctArgs = {
  field: DirectoryFieldsEnum;
};


type DirectoryConnection_maxArgs = {
  field: DirectoryFieldsEnum;
};


type DirectoryConnection_minArgs = {
  field: DirectoryFieldsEnum;
};


type DirectoryConnection_sumArgs = {
  field: DirectoryFieldsEnum;
};


type DirectoryConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: DirectoryFieldsEnum;
};

type DirectoryEdge = {
  readonly next: Maybe<Directory>;
  readonly node: Directory;
  readonly previous: Maybe<Directory>;
};

type DirectoryFieldsEnum =
  | 'sourceInstanceName'
  | 'absolutePath'
  | 'relativePath'
  | 'extension'
  | 'size'
  | 'prettySize'
  | 'modifiedTime'
  | 'accessTime'
  | 'changeTime'
  | 'birthTime'
  | 'root'
  | 'dir'
  | 'base'
  | 'ext'
  | 'name'
  | 'relativeDirectory'
  | 'dev'
  | 'mode'
  | 'nlink'
  | 'uid'
  | 'gid'
  | 'rdev'
  | 'ino'
  | 'atimeMs'
  | 'mtimeMs'
  | 'ctimeMs'
  | 'atime'
  | 'mtime'
  | 'ctime'
  | 'birthtime'
  | 'birthtimeMs'
  | 'blksize'
  | 'blocks'
  | 'id'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type';

type DirectoryGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<DirectoryEdge>;
  readonly nodes: ReadonlyArray<Directory>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};

type DirectoryFilterInput = {
  readonly sourceInstanceName: Maybe<StringQueryOperatorInput>;
  readonly absolutePath: Maybe<StringQueryOperatorInput>;
  readonly relativePath: Maybe<StringQueryOperatorInput>;
  readonly extension: Maybe<StringQueryOperatorInput>;
  readonly size: Maybe<IntQueryOperatorInput>;
  readonly prettySize: Maybe<StringQueryOperatorInput>;
  readonly modifiedTime: Maybe<DateQueryOperatorInput>;
  readonly accessTime: Maybe<DateQueryOperatorInput>;
  readonly changeTime: Maybe<DateQueryOperatorInput>;
  readonly birthTime: Maybe<DateQueryOperatorInput>;
  readonly root: Maybe<StringQueryOperatorInput>;
  readonly dir: Maybe<StringQueryOperatorInput>;
  readonly base: Maybe<StringQueryOperatorInput>;
  readonly ext: Maybe<StringQueryOperatorInput>;
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly relativeDirectory: Maybe<StringQueryOperatorInput>;
  readonly dev: Maybe<IntQueryOperatorInput>;
  readonly mode: Maybe<IntQueryOperatorInput>;
  readonly nlink: Maybe<IntQueryOperatorInput>;
  readonly uid: Maybe<IntQueryOperatorInput>;
  readonly gid: Maybe<IntQueryOperatorInput>;
  readonly rdev: Maybe<IntQueryOperatorInput>;
  readonly ino: Maybe<FloatQueryOperatorInput>;
  readonly atimeMs: Maybe<FloatQueryOperatorInput>;
  readonly mtimeMs: Maybe<FloatQueryOperatorInput>;
  readonly ctimeMs: Maybe<FloatQueryOperatorInput>;
  readonly atime: Maybe<DateQueryOperatorInput>;
  readonly mtime: Maybe<DateQueryOperatorInput>;
  readonly ctime: Maybe<DateQueryOperatorInput>;
  readonly birthtime: Maybe<DateQueryOperatorInput>;
  readonly birthtimeMs: Maybe<FloatQueryOperatorInput>;
  readonly blksize: Maybe<IntQueryOperatorInput>;
  readonly blocks: Maybe<IntQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type DirectorySortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<DirectoryFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type SiteSiteMetadataFilterInput = {
  readonly title: Maybe<StringQueryOperatorInput>;
  readonly description: Maybe<StringQueryOperatorInput>;
};

type SiteConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SiteEdge>;
  readonly nodes: ReadonlyArray<Site>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<SiteGroupConnection>;
};


type SiteConnection_distinctArgs = {
  field: SiteFieldsEnum;
};


type SiteConnection_maxArgs = {
  field: SiteFieldsEnum;
};


type SiteConnection_minArgs = {
  field: SiteFieldsEnum;
};


type SiteConnection_sumArgs = {
  field: SiteFieldsEnum;
};


type SiteConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: SiteFieldsEnum;
};

type SiteEdge = {
  readonly next: Maybe<Site>;
  readonly node: Site;
  readonly previous: Maybe<Site>;
};

type SiteFieldsEnum =
  | 'buildTime'
  | 'siteMetadata.title'
  | 'siteMetadata.description'
  | 'port'
  | 'host'
  | 'polyfill'
  | 'pathPrefix'
  | 'id'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type';

type SiteGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SiteEdge>;
  readonly nodes: ReadonlyArray<Site>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};

type SiteFilterInput = {
  readonly buildTime: Maybe<DateQueryOperatorInput>;
  readonly siteMetadata: Maybe<SiteSiteMetadataFilterInput>;
  readonly port: Maybe<IntQueryOperatorInput>;
  readonly host: Maybe<StringQueryOperatorInput>;
  readonly polyfill: Maybe<BooleanQueryOperatorInput>;
  readonly pathPrefix: Maybe<StringQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type SiteSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<SiteFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type SiteFunctionConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SiteFunctionEdge>;
  readonly nodes: ReadonlyArray<SiteFunction>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<SiteFunctionGroupConnection>;
};


type SiteFunctionConnection_distinctArgs = {
  field: SiteFunctionFieldsEnum;
};


type SiteFunctionConnection_maxArgs = {
  field: SiteFunctionFieldsEnum;
};


type SiteFunctionConnection_minArgs = {
  field: SiteFunctionFieldsEnum;
};


type SiteFunctionConnection_sumArgs = {
  field: SiteFunctionFieldsEnum;
};


type SiteFunctionConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: SiteFunctionFieldsEnum;
};

type SiteFunctionEdge = {
  readonly next: Maybe<SiteFunction>;
  readonly node: SiteFunction;
  readonly previous: Maybe<SiteFunction>;
};

type SiteFunctionFieldsEnum =
  | 'apiRoute'
  | 'originalFilePath'
  | 'relativeCompiledFilePath'
  | 'absoluteCompiledFilePath'
  | 'matchPath'
  | 'id'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type';

type SiteFunctionGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SiteFunctionEdge>;
  readonly nodes: ReadonlyArray<SiteFunction>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};

type SiteFunctionFilterInput = {
  readonly apiRoute: Maybe<StringQueryOperatorInput>;
  readonly originalFilePath: Maybe<StringQueryOperatorInput>;
  readonly relativeCompiledFilePath: Maybe<StringQueryOperatorInput>;
  readonly absoluteCompiledFilePath: Maybe<StringQueryOperatorInput>;
  readonly matchPath: Maybe<StringQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type SiteFunctionSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<SiteFunctionFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type SitePluginFilterInput = {
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
  readonly resolve: Maybe<StringQueryOperatorInput>;
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly version: Maybe<StringQueryOperatorInput>;
  readonly pluginOptions: Maybe<SitePluginPluginOptionsFilterInput>;
  readonly nodeAPIs: Maybe<StringQueryOperatorInput>;
  readonly browserAPIs: Maybe<StringQueryOperatorInput>;
  readonly ssrAPIs: Maybe<StringQueryOperatorInput>;
  readonly pluginFilepath: Maybe<StringQueryOperatorInput>;
  readonly packageJson: Maybe<SitePluginPackageJsonFilterInput>;
};

type SitePluginPluginOptionsFilterInput = {
  readonly output: Maybe<StringQueryOperatorInput>;
  readonly createLinkInHead: Maybe<BooleanQueryOperatorInput>;
  readonly entryLimit: Maybe<IntQueryOperatorInput>;
  readonly query: Maybe<StringQueryOperatorInput>;
  readonly icon: Maybe<StringQueryOperatorInput>;
  readonly legacy: Maybe<BooleanQueryOperatorInput>;
  readonly theme_color_in_head: Maybe<BooleanQueryOperatorInput>;
  readonly cache_busting_mode: Maybe<StringQueryOperatorInput>;
  readonly crossOrigin: Maybe<StringQueryOperatorInput>;
  readonly include_favicon: Maybe<BooleanQueryOperatorInput>;
  readonly cacheDigest: Maybe<StringQueryOperatorInput>;
  readonly extensions: Maybe<StringQueryOperatorInput>;
  readonly lessBabel: Maybe<BooleanQueryOperatorInput>;
  readonly mediaTypes: Maybe<StringQueryOperatorInput>;
  readonly root: Maybe<StringQueryOperatorInput>;
  readonly base64Width: Maybe<IntQueryOperatorInput>;
  readonly stripMetadata: Maybe<BooleanQueryOperatorInput>;
  readonly defaultQuality: Maybe<IntQueryOperatorInput>;
  readonly failOnError: Maybe<BooleanQueryOperatorInput>;
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly path: Maybe<StringQueryOperatorInput>;
  readonly apiKey: Maybe<StringQueryOperatorInput>;
  readonly paginationLimit: Maybe<IntQueryOperatorInput>;
  readonly pathCheck: Maybe<BooleanQueryOperatorInput>;
  readonly allExtensions: Maybe<BooleanQueryOperatorInput>;
  readonly isTSX: Maybe<BooleanQueryOperatorInput>;
  readonly jsxPragma: Maybe<StringQueryOperatorInput>;
};

type SitePluginPackageJsonFilterInput = {
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly description: Maybe<StringQueryOperatorInput>;
  readonly version: Maybe<StringQueryOperatorInput>;
  readonly main: Maybe<StringQueryOperatorInput>;
  readonly license: Maybe<StringQueryOperatorInput>;
  readonly dependencies: Maybe<SitePluginPackageJsonDependenciesFilterListInput>;
  readonly devDependencies: Maybe<SitePluginPackageJsonDevDependenciesFilterListInput>;
  readonly peerDependencies: Maybe<SitePluginPackageJsonPeerDependenciesFilterListInput>;
  readonly keywords: Maybe<StringQueryOperatorInput>;
};

type SitePluginPackageJsonDependenciesFilterListInput = {
  readonly elemMatch: Maybe<SitePluginPackageJsonDependenciesFilterInput>;
};

type SitePluginPackageJsonDependenciesFilterInput = {
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly version: Maybe<StringQueryOperatorInput>;
};

type SitePluginPackageJsonDevDependenciesFilterListInput = {
  readonly elemMatch: Maybe<SitePluginPackageJsonDevDependenciesFilterInput>;
};

type SitePluginPackageJsonDevDependenciesFilterInput = {
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly version: Maybe<StringQueryOperatorInput>;
};

type SitePluginPackageJsonPeerDependenciesFilterListInput = {
  readonly elemMatch: Maybe<SitePluginPackageJsonPeerDependenciesFilterInput>;
};

type SitePluginPackageJsonPeerDependenciesFilterInput = {
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly version: Maybe<StringQueryOperatorInput>;
};

type SitePageConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SitePageEdge>;
  readonly nodes: ReadonlyArray<SitePage>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<SitePageGroupConnection>;
};


type SitePageConnection_distinctArgs = {
  field: SitePageFieldsEnum;
};


type SitePageConnection_maxArgs = {
  field: SitePageFieldsEnum;
};


type SitePageConnection_minArgs = {
  field: SitePageFieldsEnum;
};


type SitePageConnection_sumArgs = {
  field: SitePageFieldsEnum;
};


type SitePageConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: SitePageFieldsEnum;
};

type SitePageEdge = {
  readonly next: Maybe<SitePage>;
  readonly node: SitePage;
  readonly previous: Maybe<SitePage>;
};

type SitePageFieldsEnum =
  | 'path'
  | 'component'
  | 'internalComponentName'
  | 'componentChunkName'
  | 'matchPath'
  | 'id'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type'
  | 'isCreatedByStatefulCreatePages'
  | 'pluginCreator.id'
  | 'pluginCreator.parent.id'
  | 'pluginCreator.parent.parent.id'
  | 'pluginCreator.parent.parent.children'
  | 'pluginCreator.parent.children'
  | 'pluginCreator.parent.children.id'
  | 'pluginCreator.parent.children.children'
  | 'pluginCreator.parent.internal.content'
  | 'pluginCreator.parent.internal.contentDigest'
  | 'pluginCreator.parent.internal.description'
  | 'pluginCreator.parent.internal.fieldOwners'
  | 'pluginCreator.parent.internal.ignoreType'
  | 'pluginCreator.parent.internal.mediaType'
  | 'pluginCreator.parent.internal.owner'
  | 'pluginCreator.parent.internal.type'
  | 'pluginCreator.children'
  | 'pluginCreator.children.id'
  | 'pluginCreator.children.parent.id'
  | 'pluginCreator.children.parent.children'
  | 'pluginCreator.children.children'
  | 'pluginCreator.children.children.id'
  | 'pluginCreator.children.children.children'
  | 'pluginCreator.children.internal.content'
  | 'pluginCreator.children.internal.contentDigest'
  | 'pluginCreator.children.internal.description'
  | 'pluginCreator.children.internal.fieldOwners'
  | 'pluginCreator.children.internal.ignoreType'
  | 'pluginCreator.children.internal.mediaType'
  | 'pluginCreator.children.internal.owner'
  | 'pluginCreator.children.internal.type'
  | 'pluginCreator.internal.content'
  | 'pluginCreator.internal.contentDigest'
  | 'pluginCreator.internal.description'
  | 'pluginCreator.internal.fieldOwners'
  | 'pluginCreator.internal.ignoreType'
  | 'pluginCreator.internal.mediaType'
  | 'pluginCreator.internal.owner'
  | 'pluginCreator.internal.type'
  | 'pluginCreator.resolve'
  | 'pluginCreator.name'
  | 'pluginCreator.version'
  | 'pluginCreator.pluginOptions.output'
  | 'pluginCreator.pluginOptions.createLinkInHead'
  | 'pluginCreator.pluginOptions.entryLimit'
  | 'pluginCreator.pluginOptions.query'
  | 'pluginCreator.pluginOptions.icon'
  | 'pluginCreator.pluginOptions.legacy'
  | 'pluginCreator.pluginOptions.theme_color_in_head'
  | 'pluginCreator.pluginOptions.cache_busting_mode'
  | 'pluginCreator.pluginOptions.crossOrigin'
  | 'pluginCreator.pluginOptions.include_favicon'
  | 'pluginCreator.pluginOptions.cacheDigest'
  | 'pluginCreator.pluginOptions.extensions'
  | 'pluginCreator.pluginOptions.lessBabel'
  | 'pluginCreator.pluginOptions.mediaTypes'
  | 'pluginCreator.pluginOptions.root'
  | 'pluginCreator.pluginOptions.base64Width'
  | 'pluginCreator.pluginOptions.stripMetadata'
  | 'pluginCreator.pluginOptions.defaultQuality'
  | 'pluginCreator.pluginOptions.failOnError'
  | 'pluginCreator.pluginOptions.name'
  | 'pluginCreator.pluginOptions.path'
  | 'pluginCreator.pluginOptions.apiKey'
  | 'pluginCreator.pluginOptions.paginationLimit'
  | 'pluginCreator.pluginOptions.pathCheck'
  | 'pluginCreator.pluginOptions.allExtensions'
  | 'pluginCreator.pluginOptions.isTSX'
  | 'pluginCreator.pluginOptions.jsxPragma'
  | 'pluginCreator.nodeAPIs'
  | 'pluginCreator.browserAPIs'
  | 'pluginCreator.ssrAPIs'
  | 'pluginCreator.pluginFilepath'
  | 'pluginCreator.packageJson.name'
  | 'pluginCreator.packageJson.description'
  | 'pluginCreator.packageJson.version'
  | 'pluginCreator.packageJson.main'
  | 'pluginCreator.packageJson.license'
  | 'pluginCreator.packageJson.dependencies'
  | 'pluginCreator.packageJson.dependencies.name'
  | 'pluginCreator.packageJson.dependencies.version'
  | 'pluginCreator.packageJson.devDependencies'
  | 'pluginCreator.packageJson.devDependencies.name'
  | 'pluginCreator.packageJson.devDependencies.version'
  | 'pluginCreator.packageJson.peerDependencies'
  | 'pluginCreator.packageJson.peerDependencies.name'
  | 'pluginCreator.packageJson.peerDependencies.version'
  | 'pluginCreator.packageJson.keywords'
  | 'pluginCreatorId'
  | 'componentPath';

type SitePageGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SitePageEdge>;
  readonly nodes: ReadonlyArray<SitePage>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};

type SitePageFilterInput = {
  readonly path: Maybe<StringQueryOperatorInput>;
  readonly component: Maybe<StringQueryOperatorInput>;
  readonly internalComponentName: Maybe<StringQueryOperatorInput>;
  readonly componentChunkName: Maybe<StringQueryOperatorInput>;
  readonly matchPath: Maybe<StringQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
  readonly isCreatedByStatefulCreatePages: Maybe<BooleanQueryOperatorInput>;
  readonly pluginCreator: Maybe<SitePluginFilterInput>;
  readonly pluginCreatorId: Maybe<StringQueryOperatorInput>;
  readonly componentPath: Maybe<StringQueryOperatorInput>;
};

type SitePageSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<SitePageFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type ImageSharpConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<ImageSharpEdge>;
  readonly nodes: ReadonlyArray<ImageSharp>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<ImageSharpGroupConnection>;
};


type ImageSharpConnection_distinctArgs = {
  field: ImageSharpFieldsEnum;
};


type ImageSharpConnection_maxArgs = {
  field: ImageSharpFieldsEnum;
};


type ImageSharpConnection_minArgs = {
  field: ImageSharpFieldsEnum;
};


type ImageSharpConnection_sumArgs = {
  field: ImageSharpFieldsEnum;
};


type ImageSharpConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: ImageSharpFieldsEnum;
};

type ImageSharpEdge = {
  readonly next: Maybe<ImageSharp>;
  readonly node: ImageSharp;
  readonly previous: Maybe<ImageSharp>;
};

type ImageSharpFieldsEnum =
  | 'fixed.base64'
  | 'fixed.tracedSVG'
  | 'fixed.aspectRatio'
  | 'fixed.width'
  | 'fixed.height'
  | 'fixed.src'
  | 'fixed.srcSet'
  | 'fixed.srcWebp'
  | 'fixed.srcSetWebp'
  | 'fixed.originalName'
  | 'fluid.base64'
  | 'fluid.tracedSVG'
  | 'fluid.aspectRatio'
  | 'fluid.src'
  | 'fluid.srcSet'
  | 'fluid.srcWebp'
  | 'fluid.srcSetWebp'
  | 'fluid.sizes'
  | 'fluid.originalImg'
  | 'fluid.originalName'
  | 'fluid.presentationWidth'
  | 'fluid.presentationHeight'
  | 'gatsbyImageData'
  | 'original.width'
  | 'original.height'
  | 'original.src'
  | 'resize.src'
  | 'resize.tracedSVG'
  | 'resize.width'
  | 'resize.height'
  | 'resize.aspectRatio'
  | 'resize.originalName'
  | 'id'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type';

type ImageSharpGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<ImageSharpEdge>;
  readonly nodes: ReadonlyArray<ImageSharp>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};

type ImageSharpSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<ImageSharpFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type MdxFrontmatterFilterInput = {
  readonly title: Maybe<StringQueryOperatorInput>;
};

type MdxHeadingMdxFilterListInput = {
  readonly elemMatch: Maybe<MdxHeadingMdxFilterInput>;
};

type MdxHeadingMdxFilterInput = {
  readonly value: Maybe<StringQueryOperatorInput>;
  readonly depth: Maybe<IntQueryOperatorInput>;
};

type MdxWordCountFilterInput = {
  readonly paragraphs: Maybe<IntQueryOperatorInput>;
  readonly sentences: Maybe<IntQueryOperatorInput>;
  readonly words: Maybe<IntQueryOperatorInput>;
};

type MdxConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<MdxEdge>;
  readonly nodes: ReadonlyArray<Mdx>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<MdxGroupConnection>;
};


type MdxConnection_distinctArgs = {
  field: MdxFieldsEnum;
};


type MdxConnection_maxArgs = {
  field: MdxFieldsEnum;
};


type MdxConnection_minArgs = {
  field: MdxFieldsEnum;
};


type MdxConnection_sumArgs = {
  field: MdxFieldsEnum;
};


type MdxConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: MdxFieldsEnum;
};

type MdxEdge = {
  readonly next: Maybe<Mdx>;
  readonly node: Mdx;
  readonly previous: Maybe<Mdx>;
};

type MdxFieldsEnum =
  | 'rawBody'
  | 'fileAbsolutePath'
  | 'frontmatter.title'
  | 'slug'
  | 'body'
  | 'excerpt'
  | 'headings'
  | 'headings.value'
  | 'headings.depth'
  | 'html'
  | 'mdxAST'
  | 'tableOfContents'
  | 'timeToRead'
  | 'wordCount.paragraphs'
  | 'wordCount.sentences'
  | 'wordCount.words'
  | 'id'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type';

type MdxGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<MdxEdge>;
  readonly nodes: ReadonlyArray<Mdx>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};

type MdxFilterInput = {
  readonly rawBody: Maybe<StringQueryOperatorInput>;
  readonly fileAbsolutePath: Maybe<StringQueryOperatorInput>;
  readonly frontmatter: Maybe<MdxFrontmatterFilterInput>;
  readonly slug: Maybe<StringQueryOperatorInput>;
  readonly body: Maybe<StringQueryOperatorInput>;
  readonly excerpt: Maybe<StringQueryOperatorInput>;
  readonly headings: Maybe<MdxHeadingMdxFilterListInput>;
  readonly html: Maybe<StringQueryOperatorInput>;
  readonly mdxAST: Maybe<JSONQueryOperatorInput>;
  readonly tableOfContents: Maybe<JSONQueryOperatorInput>;
  readonly timeToRead: Maybe<IntQueryOperatorInput>;
  readonly wordCount: Maybe<MdxWordCountFilterInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type MdxSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<MdxFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type PrintfulStoreConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<PrintfulStoreEdge>;
  readonly nodes: ReadonlyArray<PrintfulStore>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<PrintfulStoreGroupConnection>;
};


type PrintfulStoreConnection_distinctArgs = {
  field: PrintfulStoreFieldsEnum;
};


type PrintfulStoreConnection_maxArgs = {
  field: PrintfulStoreFieldsEnum;
};


type PrintfulStoreConnection_minArgs = {
  field: PrintfulStoreFieldsEnum;
};


type PrintfulStoreConnection_sumArgs = {
  field: PrintfulStoreFieldsEnum;
};


type PrintfulStoreConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: PrintfulStoreFieldsEnum;
};

type PrintfulStoreEdge = {
  readonly next: Maybe<PrintfulStore>;
  readonly node: PrintfulStore;
  readonly previous: Maybe<PrintfulStore>;
};

type PrintfulStoreFieldsEnum =
  | 'id'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type'
  | 'name'
  | 'type'
  | 'website'
  | 'currency'
  | 'created';

type PrintfulStoreGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<PrintfulStoreEdge>;
  readonly nodes: ReadonlyArray<PrintfulStore>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};

type PrintfulStoreFilterInput = {
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly type: Maybe<StringQueryOperatorInput>;
  readonly website: Maybe<StringQueryOperatorInput>;
  readonly currency: Maybe<StringQueryOperatorInput>;
  readonly created: Maybe<IntQueryOperatorInput>;
};

type PrintfulStoreSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<PrintfulStoreFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type PrintfulCountryStatesFilterListInput = {
  readonly elemMatch: Maybe<PrintfulCountryStatesFilterInput>;
};

type PrintfulCountryStatesFilterInput = {
  readonly code: Maybe<StringQueryOperatorInput>;
  readonly name: Maybe<StringQueryOperatorInput>;
};

type PrintfulCountryConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<PrintfulCountryEdge>;
  readonly nodes: ReadonlyArray<PrintfulCountry>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<PrintfulCountryGroupConnection>;
};


type PrintfulCountryConnection_distinctArgs = {
  field: PrintfulCountryFieldsEnum;
};


type PrintfulCountryConnection_maxArgs = {
  field: PrintfulCountryFieldsEnum;
};


type PrintfulCountryConnection_minArgs = {
  field: PrintfulCountryFieldsEnum;
};


type PrintfulCountryConnection_sumArgs = {
  field: PrintfulCountryFieldsEnum;
};


type PrintfulCountryConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: PrintfulCountryFieldsEnum;
};

type PrintfulCountryEdge = {
  readonly next: Maybe<PrintfulCountry>;
  readonly node: PrintfulCountry;
  readonly previous: Maybe<PrintfulCountry>;
};

type PrintfulCountryFieldsEnum =
  | 'id'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type'
  | 'name'
  | 'code'
  | 'states'
  | 'states.code'
  | 'states.name';

type PrintfulCountryGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<PrintfulCountryEdge>;
  readonly nodes: ReadonlyArray<PrintfulCountry>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};

type PrintfulCountryFilterInput = {
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly code: Maybe<StringQueryOperatorInput>;
  readonly states: Maybe<PrintfulCountryStatesFilterListInput>;
};

type PrintfulCountrySortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<PrintfulCountryFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type PrintfulCatalogVariantAvailability_regionsFilterInput = {
  readonly US: Maybe<StringQueryOperatorInput>;
  readonly MX: Maybe<StringQueryOperatorInput>;
  readonly CA: Maybe<StringQueryOperatorInput>;
  readonly EU: Maybe<StringQueryOperatorInput>;
};

type PrintfulCatalogVariantAvailability_statusFilterListInput = {
  readonly elemMatch: Maybe<PrintfulCatalogVariantAvailability_statusFilterInput>;
};

type PrintfulCatalogVariantAvailability_statusFilterInput = {
  readonly region: Maybe<StringQueryOperatorInput>;
  readonly status: Maybe<StringQueryOperatorInput>;
};

type PrintfulCatalogVariantConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<PrintfulCatalogVariantEdge>;
  readonly nodes: ReadonlyArray<PrintfulCatalogVariant>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<PrintfulCatalogVariantGroupConnection>;
};


type PrintfulCatalogVariantConnection_distinctArgs = {
  field: PrintfulCatalogVariantFieldsEnum;
};


type PrintfulCatalogVariantConnection_maxArgs = {
  field: PrintfulCatalogVariantFieldsEnum;
};


type PrintfulCatalogVariantConnection_minArgs = {
  field: PrintfulCatalogVariantFieldsEnum;
};


type PrintfulCatalogVariantConnection_sumArgs = {
  field: PrintfulCatalogVariantFieldsEnum;
};


type PrintfulCatalogVariantConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: PrintfulCatalogVariantFieldsEnum;
};

type PrintfulCatalogVariantEdge = {
  readonly next: Maybe<PrintfulCatalogVariant>;
  readonly node: PrintfulCatalogVariant;
  readonly previous: Maybe<PrintfulCatalogVariant>;
};

type PrintfulCatalogVariantFieldsEnum =
  | 'id'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type'
  | 'name'
  | 'size'
  | 'color'
  | 'color_code'
  | 'image'
  | 'price'
  | 'in_stock'
  | 'availability_regions.US'
  | 'availability_regions.MX'
  | 'availability_regions.CA'
  | 'availability_regions.EU'
  | 'availability_status'
  | 'availability_status.region'
  | 'availability_status.status'
  | 'product_id'
  | 'retail_price'
  | 'variantImage.sourceInstanceName'
  | 'variantImage.absolutePath'
  | 'variantImage.relativePath'
  | 'variantImage.extension'
  | 'variantImage.size'
  | 'variantImage.prettySize'
  | 'variantImage.modifiedTime'
  | 'variantImage.accessTime'
  | 'variantImage.changeTime'
  | 'variantImage.birthTime'
  | 'variantImage.root'
  | 'variantImage.dir'
  | 'variantImage.base'
  | 'variantImage.ext'
  | 'variantImage.name'
  | 'variantImage.relativeDirectory'
  | 'variantImage.dev'
  | 'variantImage.mode'
  | 'variantImage.nlink'
  | 'variantImage.uid'
  | 'variantImage.gid'
  | 'variantImage.rdev'
  | 'variantImage.ino'
  | 'variantImage.atimeMs'
  | 'variantImage.mtimeMs'
  | 'variantImage.ctimeMs'
  | 'variantImage.atime'
  | 'variantImage.mtime'
  | 'variantImage.ctime'
  | 'variantImage.birthtime'
  | 'variantImage.birthtimeMs'
  | 'variantImage.blksize'
  | 'variantImage.blocks'
  | 'variantImage.url'
  | 'variantImage.publicURL'
  | 'variantImage.childrenImageSharp'
  | 'variantImage.childrenImageSharp.fixed.base64'
  | 'variantImage.childrenImageSharp.fixed.tracedSVG'
  | 'variantImage.childrenImageSharp.fixed.aspectRatio'
  | 'variantImage.childrenImageSharp.fixed.width'
  | 'variantImage.childrenImageSharp.fixed.height'
  | 'variantImage.childrenImageSharp.fixed.src'
  | 'variantImage.childrenImageSharp.fixed.srcSet'
  | 'variantImage.childrenImageSharp.fixed.srcWebp'
  | 'variantImage.childrenImageSharp.fixed.srcSetWebp'
  | 'variantImage.childrenImageSharp.fixed.originalName'
  | 'variantImage.childrenImageSharp.fluid.base64'
  | 'variantImage.childrenImageSharp.fluid.tracedSVG'
  | 'variantImage.childrenImageSharp.fluid.aspectRatio'
  | 'variantImage.childrenImageSharp.fluid.src'
  | 'variantImage.childrenImageSharp.fluid.srcSet'
  | 'variantImage.childrenImageSharp.fluid.srcWebp'
  | 'variantImage.childrenImageSharp.fluid.srcSetWebp'
  | 'variantImage.childrenImageSharp.fluid.sizes'
  | 'variantImage.childrenImageSharp.fluid.originalImg'
  | 'variantImage.childrenImageSharp.fluid.originalName'
  | 'variantImage.childrenImageSharp.fluid.presentationWidth'
  | 'variantImage.childrenImageSharp.fluid.presentationHeight'
  | 'variantImage.childrenImageSharp.gatsbyImageData'
  | 'variantImage.childrenImageSharp.original.width'
  | 'variantImage.childrenImageSharp.original.height'
  | 'variantImage.childrenImageSharp.original.src'
  | 'variantImage.childrenImageSharp.resize.src'
  | 'variantImage.childrenImageSharp.resize.tracedSVG'
  | 'variantImage.childrenImageSharp.resize.width'
  | 'variantImage.childrenImageSharp.resize.height'
  | 'variantImage.childrenImageSharp.resize.aspectRatio'
  | 'variantImage.childrenImageSharp.resize.originalName'
  | 'variantImage.childrenImageSharp.id'
  | 'variantImage.childrenImageSharp.parent.id'
  | 'variantImage.childrenImageSharp.parent.children'
  | 'variantImage.childrenImageSharp.children'
  | 'variantImage.childrenImageSharp.children.id'
  | 'variantImage.childrenImageSharp.children.children'
  | 'variantImage.childrenImageSharp.internal.content'
  | 'variantImage.childrenImageSharp.internal.contentDigest'
  | 'variantImage.childrenImageSharp.internal.description'
  | 'variantImage.childrenImageSharp.internal.fieldOwners'
  | 'variantImage.childrenImageSharp.internal.ignoreType'
  | 'variantImage.childrenImageSharp.internal.mediaType'
  | 'variantImage.childrenImageSharp.internal.owner'
  | 'variantImage.childrenImageSharp.internal.type'
  | 'variantImage.childImageSharp.fixed.base64'
  | 'variantImage.childImageSharp.fixed.tracedSVG'
  | 'variantImage.childImageSharp.fixed.aspectRatio'
  | 'variantImage.childImageSharp.fixed.width'
  | 'variantImage.childImageSharp.fixed.height'
  | 'variantImage.childImageSharp.fixed.src'
  | 'variantImage.childImageSharp.fixed.srcSet'
  | 'variantImage.childImageSharp.fixed.srcWebp'
  | 'variantImage.childImageSharp.fixed.srcSetWebp'
  | 'variantImage.childImageSharp.fixed.originalName'
  | 'variantImage.childImageSharp.fluid.base64'
  | 'variantImage.childImageSharp.fluid.tracedSVG'
  | 'variantImage.childImageSharp.fluid.aspectRatio'
  | 'variantImage.childImageSharp.fluid.src'
  | 'variantImage.childImageSharp.fluid.srcSet'
  | 'variantImage.childImageSharp.fluid.srcWebp'
  | 'variantImage.childImageSharp.fluid.srcSetWebp'
  | 'variantImage.childImageSharp.fluid.sizes'
  | 'variantImage.childImageSharp.fluid.originalImg'
  | 'variantImage.childImageSharp.fluid.originalName'
  | 'variantImage.childImageSharp.fluid.presentationWidth'
  | 'variantImage.childImageSharp.fluid.presentationHeight'
  | 'variantImage.childImageSharp.gatsbyImageData'
  | 'variantImage.childImageSharp.original.width'
  | 'variantImage.childImageSharp.original.height'
  | 'variantImage.childImageSharp.original.src'
  | 'variantImage.childImageSharp.resize.src'
  | 'variantImage.childImageSharp.resize.tracedSVG'
  | 'variantImage.childImageSharp.resize.width'
  | 'variantImage.childImageSharp.resize.height'
  | 'variantImage.childImageSharp.resize.aspectRatio'
  | 'variantImage.childImageSharp.resize.originalName'
  | 'variantImage.childImageSharp.id'
  | 'variantImage.childImageSharp.parent.id'
  | 'variantImage.childImageSharp.parent.children'
  | 'variantImage.childImageSharp.children'
  | 'variantImage.childImageSharp.children.id'
  | 'variantImage.childImageSharp.children.children'
  | 'variantImage.childImageSharp.internal.content'
  | 'variantImage.childImageSharp.internal.contentDigest'
  | 'variantImage.childImageSharp.internal.description'
  | 'variantImage.childImageSharp.internal.fieldOwners'
  | 'variantImage.childImageSharp.internal.ignoreType'
  | 'variantImage.childImageSharp.internal.mediaType'
  | 'variantImage.childImageSharp.internal.owner'
  | 'variantImage.childImageSharp.internal.type'
  | 'variantImage.id'
  | 'variantImage.parent.id'
  | 'variantImage.parent.parent.id'
  | 'variantImage.parent.parent.children'
  | 'variantImage.parent.children'
  | 'variantImage.parent.children.id'
  | 'variantImage.parent.children.children'
  | 'variantImage.parent.internal.content'
  | 'variantImage.parent.internal.contentDigest'
  | 'variantImage.parent.internal.description'
  | 'variantImage.parent.internal.fieldOwners'
  | 'variantImage.parent.internal.ignoreType'
  | 'variantImage.parent.internal.mediaType'
  | 'variantImage.parent.internal.owner'
  | 'variantImage.parent.internal.type'
  | 'variantImage.children'
  | 'variantImage.children.id'
  | 'variantImage.children.parent.id'
  | 'variantImage.children.parent.children'
  | 'variantImage.children.children'
  | 'variantImage.children.children.id'
  | 'variantImage.children.children.children'
  | 'variantImage.children.internal.content'
  | 'variantImage.children.internal.contentDigest'
  | 'variantImage.children.internal.description'
  | 'variantImage.children.internal.fieldOwners'
  | 'variantImage.children.internal.ignoreType'
  | 'variantImage.children.internal.mediaType'
  | 'variantImage.children.internal.owner'
  | 'variantImage.children.internal.type'
  | 'variantImage.internal.content'
  | 'variantImage.internal.contentDigest'
  | 'variantImage.internal.description'
  | 'variantImage.internal.fieldOwners'
  | 'variantImage.internal.ignoreType'
  | 'variantImage.internal.mediaType'
  | 'variantImage.internal.owner'
  | 'variantImage.internal.type';

type PrintfulCatalogVariantGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<PrintfulCatalogVariantEdge>;
  readonly nodes: ReadonlyArray<PrintfulCatalogVariant>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};

type PrintfulCatalogVariantFilterInput = {
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly size: Maybe<StringQueryOperatorInput>;
  readonly color: Maybe<StringQueryOperatorInput>;
  readonly color_code: Maybe<StringQueryOperatorInput>;
  readonly image: Maybe<StringQueryOperatorInput>;
  readonly price: Maybe<StringQueryOperatorInput>;
  readonly in_stock: Maybe<BooleanQueryOperatorInput>;
  readonly availability_regions: Maybe<PrintfulCatalogVariantAvailability_regionsFilterInput>;
  readonly availability_status: Maybe<PrintfulCatalogVariantAvailability_statusFilterListInput>;
  readonly product_id: Maybe<StringQueryOperatorInput>;
  readonly retail_price: Maybe<FloatQueryOperatorInput>;
  readonly variantImage: Maybe<FileFilterInput>;
};

type PrintfulCatalogVariantSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<PrintfulCatalogVariantFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type PrintfulVariantFilterListInput = {
  readonly elemMatch: Maybe<PrintfulVariantFilterInput>;
};

type PrintfulVariantFilterInput = {
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
  readonly external_id: Maybe<StringQueryOperatorInput>;
  readonly sync_product_id: Maybe<IntQueryOperatorInput>;
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly synced: Maybe<BooleanQueryOperatorInput>;
  readonly variant_id: Maybe<IntQueryOperatorInput>;
  readonly retail_price: Maybe<FloatQueryOperatorInput>;
  readonly sku: Maybe<StringQueryOperatorInput>;
  readonly currency: Maybe<StringQueryOperatorInput>;
  readonly product: Maybe<PrintfulVariantProductFilterInput>;
  readonly files: Maybe<PrintfulVariantFilesFilterListInput>;
  readonly options: Maybe<PrintfulVariantOptionsFilterListInput>;
  readonly is_ignored: Maybe<BooleanQueryOperatorInput>;
  readonly slug: Maybe<StringQueryOperatorInput>;
  readonly parentProduct: Maybe<PrintfulProductFilterInput>;
  readonly catalogVariant: Maybe<PrintfulCatalogVariantFilterInput>;
  readonly catalogProduct: Maybe<PrintfulCatalogProductFilterInput>;
  readonly variantImage: Maybe<FileFilterInput>;
};

type PrintfulVariantProductFilterInput = {
  readonly variant_id: Maybe<IntQueryOperatorInput>;
  readonly product_id: Maybe<IntQueryOperatorInput>;
  readonly image: Maybe<StringQueryOperatorInput>;
  readonly name: Maybe<StringQueryOperatorInput>;
};

type PrintfulVariantFilesFilterListInput = {
  readonly elemMatch: Maybe<PrintfulVariantFilesFilterInput>;
};

type PrintfulVariantFilesFilterInput = {
  readonly id: Maybe<IntQueryOperatorInput>;
  readonly type: Maybe<StringQueryOperatorInput>;
  readonly hash: Maybe<StringQueryOperatorInput>;
  readonly filename: Maybe<StringQueryOperatorInput>;
  readonly mime_type: Maybe<StringQueryOperatorInput>;
  readonly size: Maybe<IntQueryOperatorInput>;
  readonly width: Maybe<IntQueryOperatorInput>;
  readonly height: Maybe<IntQueryOperatorInput>;
  readonly dpi: Maybe<IntQueryOperatorInput>;
  readonly status: Maybe<StringQueryOperatorInput>;
  readonly created: Maybe<IntQueryOperatorInput>;
  readonly thumbnail_url: Maybe<StringQueryOperatorInput>;
  readonly preview_url: Maybe<StringQueryOperatorInput>;
  readonly visible: Maybe<BooleanQueryOperatorInput>;
};

type PrintfulVariantOptionsFilterListInput = {
  readonly elemMatch: Maybe<PrintfulVariantOptionsFilterInput>;
};

type PrintfulVariantOptionsFilterInput = {
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly value: Maybe<StringQueryOperatorInput>;
};

type PrintfulProductFilterInput = {
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
  readonly external_id: Maybe<StringQueryOperatorInput>;
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly synced: Maybe<IntQueryOperatorInput>;
  readonly thumbnail_url: Maybe<StringQueryOperatorInput>;
  readonly is_ignored: Maybe<BooleanQueryOperatorInput>;
  readonly slug: Maybe<StringQueryOperatorInput>;
  readonly variants: Maybe<PrintfulVariantFilterListInput>;
  readonly productImage: Maybe<FileFilterInput>;
};

type PrintfulCatalogProductFilterInput = {
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
  readonly type: Maybe<StringQueryOperatorInput>;
  readonly type_name: Maybe<StringQueryOperatorInput>;
  readonly brand: Maybe<StringQueryOperatorInput>;
  readonly model: Maybe<StringQueryOperatorInput>;
  readonly image: Maybe<StringQueryOperatorInput>;
  readonly variant_count: Maybe<IntQueryOperatorInput>;
  readonly currency: Maybe<StringQueryOperatorInput>;
  readonly files: Maybe<PrintfulCatalogProductFilesFilterListInput>;
  readonly options: Maybe<PrintfulCatalogProductOptionsFilterListInput>;
  readonly dimensions: Maybe<PrintfulCatalogProductDimensionsFilterInput>;
  readonly is_discontinued: Maybe<BooleanQueryOperatorInput>;
  readonly description: Maybe<StringQueryOperatorInput>;
  readonly productImage: Maybe<FileFilterInput>;
};

type PrintfulCatalogProductFilesFilterListInput = {
  readonly elemMatch: Maybe<PrintfulCatalogProductFilesFilterInput>;
};

type PrintfulCatalogProductFilesFilterInput = {
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly type: Maybe<StringQueryOperatorInput>;
  readonly title: Maybe<StringQueryOperatorInput>;
  readonly additional_price: Maybe<StringQueryOperatorInput>;
};

type PrintfulCatalogProductOptionsFilterListInput = {
  readonly elemMatch: Maybe<PrintfulCatalogProductOptionsFilterInput>;
};

type PrintfulCatalogProductOptionsFilterInput = {
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly title: Maybe<StringQueryOperatorInput>;
  readonly type: Maybe<StringQueryOperatorInput>;
  readonly values: Maybe<PrintfulCatalogProductOptionsValuesFilterInput>;
  readonly additional_price_breakdown: Maybe<PrintfulCatalogProductOptionsAdditional_price_breakdownFilterInput>;
};

type PrintfulCatalogProductOptionsValuesFilterInput = {
  readonly flat: Maybe<StringQueryOperatorInput>;
  readonly _3d: Maybe<StringQueryOperatorInput>;
  readonly both: Maybe<StringQueryOperatorInput>;
  readonly _FFFFFF: Maybe<StringQueryOperatorInput>;
  readonly _000000: Maybe<StringQueryOperatorInput>;
  readonly _96A1A8: Maybe<StringQueryOperatorInput>;
  readonly _A67843: Maybe<StringQueryOperatorInput>;
  readonly _FFCC00: Maybe<StringQueryOperatorInput>;
  readonly _E25C27: Maybe<StringQueryOperatorInput>;
  readonly _CC3366: Maybe<StringQueryOperatorInput>;
  readonly _CC3333: Maybe<StringQueryOperatorInput>;
  readonly _660000: Maybe<StringQueryOperatorInput>;
  readonly _333366: Maybe<StringQueryOperatorInput>;
  readonly _005397: Maybe<StringQueryOperatorInput>;
  readonly _3399FF: Maybe<StringQueryOperatorInput>;
  readonly _6B5294: Maybe<StringQueryOperatorInput>;
  readonly _01784E: Maybe<StringQueryOperatorInput>;
  readonly _7BA35A: Maybe<StringQueryOperatorInput>;
  readonly white: Maybe<StringQueryOperatorInput>;
  readonly black: Maybe<StringQueryOperatorInput>;
};

type PrintfulCatalogProductOptionsAdditional_price_breakdownFilterInput = {
  readonly flat: Maybe<StringQueryOperatorInput>;
  readonly _3d: Maybe<StringQueryOperatorInput>;
  readonly both: Maybe<StringQueryOperatorInput>;
};

type PrintfulCatalogProductDimensionsFilterInput = {
  readonly front: Maybe<StringQueryOperatorInput>;
};

type PrintfulProductConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<PrintfulProductEdge>;
  readonly nodes: ReadonlyArray<PrintfulProduct>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<PrintfulProductGroupConnection>;
};


type PrintfulProductConnection_distinctArgs = {
  field: PrintfulProductFieldsEnum;
};


type PrintfulProductConnection_maxArgs = {
  field: PrintfulProductFieldsEnum;
};


type PrintfulProductConnection_minArgs = {
  field: PrintfulProductFieldsEnum;
};


type PrintfulProductConnection_sumArgs = {
  field: PrintfulProductFieldsEnum;
};


type PrintfulProductConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: PrintfulProductFieldsEnum;
};

type PrintfulProductEdge = {
  readonly next: Maybe<PrintfulProduct>;
  readonly node: PrintfulProduct;
  readonly previous: Maybe<PrintfulProduct>;
};

type PrintfulProductFieldsEnum =
  | 'id'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type'
  | 'external_id'
  | 'name'
  | 'synced'
  | 'thumbnail_url'
  | 'is_ignored'
  | 'slug'
  | 'variants'
  | 'variants.id'
  | 'variants.parent.id'
  | 'variants.parent.parent.id'
  | 'variants.parent.parent.children'
  | 'variants.parent.children'
  | 'variants.parent.children.id'
  | 'variants.parent.children.children'
  | 'variants.parent.internal.content'
  | 'variants.parent.internal.contentDigest'
  | 'variants.parent.internal.description'
  | 'variants.parent.internal.fieldOwners'
  | 'variants.parent.internal.ignoreType'
  | 'variants.parent.internal.mediaType'
  | 'variants.parent.internal.owner'
  | 'variants.parent.internal.type'
  | 'variants.children'
  | 'variants.children.id'
  | 'variants.children.parent.id'
  | 'variants.children.parent.children'
  | 'variants.children.children'
  | 'variants.children.children.id'
  | 'variants.children.children.children'
  | 'variants.children.internal.content'
  | 'variants.children.internal.contentDigest'
  | 'variants.children.internal.description'
  | 'variants.children.internal.fieldOwners'
  | 'variants.children.internal.ignoreType'
  | 'variants.children.internal.mediaType'
  | 'variants.children.internal.owner'
  | 'variants.children.internal.type'
  | 'variants.internal.content'
  | 'variants.internal.contentDigest'
  | 'variants.internal.description'
  | 'variants.internal.fieldOwners'
  | 'variants.internal.ignoreType'
  | 'variants.internal.mediaType'
  | 'variants.internal.owner'
  | 'variants.internal.type'
  | 'variants.external_id'
  | 'variants.sync_product_id'
  | 'variants.name'
  | 'variants.synced'
  | 'variants.variant_id'
  | 'variants.retail_price'
  | 'variants.sku'
  | 'variants.currency'
  | 'variants.product.variant_id'
  | 'variants.product.product_id'
  | 'variants.product.image'
  | 'variants.product.name'
  | 'variants.files'
  | 'variants.files.id'
  | 'variants.files.type'
  | 'variants.files.hash'
  | 'variants.files.filename'
  | 'variants.files.mime_type'
  | 'variants.files.size'
  | 'variants.files.width'
  | 'variants.files.height'
  | 'variants.files.dpi'
  | 'variants.files.status'
  | 'variants.files.created'
  | 'variants.files.thumbnail_url'
  | 'variants.files.preview_url'
  | 'variants.files.visible'
  | 'variants.options'
  | 'variants.options.id'
  | 'variants.options.value'
  | 'variants.is_ignored'
  | 'variants.slug'
  | 'variants.parentProduct.id'
  | 'variants.parentProduct.parent.id'
  | 'variants.parentProduct.parent.children'
  | 'variants.parentProduct.children'
  | 'variants.parentProduct.children.id'
  | 'variants.parentProduct.children.children'
  | 'variants.parentProduct.internal.content'
  | 'variants.parentProduct.internal.contentDigest'
  | 'variants.parentProduct.internal.description'
  | 'variants.parentProduct.internal.fieldOwners'
  | 'variants.parentProduct.internal.ignoreType'
  | 'variants.parentProduct.internal.mediaType'
  | 'variants.parentProduct.internal.owner'
  | 'variants.parentProduct.internal.type'
  | 'variants.parentProduct.external_id'
  | 'variants.parentProduct.name'
  | 'variants.parentProduct.synced'
  | 'variants.parentProduct.thumbnail_url'
  | 'variants.parentProduct.is_ignored'
  | 'variants.parentProduct.slug'
  | 'variants.parentProduct.variants'
  | 'variants.parentProduct.variants.id'
  | 'variants.parentProduct.variants.children'
  | 'variants.parentProduct.variants.external_id'
  | 'variants.parentProduct.variants.sync_product_id'
  | 'variants.parentProduct.variants.name'
  | 'variants.parentProduct.variants.synced'
  | 'variants.parentProduct.variants.variant_id'
  | 'variants.parentProduct.variants.retail_price'
  | 'variants.parentProduct.variants.sku'
  | 'variants.parentProduct.variants.currency'
  | 'variants.parentProduct.variants.files'
  | 'variants.parentProduct.variants.options'
  | 'variants.parentProduct.variants.is_ignored'
  | 'variants.parentProduct.variants.slug'
  | 'variants.parentProduct.productImage.sourceInstanceName'
  | 'variants.parentProduct.productImage.absolutePath'
  | 'variants.parentProduct.productImage.relativePath'
  | 'variants.parentProduct.productImage.extension'
  | 'variants.parentProduct.productImage.size'
  | 'variants.parentProduct.productImage.prettySize'
  | 'variants.parentProduct.productImage.modifiedTime'
  | 'variants.parentProduct.productImage.accessTime'
  | 'variants.parentProduct.productImage.changeTime'
  | 'variants.parentProduct.productImage.birthTime'
  | 'variants.parentProduct.productImage.root'
  | 'variants.parentProduct.productImage.dir'
  | 'variants.parentProduct.productImage.base'
  | 'variants.parentProduct.productImage.ext'
  | 'variants.parentProduct.productImage.name'
  | 'variants.parentProduct.productImage.relativeDirectory'
  | 'variants.parentProduct.productImage.dev'
  | 'variants.parentProduct.productImage.mode'
  | 'variants.parentProduct.productImage.nlink'
  | 'variants.parentProduct.productImage.uid'
  | 'variants.parentProduct.productImage.gid'
  | 'variants.parentProduct.productImage.rdev'
  | 'variants.parentProduct.productImage.ino'
  | 'variants.parentProduct.productImage.atimeMs'
  | 'variants.parentProduct.productImage.mtimeMs'
  | 'variants.parentProduct.productImage.ctimeMs'
  | 'variants.parentProduct.productImage.atime'
  | 'variants.parentProduct.productImage.mtime'
  | 'variants.parentProduct.productImage.ctime'
  | 'variants.parentProduct.productImage.birthtime'
  | 'variants.parentProduct.productImage.birthtimeMs'
  | 'variants.parentProduct.productImage.blksize'
  | 'variants.parentProduct.productImage.blocks'
  | 'variants.parentProduct.productImage.url'
  | 'variants.parentProduct.productImage.publicURL'
  | 'variants.parentProduct.productImage.childrenImageSharp'
  | 'variants.parentProduct.productImage.id'
  | 'variants.parentProduct.productImage.children'
  | 'variants.catalogVariant.id'
  | 'variants.catalogVariant.parent.id'
  | 'variants.catalogVariant.parent.children'
  | 'variants.catalogVariant.children'
  | 'variants.catalogVariant.children.id'
  | 'variants.catalogVariant.children.children'
  | 'variants.catalogVariant.internal.content'
  | 'variants.catalogVariant.internal.contentDigest'
  | 'variants.catalogVariant.internal.description'
  | 'variants.catalogVariant.internal.fieldOwners'
  | 'variants.catalogVariant.internal.ignoreType'
  | 'variants.catalogVariant.internal.mediaType'
  | 'variants.catalogVariant.internal.owner'
  | 'variants.catalogVariant.internal.type'
  | 'variants.catalogVariant.name'
  | 'variants.catalogVariant.size'
  | 'variants.catalogVariant.color'
  | 'variants.catalogVariant.color_code'
  | 'variants.catalogVariant.image'
  | 'variants.catalogVariant.price'
  | 'variants.catalogVariant.in_stock'
  | 'variants.catalogVariant.availability_regions.US'
  | 'variants.catalogVariant.availability_regions.MX'
  | 'variants.catalogVariant.availability_regions.CA'
  | 'variants.catalogVariant.availability_regions.EU'
  | 'variants.catalogVariant.availability_status'
  | 'variants.catalogVariant.availability_status.region'
  | 'variants.catalogVariant.availability_status.status'
  | 'variants.catalogVariant.product_id'
  | 'variants.catalogVariant.retail_price'
  | 'variants.catalogVariant.variantImage.sourceInstanceName'
  | 'variants.catalogVariant.variantImage.absolutePath'
  | 'variants.catalogVariant.variantImage.relativePath'
  | 'variants.catalogVariant.variantImage.extension'
  | 'variants.catalogVariant.variantImage.size'
  | 'variants.catalogVariant.variantImage.prettySize'
  | 'variants.catalogVariant.variantImage.modifiedTime'
  | 'variants.catalogVariant.variantImage.accessTime'
  | 'variants.catalogVariant.variantImage.changeTime'
  | 'variants.catalogVariant.variantImage.birthTime'
  | 'variants.catalogVariant.variantImage.root'
  | 'variants.catalogVariant.variantImage.dir'
  | 'variants.catalogVariant.variantImage.base'
  | 'variants.catalogVariant.variantImage.ext'
  | 'variants.catalogVariant.variantImage.name'
  | 'variants.catalogVariant.variantImage.relativeDirectory'
  | 'variants.catalogVariant.variantImage.dev'
  | 'variants.catalogVariant.variantImage.mode'
  | 'variants.catalogVariant.variantImage.nlink'
  | 'variants.catalogVariant.variantImage.uid'
  | 'variants.catalogVariant.variantImage.gid'
  | 'variants.catalogVariant.variantImage.rdev'
  | 'variants.catalogVariant.variantImage.ino'
  | 'variants.catalogVariant.variantImage.atimeMs'
  | 'variants.catalogVariant.variantImage.mtimeMs'
  | 'variants.catalogVariant.variantImage.ctimeMs'
  | 'variants.catalogVariant.variantImage.atime'
  | 'variants.catalogVariant.variantImage.mtime'
  | 'variants.catalogVariant.variantImage.ctime'
  | 'variants.catalogVariant.variantImage.birthtime'
  | 'variants.catalogVariant.variantImage.birthtimeMs'
  | 'variants.catalogVariant.variantImage.blksize'
  | 'variants.catalogVariant.variantImage.blocks'
  | 'variants.catalogVariant.variantImage.url'
  | 'variants.catalogVariant.variantImage.publicURL'
  | 'variants.catalogVariant.variantImage.childrenImageSharp'
  | 'variants.catalogVariant.variantImage.id'
  | 'variants.catalogVariant.variantImage.children'
  | 'variants.catalogProduct.id'
  | 'variants.catalogProduct.parent.id'
  | 'variants.catalogProduct.parent.children'
  | 'variants.catalogProduct.children'
  | 'variants.catalogProduct.children.id'
  | 'variants.catalogProduct.children.children'
  | 'variants.catalogProduct.internal.content'
  | 'variants.catalogProduct.internal.contentDigest'
  | 'variants.catalogProduct.internal.description'
  | 'variants.catalogProduct.internal.fieldOwners'
  | 'variants.catalogProduct.internal.ignoreType'
  | 'variants.catalogProduct.internal.mediaType'
  | 'variants.catalogProduct.internal.owner'
  | 'variants.catalogProduct.internal.type'
  | 'variants.catalogProduct.type'
  | 'variants.catalogProduct.type_name'
  | 'variants.catalogProduct.brand'
  | 'variants.catalogProduct.model'
  | 'variants.catalogProduct.image'
  | 'variants.catalogProduct.variant_count'
  | 'variants.catalogProduct.currency'
  | 'variants.catalogProduct.files'
  | 'variants.catalogProduct.files.id'
  | 'variants.catalogProduct.files.type'
  | 'variants.catalogProduct.files.title'
  | 'variants.catalogProduct.files.additional_price'
  | 'variants.catalogProduct.options'
  | 'variants.catalogProduct.options.id'
  | 'variants.catalogProduct.options.title'
  | 'variants.catalogProduct.options.type'
  | 'variants.catalogProduct.dimensions.front'
  | 'variants.catalogProduct.is_discontinued'
  | 'variants.catalogProduct.description'
  | 'variants.catalogProduct.productImage.sourceInstanceName'
  | 'variants.catalogProduct.productImage.absolutePath'
  | 'variants.catalogProduct.productImage.relativePath'
  | 'variants.catalogProduct.productImage.extension'
  | 'variants.catalogProduct.productImage.size'
  | 'variants.catalogProduct.productImage.prettySize'
  | 'variants.catalogProduct.productImage.modifiedTime'
  | 'variants.catalogProduct.productImage.accessTime'
  | 'variants.catalogProduct.productImage.changeTime'
  | 'variants.catalogProduct.productImage.birthTime'
  | 'variants.catalogProduct.productImage.root'
  | 'variants.catalogProduct.productImage.dir'
  | 'variants.catalogProduct.productImage.base'
  | 'variants.catalogProduct.productImage.ext'
  | 'variants.catalogProduct.productImage.name'
  | 'variants.catalogProduct.productImage.relativeDirectory'
  | 'variants.catalogProduct.productImage.dev'
  | 'variants.catalogProduct.productImage.mode'
  | 'variants.catalogProduct.productImage.nlink'
  | 'variants.catalogProduct.productImage.uid'
  | 'variants.catalogProduct.productImage.gid'
  | 'variants.catalogProduct.productImage.rdev'
  | 'variants.catalogProduct.productImage.ino'
  | 'variants.catalogProduct.productImage.atimeMs'
  | 'variants.catalogProduct.productImage.mtimeMs'
  | 'variants.catalogProduct.productImage.ctimeMs'
  | 'variants.catalogProduct.productImage.atime'
  | 'variants.catalogProduct.productImage.mtime'
  | 'variants.catalogProduct.productImage.ctime'
  | 'variants.catalogProduct.productImage.birthtime'
  | 'variants.catalogProduct.productImage.birthtimeMs'
  | 'variants.catalogProduct.productImage.blksize'
  | 'variants.catalogProduct.productImage.blocks'
  | 'variants.catalogProduct.productImage.url'
  | 'variants.catalogProduct.productImage.publicURL'
  | 'variants.catalogProduct.productImage.childrenImageSharp'
  | 'variants.catalogProduct.productImage.id'
  | 'variants.catalogProduct.productImage.children'
  | 'variants.variantImage.sourceInstanceName'
  | 'variants.variantImage.absolutePath'
  | 'variants.variantImage.relativePath'
  | 'variants.variantImage.extension'
  | 'variants.variantImage.size'
  | 'variants.variantImage.prettySize'
  | 'variants.variantImage.modifiedTime'
  | 'variants.variantImage.accessTime'
  | 'variants.variantImage.changeTime'
  | 'variants.variantImage.birthTime'
  | 'variants.variantImage.root'
  | 'variants.variantImage.dir'
  | 'variants.variantImage.base'
  | 'variants.variantImage.ext'
  | 'variants.variantImage.name'
  | 'variants.variantImage.relativeDirectory'
  | 'variants.variantImage.dev'
  | 'variants.variantImage.mode'
  | 'variants.variantImage.nlink'
  | 'variants.variantImage.uid'
  | 'variants.variantImage.gid'
  | 'variants.variantImage.rdev'
  | 'variants.variantImage.ino'
  | 'variants.variantImage.atimeMs'
  | 'variants.variantImage.mtimeMs'
  | 'variants.variantImage.ctimeMs'
  | 'variants.variantImage.atime'
  | 'variants.variantImage.mtime'
  | 'variants.variantImage.ctime'
  | 'variants.variantImage.birthtime'
  | 'variants.variantImage.birthtimeMs'
  | 'variants.variantImage.blksize'
  | 'variants.variantImage.blocks'
  | 'variants.variantImage.url'
  | 'variants.variantImage.publicURL'
  | 'variants.variantImage.childrenImageSharp'
  | 'variants.variantImage.childrenImageSharp.gatsbyImageData'
  | 'variants.variantImage.childrenImageSharp.id'
  | 'variants.variantImage.childrenImageSharp.children'
  | 'variants.variantImage.childImageSharp.gatsbyImageData'
  | 'variants.variantImage.childImageSharp.id'
  | 'variants.variantImage.childImageSharp.children'
  | 'variants.variantImage.id'
  | 'variants.variantImage.parent.id'
  | 'variants.variantImage.parent.children'
  | 'variants.variantImage.children'
  | 'variants.variantImage.children.id'
  | 'variants.variantImage.children.children'
  | 'variants.variantImage.internal.content'
  | 'variants.variantImage.internal.contentDigest'
  | 'variants.variantImage.internal.description'
  | 'variants.variantImage.internal.fieldOwners'
  | 'variants.variantImage.internal.ignoreType'
  | 'variants.variantImage.internal.mediaType'
  | 'variants.variantImage.internal.owner'
  | 'variants.variantImage.internal.type'
  | 'productImage.sourceInstanceName'
  | 'productImage.absolutePath'
  | 'productImage.relativePath'
  | 'productImage.extension'
  | 'productImage.size'
  | 'productImage.prettySize'
  | 'productImage.modifiedTime'
  | 'productImage.accessTime'
  | 'productImage.changeTime'
  | 'productImage.birthTime'
  | 'productImage.root'
  | 'productImage.dir'
  | 'productImage.base'
  | 'productImage.ext'
  | 'productImage.name'
  | 'productImage.relativeDirectory'
  | 'productImage.dev'
  | 'productImage.mode'
  | 'productImage.nlink'
  | 'productImage.uid'
  | 'productImage.gid'
  | 'productImage.rdev'
  | 'productImage.ino'
  | 'productImage.atimeMs'
  | 'productImage.mtimeMs'
  | 'productImage.ctimeMs'
  | 'productImage.atime'
  | 'productImage.mtime'
  | 'productImage.ctime'
  | 'productImage.birthtime'
  | 'productImage.birthtimeMs'
  | 'productImage.blksize'
  | 'productImage.blocks'
  | 'productImage.url'
  | 'productImage.publicURL'
  | 'productImage.childrenImageSharp'
  | 'productImage.childrenImageSharp.fixed.base64'
  | 'productImage.childrenImageSharp.fixed.tracedSVG'
  | 'productImage.childrenImageSharp.fixed.aspectRatio'
  | 'productImage.childrenImageSharp.fixed.width'
  | 'productImage.childrenImageSharp.fixed.height'
  | 'productImage.childrenImageSharp.fixed.src'
  | 'productImage.childrenImageSharp.fixed.srcSet'
  | 'productImage.childrenImageSharp.fixed.srcWebp'
  | 'productImage.childrenImageSharp.fixed.srcSetWebp'
  | 'productImage.childrenImageSharp.fixed.originalName'
  | 'productImage.childrenImageSharp.fluid.base64'
  | 'productImage.childrenImageSharp.fluid.tracedSVG'
  | 'productImage.childrenImageSharp.fluid.aspectRatio'
  | 'productImage.childrenImageSharp.fluid.src'
  | 'productImage.childrenImageSharp.fluid.srcSet'
  | 'productImage.childrenImageSharp.fluid.srcWebp'
  | 'productImage.childrenImageSharp.fluid.srcSetWebp'
  | 'productImage.childrenImageSharp.fluid.sizes'
  | 'productImage.childrenImageSharp.fluid.originalImg'
  | 'productImage.childrenImageSharp.fluid.originalName'
  | 'productImage.childrenImageSharp.fluid.presentationWidth'
  | 'productImage.childrenImageSharp.fluid.presentationHeight'
  | 'productImage.childrenImageSharp.gatsbyImageData'
  | 'productImage.childrenImageSharp.original.width'
  | 'productImage.childrenImageSharp.original.height'
  | 'productImage.childrenImageSharp.original.src'
  | 'productImage.childrenImageSharp.resize.src'
  | 'productImage.childrenImageSharp.resize.tracedSVG'
  | 'productImage.childrenImageSharp.resize.width'
  | 'productImage.childrenImageSharp.resize.height'
  | 'productImage.childrenImageSharp.resize.aspectRatio'
  | 'productImage.childrenImageSharp.resize.originalName'
  | 'productImage.childrenImageSharp.id'
  | 'productImage.childrenImageSharp.parent.id'
  | 'productImage.childrenImageSharp.parent.children'
  | 'productImage.childrenImageSharp.children'
  | 'productImage.childrenImageSharp.children.id'
  | 'productImage.childrenImageSharp.children.children'
  | 'productImage.childrenImageSharp.internal.content'
  | 'productImage.childrenImageSharp.internal.contentDigest'
  | 'productImage.childrenImageSharp.internal.description'
  | 'productImage.childrenImageSharp.internal.fieldOwners'
  | 'productImage.childrenImageSharp.internal.ignoreType'
  | 'productImage.childrenImageSharp.internal.mediaType'
  | 'productImage.childrenImageSharp.internal.owner'
  | 'productImage.childrenImageSharp.internal.type'
  | 'productImage.childImageSharp.fixed.base64'
  | 'productImage.childImageSharp.fixed.tracedSVG'
  | 'productImage.childImageSharp.fixed.aspectRatio'
  | 'productImage.childImageSharp.fixed.width'
  | 'productImage.childImageSharp.fixed.height'
  | 'productImage.childImageSharp.fixed.src'
  | 'productImage.childImageSharp.fixed.srcSet'
  | 'productImage.childImageSharp.fixed.srcWebp'
  | 'productImage.childImageSharp.fixed.srcSetWebp'
  | 'productImage.childImageSharp.fixed.originalName'
  | 'productImage.childImageSharp.fluid.base64'
  | 'productImage.childImageSharp.fluid.tracedSVG'
  | 'productImage.childImageSharp.fluid.aspectRatio'
  | 'productImage.childImageSharp.fluid.src'
  | 'productImage.childImageSharp.fluid.srcSet'
  | 'productImage.childImageSharp.fluid.srcWebp'
  | 'productImage.childImageSharp.fluid.srcSetWebp'
  | 'productImage.childImageSharp.fluid.sizes'
  | 'productImage.childImageSharp.fluid.originalImg'
  | 'productImage.childImageSharp.fluid.originalName'
  | 'productImage.childImageSharp.fluid.presentationWidth'
  | 'productImage.childImageSharp.fluid.presentationHeight'
  | 'productImage.childImageSharp.gatsbyImageData'
  | 'productImage.childImageSharp.original.width'
  | 'productImage.childImageSharp.original.height'
  | 'productImage.childImageSharp.original.src'
  | 'productImage.childImageSharp.resize.src'
  | 'productImage.childImageSharp.resize.tracedSVG'
  | 'productImage.childImageSharp.resize.width'
  | 'productImage.childImageSharp.resize.height'
  | 'productImage.childImageSharp.resize.aspectRatio'
  | 'productImage.childImageSharp.resize.originalName'
  | 'productImage.childImageSharp.id'
  | 'productImage.childImageSharp.parent.id'
  | 'productImage.childImageSharp.parent.children'
  | 'productImage.childImageSharp.children'
  | 'productImage.childImageSharp.children.id'
  | 'productImage.childImageSharp.children.children'
  | 'productImage.childImageSharp.internal.content'
  | 'productImage.childImageSharp.internal.contentDigest'
  | 'productImage.childImageSharp.internal.description'
  | 'productImage.childImageSharp.internal.fieldOwners'
  | 'productImage.childImageSharp.internal.ignoreType'
  | 'productImage.childImageSharp.internal.mediaType'
  | 'productImage.childImageSharp.internal.owner'
  | 'productImage.childImageSharp.internal.type'
  | 'productImage.id'
  | 'productImage.parent.id'
  | 'productImage.parent.parent.id'
  | 'productImage.parent.parent.children'
  | 'productImage.parent.children'
  | 'productImage.parent.children.id'
  | 'productImage.parent.children.children'
  | 'productImage.parent.internal.content'
  | 'productImage.parent.internal.contentDigest'
  | 'productImage.parent.internal.description'
  | 'productImage.parent.internal.fieldOwners'
  | 'productImage.parent.internal.ignoreType'
  | 'productImage.parent.internal.mediaType'
  | 'productImage.parent.internal.owner'
  | 'productImage.parent.internal.type'
  | 'productImage.children'
  | 'productImage.children.id'
  | 'productImage.children.parent.id'
  | 'productImage.children.parent.children'
  | 'productImage.children.children'
  | 'productImage.children.children.id'
  | 'productImage.children.children.children'
  | 'productImage.children.internal.content'
  | 'productImage.children.internal.contentDigest'
  | 'productImage.children.internal.description'
  | 'productImage.children.internal.fieldOwners'
  | 'productImage.children.internal.ignoreType'
  | 'productImage.children.internal.mediaType'
  | 'productImage.children.internal.owner'
  | 'productImage.children.internal.type'
  | 'productImage.internal.content'
  | 'productImage.internal.contentDigest'
  | 'productImage.internal.description'
  | 'productImage.internal.fieldOwners'
  | 'productImage.internal.ignoreType'
  | 'productImage.internal.mediaType'
  | 'productImage.internal.owner'
  | 'productImage.internal.type';

type PrintfulProductGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<PrintfulProductEdge>;
  readonly nodes: ReadonlyArray<PrintfulProduct>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};

type PrintfulProductSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<PrintfulProductFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type PrintfulVariantConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<PrintfulVariantEdge>;
  readonly nodes: ReadonlyArray<PrintfulVariant>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<PrintfulVariantGroupConnection>;
};


type PrintfulVariantConnection_distinctArgs = {
  field: PrintfulVariantFieldsEnum;
};


type PrintfulVariantConnection_maxArgs = {
  field: PrintfulVariantFieldsEnum;
};


type PrintfulVariantConnection_minArgs = {
  field: PrintfulVariantFieldsEnum;
};


type PrintfulVariantConnection_sumArgs = {
  field: PrintfulVariantFieldsEnum;
};


type PrintfulVariantConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: PrintfulVariantFieldsEnum;
};

type PrintfulVariantEdge = {
  readonly next: Maybe<PrintfulVariant>;
  readonly node: PrintfulVariant;
  readonly previous: Maybe<PrintfulVariant>;
};

type PrintfulVariantFieldsEnum =
  | 'id'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type'
  | 'external_id'
  | 'sync_product_id'
  | 'name'
  | 'synced'
  | 'variant_id'
  | 'retail_price'
  | 'sku'
  | 'currency'
  | 'product.variant_id'
  | 'product.product_id'
  | 'product.image'
  | 'product.name'
  | 'files'
  | 'files.id'
  | 'files.type'
  | 'files.hash'
  | 'files.filename'
  | 'files.mime_type'
  | 'files.size'
  | 'files.width'
  | 'files.height'
  | 'files.dpi'
  | 'files.status'
  | 'files.created'
  | 'files.thumbnail_url'
  | 'files.preview_url'
  | 'files.visible'
  | 'options'
  | 'options.id'
  | 'options.value'
  | 'is_ignored'
  | 'slug'
  | 'parentProduct.id'
  | 'parentProduct.parent.id'
  | 'parentProduct.parent.parent.id'
  | 'parentProduct.parent.parent.children'
  | 'parentProduct.parent.children'
  | 'parentProduct.parent.children.id'
  | 'parentProduct.parent.children.children'
  | 'parentProduct.parent.internal.content'
  | 'parentProduct.parent.internal.contentDigest'
  | 'parentProduct.parent.internal.description'
  | 'parentProduct.parent.internal.fieldOwners'
  | 'parentProduct.parent.internal.ignoreType'
  | 'parentProduct.parent.internal.mediaType'
  | 'parentProduct.parent.internal.owner'
  | 'parentProduct.parent.internal.type'
  | 'parentProduct.children'
  | 'parentProduct.children.id'
  | 'parentProduct.children.parent.id'
  | 'parentProduct.children.parent.children'
  | 'parentProduct.children.children'
  | 'parentProduct.children.children.id'
  | 'parentProduct.children.children.children'
  | 'parentProduct.children.internal.content'
  | 'parentProduct.children.internal.contentDigest'
  | 'parentProduct.children.internal.description'
  | 'parentProduct.children.internal.fieldOwners'
  | 'parentProduct.children.internal.ignoreType'
  | 'parentProduct.children.internal.mediaType'
  | 'parentProduct.children.internal.owner'
  | 'parentProduct.children.internal.type'
  | 'parentProduct.internal.content'
  | 'parentProduct.internal.contentDigest'
  | 'parentProduct.internal.description'
  | 'parentProduct.internal.fieldOwners'
  | 'parentProduct.internal.ignoreType'
  | 'parentProduct.internal.mediaType'
  | 'parentProduct.internal.owner'
  | 'parentProduct.internal.type'
  | 'parentProduct.external_id'
  | 'parentProduct.name'
  | 'parentProduct.synced'
  | 'parentProduct.thumbnail_url'
  | 'parentProduct.is_ignored'
  | 'parentProduct.slug'
  | 'parentProduct.variants'
  | 'parentProduct.variants.id'
  | 'parentProduct.variants.parent.id'
  | 'parentProduct.variants.parent.children'
  | 'parentProduct.variants.children'
  | 'parentProduct.variants.children.id'
  | 'parentProduct.variants.children.children'
  | 'parentProduct.variants.internal.content'
  | 'parentProduct.variants.internal.contentDigest'
  | 'parentProduct.variants.internal.description'
  | 'parentProduct.variants.internal.fieldOwners'
  | 'parentProduct.variants.internal.ignoreType'
  | 'parentProduct.variants.internal.mediaType'
  | 'parentProduct.variants.internal.owner'
  | 'parentProduct.variants.internal.type'
  | 'parentProduct.variants.external_id'
  | 'parentProduct.variants.sync_product_id'
  | 'parentProduct.variants.name'
  | 'parentProduct.variants.synced'
  | 'parentProduct.variants.variant_id'
  | 'parentProduct.variants.retail_price'
  | 'parentProduct.variants.sku'
  | 'parentProduct.variants.currency'
  | 'parentProduct.variants.product.variant_id'
  | 'parentProduct.variants.product.product_id'
  | 'parentProduct.variants.product.image'
  | 'parentProduct.variants.product.name'
  | 'parentProduct.variants.files'
  | 'parentProduct.variants.files.id'
  | 'parentProduct.variants.files.type'
  | 'parentProduct.variants.files.hash'
  | 'parentProduct.variants.files.filename'
  | 'parentProduct.variants.files.mime_type'
  | 'parentProduct.variants.files.size'
  | 'parentProduct.variants.files.width'
  | 'parentProduct.variants.files.height'
  | 'parentProduct.variants.files.dpi'
  | 'parentProduct.variants.files.status'
  | 'parentProduct.variants.files.created'
  | 'parentProduct.variants.files.thumbnail_url'
  | 'parentProduct.variants.files.preview_url'
  | 'parentProduct.variants.files.visible'
  | 'parentProduct.variants.options'
  | 'parentProduct.variants.options.id'
  | 'parentProduct.variants.options.value'
  | 'parentProduct.variants.is_ignored'
  | 'parentProduct.variants.slug'
  | 'parentProduct.variants.parentProduct.id'
  | 'parentProduct.variants.parentProduct.children'
  | 'parentProduct.variants.parentProduct.external_id'
  | 'parentProduct.variants.parentProduct.name'
  | 'parentProduct.variants.parentProduct.synced'
  | 'parentProduct.variants.parentProduct.thumbnail_url'
  | 'parentProduct.variants.parentProduct.is_ignored'
  | 'parentProduct.variants.parentProduct.slug'
  | 'parentProduct.variants.parentProduct.variants'
  | 'parentProduct.variants.catalogVariant.id'
  | 'parentProduct.variants.catalogVariant.children'
  | 'parentProduct.variants.catalogVariant.name'
  | 'parentProduct.variants.catalogVariant.size'
  | 'parentProduct.variants.catalogVariant.color'
  | 'parentProduct.variants.catalogVariant.color_code'
  | 'parentProduct.variants.catalogVariant.image'
  | 'parentProduct.variants.catalogVariant.price'
  | 'parentProduct.variants.catalogVariant.in_stock'
  | 'parentProduct.variants.catalogVariant.availability_status'
  | 'parentProduct.variants.catalogVariant.product_id'
  | 'parentProduct.variants.catalogVariant.retail_price'
  | 'parentProduct.variants.catalogProduct.id'
  | 'parentProduct.variants.catalogProduct.children'
  | 'parentProduct.variants.catalogProduct.type'
  | 'parentProduct.variants.catalogProduct.type_name'
  | 'parentProduct.variants.catalogProduct.brand'
  | 'parentProduct.variants.catalogProduct.model'
  | 'parentProduct.variants.catalogProduct.image'
  | 'parentProduct.variants.catalogProduct.variant_count'
  | 'parentProduct.variants.catalogProduct.currency'
  | 'parentProduct.variants.catalogProduct.files'
  | 'parentProduct.variants.catalogProduct.options'
  | 'parentProduct.variants.catalogProduct.is_discontinued'
  | 'parentProduct.variants.catalogProduct.description'
  | 'parentProduct.variants.variantImage.sourceInstanceName'
  | 'parentProduct.variants.variantImage.absolutePath'
  | 'parentProduct.variants.variantImage.relativePath'
  | 'parentProduct.variants.variantImage.extension'
  | 'parentProduct.variants.variantImage.size'
  | 'parentProduct.variants.variantImage.prettySize'
  | 'parentProduct.variants.variantImage.modifiedTime'
  | 'parentProduct.variants.variantImage.accessTime'
  | 'parentProduct.variants.variantImage.changeTime'
  | 'parentProduct.variants.variantImage.birthTime'
  | 'parentProduct.variants.variantImage.root'
  | 'parentProduct.variants.variantImage.dir'
  | 'parentProduct.variants.variantImage.base'
  | 'parentProduct.variants.variantImage.ext'
  | 'parentProduct.variants.variantImage.name'
  | 'parentProduct.variants.variantImage.relativeDirectory'
  | 'parentProduct.variants.variantImage.dev'
  | 'parentProduct.variants.variantImage.mode'
  | 'parentProduct.variants.variantImage.nlink'
  | 'parentProduct.variants.variantImage.uid'
  | 'parentProduct.variants.variantImage.gid'
  | 'parentProduct.variants.variantImage.rdev'
  | 'parentProduct.variants.variantImage.ino'
  | 'parentProduct.variants.variantImage.atimeMs'
  | 'parentProduct.variants.variantImage.mtimeMs'
  | 'parentProduct.variants.variantImage.ctimeMs'
  | 'parentProduct.variants.variantImage.atime'
  | 'parentProduct.variants.variantImage.mtime'
  | 'parentProduct.variants.variantImage.ctime'
  | 'parentProduct.variants.variantImage.birthtime'
  | 'parentProduct.variants.variantImage.birthtimeMs'
  | 'parentProduct.variants.variantImage.blksize'
  | 'parentProduct.variants.variantImage.blocks'
  | 'parentProduct.variants.variantImage.url'
  | 'parentProduct.variants.variantImage.publicURL'
  | 'parentProduct.variants.variantImage.childrenImageSharp'
  | 'parentProduct.variants.variantImage.id'
  | 'parentProduct.variants.variantImage.children'
  | 'parentProduct.productImage.sourceInstanceName'
  | 'parentProduct.productImage.absolutePath'
  | 'parentProduct.productImage.relativePath'
  | 'parentProduct.productImage.extension'
  | 'parentProduct.productImage.size'
  | 'parentProduct.productImage.prettySize'
  | 'parentProduct.productImage.modifiedTime'
  | 'parentProduct.productImage.accessTime'
  | 'parentProduct.productImage.changeTime'
  | 'parentProduct.productImage.birthTime'
  | 'parentProduct.productImage.root'
  | 'parentProduct.productImage.dir'
  | 'parentProduct.productImage.base'
  | 'parentProduct.productImage.ext'
  | 'parentProduct.productImage.name'
  | 'parentProduct.productImage.relativeDirectory'
  | 'parentProduct.productImage.dev'
  | 'parentProduct.productImage.mode'
  | 'parentProduct.productImage.nlink'
  | 'parentProduct.productImage.uid'
  | 'parentProduct.productImage.gid'
  | 'parentProduct.productImage.rdev'
  | 'parentProduct.productImage.ino'
  | 'parentProduct.productImage.atimeMs'
  | 'parentProduct.productImage.mtimeMs'
  | 'parentProduct.productImage.ctimeMs'
  | 'parentProduct.productImage.atime'
  | 'parentProduct.productImage.mtime'
  | 'parentProduct.productImage.ctime'
  | 'parentProduct.productImage.birthtime'
  | 'parentProduct.productImage.birthtimeMs'
  | 'parentProduct.productImage.blksize'
  | 'parentProduct.productImage.blocks'
  | 'parentProduct.productImage.url'
  | 'parentProduct.productImage.publicURL'
  | 'parentProduct.productImage.childrenImageSharp'
  | 'parentProduct.productImage.childrenImageSharp.gatsbyImageData'
  | 'parentProduct.productImage.childrenImageSharp.id'
  | 'parentProduct.productImage.childrenImageSharp.children'
  | 'parentProduct.productImage.childImageSharp.gatsbyImageData'
  | 'parentProduct.productImage.childImageSharp.id'
  | 'parentProduct.productImage.childImageSharp.children'
  | 'parentProduct.productImage.id'
  | 'parentProduct.productImage.parent.id'
  | 'parentProduct.productImage.parent.children'
  | 'parentProduct.productImage.children'
  | 'parentProduct.productImage.children.id'
  | 'parentProduct.productImage.children.children'
  | 'parentProduct.productImage.internal.content'
  | 'parentProduct.productImage.internal.contentDigest'
  | 'parentProduct.productImage.internal.description'
  | 'parentProduct.productImage.internal.fieldOwners'
  | 'parentProduct.productImage.internal.ignoreType'
  | 'parentProduct.productImage.internal.mediaType'
  | 'parentProduct.productImage.internal.owner'
  | 'parentProduct.productImage.internal.type'
  | 'catalogVariant.id'
  | 'catalogVariant.parent.id'
  | 'catalogVariant.parent.parent.id'
  | 'catalogVariant.parent.parent.children'
  | 'catalogVariant.parent.children'
  | 'catalogVariant.parent.children.id'
  | 'catalogVariant.parent.children.children'
  | 'catalogVariant.parent.internal.content'
  | 'catalogVariant.parent.internal.contentDigest'
  | 'catalogVariant.parent.internal.description'
  | 'catalogVariant.parent.internal.fieldOwners'
  | 'catalogVariant.parent.internal.ignoreType'
  | 'catalogVariant.parent.internal.mediaType'
  | 'catalogVariant.parent.internal.owner'
  | 'catalogVariant.parent.internal.type'
  | 'catalogVariant.children'
  | 'catalogVariant.children.id'
  | 'catalogVariant.children.parent.id'
  | 'catalogVariant.children.parent.children'
  | 'catalogVariant.children.children'
  | 'catalogVariant.children.children.id'
  | 'catalogVariant.children.children.children'
  | 'catalogVariant.children.internal.content'
  | 'catalogVariant.children.internal.contentDigest'
  | 'catalogVariant.children.internal.description'
  | 'catalogVariant.children.internal.fieldOwners'
  | 'catalogVariant.children.internal.ignoreType'
  | 'catalogVariant.children.internal.mediaType'
  | 'catalogVariant.children.internal.owner'
  | 'catalogVariant.children.internal.type'
  | 'catalogVariant.internal.content'
  | 'catalogVariant.internal.contentDigest'
  | 'catalogVariant.internal.description'
  | 'catalogVariant.internal.fieldOwners'
  | 'catalogVariant.internal.ignoreType'
  | 'catalogVariant.internal.mediaType'
  | 'catalogVariant.internal.owner'
  | 'catalogVariant.internal.type'
  | 'catalogVariant.name'
  | 'catalogVariant.size'
  | 'catalogVariant.color'
  | 'catalogVariant.color_code'
  | 'catalogVariant.image'
  | 'catalogVariant.price'
  | 'catalogVariant.in_stock'
  | 'catalogVariant.availability_regions.US'
  | 'catalogVariant.availability_regions.MX'
  | 'catalogVariant.availability_regions.CA'
  | 'catalogVariant.availability_regions.EU'
  | 'catalogVariant.availability_status'
  | 'catalogVariant.availability_status.region'
  | 'catalogVariant.availability_status.status'
  | 'catalogVariant.product_id'
  | 'catalogVariant.retail_price'
  | 'catalogVariant.variantImage.sourceInstanceName'
  | 'catalogVariant.variantImage.absolutePath'
  | 'catalogVariant.variantImage.relativePath'
  | 'catalogVariant.variantImage.extension'
  | 'catalogVariant.variantImage.size'
  | 'catalogVariant.variantImage.prettySize'
  | 'catalogVariant.variantImage.modifiedTime'
  | 'catalogVariant.variantImage.accessTime'
  | 'catalogVariant.variantImage.changeTime'
  | 'catalogVariant.variantImage.birthTime'
  | 'catalogVariant.variantImage.root'
  | 'catalogVariant.variantImage.dir'
  | 'catalogVariant.variantImage.base'
  | 'catalogVariant.variantImage.ext'
  | 'catalogVariant.variantImage.name'
  | 'catalogVariant.variantImage.relativeDirectory'
  | 'catalogVariant.variantImage.dev'
  | 'catalogVariant.variantImage.mode'
  | 'catalogVariant.variantImage.nlink'
  | 'catalogVariant.variantImage.uid'
  | 'catalogVariant.variantImage.gid'
  | 'catalogVariant.variantImage.rdev'
  | 'catalogVariant.variantImage.ino'
  | 'catalogVariant.variantImage.atimeMs'
  | 'catalogVariant.variantImage.mtimeMs'
  | 'catalogVariant.variantImage.ctimeMs'
  | 'catalogVariant.variantImage.atime'
  | 'catalogVariant.variantImage.mtime'
  | 'catalogVariant.variantImage.ctime'
  | 'catalogVariant.variantImage.birthtime'
  | 'catalogVariant.variantImage.birthtimeMs'
  | 'catalogVariant.variantImage.blksize'
  | 'catalogVariant.variantImage.blocks'
  | 'catalogVariant.variantImage.url'
  | 'catalogVariant.variantImage.publicURL'
  | 'catalogVariant.variantImage.childrenImageSharp'
  | 'catalogVariant.variantImage.childrenImageSharp.gatsbyImageData'
  | 'catalogVariant.variantImage.childrenImageSharp.id'
  | 'catalogVariant.variantImage.childrenImageSharp.children'
  | 'catalogVariant.variantImage.childImageSharp.gatsbyImageData'
  | 'catalogVariant.variantImage.childImageSharp.id'
  | 'catalogVariant.variantImage.childImageSharp.children'
  | 'catalogVariant.variantImage.id'
  | 'catalogVariant.variantImage.parent.id'
  | 'catalogVariant.variantImage.parent.children'
  | 'catalogVariant.variantImage.children'
  | 'catalogVariant.variantImage.children.id'
  | 'catalogVariant.variantImage.children.children'
  | 'catalogVariant.variantImage.internal.content'
  | 'catalogVariant.variantImage.internal.contentDigest'
  | 'catalogVariant.variantImage.internal.description'
  | 'catalogVariant.variantImage.internal.fieldOwners'
  | 'catalogVariant.variantImage.internal.ignoreType'
  | 'catalogVariant.variantImage.internal.mediaType'
  | 'catalogVariant.variantImage.internal.owner'
  | 'catalogVariant.variantImage.internal.type'
  | 'catalogProduct.id'
  | 'catalogProduct.parent.id'
  | 'catalogProduct.parent.parent.id'
  | 'catalogProduct.parent.parent.children'
  | 'catalogProduct.parent.children'
  | 'catalogProduct.parent.children.id'
  | 'catalogProduct.parent.children.children'
  | 'catalogProduct.parent.internal.content'
  | 'catalogProduct.parent.internal.contentDigest'
  | 'catalogProduct.parent.internal.description'
  | 'catalogProduct.parent.internal.fieldOwners'
  | 'catalogProduct.parent.internal.ignoreType'
  | 'catalogProduct.parent.internal.mediaType'
  | 'catalogProduct.parent.internal.owner'
  | 'catalogProduct.parent.internal.type'
  | 'catalogProduct.children'
  | 'catalogProduct.children.id'
  | 'catalogProduct.children.parent.id'
  | 'catalogProduct.children.parent.children'
  | 'catalogProduct.children.children'
  | 'catalogProduct.children.children.id'
  | 'catalogProduct.children.children.children'
  | 'catalogProduct.children.internal.content'
  | 'catalogProduct.children.internal.contentDigest'
  | 'catalogProduct.children.internal.description'
  | 'catalogProduct.children.internal.fieldOwners'
  | 'catalogProduct.children.internal.ignoreType'
  | 'catalogProduct.children.internal.mediaType'
  | 'catalogProduct.children.internal.owner'
  | 'catalogProduct.children.internal.type'
  | 'catalogProduct.internal.content'
  | 'catalogProduct.internal.contentDigest'
  | 'catalogProduct.internal.description'
  | 'catalogProduct.internal.fieldOwners'
  | 'catalogProduct.internal.ignoreType'
  | 'catalogProduct.internal.mediaType'
  | 'catalogProduct.internal.owner'
  | 'catalogProduct.internal.type'
  | 'catalogProduct.type'
  | 'catalogProduct.type_name'
  | 'catalogProduct.brand'
  | 'catalogProduct.model'
  | 'catalogProduct.image'
  | 'catalogProduct.variant_count'
  | 'catalogProduct.currency'
  | 'catalogProduct.files'
  | 'catalogProduct.files.id'
  | 'catalogProduct.files.type'
  | 'catalogProduct.files.title'
  | 'catalogProduct.files.additional_price'
  | 'catalogProduct.options'
  | 'catalogProduct.options.id'
  | 'catalogProduct.options.title'
  | 'catalogProduct.options.type'
  | 'catalogProduct.options.values.flat'
  | 'catalogProduct.options.values._3d'
  | 'catalogProduct.options.values.both'
  | 'catalogProduct.options.values._FFFFFF'
  | 'catalogProduct.options.values._000000'
  | 'catalogProduct.options.values._96A1A8'
  | 'catalogProduct.options.values._A67843'
  | 'catalogProduct.options.values._FFCC00'
  | 'catalogProduct.options.values._E25C27'
  | 'catalogProduct.options.values._CC3366'
  | 'catalogProduct.options.values._CC3333'
  | 'catalogProduct.options.values._660000'
  | 'catalogProduct.options.values._333366'
  | 'catalogProduct.options.values._005397'
  | 'catalogProduct.options.values._3399FF'
  | 'catalogProduct.options.values._6B5294'
  | 'catalogProduct.options.values._01784E'
  | 'catalogProduct.options.values._7BA35A'
  | 'catalogProduct.options.values.white'
  | 'catalogProduct.options.values.black'
  | 'catalogProduct.options.additional_price_breakdown.flat'
  | 'catalogProduct.options.additional_price_breakdown._3d'
  | 'catalogProduct.options.additional_price_breakdown.both'
  | 'catalogProduct.dimensions.front'
  | 'catalogProduct.is_discontinued'
  | 'catalogProduct.description'
  | 'catalogProduct.productImage.sourceInstanceName'
  | 'catalogProduct.productImage.absolutePath'
  | 'catalogProduct.productImage.relativePath'
  | 'catalogProduct.productImage.extension'
  | 'catalogProduct.productImage.size'
  | 'catalogProduct.productImage.prettySize'
  | 'catalogProduct.productImage.modifiedTime'
  | 'catalogProduct.productImage.accessTime'
  | 'catalogProduct.productImage.changeTime'
  | 'catalogProduct.productImage.birthTime'
  | 'catalogProduct.productImage.root'
  | 'catalogProduct.productImage.dir'
  | 'catalogProduct.productImage.base'
  | 'catalogProduct.productImage.ext'
  | 'catalogProduct.productImage.name'
  | 'catalogProduct.productImage.relativeDirectory'
  | 'catalogProduct.productImage.dev'
  | 'catalogProduct.productImage.mode'
  | 'catalogProduct.productImage.nlink'
  | 'catalogProduct.productImage.uid'
  | 'catalogProduct.productImage.gid'
  | 'catalogProduct.productImage.rdev'
  | 'catalogProduct.productImage.ino'
  | 'catalogProduct.productImage.atimeMs'
  | 'catalogProduct.productImage.mtimeMs'
  | 'catalogProduct.productImage.ctimeMs'
  | 'catalogProduct.productImage.atime'
  | 'catalogProduct.productImage.mtime'
  | 'catalogProduct.productImage.ctime'
  | 'catalogProduct.productImage.birthtime'
  | 'catalogProduct.productImage.birthtimeMs'
  | 'catalogProduct.productImage.blksize'
  | 'catalogProduct.productImage.blocks'
  | 'catalogProduct.productImage.url'
  | 'catalogProduct.productImage.publicURL'
  | 'catalogProduct.productImage.childrenImageSharp'
  | 'catalogProduct.productImage.childrenImageSharp.gatsbyImageData'
  | 'catalogProduct.productImage.childrenImageSharp.id'
  | 'catalogProduct.productImage.childrenImageSharp.children'
  | 'catalogProduct.productImage.childImageSharp.gatsbyImageData'
  | 'catalogProduct.productImage.childImageSharp.id'
  | 'catalogProduct.productImage.childImageSharp.children'
  | 'catalogProduct.productImage.id'
  | 'catalogProduct.productImage.parent.id'
  | 'catalogProduct.productImage.parent.children'
  | 'catalogProduct.productImage.children'
  | 'catalogProduct.productImage.children.id'
  | 'catalogProduct.productImage.children.children'
  | 'catalogProduct.productImage.internal.content'
  | 'catalogProduct.productImage.internal.contentDigest'
  | 'catalogProduct.productImage.internal.description'
  | 'catalogProduct.productImage.internal.fieldOwners'
  | 'catalogProduct.productImage.internal.ignoreType'
  | 'catalogProduct.productImage.internal.mediaType'
  | 'catalogProduct.productImage.internal.owner'
  | 'catalogProduct.productImage.internal.type'
  | 'variantImage.sourceInstanceName'
  | 'variantImage.absolutePath'
  | 'variantImage.relativePath'
  | 'variantImage.extension'
  | 'variantImage.size'
  | 'variantImage.prettySize'
  | 'variantImage.modifiedTime'
  | 'variantImage.accessTime'
  | 'variantImage.changeTime'
  | 'variantImage.birthTime'
  | 'variantImage.root'
  | 'variantImage.dir'
  | 'variantImage.base'
  | 'variantImage.ext'
  | 'variantImage.name'
  | 'variantImage.relativeDirectory'
  | 'variantImage.dev'
  | 'variantImage.mode'
  | 'variantImage.nlink'
  | 'variantImage.uid'
  | 'variantImage.gid'
  | 'variantImage.rdev'
  | 'variantImage.ino'
  | 'variantImage.atimeMs'
  | 'variantImage.mtimeMs'
  | 'variantImage.ctimeMs'
  | 'variantImage.atime'
  | 'variantImage.mtime'
  | 'variantImage.ctime'
  | 'variantImage.birthtime'
  | 'variantImage.birthtimeMs'
  | 'variantImage.blksize'
  | 'variantImage.blocks'
  | 'variantImage.url'
  | 'variantImage.publicURL'
  | 'variantImage.childrenImageSharp'
  | 'variantImage.childrenImageSharp.fixed.base64'
  | 'variantImage.childrenImageSharp.fixed.tracedSVG'
  | 'variantImage.childrenImageSharp.fixed.aspectRatio'
  | 'variantImage.childrenImageSharp.fixed.width'
  | 'variantImage.childrenImageSharp.fixed.height'
  | 'variantImage.childrenImageSharp.fixed.src'
  | 'variantImage.childrenImageSharp.fixed.srcSet'
  | 'variantImage.childrenImageSharp.fixed.srcWebp'
  | 'variantImage.childrenImageSharp.fixed.srcSetWebp'
  | 'variantImage.childrenImageSharp.fixed.originalName'
  | 'variantImage.childrenImageSharp.fluid.base64'
  | 'variantImage.childrenImageSharp.fluid.tracedSVG'
  | 'variantImage.childrenImageSharp.fluid.aspectRatio'
  | 'variantImage.childrenImageSharp.fluid.src'
  | 'variantImage.childrenImageSharp.fluid.srcSet'
  | 'variantImage.childrenImageSharp.fluid.srcWebp'
  | 'variantImage.childrenImageSharp.fluid.srcSetWebp'
  | 'variantImage.childrenImageSharp.fluid.sizes'
  | 'variantImage.childrenImageSharp.fluid.originalImg'
  | 'variantImage.childrenImageSharp.fluid.originalName'
  | 'variantImage.childrenImageSharp.fluid.presentationWidth'
  | 'variantImage.childrenImageSharp.fluid.presentationHeight'
  | 'variantImage.childrenImageSharp.gatsbyImageData'
  | 'variantImage.childrenImageSharp.original.width'
  | 'variantImage.childrenImageSharp.original.height'
  | 'variantImage.childrenImageSharp.original.src'
  | 'variantImage.childrenImageSharp.resize.src'
  | 'variantImage.childrenImageSharp.resize.tracedSVG'
  | 'variantImage.childrenImageSharp.resize.width'
  | 'variantImage.childrenImageSharp.resize.height'
  | 'variantImage.childrenImageSharp.resize.aspectRatio'
  | 'variantImage.childrenImageSharp.resize.originalName'
  | 'variantImage.childrenImageSharp.id'
  | 'variantImage.childrenImageSharp.parent.id'
  | 'variantImage.childrenImageSharp.parent.children'
  | 'variantImage.childrenImageSharp.children'
  | 'variantImage.childrenImageSharp.children.id'
  | 'variantImage.childrenImageSharp.children.children'
  | 'variantImage.childrenImageSharp.internal.content'
  | 'variantImage.childrenImageSharp.internal.contentDigest'
  | 'variantImage.childrenImageSharp.internal.description'
  | 'variantImage.childrenImageSharp.internal.fieldOwners'
  | 'variantImage.childrenImageSharp.internal.ignoreType'
  | 'variantImage.childrenImageSharp.internal.mediaType'
  | 'variantImage.childrenImageSharp.internal.owner'
  | 'variantImage.childrenImageSharp.internal.type'
  | 'variantImage.childImageSharp.fixed.base64'
  | 'variantImage.childImageSharp.fixed.tracedSVG'
  | 'variantImage.childImageSharp.fixed.aspectRatio'
  | 'variantImage.childImageSharp.fixed.width'
  | 'variantImage.childImageSharp.fixed.height'
  | 'variantImage.childImageSharp.fixed.src'
  | 'variantImage.childImageSharp.fixed.srcSet'
  | 'variantImage.childImageSharp.fixed.srcWebp'
  | 'variantImage.childImageSharp.fixed.srcSetWebp'
  | 'variantImage.childImageSharp.fixed.originalName'
  | 'variantImage.childImageSharp.fluid.base64'
  | 'variantImage.childImageSharp.fluid.tracedSVG'
  | 'variantImage.childImageSharp.fluid.aspectRatio'
  | 'variantImage.childImageSharp.fluid.src'
  | 'variantImage.childImageSharp.fluid.srcSet'
  | 'variantImage.childImageSharp.fluid.srcWebp'
  | 'variantImage.childImageSharp.fluid.srcSetWebp'
  | 'variantImage.childImageSharp.fluid.sizes'
  | 'variantImage.childImageSharp.fluid.originalImg'
  | 'variantImage.childImageSharp.fluid.originalName'
  | 'variantImage.childImageSharp.fluid.presentationWidth'
  | 'variantImage.childImageSharp.fluid.presentationHeight'
  | 'variantImage.childImageSharp.gatsbyImageData'
  | 'variantImage.childImageSharp.original.width'
  | 'variantImage.childImageSharp.original.height'
  | 'variantImage.childImageSharp.original.src'
  | 'variantImage.childImageSharp.resize.src'
  | 'variantImage.childImageSharp.resize.tracedSVG'
  | 'variantImage.childImageSharp.resize.width'
  | 'variantImage.childImageSharp.resize.height'
  | 'variantImage.childImageSharp.resize.aspectRatio'
  | 'variantImage.childImageSharp.resize.originalName'
  | 'variantImage.childImageSharp.id'
  | 'variantImage.childImageSharp.parent.id'
  | 'variantImage.childImageSharp.parent.children'
  | 'variantImage.childImageSharp.children'
  | 'variantImage.childImageSharp.children.id'
  | 'variantImage.childImageSharp.children.children'
  | 'variantImage.childImageSharp.internal.content'
  | 'variantImage.childImageSharp.internal.contentDigest'
  | 'variantImage.childImageSharp.internal.description'
  | 'variantImage.childImageSharp.internal.fieldOwners'
  | 'variantImage.childImageSharp.internal.ignoreType'
  | 'variantImage.childImageSharp.internal.mediaType'
  | 'variantImage.childImageSharp.internal.owner'
  | 'variantImage.childImageSharp.internal.type'
  | 'variantImage.id'
  | 'variantImage.parent.id'
  | 'variantImage.parent.parent.id'
  | 'variantImage.parent.parent.children'
  | 'variantImage.parent.children'
  | 'variantImage.parent.children.id'
  | 'variantImage.parent.children.children'
  | 'variantImage.parent.internal.content'
  | 'variantImage.parent.internal.contentDigest'
  | 'variantImage.parent.internal.description'
  | 'variantImage.parent.internal.fieldOwners'
  | 'variantImage.parent.internal.ignoreType'
  | 'variantImage.parent.internal.mediaType'
  | 'variantImage.parent.internal.owner'
  | 'variantImage.parent.internal.type'
  | 'variantImage.children'
  | 'variantImage.children.id'
  | 'variantImage.children.parent.id'
  | 'variantImage.children.parent.children'
  | 'variantImage.children.children'
  | 'variantImage.children.children.id'
  | 'variantImage.children.children.children'
  | 'variantImage.children.internal.content'
  | 'variantImage.children.internal.contentDigest'
  | 'variantImage.children.internal.description'
  | 'variantImage.children.internal.fieldOwners'
  | 'variantImage.children.internal.ignoreType'
  | 'variantImage.children.internal.mediaType'
  | 'variantImage.children.internal.owner'
  | 'variantImage.children.internal.type'
  | 'variantImage.internal.content'
  | 'variantImage.internal.contentDigest'
  | 'variantImage.internal.description'
  | 'variantImage.internal.fieldOwners'
  | 'variantImage.internal.ignoreType'
  | 'variantImage.internal.mediaType'
  | 'variantImage.internal.owner'
  | 'variantImage.internal.type';

type PrintfulVariantGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<PrintfulVariantEdge>;
  readonly nodes: ReadonlyArray<PrintfulVariant>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};

type PrintfulVariantSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<PrintfulVariantFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type PrintfulCatalogProductConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<PrintfulCatalogProductEdge>;
  readonly nodes: ReadonlyArray<PrintfulCatalogProduct>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<PrintfulCatalogProductGroupConnection>;
};


type PrintfulCatalogProductConnection_distinctArgs = {
  field: PrintfulCatalogProductFieldsEnum;
};


type PrintfulCatalogProductConnection_maxArgs = {
  field: PrintfulCatalogProductFieldsEnum;
};


type PrintfulCatalogProductConnection_minArgs = {
  field: PrintfulCatalogProductFieldsEnum;
};


type PrintfulCatalogProductConnection_sumArgs = {
  field: PrintfulCatalogProductFieldsEnum;
};


type PrintfulCatalogProductConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: PrintfulCatalogProductFieldsEnum;
};

type PrintfulCatalogProductEdge = {
  readonly next: Maybe<PrintfulCatalogProduct>;
  readonly node: PrintfulCatalogProduct;
  readonly previous: Maybe<PrintfulCatalogProduct>;
};

type PrintfulCatalogProductFieldsEnum =
  | 'id'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type'
  | 'type'
  | 'type_name'
  | 'brand'
  | 'model'
  | 'image'
  | 'variant_count'
  | 'currency'
  | 'files'
  | 'files.id'
  | 'files.type'
  | 'files.title'
  | 'files.additional_price'
  | 'options'
  | 'options.id'
  | 'options.title'
  | 'options.type'
  | 'options.values.flat'
  | 'options.values._3d'
  | 'options.values.both'
  | 'options.values._FFFFFF'
  | 'options.values._000000'
  | 'options.values._96A1A8'
  | 'options.values._A67843'
  | 'options.values._FFCC00'
  | 'options.values._E25C27'
  | 'options.values._CC3366'
  | 'options.values._CC3333'
  | 'options.values._660000'
  | 'options.values._333366'
  | 'options.values._005397'
  | 'options.values._3399FF'
  | 'options.values._6B5294'
  | 'options.values._01784E'
  | 'options.values._7BA35A'
  | 'options.values.white'
  | 'options.values.black'
  | 'options.additional_price_breakdown.flat'
  | 'options.additional_price_breakdown._3d'
  | 'options.additional_price_breakdown.both'
  | 'dimensions.front'
  | 'is_discontinued'
  | 'description'
  | 'productImage.sourceInstanceName'
  | 'productImage.absolutePath'
  | 'productImage.relativePath'
  | 'productImage.extension'
  | 'productImage.size'
  | 'productImage.prettySize'
  | 'productImage.modifiedTime'
  | 'productImage.accessTime'
  | 'productImage.changeTime'
  | 'productImage.birthTime'
  | 'productImage.root'
  | 'productImage.dir'
  | 'productImage.base'
  | 'productImage.ext'
  | 'productImage.name'
  | 'productImage.relativeDirectory'
  | 'productImage.dev'
  | 'productImage.mode'
  | 'productImage.nlink'
  | 'productImage.uid'
  | 'productImage.gid'
  | 'productImage.rdev'
  | 'productImage.ino'
  | 'productImage.atimeMs'
  | 'productImage.mtimeMs'
  | 'productImage.ctimeMs'
  | 'productImage.atime'
  | 'productImage.mtime'
  | 'productImage.ctime'
  | 'productImage.birthtime'
  | 'productImage.birthtimeMs'
  | 'productImage.blksize'
  | 'productImage.blocks'
  | 'productImage.url'
  | 'productImage.publicURL'
  | 'productImage.childrenImageSharp'
  | 'productImage.childrenImageSharp.fixed.base64'
  | 'productImage.childrenImageSharp.fixed.tracedSVG'
  | 'productImage.childrenImageSharp.fixed.aspectRatio'
  | 'productImage.childrenImageSharp.fixed.width'
  | 'productImage.childrenImageSharp.fixed.height'
  | 'productImage.childrenImageSharp.fixed.src'
  | 'productImage.childrenImageSharp.fixed.srcSet'
  | 'productImage.childrenImageSharp.fixed.srcWebp'
  | 'productImage.childrenImageSharp.fixed.srcSetWebp'
  | 'productImage.childrenImageSharp.fixed.originalName'
  | 'productImage.childrenImageSharp.fluid.base64'
  | 'productImage.childrenImageSharp.fluid.tracedSVG'
  | 'productImage.childrenImageSharp.fluid.aspectRatio'
  | 'productImage.childrenImageSharp.fluid.src'
  | 'productImage.childrenImageSharp.fluid.srcSet'
  | 'productImage.childrenImageSharp.fluid.srcWebp'
  | 'productImage.childrenImageSharp.fluid.srcSetWebp'
  | 'productImage.childrenImageSharp.fluid.sizes'
  | 'productImage.childrenImageSharp.fluid.originalImg'
  | 'productImage.childrenImageSharp.fluid.originalName'
  | 'productImage.childrenImageSharp.fluid.presentationWidth'
  | 'productImage.childrenImageSharp.fluid.presentationHeight'
  | 'productImage.childrenImageSharp.gatsbyImageData'
  | 'productImage.childrenImageSharp.original.width'
  | 'productImage.childrenImageSharp.original.height'
  | 'productImage.childrenImageSharp.original.src'
  | 'productImage.childrenImageSharp.resize.src'
  | 'productImage.childrenImageSharp.resize.tracedSVG'
  | 'productImage.childrenImageSharp.resize.width'
  | 'productImage.childrenImageSharp.resize.height'
  | 'productImage.childrenImageSharp.resize.aspectRatio'
  | 'productImage.childrenImageSharp.resize.originalName'
  | 'productImage.childrenImageSharp.id'
  | 'productImage.childrenImageSharp.parent.id'
  | 'productImage.childrenImageSharp.parent.children'
  | 'productImage.childrenImageSharp.children'
  | 'productImage.childrenImageSharp.children.id'
  | 'productImage.childrenImageSharp.children.children'
  | 'productImage.childrenImageSharp.internal.content'
  | 'productImage.childrenImageSharp.internal.contentDigest'
  | 'productImage.childrenImageSharp.internal.description'
  | 'productImage.childrenImageSharp.internal.fieldOwners'
  | 'productImage.childrenImageSharp.internal.ignoreType'
  | 'productImage.childrenImageSharp.internal.mediaType'
  | 'productImage.childrenImageSharp.internal.owner'
  | 'productImage.childrenImageSharp.internal.type'
  | 'productImage.childImageSharp.fixed.base64'
  | 'productImage.childImageSharp.fixed.tracedSVG'
  | 'productImage.childImageSharp.fixed.aspectRatio'
  | 'productImage.childImageSharp.fixed.width'
  | 'productImage.childImageSharp.fixed.height'
  | 'productImage.childImageSharp.fixed.src'
  | 'productImage.childImageSharp.fixed.srcSet'
  | 'productImage.childImageSharp.fixed.srcWebp'
  | 'productImage.childImageSharp.fixed.srcSetWebp'
  | 'productImage.childImageSharp.fixed.originalName'
  | 'productImage.childImageSharp.fluid.base64'
  | 'productImage.childImageSharp.fluid.tracedSVG'
  | 'productImage.childImageSharp.fluid.aspectRatio'
  | 'productImage.childImageSharp.fluid.src'
  | 'productImage.childImageSharp.fluid.srcSet'
  | 'productImage.childImageSharp.fluid.srcWebp'
  | 'productImage.childImageSharp.fluid.srcSetWebp'
  | 'productImage.childImageSharp.fluid.sizes'
  | 'productImage.childImageSharp.fluid.originalImg'
  | 'productImage.childImageSharp.fluid.originalName'
  | 'productImage.childImageSharp.fluid.presentationWidth'
  | 'productImage.childImageSharp.fluid.presentationHeight'
  | 'productImage.childImageSharp.gatsbyImageData'
  | 'productImage.childImageSharp.original.width'
  | 'productImage.childImageSharp.original.height'
  | 'productImage.childImageSharp.original.src'
  | 'productImage.childImageSharp.resize.src'
  | 'productImage.childImageSharp.resize.tracedSVG'
  | 'productImage.childImageSharp.resize.width'
  | 'productImage.childImageSharp.resize.height'
  | 'productImage.childImageSharp.resize.aspectRatio'
  | 'productImage.childImageSharp.resize.originalName'
  | 'productImage.childImageSharp.id'
  | 'productImage.childImageSharp.parent.id'
  | 'productImage.childImageSharp.parent.children'
  | 'productImage.childImageSharp.children'
  | 'productImage.childImageSharp.children.id'
  | 'productImage.childImageSharp.children.children'
  | 'productImage.childImageSharp.internal.content'
  | 'productImage.childImageSharp.internal.contentDigest'
  | 'productImage.childImageSharp.internal.description'
  | 'productImage.childImageSharp.internal.fieldOwners'
  | 'productImage.childImageSharp.internal.ignoreType'
  | 'productImage.childImageSharp.internal.mediaType'
  | 'productImage.childImageSharp.internal.owner'
  | 'productImage.childImageSharp.internal.type'
  | 'productImage.id'
  | 'productImage.parent.id'
  | 'productImage.parent.parent.id'
  | 'productImage.parent.parent.children'
  | 'productImage.parent.children'
  | 'productImage.parent.children.id'
  | 'productImage.parent.children.children'
  | 'productImage.parent.internal.content'
  | 'productImage.parent.internal.contentDigest'
  | 'productImage.parent.internal.description'
  | 'productImage.parent.internal.fieldOwners'
  | 'productImage.parent.internal.ignoreType'
  | 'productImage.parent.internal.mediaType'
  | 'productImage.parent.internal.owner'
  | 'productImage.parent.internal.type'
  | 'productImage.children'
  | 'productImage.children.id'
  | 'productImage.children.parent.id'
  | 'productImage.children.parent.children'
  | 'productImage.children.children'
  | 'productImage.children.children.id'
  | 'productImage.children.children.children'
  | 'productImage.children.internal.content'
  | 'productImage.children.internal.contentDigest'
  | 'productImage.children.internal.description'
  | 'productImage.children.internal.fieldOwners'
  | 'productImage.children.internal.ignoreType'
  | 'productImage.children.internal.mediaType'
  | 'productImage.children.internal.owner'
  | 'productImage.children.internal.type'
  | 'productImage.internal.content'
  | 'productImage.internal.contentDigest'
  | 'productImage.internal.description'
  | 'productImage.internal.fieldOwners'
  | 'productImage.internal.ignoreType'
  | 'productImage.internal.mediaType'
  | 'productImage.internal.owner'
  | 'productImage.internal.type';

type PrintfulCatalogProductGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<PrintfulCatalogProductEdge>;
  readonly nodes: ReadonlyArray<PrintfulCatalogProduct>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};

type PrintfulCatalogProductSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<PrintfulCatalogProductFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type SiteBuildMetadataConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SiteBuildMetadataEdge>;
  readonly nodes: ReadonlyArray<SiteBuildMetadata>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<SiteBuildMetadataGroupConnection>;
};


type SiteBuildMetadataConnection_distinctArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


type SiteBuildMetadataConnection_maxArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


type SiteBuildMetadataConnection_minArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


type SiteBuildMetadataConnection_sumArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


type SiteBuildMetadataConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: SiteBuildMetadataFieldsEnum;
};

type SiteBuildMetadataEdge = {
  readonly next: Maybe<SiteBuildMetadata>;
  readonly node: SiteBuildMetadata;
  readonly previous: Maybe<SiteBuildMetadata>;
};

type SiteBuildMetadataFieldsEnum =
  | 'id'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type'
  | 'buildTime';

type SiteBuildMetadataGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SiteBuildMetadataEdge>;
  readonly nodes: ReadonlyArray<SiteBuildMetadata>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};

type SiteBuildMetadataFilterInput = {
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
  readonly buildTime: Maybe<DateQueryOperatorInput>;
};

type SiteBuildMetadataSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<SiteBuildMetadataFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type SitePluginConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SitePluginEdge>;
  readonly nodes: ReadonlyArray<SitePlugin>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<SitePluginGroupConnection>;
};


type SitePluginConnection_distinctArgs = {
  field: SitePluginFieldsEnum;
};


type SitePluginConnection_maxArgs = {
  field: SitePluginFieldsEnum;
};


type SitePluginConnection_minArgs = {
  field: SitePluginFieldsEnum;
};


type SitePluginConnection_sumArgs = {
  field: SitePluginFieldsEnum;
};


type SitePluginConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: SitePluginFieldsEnum;
};

type SitePluginEdge = {
  readonly next: Maybe<SitePlugin>;
  readonly node: SitePlugin;
  readonly previous: Maybe<SitePlugin>;
};

type SitePluginFieldsEnum =
  | 'id'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type'
  | 'resolve'
  | 'name'
  | 'version'
  | 'pluginOptions.output'
  | 'pluginOptions.createLinkInHead'
  | 'pluginOptions.entryLimit'
  | 'pluginOptions.query'
  | 'pluginOptions.icon'
  | 'pluginOptions.legacy'
  | 'pluginOptions.theme_color_in_head'
  | 'pluginOptions.cache_busting_mode'
  | 'pluginOptions.crossOrigin'
  | 'pluginOptions.include_favicon'
  | 'pluginOptions.cacheDigest'
  | 'pluginOptions.extensions'
  | 'pluginOptions.lessBabel'
  | 'pluginOptions.mediaTypes'
  | 'pluginOptions.root'
  | 'pluginOptions.base64Width'
  | 'pluginOptions.stripMetadata'
  | 'pluginOptions.defaultQuality'
  | 'pluginOptions.failOnError'
  | 'pluginOptions.name'
  | 'pluginOptions.path'
  | 'pluginOptions.apiKey'
  | 'pluginOptions.paginationLimit'
  | 'pluginOptions.pathCheck'
  | 'pluginOptions.allExtensions'
  | 'pluginOptions.isTSX'
  | 'pluginOptions.jsxPragma'
  | 'nodeAPIs'
  | 'browserAPIs'
  | 'ssrAPIs'
  | 'pluginFilepath'
  | 'packageJson.name'
  | 'packageJson.description'
  | 'packageJson.version'
  | 'packageJson.main'
  | 'packageJson.license'
  | 'packageJson.dependencies'
  | 'packageJson.dependencies.name'
  | 'packageJson.dependencies.version'
  | 'packageJson.devDependencies'
  | 'packageJson.devDependencies.name'
  | 'packageJson.devDependencies.version'
  | 'packageJson.peerDependencies'
  | 'packageJson.peerDependencies.name'
  | 'packageJson.peerDependencies.version'
  | 'packageJson.keywords';

type SitePluginGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SitePluginEdge>;
  readonly nodes: ReadonlyArray<SitePlugin>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};

type SitePluginSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<SitePluginFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type PagesQueryQueryVariables = Exact<{ [key: string]: never; }>;


type PagesQueryQuery = { readonly allSiteFunction: { readonly nodes: ReadonlyArray<Pick<SiteFunction, 'apiRoute'>> }, readonly allSitePage: { readonly nodes: ReadonlyArray<Pick<SitePage, 'path'>> } };

type GatsbyImageSharpFixedFragment = Pick<ImageSharpFixed, 'base64' | 'width' | 'height' | 'src' | 'srcSet'>;

type GatsbyImageSharpFixed_tracedSVGFragment = Pick<ImageSharpFixed, 'tracedSVG' | 'width' | 'height' | 'src' | 'srcSet'>;

type GatsbyImageSharpFixed_withWebpFragment = Pick<ImageSharpFixed, 'base64' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

type GatsbyImageSharpFixed_withWebp_tracedSVGFragment = Pick<ImageSharpFixed, 'tracedSVG' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

type GatsbyImageSharpFixed_noBase64Fragment = Pick<ImageSharpFixed, 'width' | 'height' | 'src' | 'srcSet'>;

type GatsbyImageSharpFixed_withWebp_noBase64Fragment = Pick<ImageSharpFixed, 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

type GatsbyImageSharpFluidFragment = Pick<ImageSharpFluid, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

type GatsbyImageSharpFluidLimitPresentationSizeFragment = { maxHeight: ImageSharpFluid['presentationHeight'], maxWidth: ImageSharpFluid['presentationWidth'] };

type GatsbyImageSharpFluid_tracedSVGFragment = Pick<ImageSharpFluid, 'tracedSVG' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

type GatsbyImageSharpFluid_withWebpFragment = Pick<ImageSharpFluid, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;

type GatsbyImageSharpFluid_withWebp_tracedSVGFragment = Pick<ImageSharpFluid, 'tracedSVG' | 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;

type GatsbyImageSharpFluid_noBase64Fragment = Pick<ImageSharpFluid, 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

type GatsbyImageSharpFluid_withWebp_noBase64Fragment = Pick<ImageSharpFluid, 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;

}
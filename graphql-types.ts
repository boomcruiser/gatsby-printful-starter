export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
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
  Date: any;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
};










export type File = Node & {
  sourceInstanceName: Scalars['String'];
  absolutePath: Scalars['String'];
  relativePath: Scalars['String'];
  extension: Scalars['String'];
  size: Scalars['Int'];
  prettySize: Scalars['String'];
  modifiedTime: Scalars['Date'];
  accessTime: Scalars['Date'];
  changeTime: Scalars['Date'];
  birthTime: Scalars['Date'];
  root: Scalars['String'];
  dir: Scalars['String'];
  base: Scalars['String'];
  ext: Scalars['String'];
  name: Scalars['String'];
  relativeDirectory: Scalars['String'];
  dev: Scalars['Int'];
  mode: Scalars['Int'];
  nlink: Scalars['Int'];
  uid: Scalars['Int'];
  gid: Scalars['Int'];
  rdev: Scalars['Int'];
  ino: Scalars['Float'];
  atimeMs: Scalars['Float'];
  mtimeMs: Scalars['Float'];
  ctimeMs: Scalars['Float'];
  atime: Scalars['Date'];
  mtime: Scalars['Date'];
  ctime: Scalars['Date'];
  /** @deprecated Use `birthTime` instead */
  birthtime?: Maybe<Scalars['Date']>;
  /** @deprecated Use `birthTime` instead */
  birthtimeMs?: Maybe<Scalars['Float']>;
  blksize?: Maybe<Scalars['Int']>;
  blocks?: Maybe<Scalars['Int']>;
  url?: Maybe<Scalars['String']>;
  /** Copy file to static directory and return public url to it */
  publicURL?: Maybe<Scalars['String']>;
  /** Returns all children nodes filtered by type ImageSharp */
  childrenImageSharp?: Maybe<Array<Maybe<ImageSharp>>>;
  /** Returns the first child node of type ImageSharp or null if there are no children of given type on this node */
  childImageSharp?: Maybe<ImageSharp>;
  /** Returns all children nodes filtered by type Mdx */
  childrenMdx?: Maybe<Array<Maybe<Mdx>>>;
  /** Returns the first child node of type Mdx or null if there are no children of given type on this node */
  childMdx?: Maybe<Mdx>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type FileModifiedTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileAccessTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileChangeTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileBirthTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileAtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileMtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileCtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

/** Node Interface */
export type Node = {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type Internal = {
  content?: Maybe<Scalars['String']>;
  contentDigest: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  fieldOwners?: Maybe<Array<Maybe<Scalars['String']>>>;
  ignoreType?: Maybe<Scalars['Boolean']>;
  mediaType?: Maybe<Scalars['String']>;
  owner: Scalars['String'];
  type: Scalars['String'];
};


export type Directory = Node & {
  sourceInstanceName: Scalars['String'];
  absolutePath: Scalars['String'];
  relativePath: Scalars['String'];
  extension: Scalars['String'];
  size: Scalars['Int'];
  prettySize: Scalars['String'];
  modifiedTime: Scalars['Date'];
  accessTime: Scalars['Date'];
  changeTime: Scalars['Date'];
  birthTime: Scalars['Date'];
  root: Scalars['String'];
  dir: Scalars['String'];
  base: Scalars['String'];
  ext: Scalars['String'];
  name: Scalars['String'];
  relativeDirectory: Scalars['String'];
  dev: Scalars['Int'];
  mode: Scalars['Int'];
  nlink: Scalars['Int'];
  uid: Scalars['Int'];
  gid: Scalars['Int'];
  rdev: Scalars['Int'];
  ino: Scalars['Float'];
  atimeMs: Scalars['Float'];
  mtimeMs: Scalars['Float'];
  ctimeMs: Scalars['Float'];
  atime: Scalars['Date'];
  mtime: Scalars['Date'];
  ctime: Scalars['Date'];
  /** @deprecated Use `birthTime` instead */
  birthtime?: Maybe<Scalars['Date']>;
  /** @deprecated Use `birthTime` instead */
  birthtimeMs?: Maybe<Scalars['Float']>;
  blksize?: Maybe<Scalars['Int']>;
  blocks?: Maybe<Scalars['Int']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type DirectoryModifiedTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryAccessTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryChangeTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryBirthTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryAtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryMtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryCtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type Site = Node & {
  buildTime?: Maybe<Scalars['Date']>;
  siteMetadata?: Maybe<SiteSiteMetadata>;
  polyfill?: Maybe<Scalars['Boolean']>;
  pathPrefix?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type SiteBuildTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type SiteSiteMetadata = {
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  siteUrl?: Maybe<Scalars['String']>;
};

export type SiteFunction = Node & {
  apiRoute: Scalars['String'];
  originalFilePath: Scalars['String'];
  relativeCompiledFilePath: Scalars['String'];
  absoluteCompiledFilePath: Scalars['String'];
  matchPath?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type SitePage = Node & {
  path: Scalars['String'];
  component: Scalars['String'];
  internalComponentName: Scalars['String'];
  componentChunkName: Scalars['String'];
  matchPath?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  isCreatedByStatefulCreatePages?: Maybe<Scalars['Boolean']>;
  context?: Maybe<SitePageContext>;
  pluginCreator?: Maybe<SitePlugin>;
  pluginCreatorId?: Maybe<Scalars['String']>;
  componentPath?: Maybe<Scalars['String']>;
};

export type SitePageContext = {
  frontmatter?: Maybe<SitePageContextFrontmatter>;
};

export type SitePageContextFrontmatter = {
  title?: Maybe<Scalars['String']>;
  date?: Maybe<Scalars['Date']>;
  published?: Maybe<Scalars['Boolean']>;
  featuredImage?: Maybe<Scalars['String']>;
  customer?: Maybe<Scalars['String']>;
  index?: Maybe<Scalars['Int']>;
};

export type ImageFormat =
  | 'NO_CHANGE'
  | 'AUTO'
  | 'JPG'
  | 'PNG'
  | 'WEBP'
  | 'AVIF';

export type ImageFit =
  | 'COVER'
  | 'CONTAIN'
  | 'FILL'
  | 'INSIDE'
  | 'OUTSIDE';

export type ImageLayout =
  | 'FIXED'
  | 'FULL_WIDTH'
  | 'CONSTRAINED';

export type ImageCropFocus =
  | 'CENTER'
  | 'NORTH'
  | 'NORTHEAST'
  | 'EAST'
  | 'SOUTHEAST'
  | 'SOUTH'
  | 'SOUTHWEST'
  | 'WEST'
  | 'NORTHWEST'
  | 'ENTROPY'
  | 'ATTENTION';

export type DuotoneGradient = {
  highlight: Scalars['String'];
  shadow: Scalars['String'];
  opacity?: Maybe<Scalars['Int']>;
};

export type PotraceTurnPolicy =
  | 'TURNPOLICY_BLACK'
  | 'TURNPOLICY_WHITE'
  | 'TURNPOLICY_LEFT'
  | 'TURNPOLICY_RIGHT'
  | 'TURNPOLICY_MINORITY'
  | 'TURNPOLICY_MAJORITY';

export type Potrace = {
  turnPolicy?: Maybe<PotraceTurnPolicy>;
  turdSize?: Maybe<Scalars['Float']>;
  alphaMax?: Maybe<Scalars['Float']>;
  optCurve?: Maybe<Scalars['Boolean']>;
  optTolerance?: Maybe<Scalars['Float']>;
  threshold?: Maybe<Scalars['Int']>;
  blackOnWhite?: Maybe<Scalars['Boolean']>;
  color?: Maybe<Scalars['String']>;
  background?: Maybe<Scalars['String']>;
};

export type ImageSharp = Node & {
  fixed?: Maybe<ImageSharpFixed>;
  fluid?: Maybe<ImageSharpFluid>;
  gatsbyImageData: Scalars['JSON'];
  original?: Maybe<ImageSharpOriginal>;
  resize?: Maybe<ImageSharpResize>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type ImageSharpFixedArgs = {
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  base64Width?: Maybe<Scalars['Int']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  duotone?: Maybe<DuotoneGradient>;
  traceSVG?: Maybe<Potrace>;
  quality?: Maybe<Scalars['Int']>;
  jpegQuality?: Maybe<Scalars['Int']>;
  pngQuality?: Maybe<Scalars['Int']>;
  webpQuality?: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ImageFormat>;
  toFormatBase64?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
};


export type ImageSharpFluidArgs = {
  maxWidth?: Maybe<Scalars['Int']>;
  maxHeight?: Maybe<Scalars['Int']>;
  base64Width?: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  duotone?: Maybe<DuotoneGradient>;
  traceSVG?: Maybe<Potrace>;
  quality?: Maybe<Scalars['Int']>;
  jpegQuality?: Maybe<Scalars['Int']>;
  pngQuality?: Maybe<Scalars['Int']>;
  webpQuality?: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ImageFormat>;
  toFormatBase64?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
  sizes?: Maybe<Scalars['String']>;
  srcSetBreakpoints?: Maybe<Array<Maybe<Scalars['Int']>>>;
};


export type ImageSharpGatsbyImageDataArgs = {
  layout?: Maybe<ImageLayout>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  aspectRatio?: Maybe<Scalars['Float']>;
  placeholder?: Maybe<ImagePlaceholder>;
  blurredOptions?: Maybe<BlurredOptions>;
  tracedSVGOptions?: Maybe<Potrace>;
  formats?: Maybe<Array<Maybe<ImageFormat>>>;
  outputPixelDensities?: Maybe<Array<Maybe<Scalars['Float']>>>;
  breakpoints?: Maybe<Array<Maybe<Scalars['Int']>>>;
  sizes?: Maybe<Scalars['String']>;
  quality?: Maybe<Scalars['Int']>;
  jpgOptions?: Maybe<JpgOptions>;
  pngOptions?: Maybe<PngOptions>;
  webpOptions?: Maybe<WebPOptions>;
  avifOptions?: Maybe<AvifOptions>;
  transformOptions?: Maybe<TransformOptions>;
  backgroundColor?: Maybe<Scalars['String']>;
};


export type ImageSharpResizeArgs = {
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  quality?: Maybe<Scalars['Int']>;
  jpegQuality?: Maybe<Scalars['Int']>;
  pngQuality?: Maybe<Scalars['Int']>;
  webpQuality?: Maybe<Scalars['Int']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionLevel?: Maybe<Scalars['Int']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  duotone?: Maybe<DuotoneGradient>;
  base64?: Maybe<Scalars['Boolean']>;
  traceSVG?: Maybe<Potrace>;
  toFormat?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
};

export type ImageSharpFixed = {
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  aspectRatio?: Maybe<Scalars['Float']>;
  width: Scalars['Float'];
  height: Scalars['Float'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcWebp?: Maybe<Scalars['String']>;
  srcSetWebp?: Maybe<Scalars['String']>;
  originalName?: Maybe<Scalars['String']>;
};

export type ImageSharpFluid = {
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  aspectRatio: Scalars['Float'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcWebp?: Maybe<Scalars['String']>;
  srcSetWebp?: Maybe<Scalars['String']>;
  sizes: Scalars['String'];
  originalImg?: Maybe<Scalars['String']>;
  originalName?: Maybe<Scalars['String']>;
  presentationWidth: Scalars['Int'];
  presentationHeight: Scalars['Int'];
};


export type ImagePlaceholder =
  | 'DOMINANT_COLOR'
  | 'TRACED_SVG'
  | 'BLURRED'
  | 'NONE';

export type BlurredOptions = {
  /** Width of the generated low-res preview. Default is 20px */
  width?: Maybe<Scalars['Int']>;
  /** Force the output format for the low-res preview. Default is to use the same format as the input. You should rarely need to change this */
  toFormat?: Maybe<ImageFormat>;
};

export type JpgOptions = {
  quality?: Maybe<Scalars['Int']>;
  progressive?: Maybe<Scalars['Boolean']>;
};

export type PngOptions = {
  quality?: Maybe<Scalars['Int']>;
  compressionSpeed?: Maybe<Scalars['Int']>;
};

export type WebPOptions = {
  quality?: Maybe<Scalars['Int']>;
};

export type AvifOptions = {
  quality?: Maybe<Scalars['Int']>;
  lossless?: Maybe<Scalars['Boolean']>;
  speed?: Maybe<Scalars['Int']>;
};

export type TransformOptions = {
  grayscale?: Maybe<Scalars['Boolean']>;
  duotone?: Maybe<DuotoneGradient>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
};

export type ImageSharpOriginal = {
  width?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  src?: Maybe<Scalars['String']>;
};

export type ImageSharpResize = {
  src?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  aspectRatio?: Maybe<Scalars['Float']>;
  originalName?: Maybe<Scalars['String']>;
};

export type MdxFrontmatter = {
  title: Scalars['String'];
  date?: Maybe<Scalars['Date']>;
  published?: Maybe<Scalars['Boolean']>;
  featuredImage?: Maybe<File>;
  customer?: Maybe<Scalars['String']>;
  index?: Maybe<Scalars['Int']>;
};


export type MdxFrontmatterDateArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type MdxHeadingMdx = {
  value?: Maybe<Scalars['String']>;
  depth?: Maybe<Scalars['Int']>;
};

export type HeadingsMdx =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6';

export type MdxWordCount = {
  paragraphs?: Maybe<Scalars['Int']>;
  sentences?: Maybe<Scalars['Int']>;
  words?: Maybe<Scalars['Int']>;
};

export type Mdx = Node & {
  rawBody: Scalars['String'];
  fileAbsolutePath: Scalars['String'];
  frontmatter?: Maybe<MdxFrontmatter>;
  slug?: Maybe<Scalars['String']>;
  body: Scalars['String'];
  excerpt: Scalars['String'];
  headings?: Maybe<Array<Maybe<MdxHeadingMdx>>>;
  html?: Maybe<Scalars['String']>;
  mdxAST?: Maybe<Scalars['JSON']>;
  tableOfContents?: Maybe<Scalars['JSON']>;
  timeToRead?: Maybe<Scalars['Int']>;
  wordCount?: Maybe<MdxWordCount>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type MdxExcerptArgs = {
  pruneLength?: Maybe<Scalars['Int']>;
  truncate?: Maybe<Scalars['Boolean']>;
};


export type MdxHeadingsArgs = {
  depth?: Maybe<HeadingsMdx>;
};


export type MdxTableOfContentsArgs = {
  maxDepth?: Maybe<Scalars['Int']>;
};

export type PrintfulStore = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  name?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  website?: Maybe<Scalars['String']>;
  currency?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['Int']>;
};

export type PrintfulCountry = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  name?: Maybe<Scalars['String']>;
  code?: Maybe<Scalars['String']>;
  states?: Maybe<Array<Maybe<PrintfulCountryStates>>>;
};

export type PrintfulCountryStates = {
  code?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type PrintfulProduct = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  external_id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  synced?: Maybe<Scalars['Int']>;
  thumbnail_url?: Maybe<Scalars['String']>;
  is_ignored?: Maybe<Scalars['Boolean']>;
  slug?: Maybe<Scalars['String']>;
  variants?: Maybe<Array<Maybe<PrintfulVariant>>>;
  productImage?: Maybe<File>;
  variantModels?: Maybe<Scalars['JSON']>;
  sizeMap?: Maybe<Scalars['JSON']>;
  colorMap?: Maybe<Scalars['JSON']>;
  variantOptions?: Maybe<Scalars['JSON']>;
};

export type PrintfulCatalogVariant = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  name?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['String']>;
  color?: Maybe<Scalars['String']>;
  color_code?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['String']>;
  in_stock?: Maybe<Scalars['Boolean']>;
  availability_regions?: Maybe<PrintfulCatalogVariantAvailability_Regions>;
  availability_status?: Maybe<Array<Maybe<PrintfulCatalogVariantAvailability_Status>>>;
  product_id?: Maybe<Scalars['String']>;
  retail_price?: Maybe<Scalars['Float']>;
  variantImage?: Maybe<File>;
};

export type PrintfulCatalogVariantAvailability_Regions = {
  US?: Maybe<Scalars['String']>;
  CA?: Maybe<Scalars['String']>;
  MX?: Maybe<Scalars['String']>;
  EU?: Maybe<Scalars['String']>;
};

export type PrintfulCatalogVariantAvailability_Status = {
  region?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
};

export type PrintfulVariant = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  external_id?: Maybe<Scalars['String']>;
  sync_product_id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  synced?: Maybe<Scalars['Boolean']>;
  variant_id?: Maybe<Scalars['Int']>;
  retail_price?: Maybe<Scalars['Float']>;
  sku?: Maybe<Scalars['String']>;
  currency?: Maybe<Scalars['String']>;
  product?: Maybe<PrintfulVariantProduct>;
  files?: Maybe<Array<Maybe<PrintfulVariantFiles>>>;
  options?: Maybe<Array<Maybe<PrintfulVariantOptions>>>;
  is_ignored?: Maybe<Scalars['Boolean']>;
  slug?: Maybe<Scalars['String']>;
  parentProduct?: Maybe<PrintfulProduct>;
  catalogVariant?: Maybe<PrintfulCatalogVariant>;
  catalogProduct?: Maybe<PrintfulCatalogProduct>;
  variantImage?: Maybe<File>;
};

export type PrintfulVariantProduct = {
  variant_id?: Maybe<Scalars['Int']>;
  product_id?: Maybe<Scalars['Int']>;
  image?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type PrintfulVariantFiles = {
  id?: Maybe<Scalars['Int']>;
  type?: Maybe<Scalars['String']>;
  hash?: Maybe<Scalars['String']>;
  filename?: Maybe<Scalars['String']>;
  mime_type?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Int']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  dpi?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['Int']>;
  thumbnail_url?: Maybe<Scalars['String']>;
  preview_url?: Maybe<Scalars['String']>;
  visible?: Maybe<Scalars['Boolean']>;
};

export type PrintfulVariantOptions = {
  id?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

export type PrintfulCatalogProduct = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  type?: Maybe<Scalars['String']>;
  type_name?: Maybe<Scalars['String']>;
  brand?: Maybe<Scalars['String']>;
  model?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  variant_count?: Maybe<Scalars['Int']>;
  currency?: Maybe<Scalars['String']>;
  files?: Maybe<Array<Maybe<PrintfulCatalogProductFiles>>>;
  options?: Maybe<Array<Maybe<PrintfulCatalogProductOptions>>>;
  dimensions?: Maybe<PrintfulCatalogProductDimensions>;
  is_discontinued?: Maybe<Scalars['Boolean']>;
  description?: Maybe<Scalars['String']>;
  productImage?: Maybe<File>;
};

export type PrintfulCatalogProductFiles = {
  id?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  additional_price?: Maybe<Scalars['String']>;
};

export type PrintfulCatalogProductOptions = {
  id?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  values?: Maybe<PrintfulCatalogProductOptionsValues>;
  additional_price_breakdown?: Maybe<PrintfulCatalogProductOptionsAdditional_Price_Breakdown>;
};

export type PrintfulCatalogProductOptionsValues = {
  _FFFFFF?: Maybe<Scalars['String']>;
  _000000?: Maybe<Scalars['String']>;
  _96A1A8?: Maybe<Scalars['String']>;
  _A67843?: Maybe<Scalars['String']>;
  _FFCC00?: Maybe<Scalars['String']>;
  _E25C27?: Maybe<Scalars['String']>;
  _CC3366?: Maybe<Scalars['String']>;
  _CC3333?: Maybe<Scalars['String']>;
  _660000?: Maybe<Scalars['String']>;
  _333366?: Maybe<Scalars['String']>;
  _005397?: Maybe<Scalars['String']>;
  _3399FF?: Maybe<Scalars['String']>;
  _6B5294?: Maybe<Scalars['String']>;
  _01784E?: Maybe<Scalars['String']>;
  _7BA35A?: Maybe<Scalars['String']>;
  flat?: Maybe<Scalars['String']>;
  _3d?: Maybe<Scalars['String']>;
  both?: Maybe<Scalars['String']>;
  white?: Maybe<Scalars['String']>;
  black?: Maybe<Scalars['String']>;
};

export type PrintfulCatalogProductOptionsAdditional_Price_Breakdown = {
  flat?: Maybe<Scalars['String']>;
  _3d?: Maybe<Scalars['String']>;
  both?: Maybe<Scalars['String']>;
};

export type PrintfulCatalogProductDimensions = {
  front?: Maybe<Scalars['String']>;
};

export type SiteBuildMetadata = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  buildTime?: Maybe<Scalars['Date']>;
};


export type SiteBuildMetadataBuildTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type SitePlugin = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  resolve?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
  pluginOptions?: Maybe<SitePluginPluginOptions>;
  nodeAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  browserAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  ssrAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  pluginFilepath?: Maybe<Scalars['String']>;
  packageJson?: Maybe<SitePluginPackageJson>;
};

export type SitePluginPluginOptions = {
  output?: Maybe<Scalars['String']>;
  createLinkInHead?: Maybe<Scalars['Boolean']>;
  entryLimit?: Maybe<Scalars['Int']>;
  query?: Maybe<Scalars['String']>;
  icon?: Maybe<Scalars['String']>;
  legacy?: Maybe<Scalars['Boolean']>;
  theme_color_in_head?: Maybe<Scalars['Boolean']>;
  cache_busting_mode?: Maybe<Scalars['String']>;
  crossOrigin?: Maybe<Scalars['String']>;
  include_favicon?: Maybe<Scalars['Boolean']>;
  cacheDigest?: Maybe<Scalars['String']>;
  base64Width?: Maybe<Scalars['Int']>;
  stripMetadata?: Maybe<Scalars['Boolean']>;
  defaultQuality?: Maybe<Scalars['Int']>;
  failOnError?: Maybe<Scalars['Boolean']>;
  maxWidth?: Maybe<Scalars['Int']>;
  linkImagesToOriginal?: Maybe<Scalars['Boolean']>;
  showCaptions?: Maybe<Scalars['Boolean']>;
  markdownCaptions?: Maybe<Scalars['Boolean']>;
  sizeByPixelDensity?: Maybe<Scalars['Boolean']>;
  backgroundColor?: Maybe<Scalars['String']>;
  quality?: Maybe<Scalars['Int']>;
  withWebp?: Maybe<Scalars['Boolean']>;
  tracedSVG?: Maybe<Scalars['Boolean']>;
  loading?: Maybe<Scalars['String']>;
  disableBgImageOnAlpha?: Maybe<Scalars['Boolean']>;
  disableBgImage?: Maybe<Scalars['Boolean']>;
  defaultLayouts?: Maybe<SitePluginPluginOptionsDefaultLayouts>;
  gatsbyRemarkPlugins?: Maybe<Array<Maybe<SitePluginPluginOptionsGatsbyRemarkPlugins>>>;
  extensions?: Maybe<Array<Maybe<Scalars['String']>>>;
  lessBabel?: Maybe<Scalars['Boolean']>;
  mediaTypes?: Maybe<Array<Maybe<Scalars['String']>>>;
  root?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  path?: Maybe<Scalars['String']>;
  apiKey?: Maybe<Scalars['String']>;
  paginationLimit?: Maybe<Scalars['Int']>;
  version?: Maybe<Scalars['String']>;
  publicApiKey?: Maybe<Scalars['String']>;
  openCartOnAdd?: Maybe<Scalars['Boolean']>;
  useSideCart?: Maybe<Scalars['Boolean']>;
  styles?: Maybe<Scalars['Boolean']>;
  queries?: Maybe<SitePluginPluginOptionsQueries>;
  pathCheck?: Maybe<Scalars['Boolean']>;
  allExtensions?: Maybe<Scalars['Boolean']>;
  isTSX?: Maybe<Scalars['Boolean']>;
  jsxPragma?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsDefaultLayouts = {
  blog?: Maybe<Scalars['String']>;
  default?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsGatsbyRemarkPlugins = {
  resolve?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsQueries = {
  sm?: Maybe<Scalars['String']>;
  md?: Maybe<Scalars['String']>;
  lg?: Maybe<Scalars['String']>;
  xl?: Maybe<Scalars['String']>;
  _2xl?: Maybe<Scalars['String']>;
};

export type SitePluginPackageJson = {
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
  main?: Maybe<Scalars['String']>;
  author?: Maybe<Scalars['String']>;
  license?: Maybe<Scalars['String']>;
  dependencies?: Maybe<Array<Maybe<SitePluginPackageJsonDependencies>>>;
  devDependencies?: Maybe<Array<Maybe<SitePluginPackageJsonDevDependencies>>>;
  peerDependencies?: Maybe<Array<Maybe<SitePluginPackageJsonPeerDependencies>>>;
  keywords?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePluginPackageJsonDependencies = {
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
};

export type SitePluginPackageJsonDevDependencies = {
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
};

export type SitePluginPackageJsonPeerDependencies = {
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
};

export type Query = {
  file?: Maybe<File>;
  allFile: FileConnection;
  directory?: Maybe<Directory>;
  allDirectory: DirectoryConnection;
  site?: Maybe<Site>;
  allSite: SiteConnection;
  siteFunction?: Maybe<SiteFunction>;
  allSiteFunction: SiteFunctionConnection;
  sitePage?: Maybe<SitePage>;
  allSitePage: SitePageConnection;
  imageSharp?: Maybe<ImageSharp>;
  allImageSharp: ImageSharpConnection;
  mdx?: Maybe<Mdx>;
  allMdx: MdxConnection;
  printfulStore?: Maybe<PrintfulStore>;
  allPrintfulStore: PrintfulStoreConnection;
  printfulCountry?: Maybe<PrintfulCountry>;
  allPrintfulCountry: PrintfulCountryConnection;
  printfulProduct?: Maybe<PrintfulProduct>;
  allPrintfulProduct: PrintfulProductConnection;
  printfulCatalogVariant?: Maybe<PrintfulCatalogVariant>;
  allPrintfulCatalogVariant: PrintfulCatalogVariantConnection;
  printfulVariant?: Maybe<PrintfulVariant>;
  allPrintfulVariant: PrintfulVariantConnection;
  printfulCatalogProduct?: Maybe<PrintfulCatalogProduct>;
  allPrintfulCatalogProduct: PrintfulCatalogProductConnection;
  siteBuildMetadata?: Maybe<SiteBuildMetadata>;
  allSiteBuildMetadata: SiteBuildMetadataConnection;
  sitePlugin?: Maybe<SitePlugin>;
  allSitePlugin: SitePluginConnection;
};


export type QueryFileArgs = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>;
  absolutePath?: Maybe<StringQueryOperatorInput>;
  relativePath?: Maybe<StringQueryOperatorInput>;
  extension?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<IntQueryOperatorInput>;
  prettySize?: Maybe<StringQueryOperatorInput>;
  modifiedTime?: Maybe<DateQueryOperatorInput>;
  accessTime?: Maybe<DateQueryOperatorInput>;
  changeTime?: Maybe<DateQueryOperatorInput>;
  birthTime?: Maybe<DateQueryOperatorInput>;
  root?: Maybe<StringQueryOperatorInput>;
  dir?: Maybe<StringQueryOperatorInput>;
  base?: Maybe<StringQueryOperatorInput>;
  ext?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  relativeDirectory?: Maybe<StringQueryOperatorInput>;
  dev?: Maybe<IntQueryOperatorInput>;
  mode?: Maybe<IntQueryOperatorInput>;
  nlink?: Maybe<IntQueryOperatorInput>;
  uid?: Maybe<IntQueryOperatorInput>;
  gid?: Maybe<IntQueryOperatorInput>;
  rdev?: Maybe<IntQueryOperatorInput>;
  ino?: Maybe<FloatQueryOperatorInput>;
  atimeMs?: Maybe<FloatQueryOperatorInput>;
  mtimeMs?: Maybe<FloatQueryOperatorInput>;
  ctimeMs?: Maybe<FloatQueryOperatorInput>;
  atime?: Maybe<DateQueryOperatorInput>;
  mtime?: Maybe<DateQueryOperatorInput>;
  ctime?: Maybe<DateQueryOperatorInput>;
  birthtime?: Maybe<DateQueryOperatorInput>;
  birthtimeMs?: Maybe<FloatQueryOperatorInput>;
  blksize?: Maybe<IntQueryOperatorInput>;
  blocks?: Maybe<IntQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
  publicURL?: Maybe<StringQueryOperatorInput>;
  childrenImageSharp?: Maybe<ImageSharpFilterListInput>;
  childImageSharp?: Maybe<ImageSharpFilterInput>;
  childrenMdx?: Maybe<MdxFilterListInput>;
  childMdx?: Maybe<MdxFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllFileArgs = {
  filter?: Maybe<FileFilterInput>;
  sort?: Maybe<FileSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryDirectoryArgs = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>;
  absolutePath?: Maybe<StringQueryOperatorInput>;
  relativePath?: Maybe<StringQueryOperatorInput>;
  extension?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<IntQueryOperatorInput>;
  prettySize?: Maybe<StringQueryOperatorInput>;
  modifiedTime?: Maybe<DateQueryOperatorInput>;
  accessTime?: Maybe<DateQueryOperatorInput>;
  changeTime?: Maybe<DateQueryOperatorInput>;
  birthTime?: Maybe<DateQueryOperatorInput>;
  root?: Maybe<StringQueryOperatorInput>;
  dir?: Maybe<StringQueryOperatorInput>;
  base?: Maybe<StringQueryOperatorInput>;
  ext?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  relativeDirectory?: Maybe<StringQueryOperatorInput>;
  dev?: Maybe<IntQueryOperatorInput>;
  mode?: Maybe<IntQueryOperatorInput>;
  nlink?: Maybe<IntQueryOperatorInput>;
  uid?: Maybe<IntQueryOperatorInput>;
  gid?: Maybe<IntQueryOperatorInput>;
  rdev?: Maybe<IntQueryOperatorInput>;
  ino?: Maybe<FloatQueryOperatorInput>;
  atimeMs?: Maybe<FloatQueryOperatorInput>;
  mtimeMs?: Maybe<FloatQueryOperatorInput>;
  ctimeMs?: Maybe<FloatQueryOperatorInput>;
  atime?: Maybe<DateQueryOperatorInput>;
  mtime?: Maybe<DateQueryOperatorInput>;
  ctime?: Maybe<DateQueryOperatorInput>;
  birthtime?: Maybe<DateQueryOperatorInput>;
  birthtimeMs?: Maybe<FloatQueryOperatorInput>;
  blksize?: Maybe<IntQueryOperatorInput>;
  blocks?: Maybe<IntQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllDirectoryArgs = {
  filter?: Maybe<DirectoryFilterInput>;
  sort?: Maybe<DirectorySortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuerySiteArgs = {
  buildTime?: Maybe<DateQueryOperatorInput>;
  siteMetadata?: Maybe<SiteSiteMetadataFilterInput>;
  polyfill?: Maybe<BooleanQueryOperatorInput>;
  pathPrefix?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllSiteArgs = {
  filter?: Maybe<SiteFilterInput>;
  sort?: Maybe<SiteSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuerySiteFunctionArgs = {
  apiRoute?: Maybe<StringQueryOperatorInput>;
  originalFilePath?: Maybe<StringQueryOperatorInput>;
  relativeCompiledFilePath?: Maybe<StringQueryOperatorInput>;
  absoluteCompiledFilePath?: Maybe<StringQueryOperatorInput>;
  matchPath?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllSiteFunctionArgs = {
  filter?: Maybe<SiteFunctionFilterInput>;
  sort?: Maybe<SiteFunctionSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuerySitePageArgs = {
  path?: Maybe<StringQueryOperatorInput>;
  component?: Maybe<StringQueryOperatorInput>;
  internalComponentName?: Maybe<StringQueryOperatorInput>;
  componentChunkName?: Maybe<StringQueryOperatorInput>;
  matchPath?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  isCreatedByStatefulCreatePages?: Maybe<BooleanQueryOperatorInput>;
  context?: Maybe<SitePageContextFilterInput>;
  pluginCreator?: Maybe<SitePluginFilterInput>;
  pluginCreatorId?: Maybe<StringQueryOperatorInput>;
  componentPath?: Maybe<StringQueryOperatorInput>;
};


export type QueryAllSitePageArgs = {
  filter?: Maybe<SitePageFilterInput>;
  sort?: Maybe<SitePageSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryImageSharpArgs = {
  fixed?: Maybe<ImageSharpFixedFilterInput>;
  fluid?: Maybe<ImageSharpFluidFilterInput>;
  gatsbyImageData?: Maybe<JsonQueryOperatorInput>;
  original?: Maybe<ImageSharpOriginalFilterInput>;
  resize?: Maybe<ImageSharpResizeFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllImageSharpArgs = {
  filter?: Maybe<ImageSharpFilterInput>;
  sort?: Maybe<ImageSharpSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryMdxArgs = {
  rawBody?: Maybe<StringQueryOperatorInput>;
  fileAbsolutePath?: Maybe<StringQueryOperatorInput>;
  frontmatter?: Maybe<MdxFrontmatterFilterInput>;
  slug?: Maybe<StringQueryOperatorInput>;
  body?: Maybe<StringQueryOperatorInput>;
  excerpt?: Maybe<StringQueryOperatorInput>;
  headings?: Maybe<MdxHeadingMdxFilterListInput>;
  html?: Maybe<StringQueryOperatorInput>;
  mdxAST?: Maybe<JsonQueryOperatorInput>;
  tableOfContents?: Maybe<JsonQueryOperatorInput>;
  timeToRead?: Maybe<IntQueryOperatorInput>;
  wordCount?: Maybe<MdxWordCountFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllMdxArgs = {
  filter?: Maybe<MdxFilterInput>;
  sort?: Maybe<MdxSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryPrintfulStoreArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  name?: Maybe<StringQueryOperatorInput>;
  type?: Maybe<StringQueryOperatorInput>;
  website?: Maybe<StringQueryOperatorInput>;
  currency?: Maybe<StringQueryOperatorInput>;
  created?: Maybe<IntQueryOperatorInput>;
};


export type QueryAllPrintfulStoreArgs = {
  filter?: Maybe<PrintfulStoreFilterInput>;
  sort?: Maybe<PrintfulStoreSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryPrintfulCountryArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  name?: Maybe<StringQueryOperatorInput>;
  code?: Maybe<StringQueryOperatorInput>;
  states?: Maybe<PrintfulCountryStatesFilterListInput>;
};


export type QueryAllPrintfulCountryArgs = {
  filter?: Maybe<PrintfulCountryFilterInput>;
  sort?: Maybe<PrintfulCountrySortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryPrintfulProductArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  external_id?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  synced?: Maybe<IntQueryOperatorInput>;
  thumbnail_url?: Maybe<StringQueryOperatorInput>;
  is_ignored?: Maybe<BooleanQueryOperatorInput>;
  slug?: Maybe<StringQueryOperatorInput>;
  variants?: Maybe<PrintfulVariantFilterListInput>;
  productImage?: Maybe<FileFilterInput>;
};


export type QueryAllPrintfulProductArgs = {
  filter?: Maybe<PrintfulProductFilterInput>;
  sort?: Maybe<PrintfulProductSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryPrintfulCatalogVariantArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  name?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<StringQueryOperatorInput>;
  color?: Maybe<StringQueryOperatorInput>;
  color_code?: Maybe<StringQueryOperatorInput>;
  image?: Maybe<StringQueryOperatorInput>;
  price?: Maybe<StringQueryOperatorInput>;
  in_stock?: Maybe<BooleanQueryOperatorInput>;
  availability_regions?: Maybe<PrintfulCatalogVariantAvailability_RegionsFilterInput>;
  availability_status?: Maybe<PrintfulCatalogVariantAvailability_StatusFilterListInput>;
  product_id?: Maybe<StringQueryOperatorInput>;
  retail_price?: Maybe<FloatQueryOperatorInput>;
  variantImage?: Maybe<FileFilterInput>;
};


export type QueryAllPrintfulCatalogVariantArgs = {
  filter?: Maybe<PrintfulCatalogVariantFilterInput>;
  sort?: Maybe<PrintfulCatalogVariantSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryPrintfulVariantArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  external_id?: Maybe<StringQueryOperatorInput>;
  sync_product_id?: Maybe<IntQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  synced?: Maybe<BooleanQueryOperatorInput>;
  variant_id?: Maybe<IntQueryOperatorInput>;
  retail_price?: Maybe<FloatQueryOperatorInput>;
  sku?: Maybe<StringQueryOperatorInput>;
  currency?: Maybe<StringQueryOperatorInput>;
  product?: Maybe<PrintfulVariantProductFilterInput>;
  files?: Maybe<PrintfulVariantFilesFilterListInput>;
  options?: Maybe<PrintfulVariantOptionsFilterListInput>;
  is_ignored?: Maybe<BooleanQueryOperatorInput>;
  slug?: Maybe<StringQueryOperatorInput>;
  parentProduct?: Maybe<PrintfulProductFilterInput>;
  catalogVariant?: Maybe<PrintfulCatalogVariantFilterInput>;
  catalogProduct?: Maybe<PrintfulCatalogProductFilterInput>;
  variantImage?: Maybe<FileFilterInput>;
};


export type QueryAllPrintfulVariantArgs = {
  filter?: Maybe<PrintfulVariantFilterInput>;
  sort?: Maybe<PrintfulVariantSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryPrintfulCatalogProductArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  type?: Maybe<StringQueryOperatorInput>;
  type_name?: Maybe<StringQueryOperatorInput>;
  brand?: Maybe<StringQueryOperatorInput>;
  model?: Maybe<StringQueryOperatorInput>;
  image?: Maybe<StringQueryOperatorInput>;
  variant_count?: Maybe<IntQueryOperatorInput>;
  currency?: Maybe<StringQueryOperatorInput>;
  files?: Maybe<PrintfulCatalogProductFilesFilterListInput>;
  options?: Maybe<PrintfulCatalogProductOptionsFilterListInput>;
  dimensions?: Maybe<PrintfulCatalogProductDimensionsFilterInput>;
  is_discontinued?: Maybe<BooleanQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  productImage?: Maybe<FileFilterInput>;
};


export type QueryAllPrintfulCatalogProductArgs = {
  filter?: Maybe<PrintfulCatalogProductFilterInput>;
  sort?: Maybe<PrintfulCatalogProductSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuerySiteBuildMetadataArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  buildTime?: Maybe<DateQueryOperatorInput>;
};


export type QueryAllSiteBuildMetadataArgs = {
  filter?: Maybe<SiteBuildMetadataFilterInput>;
  sort?: Maybe<SiteBuildMetadataSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuerySitePluginArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  resolve?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
  pluginOptions?: Maybe<SitePluginPluginOptionsFilterInput>;
  nodeAPIs?: Maybe<StringQueryOperatorInput>;
  browserAPIs?: Maybe<StringQueryOperatorInput>;
  ssrAPIs?: Maybe<StringQueryOperatorInput>;
  pluginFilepath?: Maybe<StringQueryOperatorInput>;
  packageJson?: Maybe<SitePluginPackageJsonFilterInput>;
};


export type QueryAllSitePluginArgs = {
  filter?: Maybe<SitePluginFilterInput>;
  sort?: Maybe<SitePluginSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};

export type StringQueryOperatorInput = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
};

export type IntQueryOperatorInput = {
  eq?: Maybe<Scalars['Int']>;
  ne?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Int']>>>;
};

export type DateQueryOperatorInput = {
  eq?: Maybe<Scalars['Date']>;
  ne?: Maybe<Scalars['Date']>;
  gt?: Maybe<Scalars['Date']>;
  gte?: Maybe<Scalars['Date']>;
  lt?: Maybe<Scalars['Date']>;
  lte?: Maybe<Scalars['Date']>;
  in?: Maybe<Array<Maybe<Scalars['Date']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Date']>>>;
};

export type FloatQueryOperatorInput = {
  eq?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export type ImageSharpFilterListInput = {
  elemMatch?: Maybe<ImageSharpFilterInput>;
};

export type ImageSharpFilterInput = {
  fixed?: Maybe<ImageSharpFixedFilterInput>;
  fluid?: Maybe<ImageSharpFluidFilterInput>;
  gatsbyImageData?: Maybe<JsonQueryOperatorInput>;
  original?: Maybe<ImageSharpOriginalFilterInput>;
  resize?: Maybe<ImageSharpResizeFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type ImageSharpFixedFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  width?: Maybe<FloatQueryOperatorInput>;
  height?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  srcSet?: Maybe<StringQueryOperatorInput>;
  srcWebp?: Maybe<StringQueryOperatorInput>;
  srcSetWebp?: Maybe<StringQueryOperatorInput>;
  originalName?: Maybe<StringQueryOperatorInput>;
};

export type ImageSharpFluidFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  srcSet?: Maybe<StringQueryOperatorInput>;
  srcWebp?: Maybe<StringQueryOperatorInput>;
  srcSetWebp?: Maybe<StringQueryOperatorInput>;
  sizes?: Maybe<StringQueryOperatorInput>;
  originalImg?: Maybe<StringQueryOperatorInput>;
  originalName?: Maybe<StringQueryOperatorInput>;
  presentationWidth?: Maybe<IntQueryOperatorInput>;
  presentationHeight?: Maybe<IntQueryOperatorInput>;
};

export type JsonQueryOperatorInput = {
  eq?: Maybe<Scalars['JSON']>;
  ne?: Maybe<Scalars['JSON']>;
  in?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  nin?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  regex?: Maybe<Scalars['JSON']>;
  glob?: Maybe<Scalars['JSON']>;
};

export type ImageSharpOriginalFilterInput = {
  width?: Maybe<FloatQueryOperatorInput>;
  height?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
};

export type ImageSharpResizeFilterInput = {
  src?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  width?: Maybe<IntQueryOperatorInput>;
  height?: Maybe<IntQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  originalName?: Maybe<StringQueryOperatorInput>;
};

export type NodeFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type NodeFilterListInput = {
  elemMatch?: Maybe<NodeFilterInput>;
};

export type InternalFilterInput = {
  content?: Maybe<StringQueryOperatorInput>;
  contentDigest?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  fieldOwners?: Maybe<StringQueryOperatorInput>;
  ignoreType?: Maybe<BooleanQueryOperatorInput>;
  mediaType?: Maybe<StringQueryOperatorInput>;
  owner?: Maybe<StringQueryOperatorInput>;
  type?: Maybe<StringQueryOperatorInput>;
};

export type BooleanQueryOperatorInput = {
  eq?: Maybe<Scalars['Boolean']>;
  ne?: Maybe<Scalars['Boolean']>;
  in?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
};

export type MdxFilterListInput = {
  elemMatch?: Maybe<MdxFilterInput>;
};

export type MdxFilterInput = {
  rawBody?: Maybe<StringQueryOperatorInput>;
  fileAbsolutePath?: Maybe<StringQueryOperatorInput>;
  frontmatter?: Maybe<MdxFrontmatterFilterInput>;
  slug?: Maybe<StringQueryOperatorInput>;
  body?: Maybe<StringQueryOperatorInput>;
  excerpt?: Maybe<StringQueryOperatorInput>;
  headings?: Maybe<MdxHeadingMdxFilterListInput>;
  html?: Maybe<StringQueryOperatorInput>;
  mdxAST?: Maybe<JsonQueryOperatorInput>;
  tableOfContents?: Maybe<JsonQueryOperatorInput>;
  timeToRead?: Maybe<IntQueryOperatorInput>;
  wordCount?: Maybe<MdxWordCountFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type MdxFrontmatterFilterInput = {
  title?: Maybe<StringQueryOperatorInput>;
  date?: Maybe<DateQueryOperatorInput>;
  published?: Maybe<BooleanQueryOperatorInput>;
  featuredImage?: Maybe<FileFilterInput>;
  customer?: Maybe<StringQueryOperatorInput>;
  index?: Maybe<IntQueryOperatorInput>;
};

export type FileFilterInput = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>;
  absolutePath?: Maybe<StringQueryOperatorInput>;
  relativePath?: Maybe<StringQueryOperatorInput>;
  extension?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<IntQueryOperatorInput>;
  prettySize?: Maybe<StringQueryOperatorInput>;
  modifiedTime?: Maybe<DateQueryOperatorInput>;
  accessTime?: Maybe<DateQueryOperatorInput>;
  changeTime?: Maybe<DateQueryOperatorInput>;
  birthTime?: Maybe<DateQueryOperatorInput>;
  root?: Maybe<StringQueryOperatorInput>;
  dir?: Maybe<StringQueryOperatorInput>;
  base?: Maybe<StringQueryOperatorInput>;
  ext?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  relativeDirectory?: Maybe<StringQueryOperatorInput>;
  dev?: Maybe<IntQueryOperatorInput>;
  mode?: Maybe<IntQueryOperatorInput>;
  nlink?: Maybe<IntQueryOperatorInput>;
  uid?: Maybe<IntQueryOperatorInput>;
  gid?: Maybe<IntQueryOperatorInput>;
  rdev?: Maybe<IntQueryOperatorInput>;
  ino?: Maybe<FloatQueryOperatorInput>;
  atimeMs?: Maybe<FloatQueryOperatorInput>;
  mtimeMs?: Maybe<FloatQueryOperatorInput>;
  ctimeMs?: Maybe<FloatQueryOperatorInput>;
  atime?: Maybe<DateQueryOperatorInput>;
  mtime?: Maybe<DateQueryOperatorInput>;
  ctime?: Maybe<DateQueryOperatorInput>;
  birthtime?: Maybe<DateQueryOperatorInput>;
  birthtimeMs?: Maybe<FloatQueryOperatorInput>;
  blksize?: Maybe<IntQueryOperatorInput>;
  blocks?: Maybe<IntQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
  publicURL?: Maybe<StringQueryOperatorInput>;
  childrenImageSharp?: Maybe<ImageSharpFilterListInput>;
  childImageSharp?: Maybe<ImageSharpFilterInput>;
  childrenMdx?: Maybe<MdxFilterListInput>;
  childMdx?: Maybe<MdxFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type MdxHeadingMdxFilterListInput = {
  elemMatch?: Maybe<MdxHeadingMdxFilterInput>;
};

export type MdxHeadingMdxFilterInput = {
  value?: Maybe<StringQueryOperatorInput>;
  depth?: Maybe<IntQueryOperatorInput>;
};

export type MdxWordCountFilterInput = {
  paragraphs?: Maybe<IntQueryOperatorInput>;
  sentences?: Maybe<IntQueryOperatorInput>;
  words?: Maybe<IntQueryOperatorInput>;
};

export type FileConnection = {
  totalCount: Scalars['Int'];
  edges: Array<FileEdge>;
  nodes: Array<File>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<FileGroupConnection>;
};


export type FileConnectionDistinctArgs = {
  field: FileFieldsEnum;
};


export type FileConnectionMaxArgs = {
  field: FileFieldsEnum;
};


export type FileConnectionMinArgs = {
  field: FileFieldsEnum;
};


export type FileConnectionSumArgs = {
  field: FileFieldsEnum;
};


export type FileConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: FileFieldsEnum;
};

export type FileEdge = {
  next?: Maybe<File>;
  node: File;
  previous?: Maybe<File>;
};

export type PageInfo = {
  currentPage: Scalars['Int'];
  hasPreviousPage: Scalars['Boolean'];
  hasNextPage: Scalars['Boolean'];
  itemCount: Scalars['Int'];
  pageCount: Scalars['Int'];
  perPage?: Maybe<Scalars['Int']>;
  totalCount: Scalars['Int'];
};

export type FileFieldsEnum =
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
  | 'childrenImageSharp___fixed___base64'
  | 'childrenImageSharp___fixed___tracedSVG'
  | 'childrenImageSharp___fixed___aspectRatio'
  | 'childrenImageSharp___fixed___width'
  | 'childrenImageSharp___fixed___height'
  | 'childrenImageSharp___fixed___src'
  | 'childrenImageSharp___fixed___srcSet'
  | 'childrenImageSharp___fixed___srcWebp'
  | 'childrenImageSharp___fixed___srcSetWebp'
  | 'childrenImageSharp___fixed___originalName'
  | 'childrenImageSharp___fluid___base64'
  | 'childrenImageSharp___fluid___tracedSVG'
  | 'childrenImageSharp___fluid___aspectRatio'
  | 'childrenImageSharp___fluid___src'
  | 'childrenImageSharp___fluid___srcSet'
  | 'childrenImageSharp___fluid___srcWebp'
  | 'childrenImageSharp___fluid___srcSetWebp'
  | 'childrenImageSharp___fluid___sizes'
  | 'childrenImageSharp___fluid___originalImg'
  | 'childrenImageSharp___fluid___originalName'
  | 'childrenImageSharp___fluid___presentationWidth'
  | 'childrenImageSharp___fluid___presentationHeight'
  | 'childrenImageSharp___gatsbyImageData'
  | 'childrenImageSharp___original___width'
  | 'childrenImageSharp___original___height'
  | 'childrenImageSharp___original___src'
  | 'childrenImageSharp___resize___src'
  | 'childrenImageSharp___resize___tracedSVG'
  | 'childrenImageSharp___resize___width'
  | 'childrenImageSharp___resize___height'
  | 'childrenImageSharp___resize___aspectRatio'
  | 'childrenImageSharp___resize___originalName'
  | 'childrenImageSharp___id'
  | 'childrenImageSharp___parent___id'
  | 'childrenImageSharp___parent___parent___id'
  | 'childrenImageSharp___parent___parent___children'
  | 'childrenImageSharp___parent___children'
  | 'childrenImageSharp___parent___children___id'
  | 'childrenImageSharp___parent___children___children'
  | 'childrenImageSharp___parent___internal___content'
  | 'childrenImageSharp___parent___internal___contentDigest'
  | 'childrenImageSharp___parent___internal___description'
  | 'childrenImageSharp___parent___internal___fieldOwners'
  | 'childrenImageSharp___parent___internal___ignoreType'
  | 'childrenImageSharp___parent___internal___mediaType'
  | 'childrenImageSharp___parent___internal___owner'
  | 'childrenImageSharp___parent___internal___type'
  | 'childrenImageSharp___children'
  | 'childrenImageSharp___children___id'
  | 'childrenImageSharp___children___parent___id'
  | 'childrenImageSharp___children___parent___children'
  | 'childrenImageSharp___children___children'
  | 'childrenImageSharp___children___children___id'
  | 'childrenImageSharp___children___children___children'
  | 'childrenImageSharp___children___internal___content'
  | 'childrenImageSharp___children___internal___contentDigest'
  | 'childrenImageSharp___children___internal___description'
  | 'childrenImageSharp___children___internal___fieldOwners'
  | 'childrenImageSharp___children___internal___ignoreType'
  | 'childrenImageSharp___children___internal___mediaType'
  | 'childrenImageSharp___children___internal___owner'
  | 'childrenImageSharp___children___internal___type'
  | 'childrenImageSharp___internal___content'
  | 'childrenImageSharp___internal___contentDigest'
  | 'childrenImageSharp___internal___description'
  | 'childrenImageSharp___internal___fieldOwners'
  | 'childrenImageSharp___internal___ignoreType'
  | 'childrenImageSharp___internal___mediaType'
  | 'childrenImageSharp___internal___owner'
  | 'childrenImageSharp___internal___type'
  | 'childImageSharp___fixed___base64'
  | 'childImageSharp___fixed___tracedSVG'
  | 'childImageSharp___fixed___aspectRatio'
  | 'childImageSharp___fixed___width'
  | 'childImageSharp___fixed___height'
  | 'childImageSharp___fixed___src'
  | 'childImageSharp___fixed___srcSet'
  | 'childImageSharp___fixed___srcWebp'
  | 'childImageSharp___fixed___srcSetWebp'
  | 'childImageSharp___fixed___originalName'
  | 'childImageSharp___fluid___base64'
  | 'childImageSharp___fluid___tracedSVG'
  | 'childImageSharp___fluid___aspectRatio'
  | 'childImageSharp___fluid___src'
  | 'childImageSharp___fluid___srcSet'
  | 'childImageSharp___fluid___srcWebp'
  | 'childImageSharp___fluid___srcSetWebp'
  | 'childImageSharp___fluid___sizes'
  | 'childImageSharp___fluid___originalImg'
  | 'childImageSharp___fluid___originalName'
  | 'childImageSharp___fluid___presentationWidth'
  | 'childImageSharp___fluid___presentationHeight'
  | 'childImageSharp___gatsbyImageData'
  | 'childImageSharp___original___width'
  | 'childImageSharp___original___height'
  | 'childImageSharp___original___src'
  | 'childImageSharp___resize___src'
  | 'childImageSharp___resize___tracedSVG'
  | 'childImageSharp___resize___width'
  | 'childImageSharp___resize___height'
  | 'childImageSharp___resize___aspectRatio'
  | 'childImageSharp___resize___originalName'
  | 'childImageSharp___id'
  | 'childImageSharp___parent___id'
  | 'childImageSharp___parent___parent___id'
  | 'childImageSharp___parent___parent___children'
  | 'childImageSharp___parent___children'
  | 'childImageSharp___parent___children___id'
  | 'childImageSharp___parent___children___children'
  | 'childImageSharp___parent___internal___content'
  | 'childImageSharp___parent___internal___contentDigest'
  | 'childImageSharp___parent___internal___description'
  | 'childImageSharp___parent___internal___fieldOwners'
  | 'childImageSharp___parent___internal___ignoreType'
  | 'childImageSharp___parent___internal___mediaType'
  | 'childImageSharp___parent___internal___owner'
  | 'childImageSharp___parent___internal___type'
  | 'childImageSharp___children'
  | 'childImageSharp___children___id'
  | 'childImageSharp___children___parent___id'
  | 'childImageSharp___children___parent___children'
  | 'childImageSharp___children___children'
  | 'childImageSharp___children___children___id'
  | 'childImageSharp___children___children___children'
  | 'childImageSharp___children___internal___content'
  | 'childImageSharp___children___internal___contentDigest'
  | 'childImageSharp___children___internal___description'
  | 'childImageSharp___children___internal___fieldOwners'
  | 'childImageSharp___children___internal___ignoreType'
  | 'childImageSharp___children___internal___mediaType'
  | 'childImageSharp___children___internal___owner'
  | 'childImageSharp___children___internal___type'
  | 'childImageSharp___internal___content'
  | 'childImageSharp___internal___contentDigest'
  | 'childImageSharp___internal___description'
  | 'childImageSharp___internal___fieldOwners'
  | 'childImageSharp___internal___ignoreType'
  | 'childImageSharp___internal___mediaType'
  | 'childImageSharp___internal___owner'
  | 'childImageSharp___internal___type'
  | 'childrenMdx'
  | 'childrenMdx___rawBody'
  | 'childrenMdx___fileAbsolutePath'
  | 'childrenMdx___frontmatter___title'
  | 'childrenMdx___frontmatter___date'
  | 'childrenMdx___frontmatter___published'
  | 'childrenMdx___frontmatter___featuredImage___sourceInstanceName'
  | 'childrenMdx___frontmatter___featuredImage___absolutePath'
  | 'childrenMdx___frontmatter___featuredImage___relativePath'
  | 'childrenMdx___frontmatter___featuredImage___extension'
  | 'childrenMdx___frontmatter___featuredImage___size'
  | 'childrenMdx___frontmatter___featuredImage___prettySize'
  | 'childrenMdx___frontmatter___featuredImage___modifiedTime'
  | 'childrenMdx___frontmatter___featuredImage___accessTime'
  | 'childrenMdx___frontmatter___featuredImage___changeTime'
  | 'childrenMdx___frontmatter___featuredImage___birthTime'
  | 'childrenMdx___frontmatter___featuredImage___root'
  | 'childrenMdx___frontmatter___featuredImage___dir'
  | 'childrenMdx___frontmatter___featuredImage___base'
  | 'childrenMdx___frontmatter___featuredImage___ext'
  | 'childrenMdx___frontmatter___featuredImage___name'
  | 'childrenMdx___frontmatter___featuredImage___relativeDirectory'
  | 'childrenMdx___frontmatter___featuredImage___dev'
  | 'childrenMdx___frontmatter___featuredImage___mode'
  | 'childrenMdx___frontmatter___featuredImage___nlink'
  | 'childrenMdx___frontmatter___featuredImage___uid'
  | 'childrenMdx___frontmatter___featuredImage___gid'
  | 'childrenMdx___frontmatter___featuredImage___rdev'
  | 'childrenMdx___frontmatter___featuredImage___ino'
  | 'childrenMdx___frontmatter___featuredImage___atimeMs'
  | 'childrenMdx___frontmatter___featuredImage___mtimeMs'
  | 'childrenMdx___frontmatter___featuredImage___ctimeMs'
  | 'childrenMdx___frontmatter___featuredImage___atime'
  | 'childrenMdx___frontmatter___featuredImage___mtime'
  | 'childrenMdx___frontmatter___featuredImage___ctime'
  | 'childrenMdx___frontmatter___featuredImage___birthtime'
  | 'childrenMdx___frontmatter___featuredImage___birthtimeMs'
  | 'childrenMdx___frontmatter___featuredImage___blksize'
  | 'childrenMdx___frontmatter___featuredImage___blocks'
  | 'childrenMdx___frontmatter___featuredImage___url'
  | 'childrenMdx___frontmatter___featuredImage___publicURL'
  | 'childrenMdx___frontmatter___featuredImage___childrenImageSharp'
  | 'childrenMdx___frontmatter___featuredImage___childrenMdx'
  | 'childrenMdx___frontmatter___featuredImage___id'
  | 'childrenMdx___frontmatter___featuredImage___children'
  | 'childrenMdx___frontmatter___customer'
  | 'childrenMdx___frontmatter___index'
  | 'childrenMdx___slug'
  | 'childrenMdx___body'
  | 'childrenMdx___excerpt'
  | 'childrenMdx___headings'
  | 'childrenMdx___headings___value'
  | 'childrenMdx___headings___depth'
  | 'childrenMdx___html'
  | 'childrenMdx___mdxAST'
  | 'childrenMdx___tableOfContents'
  | 'childrenMdx___timeToRead'
  | 'childrenMdx___wordCount___paragraphs'
  | 'childrenMdx___wordCount___sentences'
  | 'childrenMdx___wordCount___words'
  | 'childrenMdx___id'
  | 'childrenMdx___parent___id'
  | 'childrenMdx___parent___parent___id'
  | 'childrenMdx___parent___parent___children'
  | 'childrenMdx___parent___children'
  | 'childrenMdx___parent___children___id'
  | 'childrenMdx___parent___children___children'
  | 'childrenMdx___parent___internal___content'
  | 'childrenMdx___parent___internal___contentDigest'
  | 'childrenMdx___parent___internal___description'
  | 'childrenMdx___parent___internal___fieldOwners'
  | 'childrenMdx___parent___internal___ignoreType'
  | 'childrenMdx___parent___internal___mediaType'
  | 'childrenMdx___parent___internal___owner'
  | 'childrenMdx___parent___internal___type'
  | 'childrenMdx___children'
  | 'childrenMdx___children___id'
  | 'childrenMdx___children___parent___id'
  | 'childrenMdx___children___parent___children'
  | 'childrenMdx___children___children'
  | 'childrenMdx___children___children___id'
  | 'childrenMdx___children___children___children'
  | 'childrenMdx___children___internal___content'
  | 'childrenMdx___children___internal___contentDigest'
  | 'childrenMdx___children___internal___description'
  | 'childrenMdx___children___internal___fieldOwners'
  | 'childrenMdx___children___internal___ignoreType'
  | 'childrenMdx___children___internal___mediaType'
  | 'childrenMdx___children___internal___owner'
  | 'childrenMdx___children___internal___type'
  | 'childrenMdx___internal___content'
  | 'childrenMdx___internal___contentDigest'
  | 'childrenMdx___internal___description'
  | 'childrenMdx___internal___fieldOwners'
  | 'childrenMdx___internal___ignoreType'
  | 'childrenMdx___internal___mediaType'
  | 'childrenMdx___internal___owner'
  | 'childrenMdx___internal___type'
  | 'childMdx___rawBody'
  | 'childMdx___fileAbsolutePath'
  | 'childMdx___frontmatter___title'
  | 'childMdx___frontmatter___date'
  | 'childMdx___frontmatter___published'
  | 'childMdx___frontmatter___featuredImage___sourceInstanceName'
  | 'childMdx___frontmatter___featuredImage___absolutePath'
  | 'childMdx___frontmatter___featuredImage___relativePath'
  | 'childMdx___frontmatter___featuredImage___extension'
  | 'childMdx___frontmatter___featuredImage___size'
  | 'childMdx___frontmatter___featuredImage___prettySize'
  | 'childMdx___frontmatter___featuredImage___modifiedTime'
  | 'childMdx___frontmatter___featuredImage___accessTime'
  | 'childMdx___frontmatter___featuredImage___changeTime'
  | 'childMdx___frontmatter___featuredImage___birthTime'
  | 'childMdx___frontmatter___featuredImage___root'
  | 'childMdx___frontmatter___featuredImage___dir'
  | 'childMdx___frontmatter___featuredImage___base'
  | 'childMdx___frontmatter___featuredImage___ext'
  | 'childMdx___frontmatter___featuredImage___name'
  | 'childMdx___frontmatter___featuredImage___relativeDirectory'
  | 'childMdx___frontmatter___featuredImage___dev'
  | 'childMdx___frontmatter___featuredImage___mode'
  | 'childMdx___frontmatter___featuredImage___nlink'
  | 'childMdx___frontmatter___featuredImage___uid'
  | 'childMdx___frontmatter___featuredImage___gid'
  | 'childMdx___frontmatter___featuredImage___rdev'
  | 'childMdx___frontmatter___featuredImage___ino'
  | 'childMdx___frontmatter___featuredImage___atimeMs'
  | 'childMdx___frontmatter___featuredImage___mtimeMs'
  | 'childMdx___frontmatter___featuredImage___ctimeMs'
  | 'childMdx___frontmatter___featuredImage___atime'
  | 'childMdx___frontmatter___featuredImage___mtime'
  | 'childMdx___frontmatter___featuredImage___ctime'
  | 'childMdx___frontmatter___featuredImage___birthtime'
  | 'childMdx___frontmatter___featuredImage___birthtimeMs'
  | 'childMdx___frontmatter___featuredImage___blksize'
  | 'childMdx___frontmatter___featuredImage___blocks'
  | 'childMdx___frontmatter___featuredImage___url'
  | 'childMdx___frontmatter___featuredImage___publicURL'
  | 'childMdx___frontmatter___featuredImage___childrenImageSharp'
  | 'childMdx___frontmatter___featuredImage___childrenMdx'
  | 'childMdx___frontmatter___featuredImage___id'
  | 'childMdx___frontmatter___featuredImage___children'
  | 'childMdx___frontmatter___customer'
  | 'childMdx___frontmatter___index'
  | 'childMdx___slug'
  | 'childMdx___body'
  | 'childMdx___excerpt'
  | 'childMdx___headings'
  | 'childMdx___headings___value'
  | 'childMdx___headings___depth'
  | 'childMdx___html'
  | 'childMdx___mdxAST'
  | 'childMdx___tableOfContents'
  | 'childMdx___timeToRead'
  | 'childMdx___wordCount___paragraphs'
  | 'childMdx___wordCount___sentences'
  | 'childMdx___wordCount___words'
  | 'childMdx___id'
  | 'childMdx___parent___id'
  | 'childMdx___parent___parent___id'
  | 'childMdx___parent___parent___children'
  | 'childMdx___parent___children'
  | 'childMdx___parent___children___id'
  | 'childMdx___parent___children___children'
  | 'childMdx___parent___internal___content'
  | 'childMdx___parent___internal___contentDigest'
  | 'childMdx___parent___internal___description'
  | 'childMdx___parent___internal___fieldOwners'
  | 'childMdx___parent___internal___ignoreType'
  | 'childMdx___parent___internal___mediaType'
  | 'childMdx___parent___internal___owner'
  | 'childMdx___parent___internal___type'
  | 'childMdx___children'
  | 'childMdx___children___id'
  | 'childMdx___children___parent___id'
  | 'childMdx___children___parent___children'
  | 'childMdx___children___children'
  | 'childMdx___children___children___id'
  | 'childMdx___children___children___children'
  | 'childMdx___children___internal___content'
  | 'childMdx___children___internal___contentDigest'
  | 'childMdx___children___internal___description'
  | 'childMdx___children___internal___fieldOwners'
  | 'childMdx___children___internal___ignoreType'
  | 'childMdx___children___internal___mediaType'
  | 'childMdx___children___internal___owner'
  | 'childMdx___children___internal___type'
  | 'childMdx___internal___content'
  | 'childMdx___internal___contentDigest'
  | 'childMdx___internal___description'
  | 'childMdx___internal___fieldOwners'
  | 'childMdx___internal___ignoreType'
  | 'childMdx___internal___mediaType'
  | 'childMdx___internal___owner'
  | 'childMdx___internal___type'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type FileGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<FileEdge>;
  nodes: Array<File>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type FileSortInput = {
  fields?: Maybe<Array<Maybe<FileFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SortOrderEnum =
  | 'ASC'
  | 'DESC';

export type DirectoryConnection = {
  totalCount: Scalars['Int'];
  edges: Array<DirectoryEdge>;
  nodes: Array<Directory>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<DirectoryGroupConnection>;
};


export type DirectoryConnectionDistinctArgs = {
  field: DirectoryFieldsEnum;
};


export type DirectoryConnectionMaxArgs = {
  field: DirectoryFieldsEnum;
};


export type DirectoryConnectionMinArgs = {
  field: DirectoryFieldsEnum;
};


export type DirectoryConnectionSumArgs = {
  field: DirectoryFieldsEnum;
};


export type DirectoryConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: DirectoryFieldsEnum;
};

export type DirectoryEdge = {
  next?: Maybe<Directory>;
  node: Directory;
  previous?: Maybe<Directory>;
};

export type DirectoryFieldsEnum =
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
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type DirectoryGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<DirectoryEdge>;
  nodes: Array<Directory>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type DirectoryFilterInput = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>;
  absolutePath?: Maybe<StringQueryOperatorInput>;
  relativePath?: Maybe<StringQueryOperatorInput>;
  extension?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<IntQueryOperatorInput>;
  prettySize?: Maybe<StringQueryOperatorInput>;
  modifiedTime?: Maybe<DateQueryOperatorInput>;
  accessTime?: Maybe<DateQueryOperatorInput>;
  changeTime?: Maybe<DateQueryOperatorInput>;
  birthTime?: Maybe<DateQueryOperatorInput>;
  root?: Maybe<StringQueryOperatorInput>;
  dir?: Maybe<StringQueryOperatorInput>;
  base?: Maybe<StringQueryOperatorInput>;
  ext?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  relativeDirectory?: Maybe<StringQueryOperatorInput>;
  dev?: Maybe<IntQueryOperatorInput>;
  mode?: Maybe<IntQueryOperatorInput>;
  nlink?: Maybe<IntQueryOperatorInput>;
  uid?: Maybe<IntQueryOperatorInput>;
  gid?: Maybe<IntQueryOperatorInput>;
  rdev?: Maybe<IntQueryOperatorInput>;
  ino?: Maybe<FloatQueryOperatorInput>;
  atimeMs?: Maybe<FloatQueryOperatorInput>;
  mtimeMs?: Maybe<FloatQueryOperatorInput>;
  ctimeMs?: Maybe<FloatQueryOperatorInput>;
  atime?: Maybe<DateQueryOperatorInput>;
  mtime?: Maybe<DateQueryOperatorInput>;
  ctime?: Maybe<DateQueryOperatorInput>;
  birthtime?: Maybe<DateQueryOperatorInput>;
  birthtimeMs?: Maybe<FloatQueryOperatorInput>;
  blksize?: Maybe<IntQueryOperatorInput>;
  blocks?: Maybe<IntQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type DirectorySortInput = {
  fields?: Maybe<Array<Maybe<DirectoryFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SiteSiteMetadataFilterInput = {
  title?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  siteUrl?: Maybe<StringQueryOperatorInput>;
};

export type SiteConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteEdge>;
  nodes: Array<Site>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SiteGroupConnection>;
};


export type SiteConnectionDistinctArgs = {
  field: SiteFieldsEnum;
};


export type SiteConnectionMaxArgs = {
  field: SiteFieldsEnum;
};


export type SiteConnectionMinArgs = {
  field: SiteFieldsEnum;
};


export type SiteConnectionSumArgs = {
  field: SiteFieldsEnum;
};


export type SiteConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SiteFieldsEnum;
};

export type SiteEdge = {
  next?: Maybe<Site>;
  node: Site;
  previous?: Maybe<Site>;
};

export type SiteFieldsEnum =
  | 'buildTime'
  | 'siteMetadata___title'
  | 'siteMetadata___description'
  | 'siteMetadata___siteUrl'
  | 'polyfill'
  | 'pathPrefix'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type SiteGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteEdge>;
  nodes: Array<Site>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type SiteFilterInput = {
  buildTime?: Maybe<DateQueryOperatorInput>;
  siteMetadata?: Maybe<SiteSiteMetadataFilterInput>;
  polyfill?: Maybe<BooleanQueryOperatorInput>;
  pathPrefix?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type SiteSortInput = {
  fields?: Maybe<Array<Maybe<SiteFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SiteFunctionConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteFunctionEdge>;
  nodes: Array<SiteFunction>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SiteFunctionGroupConnection>;
};


export type SiteFunctionConnectionDistinctArgs = {
  field: SiteFunctionFieldsEnum;
};


export type SiteFunctionConnectionMaxArgs = {
  field: SiteFunctionFieldsEnum;
};


export type SiteFunctionConnectionMinArgs = {
  field: SiteFunctionFieldsEnum;
};


export type SiteFunctionConnectionSumArgs = {
  field: SiteFunctionFieldsEnum;
};


export type SiteFunctionConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SiteFunctionFieldsEnum;
};

export type SiteFunctionEdge = {
  next?: Maybe<SiteFunction>;
  node: SiteFunction;
  previous?: Maybe<SiteFunction>;
};

export type SiteFunctionFieldsEnum =
  | 'apiRoute'
  | 'originalFilePath'
  | 'relativeCompiledFilePath'
  | 'absoluteCompiledFilePath'
  | 'matchPath'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type SiteFunctionGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteFunctionEdge>;
  nodes: Array<SiteFunction>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type SiteFunctionFilterInput = {
  apiRoute?: Maybe<StringQueryOperatorInput>;
  originalFilePath?: Maybe<StringQueryOperatorInput>;
  relativeCompiledFilePath?: Maybe<StringQueryOperatorInput>;
  absoluteCompiledFilePath?: Maybe<StringQueryOperatorInput>;
  matchPath?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type SiteFunctionSortInput = {
  fields?: Maybe<Array<Maybe<SiteFunctionFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SitePageContextFilterInput = {
  frontmatter?: Maybe<SitePageContextFrontmatterFilterInput>;
};

export type SitePageContextFrontmatterFilterInput = {
  title?: Maybe<StringQueryOperatorInput>;
  date?: Maybe<DateQueryOperatorInput>;
  published?: Maybe<BooleanQueryOperatorInput>;
  featuredImage?: Maybe<StringQueryOperatorInput>;
  customer?: Maybe<StringQueryOperatorInput>;
  index?: Maybe<IntQueryOperatorInput>;
};

export type SitePluginFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  resolve?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
  pluginOptions?: Maybe<SitePluginPluginOptionsFilterInput>;
  nodeAPIs?: Maybe<StringQueryOperatorInput>;
  browserAPIs?: Maybe<StringQueryOperatorInput>;
  ssrAPIs?: Maybe<StringQueryOperatorInput>;
  pluginFilepath?: Maybe<StringQueryOperatorInput>;
  packageJson?: Maybe<SitePluginPackageJsonFilterInput>;
};

export type SitePluginPluginOptionsFilterInput = {
  output?: Maybe<StringQueryOperatorInput>;
  createLinkInHead?: Maybe<BooleanQueryOperatorInput>;
  entryLimit?: Maybe<IntQueryOperatorInput>;
  query?: Maybe<StringQueryOperatorInput>;
  icon?: Maybe<StringQueryOperatorInput>;
  legacy?: Maybe<BooleanQueryOperatorInput>;
  theme_color_in_head?: Maybe<BooleanQueryOperatorInput>;
  cache_busting_mode?: Maybe<StringQueryOperatorInput>;
  crossOrigin?: Maybe<StringQueryOperatorInput>;
  include_favicon?: Maybe<BooleanQueryOperatorInput>;
  cacheDigest?: Maybe<StringQueryOperatorInput>;
  base64Width?: Maybe<IntQueryOperatorInput>;
  stripMetadata?: Maybe<BooleanQueryOperatorInput>;
  defaultQuality?: Maybe<IntQueryOperatorInput>;
  failOnError?: Maybe<BooleanQueryOperatorInput>;
  maxWidth?: Maybe<IntQueryOperatorInput>;
  linkImagesToOriginal?: Maybe<BooleanQueryOperatorInput>;
  showCaptions?: Maybe<BooleanQueryOperatorInput>;
  markdownCaptions?: Maybe<BooleanQueryOperatorInput>;
  sizeByPixelDensity?: Maybe<BooleanQueryOperatorInput>;
  backgroundColor?: Maybe<StringQueryOperatorInput>;
  quality?: Maybe<IntQueryOperatorInput>;
  withWebp?: Maybe<BooleanQueryOperatorInput>;
  tracedSVG?: Maybe<BooleanQueryOperatorInput>;
  loading?: Maybe<StringQueryOperatorInput>;
  disableBgImageOnAlpha?: Maybe<BooleanQueryOperatorInput>;
  disableBgImage?: Maybe<BooleanQueryOperatorInput>;
  defaultLayouts?: Maybe<SitePluginPluginOptionsDefaultLayoutsFilterInput>;
  gatsbyRemarkPlugins?: Maybe<SitePluginPluginOptionsGatsbyRemarkPluginsFilterListInput>;
  extensions?: Maybe<StringQueryOperatorInput>;
  lessBabel?: Maybe<BooleanQueryOperatorInput>;
  mediaTypes?: Maybe<StringQueryOperatorInput>;
  root?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  path?: Maybe<StringQueryOperatorInput>;
  apiKey?: Maybe<StringQueryOperatorInput>;
  paginationLimit?: Maybe<IntQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
  publicApiKey?: Maybe<StringQueryOperatorInput>;
  openCartOnAdd?: Maybe<BooleanQueryOperatorInput>;
  useSideCart?: Maybe<BooleanQueryOperatorInput>;
  styles?: Maybe<BooleanQueryOperatorInput>;
  queries?: Maybe<SitePluginPluginOptionsQueriesFilterInput>;
  pathCheck?: Maybe<BooleanQueryOperatorInput>;
  allExtensions?: Maybe<BooleanQueryOperatorInput>;
  isTSX?: Maybe<BooleanQueryOperatorInput>;
  jsxPragma?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsDefaultLayoutsFilterInput = {
  blog?: Maybe<StringQueryOperatorInput>;
  default?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsGatsbyRemarkPluginsFilterListInput = {
  elemMatch?: Maybe<SitePluginPluginOptionsGatsbyRemarkPluginsFilterInput>;
};

export type SitePluginPluginOptionsGatsbyRemarkPluginsFilterInput = {
  resolve?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsQueriesFilterInput = {
  sm?: Maybe<StringQueryOperatorInput>;
  md?: Maybe<StringQueryOperatorInput>;
  lg?: Maybe<StringQueryOperatorInput>;
  xl?: Maybe<StringQueryOperatorInput>;
  _2xl?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
  main?: Maybe<StringQueryOperatorInput>;
  author?: Maybe<StringQueryOperatorInput>;
  license?: Maybe<StringQueryOperatorInput>;
  dependencies?: Maybe<SitePluginPackageJsonDependenciesFilterListInput>;
  devDependencies?: Maybe<SitePluginPackageJsonDevDependenciesFilterListInput>;
  peerDependencies?: Maybe<SitePluginPackageJsonPeerDependenciesFilterListInput>;
  keywords?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonDependenciesFilterListInput = {
  elemMatch?: Maybe<SitePluginPackageJsonDependenciesFilterInput>;
};

export type SitePluginPackageJsonDependenciesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonDevDependenciesFilterListInput = {
  elemMatch?: Maybe<SitePluginPackageJsonDevDependenciesFilterInput>;
};

export type SitePluginPackageJsonDevDependenciesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonPeerDependenciesFilterListInput = {
  elemMatch?: Maybe<SitePluginPackageJsonPeerDependenciesFilterInput>;
};

export type SitePluginPackageJsonPeerDependenciesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
};

export type SitePageConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SitePageEdge>;
  nodes: Array<SitePage>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SitePageGroupConnection>;
};


export type SitePageConnectionDistinctArgs = {
  field: SitePageFieldsEnum;
};


export type SitePageConnectionMaxArgs = {
  field: SitePageFieldsEnum;
};


export type SitePageConnectionMinArgs = {
  field: SitePageFieldsEnum;
};


export type SitePageConnectionSumArgs = {
  field: SitePageFieldsEnum;
};


export type SitePageConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SitePageFieldsEnum;
};

export type SitePageEdge = {
  next?: Maybe<SitePage>;
  node: SitePage;
  previous?: Maybe<SitePage>;
};

export type SitePageFieldsEnum =
  | 'path'
  | 'component'
  | 'internalComponentName'
  | 'componentChunkName'
  | 'matchPath'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'isCreatedByStatefulCreatePages'
  | 'context___frontmatter___title'
  | 'context___frontmatter___date'
  | 'context___frontmatter___published'
  | 'context___frontmatter___featuredImage'
  | 'context___frontmatter___customer'
  | 'context___frontmatter___index'
  | 'pluginCreator___id'
  | 'pluginCreator___parent___id'
  | 'pluginCreator___parent___parent___id'
  | 'pluginCreator___parent___parent___children'
  | 'pluginCreator___parent___children'
  | 'pluginCreator___parent___children___id'
  | 'pluginCreator___parent___children___children'
  | 'pluginCreator___parent___internal___content'
  | 'pluginCreator___parent___internal___contentDigest'
  | 'pluginCreator___parent___internal___description'
  | 'pluginCreator___parent___internal___fieldOwners'
  | 'pluginCreator___parent___internal___ignoreType'
  | 'pluginCreator___parent___internal___mediaType'
  | 'pluginCreator___parent___internal___owner'
  | 'pluginCreator___parent___internal___type'
  | 'pluginCreator___children'
  | 'pluginCreator___children___id'
  | 'pluginCreator___children___parent___id'
  | 'pluginCreator___children___parent___children'
  | 'pluginCreator___children___children'
  | 'pluginCreator___children___children___id'
  | 'pluginCreator___children___children___children'
  | 'pluginCreator___children___internal___content'
  | 'pluginCreator___children___internal___contentDigest'
  | 'pluginCreator___children___internal___description'
  | 'pluginCreator___children___internal___fieldOwners'
  | 'pluginCreator___children___internal___ignoreType'
  | 'pluginCreator___children___internal___mediaType'
  | 'pluginCreator___children___internal___owner'
  | 'pluginCreator___children___internal___type'
  | 'pluginCreator___internal___content'
  | 'pluginCreator___internal___contentDigest'
  | 'pluginCreator___internal___description'
  | 'pluginCreator___internal___fieldOwners'
  | 'pluginCreator___internal___ignoreType'
  | 'pluginCreator___internal___mediaType'
  | 'pluginCreator___internal___owner'
  | 'pluginCreator___internal___type'
  | 'pluginCreator___resolve'
  | 'pluginCreator___name'
  | 'pluginCreator___version'
  | 'pluginCreator___pluginOptions___output'
  | 'pluginCreator___pluginOptions___createLinkInHead'
  | 'pluginCreator___pluginOptions___entryLimit'
  | 'pluginCreator___pluginOptions___query'
  | 'pluginCreator___pluginOptions___icon'
  | 'pluginCreator___pluginOptions___legacy'
  | 'pluginCreator___pluginOptions___theme_color_in_head'
  | 'pluginCreator___pluginOptions___cache_busting_mode'
  | 'pluginCreator___pluginOptions___crossOrigin'
  | 'pluginCreator___pluginOptions___include_favicon'
  | 'pluginCreator___pluginOptions___cacheDigest'
  | 'pluginCreator___pluginOptions___base64Width'
  | 'pluginCreator___pluginOptions___stripMetadata'
  | 'pluginCreator___pluginOptions___defaultQuality'
  | 'pluginCreator___pluginOptions___failOnError'
  | 'pluginCreator___pluginOptions___maxWidth'
  | 'pluginCreator___pluginOptions___linkImagesToOriginal'
  | 'pluginCreator___pluginOptions___showCaptions'
  | 'pluginCreator___pluginOptions___markdownCaptions'
  | 'pluginCreator___pluginOptions___sizeByPixelDensity'
  | 'pluginCreator___pluginOptions___backgroundColor'
  | 'pluginCreator___pluginOptions___quality'
  | 'pluginCreator___pluginOptions___withWebp'
  | 'pluginCreator___pluginOptions___tracedSVG'
  | 'pluginCreator___pluginOptions___loading'
  | 'pluginCreator___pluginOptions___disableBgImageOnAlpha'
  | 'pluginCreator___pluginOptions___disableBgImage'
  | 'pluginCreator___pluginOptions___defaultLayouts___blog'
  | 'pluginCreator___pluginOptions___defaultLayouts___default'
  | 'pluginCreator___pluginOptions___gatsbyRemarkPlugins'
  | 'pluginCreator___pluginOptions___gatsbyRemarkPlugins___resolve'
  | 'pluginCreator___pluginOptions___extensions'
  | 'pluginCreator___pluginOptions___lessBabel'
  | 'pluginCreator___pluginOptions___mediaTypes'
  | 'pluginCreator___pluginOptions___root'
  | 'pluginCreator___pluginOptions___name'
  | 'pluginCreator___pluginOptions___path'
  | 'pluginCreator___pluginOptions___apiKey'
  | 'pluginCreator___pluginOptions___paginationLimit'
  | 'pluginCreator___pluginOptions___version'
  | 'pluginCreator___pluginOptions___publicApiKey'
  | 'pluginCreator___pluginOptions___openCartOnAdd'
  | 'pluginCreator___pluginOptions___useSideCart'
  | 'pluginCreator___pluginOptions___styles'
  | 'pluginCreator___pluginOptions___queries___sm'
  | 'pluginCreator___pluginOptions___queries___md'
  | 'pluginCreator___pluginOptions___queries___lg'
  | 'pluginCreator___pluginOptions___queries___xl'
  | 'pluginCreator___pluginOptions___queries____2xl'
  | 'pluginCreator___pluginOptions___pathCheck'
  | 'pluginCreator___pluginOptions___allExtensions'
  | 'pluginCreator___pluginOptions___isTSX'
  | 'pluginCreator___pluginOptions___jsxPragma'
  | 'pluginCreator___nodeAPIs'
  | 'pluginCreator___browserAPIs'
  | 'pluginCreator___ssrAPIs'
  | 'pluginCreator___pluginFilepath'
  | 'pluginCreator___packageJson___name'
  | 'pluginCreator___packageJson___description'
  | 'pluginCreator___packageJson___version'
  | 'pluginCreator___packageJson___main'
  | 'pluginCreator___packageJson___author'
  | 'pluginCreator___packageJson___license'
  | 'pluginCreator___packageJson___dependencies'
  | 'pluginCreator___packageJson___dependencies___name'
  | 'pluginCreator___packageJson___dependencies___version'
  | 'pluginCreator___packageJson___devDependencies'
  | 'pluginCreator___packageJson___devDependencies___name'
  | 'pluginCreator___packageJson___devDependencies___version'
  | 'pluginCreator___packageJson___peerDependencies'
  | 'pluginCreator___packageJson___peerDependencies___name'
  | 'pluginCreator___packageJson___peerDependencies___version'
  | 'pluginCreator___packageJson___keywords'
  | 'pluginCreatorId'
  | 'componentPath';

export type SitePageGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SitePageEdge>;
  nodes: Array<SitePage>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type SitePageFilterInput = {
  path?: Maybe<StringQueryOperatorInput>;
  component?: Maybe<StringQueryOperatorInput>;
  internalComponentName?: Maybe<StringQueryOperatorInput>;
  componentChunkName?: Maybe<StringQueryOperatorInput>;
  matchPath?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  isCreatedByStatefulCreatePages?: Maybe<BooleanQueryOperatorInput>;
  context?: Maybe<SitePageContextFilterInput>;
  pluginCreator?: Maybe<SitePluginFilterInput>;
  pluginCreatorId?: Maybe<StringQueryOperatorInput>;
  componentPath?: Maybe<StringQueryOperatorInput>;
};

export type SitePageSortInput = {
  fields?: Maybe<Array<Maybe<SitePageFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ImageSharpConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ImageSharpEdge>;
  nodes: Array<ImageSharp>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<ImageSharpGroupConnection>;
};


export type ImageSharpConnectionDistinctArgs = {
  field: ImageSharpFieldsEnum;
};


export type ImageSharpConnectionMaxArgs = {
  field: ImageSharpFieldsEnum;
};


export type ImageSharpConnectionMinArgs = {
  field: ImageSharpFieldsEnum;
};


export type ImageSharpConnectionSumArgs = {
  field: ImageSharpFieldsEnum;
};


export type ImageSharpConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ImageSharpFieldsEnum;
};

export type ImageSharpEdge = {
  next?: Maybe<ImageSharp>;
  node: ImageSharp;
  previous?: Maybe<ImageSharp>;
};

export type ImageSharpFieldsEnum =
  | 'fixed___base64'
  | 'fixed___tracedSVG'
  | 'fixed___aspectRatio'
  | 'fixed___width'
  | 'fixed___height'
  | 'fixed___src'
  | 'fixed___srcSet'
  | 'fixed___srcWebp'
  | 'fixed___srcSetWebp'
  | 'fixed___originalName'
  | 'fluid___base64'
  | 'fluid___tracedSVG'
  | 'fluid___aspectRatio'
  | 'fluid___src'
  | 'fluid___srcSet'
  | 'fluid___srcWebp'
  | 'fluid___srcSetWebp'
  | 'fluid___sizes'
  | 'fluid___originalImg'
  | 'fluid___originalName'
  | 'fluid___presentationWidth'
  | 'fluid___presentationHeight'
  | 'gatsbyImageData'
  | 'original___width'
  | 'original___height'
  | 'original___src'
  | 'resize___src'
  | 'resize___tracedSVG'
  | 'resize___width'
  | 'resize___height'
  | 'resize___aspectRatio'
  | 'resize___originalName'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type ImageSharpGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ImageSharpEdge>;
  nodes: Array<ImageSharp>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ImageSharpSortInput = {
  fields?: Maybe<Array<Maybe<ImageSharpFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type MdxConnection = {
  totalCount: Scalars['Int'];
  edges: Array<MdxEdge>;
  nodes: Array<Mdx>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<MdxGroupConnection>;
};


export type MdxConnectionDistinctArgs = {
  field: MdxFieldsEnum;
};


export type MdxConnectionMaxArgs = {
  field: MdxFieldsEnum;
};


export type MdxConnectionMinArgs = {
  field: MdxFieldsEnum;
};


export type MdxConnectionSumArgs = {
  field: MdxFieldsEnum;
};


export type MdxConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: MdxFieldsEnum;
};

export type MdxEdge = {
  next?: Maybe<Mdx>;
  node: Mdx;
  previous?: Maybe<Mdx>;
};

export type MdxFieldsEnum =
  | 'rawBody'
  | 'fileAbsolutePath'
  | 'frontmatter___title'
  | 'frontmatter___date'
  | 'frontmatter___published'
  | 'frontmatter___featuredImage___sourceInstanceName'
  | 'frontmatter___featuredImage___absolutePath'
  | 'frontmatter___featuredImage___relativePath'
  | 'frontmatter___featuredImage___extension'
  | 'frontmatter___featuredImage___size'
  | 'frontmatter___featuredImage___prettySize'
  | 'frontmatter___featuredImage___modifiedTime'
  | 'frontmatter___featuredImage___accessTime'
  | 'frontmatter___featuredImage___changeTime'
  | 'frontmatter___featuredImage___birthTime'
  | 'frontmatter___featuredImage___root'
  | 'frontmatter___featuredImage___dir'
  | 'frontmatter___featuredImage___base'
  | 'frontmatter___featuredImage___ext'
  | 'frontmatter___featuredImage___name'
  | 'frontmatter___featuredImage___relativeDirectory'
  | 'frontmatter___featuredImage___dev'
  | 'frontmatter___featuredImage___mode'
  | 'frontmatter___featuredImage___nlink'
  | 'frontmatter___featuredImage___uid'
  | 'frontmatter___featuredImage___gid'
  | 'frontmatter___featuredImage___rdev'
  | 'frontmatter___featuredImage___ino'
  | 'frontmatter___featuredImage___atimeMs'
  | 'frontmatter___featuredImage___mtimeMs'
  | 'frontmatter___featuredImage___ctimeMs'
  | 'frontmatter___featuredImage___atime'
  | 'frontmatter___featuredImage___mtime'
  | 'frontmatter___featuredImage___ctime'
  | 'frontmatter___featuredImage___birthtime'
  | 'frontmatter___featuredImage___birthtimeMs'
  | 'frontmatter___featuredImage___blksize'
  | 'frontmatter___featuredImage___blocks'
  | 'frontmatter___featuredImage___url'
  | 'frontmatter___featuredImage___publicURL'
  | 'frontmatter___featuredImage___childrenImageSharp'
  | 'frontmatter___featuredImage___childrenImageSharp___gatsbyImageData'
  | 'frontmatter___featuredImage___childrenImageSharp___id'
  | 'frontmatter___featuredImage___childrenImageSharp___children'
  | 'frontmatter___featuredImage___childImageSharp___gatsbyImageData'
  | 'frontmatter___featuredImage___childImageSharp___id'
  | 'frontmatter___featuredImage___childImageSharp___children'
  | 'frontmatter___featuredImage___childrenMdx'
  | 'frontmatter___featuredImage___childrenMdx___rawBody'
  | 'frontmatter___featuredImage___childrenMdx___fileAbsolutePath'
  | 'frontmatter___featuredImage___childrenMdx___slug'
  | 'frontmatter___featuredImage___childrenMdx___body'
  | 'frontmatter___featuredImage___childrenMdx___excerpt'
  | 'frontmatter___featuredImage___childrenMdx___headings'
  | 'frontmatter___featuredImage___childrenMdx___html'
  | 'frontmatter___featuredImage___childrenMdx___mdxAST'
  | 'frontmatter___featuredImage___childrenMdx___tableOfContents'
  | 'frontmatter___featuredImage___childrenMdx___timeToRead'
  | 'frontmatter___featuredImage___childrenMdx___id'
  | 'frontmatter___featuredImage___childrenMdx___children'
  | 'frontmatter___featuredImage___childMdx___rawBody'
  | 'frontmatter___featuredImage___childMdx___fileAbsolutePath'
  | 'frontmatter___featuredImage___childMdx___slug'
  | 'frontmatter___featuredImage___childMdx___body'
  | 'frontmatter___featuredImage___childMdx___excerpt'
  | 'frontmatter___featuredImage___childMdx___headings'
  | 'frontmatter___featuredImage___childMdx___html'
  | 'frontmatter___featuredImage___childMdx___mdxAST'
  | 'frontmatter___featuredImage___childMdx___tableOfContents'
  | 'frontmatter___featuredImage___childMdx___timeToRead'
  | 'frontmatter___featuredImage___childMdx___id'
  | 'frontmatter___featuredImage___childMdx___children'
  | 'frontmatter___featuredImage___id'
  | 'frontmatter___featuredImage___parent___id'
  | 'frontmatter___featuredImage___parent___children'
  | 'frontmatter___featuredImage___children'
  | 'frontmatter___featuredImage___children___id'
  | 'frontmatter___featuredImage___children___children'
  | 'frontmatter___featuredImage___internal___content'
  | 'frontmatter___featuredImage___internal___contentDigest'
  | 'frontmatter___featuredImage___internal___description'
  | 'frontmatter___featuredImage___internal___fieldOwners'
  | 'frontmatter___featuredImage___internal___ignoreType'
  | 'frontmatter___featuredImage___internal___mediaType'
  | 'frontmatter___featuredImage___internal___owner'
  | 'frontmatter___featuredImage___internal___type'
  | 'frontmatter___customer'
  | 'frontmatter___index'
  | 'slug'
  | 'body'
  | 'excerpt'
  | 'headings'
  | 'headings___value'
  | 'headings___depth'
  | 'html'
  | 'mdxAST'
  | 'tableOfContents'
  | 'timeToRead'
  | 'wordCount___paragraphs'
  | 'wordCount___sentences'
  | 'wordCount___words'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type MdxGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<MdxEdge>;
  nodes: Array<Mdx>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type MdxSortInput = {
  fields?: Maybe<Array<Maybe<MdxFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type PrintfulStoreConnection = {
  totalCount: Scalars['Int'];
  edges: Array<PrintfulStoreEdge>;
  nodes: Array<PrintfulStore>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<PrintfulStoreGroupConnection>;
};


export type PrintfulStoreConnectionDistinctArgs = {
  field: PrintfulStoreFieldsEnum;
};


export type PrintfulStoreConnectionMaxArgs = {
  field: PrintfulStoreFieldsEnum;
};


export type PrintfulStoreConnectionMinArgs = {
  field: PrintfulStoreFieldsEnum;
};


export type PrintfulStoreConnectionSumArgs = {
  field: PrintfulStoreFieldsEnum;
};


export type PrintfulStoreConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: PrintfulStoreFieldsEnum;
};

export type PrintfulStoreEdge = {
  next?: Maybe<PrintfulStore>;
  node: PrintfulStore;
  previous?: Maybe<PrintfulStore>;
};

export type PrintfulStoreFieldsEnum =
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'name'
  | 'type'
  | 'website'
  | 'currency'
  | 'created';

export type PrintfulStoreGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<PrintfulStoreEdge>;
  nodes: Array<PrintfulStore>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type PrintfulStoreFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  name?: Maybe<StringQueryOperatorInput>;
  type?: Maybe<StringQueryOperatorInput>;
  website?: Maybe<StringQueryOperatorInput>;
  currency?: Maybe<StringQueryOperatorInput>;
  created?: Maybe<IntQueryOperatorInput>;
};

export type PrintfulStoreSortInput = {
  fields?: Maybe<Array<Maybe<PrintfulStoreFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type PrintfulCountryStatesFilterListInput = {
  elemMatch?: Maybe<PrintfulCountryStatesFilterInput>;
};

export type PrintfulCountryStatesFilterInput = {
  code?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
};

export type PrintfulCountryConnection = {
  totalCount: Scalars['Int'];
  edges: Array<PrintfulCountryEdge>;
  nodes: Array<PrintfulCountry>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<PrintfulCountryGroupConnection>;
};


export type PrintfulCountryConnectionDistinctArgs = {
  field: PrintfulCountryFieldsEnum;
};


export type PrintfulCountryConnectionMaxArgs = {
  field: PrintfulCountryFieldsEnum;
};


export type PrintfulCountryConnectionMinArgs = {
  field: PrintfulCountryFieldsEnum;
};


export type PrintfulCountryConnectionSumArgs = {
  field: PrintfulCountryFieldsEnum;
};


export type PrintfulCountryConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: PrintfulCountryFieldsEnum;
};

export type PrintfulCountryEdge = {
  next?: Maybe<PrintfulCountry>;
  node: PrintfulCountry;
  previous?: Maybe<PrintfulCountry>;
};

export type PrintfulCountryFieldsEnum =
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'name'
  | 'code'
  | 'states'
  | 'states___code'
  | 'states___name';

export type PrintfulCountryGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<PrintfulCountryEdge>;
  nodes: Array<PrintfulCountry>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type PrintfulCountryFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  name?: Maybe<StringQueryOperatorInput>;
  code?: Maybe<StringQueryOperatorInput>;
  states?: Maybe<PrintfulCountryStatesFilterListInput>;
};

export type PrintfulCountrySortInput = {
  fields?: Maybe<Array<Maybe<PrintfulCountryFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type PrintfulVariantFilterListInput = {
  elemMatch?: Maybe<PrintfulVariantFilterInput>;
};

export type PrintfulVariantFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  external_id?: Maybe<StringQueryOperatorInput>;
  sync_product_id?: Maybe<IntQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  synced?: Maybe<BooleanQueryOperatorInput>;
  variant_id?: Maybe<IntQueryOperatorInput>;
  retail_price?: Maybe<FloatQueryOperatorInput>;
  sku?: Maybe<StringQueryOperatorInput>;
  currency?: Maybe<StringQueryOperatorInput>;
  product?: Maybe<PrintfulVariantProductFilterInput>;
  files?: Maybe<PrintfulVariantFilesFilterListInput>;
  options?: Maybe<PrintfulVariantOptionsFilterListInput>;
  is_ignored?: Maybe<BooleanQueryOperatorInput>;
  slug?: Maybe<StringQueryOperatorInput>;
  parentProduct?: Maybe<PrintfulProductFilterInput>;
  catalogVariant?: Maybe<PrintfulCatalogVariantFilterInput>;
  catalogProduct?: Maybe<PrintfulCatalogProductFilterInput>;
  variantImage?: Maybe<FileFilterInput>;
};

export type PrintfulVariantProductFilterInput = {
  variant_id?: Maybe<IntQueryOperatorInput>;
  product_id?: Maybe<IntQueryOperatorInput>;
  image?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
};

export type PrintfulVariantFilesFilterListInput = {
  elemMatch?: Maybe<PrintfulVariantFilesFilterInput>;
};

export type PrintfulVariantFilesFilterInput = {
  id?: Maybe<IntQueryOperatorInput>;
  type?: Maybe<StringQueryOperatorInput>;
  hash?: Maybe<StringQueryOperatorInput>;
  filename?: Maybe<StringQueryOperatorInput>;
  mime_type?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<IntQueryOperatorInput>;
  width?: Maybe<IntQueryOperatorInput>;
  height?: Maybe<IntQueryOperatorInput>;
  dpi?: Maybe<IntQueryOperatorInput>;
  status?: Maybe<StringQueryOperatorInput>;
  created?: Maybe<IntQueryOperatorInput>;
  thumbnail_url?: Maybe<StringQueryOperatorInput>;
  preview_url?: Maybe<StringQueryOperatorInput>;
  visible?: Maybe<BooleanQueryOperatorInput>;
};

export type PrintfulVariantOptionsFilterListInput = {
  elemMatch?: Maybe<PrintfulVariantOptionsFilterInput>;
};

export type PrintfulVariantOptionsFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  value?: Maybe<StringQueryOperatorInput>;
};

export type PrintfulProductFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  external_id?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  synced?: Maybe<IntQueryOperatorInput>;
  thumbnail_url?: Maybe<StringQueryOperatorInput>;
  is_ignored?: Maybe<BooleanQueryOperatorInput>;
  slug?: Maybe<StringQueryOperatorInput>;
  variants?: Maybe<PrintfulVariantFilterListInput>;
  productImage?: Maybe<FileFilterInput>;
};

export type PrintfulCatalogVariantFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  name?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<StringQueryOperatorInput>;
  color?: Maybe<StringQueryOperatorInput>;
  color_code?: Maybe<StringQueryOperatorInput>;
  image?: Maybe<StringQueryOperatorInput>;
  price?: Maybe<StringQueryOperatorInput>;
  in_stock?: Maybe<BooleanQueryOperatorInput>;
  availability_regions?: Maybe<PrintfulCatalogVariantAvailability_RegionsFilterInput>;
  availability_status?: Maybe<PrintfulCatalogVariantAvailability_StatusFilterListInput>;
  product_id?: Maybe<StringQueryOperatorInput>;
  retail_price?: Maybe<FloatQueryOperatorInput>;
  variantImage?: Maybe<FileFilterInput>;
};

export type PrintfulCatalogVariantAvailability_RegionsFilterInput = {
  US?: Maybe<StringQueryOperatorInput>;
  CA?: Maybe<StringQueryOperatorInput>;
  MX?: Maybe<StringQueryOperatorInput>;
  EU?: Maybe<StringQueryOperatorInput>;
};

export type PrintfulCatalogVariantAvailability_StatusFilterListInput = {
  elemMatch?: Maybe<PrintfulCatalogVariantAvailability_StatusFilterInput>;
};

export type PrintfulCatalogVariantAvailability_StatusFilterInput = {
  region?: Maybe<StringQueryOperatorInput>;
  status?: Maybe<StringQueryOperatorInput>;
};

export type PrintfulCatalogProductFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  type?: Maybe<StringQueryOperatorInput>;
  type_name?: Maybe<StringQueryOperatorInput>;
  brand?: Maybe<StringQueryOperatorInput>;
  model?: Maybe<StringQueryOperatorInput>;
  image?: Maybe<StringQueryOperatorInput>;
  variant_count?: Maybe<IntQueryOperatorInput>;
  currency?: Maybe<StringQueryOperatorInput>;
  files?: Maybe<PrintfulCatalogProductFilesFilterListInput>;
  options?: Maybe<PrintfulCatalogProductOptionsFilterListInput>;
  dimensions?: Maybe<PrintfulCatalogProductDimensionsFilterInput>;
  is_discontinued?: Maybe<BooleanQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  productImage?: Maybe<FileFilterInput>;
};

export type PrintfulCatalogProductFilesFilterListInput = {
  elemMatch?: Maybe<PrintfulCatalogProductFilesFilterInput>;
};

export type PrintfulCatalogProductFilesFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  type?: Maybe<StringQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
  additional_price?: Maybe<StringQueryOperatorInput>;
};

export type PrintfulCatalogProductOptionsFilterListInput = {
  elemMatch?: Maybe<PrintfulCatalogProductOptionsFilterInput>;
};

export type PrintfulCatalogProductOptionsFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
  type?: Maybe<StringQueryOperatorInput>;
  values?: Maybe<PrintfulCatalogProductOptionsValuesFilterInput>;
  additional_price_breakdown?: Maybe<PrintfulCatalogProductOptionsAdditional_Price_BreakdownFilterInput>;
};

export type PrintfulCatalogProductOptionsValuesFilterInput = {
  _FFFFFF?: Maybe<StringQueryOperatorInput>;
  _000000?: Maybe<StringQueryOperatorInput>;
  _96A1A8?: Maybe<StringQueryOperatorInput>;
  _A67843?: Maybe<StringQueryOperatorInput>;
  _FFCC00?: Maybe<StringQueryOperatorInput>;
  _E25C27?: Maybe<StringQueryOperatorInput>;
  _CC3366?: Maybe<StringQueryOperatorInput>;
  _CC3333?: Maybe<StringQueryOperatorInput>;
  _660000?: Maybe<StringQueryOperatorInput>;
  _333366?: Maybe<StringQueryOperatorInput>;
  _005397?: Maybe<StringQueryOperatorInput>;
  _3399FF?: Maybe<StringQueryOperatorInput>;
  _6B5294?: Maybe<StringQueryOperatorInput>;
  _01784E?: Maybe<StringQueryOperatorInput>;
  _7BA35A?: Maybe<StringQueryOperatorInput>;
  flat?: Maybe<StringQueryOperatorInput>;
  _3d?: Maybe<StringQueryOperatorInput>;
  both?: Maybe<StringQueryOperatorInput>;
  white?: Maybe<StringQueryOperatorInput>;
  black?: Maybe<StringQueryOperatorInput>;
};

export type PrintfulCatalogProductOptionsAdditional_Price_BreakdownFilterInput = {
  flat?: Maybe<StringQueryOperatorInput>;
  _3d?: Maybe<StringQueryOperatorInput>;
  both?: Maybe<StringQueryOperatorInput>;
};

export type PrintfulCatalogProductDimensionsFilterInput = {
  front?: Maybe<StringQueryOperatorInput>;
};

export type PrintfulProductConnection = {
  totalCount: Scalars['Int'];
  edges: Array<PrintfulProductEdge>;
  nodes: Array<PrintfulProduct>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<PrintfulProductGroupConnection>;
};


export type PrintfulProductConnectionDistinctArgs = {
  field: PrintfulProductFieldsEnum;
};


export type PrintfulProductConnectionMaxArgs = {
  field: PrintfulProductFieldsEnum;
};


export type PrintfulProductConnectionMinArgs = {
  field: PrintfulProductFieldsEnum;
};


export type PrintfulProductConnectionSumArgs = {
  field: PrintfulProductFieldsEnum;
};


export type PrintfulProductConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: PrintfulProductFieldsEnum;
};

export type PrintfulProductEdge = {
  next?: Maybe<PrintfulProduct>;
  node: PrintfulProduct;
  previous?: Maybe<PrintfulProduct>;
};

export type PrintfulProductFieldsEnum =
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'external_id'
  | 'name'
  | 'synced'
  | 'thumbnail_url'
  | 'is_ignored'
  | 'slug'
  | 'variants'
  | 'variants___id'
  | 'variants___parent___id'
  | 'variants___parent___parent___id'
  | 'variants___parent___parent___children'
  | 'variants___parent___children'
  | 'variants___parent___children___id'
  | 'variants___parent___children___children'
  | 'variants___parent___internal___content'
  | 'variants___parent___internal___contentDigest'
  | 'variants___parent___internal___description'
  | 'variants___parent___internal___fieldOwners'
  | 'variants___parent___internal___ignoreType'
  | 'variants___parent___internal___mediaType'
  | 'variants___parent___internal___owner'
  | 'variants___parent___internal___type'
  | 'variants___children'
  | 'variants___children___id'
  | 'variants___children___parent___id'
  | 'variants___children___parent___children'
  | 'variants___children___children'
  | 'variants___children___children___id'
  | 'variants___children___children___children'
  | 'variants___children___internal___content'
  | 'variants___children___internal___contentDigest'
  | 'variants___children___internal___description'
  | 'variants___children___internal___fieldOwners'
  | 'variants___children___internal___ignoreType'
  | 'variants___children___internal___mediaType'
  | 'variants___children___internal___owner'
  | 'variants___children___internal___type'
  | 'variants___internal___content'
  | 'variants___internal___contentDigest'
  | 'variants___internal___description'
  | 'variants___internal___fieldOwners'
  | 'variants___internal___ignoreType'
  | 'variants___internal___mediaType'
  | 'variants___internal___owner'
  | 'variants___internal___type'
  | 'variants___external_id'
  | 'variants___sync_product_id'
  | 'variants___name'
  | 'variants___synced'
  | 'variants___variant_id'
  | 'variants___retail_price'
  | 'variants___sku'
  | 'variants___currency'
  | 'variants___product___variant_id'
  | 'variants___product___product_id'
  | 'variants___product___image'
  | 'variants___product___name'
  | 'variants___files'
  | 'variants___files___id'
  | 'variants___files___type'
  | 'variants___files___hash'
  | 'variants___files___filename'
  | 'variants___files___mime_type'
  | 'variants___files___size'
  | 'variants___files___width'
  | 'variants___files___height'
  | 'variants___files___dpi'
  | 'variants___files___status'
  | 'variants___files___created'
  | 'variants___files___thumbnail_url'
  | 'variants___files___preview_url'
  | 'variants___files___visible'
  | 'variants___options'
  | 'variants___options___id'
  | 'variants___options___value'
  | 'variants___is_ignored'
  | 'variants___slug'
  | 'variants___parentProduct___id'
  | 'variants___parentProduct___parent___id'
  | 'variants___parentProduct___parent___children'
  | 'variants___parentProduct___children'
  | 'variants___parentProduct___children___id'
  | 'variants___parentProduct___children___children'
  | 'variants___parentProduct___internal___content'
  | 'variants___parentProduct___internal___contentDigest'
  | 'variants___parentProduct___internal___description'
  | 'variants___parentProduct___internal___fieldOwners'
  | 'variants___parentProduct___internal___ignoreType'
  | 'variants___parentProduct___internal___mediaType'
  | 'variants___parentProduct___internal___owner'
  | 'variants___parentProduct___internal___type'
  | 'variants___parentProduct___external_id'
  | 'variants___parentProduct___name'
  | 'variants___parentProduct___synced'
  | 'variants___parentProduct___thumbnail_url'
  | 'variants___parentProduct___is_ignored'
  | 'variants___parentProduct___slug'
  | 'variants___parentProduct___variants'
  | 'variants___parentProduct___variants___id'
  | 'variants___parentProduct___variants___children'
  | 'variants___parentProduct___variants___external_id'
  | 'variants___parentProduct___variants___sync_product_id'
  | 'variants___parentProduct___variants___name'
  | 'variants___parentProduct___variants___synced'
  | 'variants___parentProduct___variants___variant_id'
  | 'variants___parentProduct___variants___retail_price'
  | 'variants___parentProduct___variants___sku'
  | 'variants___parentProduct___variants___currency'
  | 'variants___parentProduct___variants___files'
  | 'variants___parentProduct___variants___options'
  | 'variants___parentProduct___variants___is_ignored'
  | 'variants___parentProduct___variants___slug'
  | 'variants___parentProduct___productImage___sourceInstanceName'
  | 'variants___parentProduct___productImage___absolutePath'
  | 'variants___parentProduct___productImage___relativePath'
  | 'variants___parentProduct___productImage___extension'
  | 'variants___parentProduct___productImage___size'
  | 'variants___parentProduct___productImage___prettySize'
  | 'variants___parentProduct___productImage___modifiedTime'
  | 'variants___parentProduct___productImage___accessTime'
  | 'variants___parentProduct___productImage___changeTime'
  | 'variants___parentProduct___productImage___birthTime'
  | 'variants___parentProduct___productImage___root'
  | 'variants___parentProduct___productImage___dir'
  | 'variants___parentProduct___productImage___base'
  | 'variants___parentProduct___productImage___ext'
  | 'variants___parentProduct___productImage___name'
  | 'variants___parentProduct___productImage___relativeDirectory'
  | 'variants___parentProduct___productImage___dev'
  | 'variants___parentProduct___productImage___mode'
  | 'variants___parentProduct___productImage___nlink'
  | 'variants___parentProduct___productImage___uid'
  | 'variants___parentProduct___productImage___gid'
  | 'variants___parentProduct___productImage___rdev'
  | 'variants___parentProduct___productImage___ino'
  | 'variants___parentProduct___productImage___atimeMs'
  | 'variants___parentProduct___productImage___mtimeMs'
  | 'variants___parentProduct___productImage___ctimeMs'
  | 'variants___parentProduct___productImage___atime'
  | 'variants___parentProduct___productImage___mtime'
  | 'variants___parentProduct___productImage___ctime'
  | 'variants___parentProduct___productImage___birthtime'
  | 'variants___parentProduct___productImage___birthtimeMs'
  | 'variants___parentProduct___productImage___blksize'
  | 'variants___parentProduct___productImage___blocks'
  | 'variants___parentProduct___productImage___url'
  | 'variants___parentProduct___productImage___publicURL'
  | 'variants___parentProduct___productImage___childrenImageSharp'
  | 'variants___parentProduct___productImage___childrenMdx'
  | 'variants___parentProduct___productImage___id'
  | 'variants___parentProduct___productImage___children'
  | 'variants___catalogVariant___id'
  | 'variants___catalogVariant___parent___id'
  | 'variants___catalogVariant___parent___children'
  | 'variants___catalogVariant___children'
  | 'variants___catalogVariant___children___id'
  | 'variants___catalogVariant___children___children'
  | 'variants___catalogVariant___internal___content'
  | 'variants___catalogVariant___internal___contentDigest'
  | 'variants___catalogVariant___internal___description'
  | 'variants___catalogVariant___internal___fieldOwners'
  | 'variants___catalogVariant___internal___ignoreType'
  | 'variants___catalogVariant___internal___mediaType'
  | 'variants___catalogVariant___internal___owner'
  | 'variants___catalogVariant___internal___type'
  | 'variants___catalogVariant___name'
  | 'variants___catalogVariant___size'
  | 'variants___catalogVariant___color'
  | 'variants___catalogVariant___color_code'
  | 'variants___catalogVariant___image'
  | 'variants___catalogVariant___price'
  | 'variants___catalogVariant___in_stock'
  | 'variants___catalogVariant___availability_regions___US'
  | 'variants___catalogVariant___availability_regions___CA'
  | 'variants___catalogVariant___availability_regions___MX'
  | 'variants___catalogVariant___availability_regions___EU'
  | 'variants___catalogVariant___availability_status'
  | 'variants___catalogVariant___availability_status___region'
  | 'variants___catalogVariant___availability_status___status'
  | 'variants___catalogVariant___product_id'
  | 'variants___catalogVariant___retail_price'
  | 'variants___catalogVariant___variantImage___sourceInstanceName'
  | 'variants___catalogVariant___variantImage___absolutePath'
  | 'variants___catalogVariant___variantImage___relativePath'
  | 'variants___catalogVariant___variantImage___extension'
  | 'variants___catalogVariant___variantImage___size'
  | 'variants___catalogVariant___variantImage___prettySize'
  | 'variants___catalogVariant___variantImage___modifiedTime'
  | 'variants___catalogVariant___variantImage___accessTime'
  | 'variants___catalogVariant___variantImage___changeTime'
  | 'variants___catalogVariant___variantImage___birthTime'
  | 'variants___catalogVariant___variantImage___root'
  | 'variants___catalogVariant___variantImage___dir'
  | 'variants___catalogVariant___variantImage___base'
  | 'variants___catalogVariant___variantImage___ext'
  | 'variants___catalogVariant___variantImage___name'
  | 'variants___catalogVariant___variantImage___relativeDirectory'
  | 'variants___catalogVariant___variantImage___dev'
  | 'variants___catalogVariant___variantImage___mode'
  | 'variants___catalogVariant___variantImage___nlink'
  | 'variants___catalogVariant___variantImage___uid'
  | 'variants___catalogVariant___variantImage___gid'
  | 'variants___catalogVariant___variantImage___rdev'
  | 'variants___catalogVariant___variantImage___ino'
  | 'variants___catalogVariant___variantImage___atimeMs'
  | 'variants___catalogVariant___variantImage___mtimeMs'
  | 'variants___catalogVariant___variantImage___ctimeMs'
  | 'variants___catalogVariant___variantImage___atime'
  | 'variants___catalogVariant___variantImage___mtime'
  | 'variants___catalogVariant___variantImage___ctime'
  | 'variants___catalogVariant___variantImage___birthtime'
  | 'variants___catalogVariant___variantImage___birthtimeMs'
  | 'variants___catalogVariant___variantImage___blksize'
  | 'variants___catalogVariant___variantImage___blocks'
  | 'variants___catalogVariant___variantImage___url'
  | 'variants___catalogVariant___variantImage___publicURL'
  | 'variants___catalogVariant___variantImage___childrenImageSharp'
  | 'variants___catalogVariant___variantImage___childrenMdx'
  | 'variants___catalogVariant___variantImage___id'
  | 'variants___catalogVariant___variantImage___children'
  | 'variants___catalogProduct___id'
  | 'variants___catalogProduct___parent___id'
  | 'variants___catalogProduct___parent___children'
  | 'variants___catalogProduct___children'
  | 'variants___catalogProduct___children___id'
  | 'variants___catalogProduct___children___children'
  | 'variants___catalogProduct___internal___content'
  | 'variants___catalogProduct___internal___contentDigest'
  | 'variants___catalogProduct___internal___description'
  | 'variants___catalogProduct___internal___fieldOwners'
  | 'variants___catalogProduct___internal___ignoreType'
  | 'variants___catalogProduct___internal___mediaType'
  | 'variants___catalogProduct___internal___owner'
  | 'variants___catalogProduct___internal___type'
  | 'variants___catalogProduct___type'
  | 'variants___catalogProduct___type_name'
  | 'variants___catalogProduct___brand'
  | 'variants___catalogProduct___model'
  | 'variants___catalogProduct___image'
  | 'variants___catalogProduct___variant_count'
  | 'variants___catalogProduct___currency'
  | 'variants___catalogProduct___files'
  | 'variants___catalogProduct___files___id'
  | 'variants___catalogProduct___files___type'
  | 'variants___catalogProduct___files___title'
  | 'variants___catalogProduct___files___additional_price'
  | 'variants___catalogProduct___options'
  | 'variants___catalogProduct___options___id'
  | 'variants___catalogProduct___options___title'
  | 'variants___catalogProduct___options___type'
  | 'variants___catalogProduct___dimensions___front'
  | 'variants___catalogProduct___is_discontinued'
  | 'variants___catalogProduct___description'
  | 'variants___catalogProduct___productImage___sourceInstanceName'
  | 'variants___catalogProduct___productImage___absolutePath'
  | 'variants___catalogProduct___productImage___relativePath'
  | 'variants___catalogProduct___productImage___extension'
  | 'variants___catalogProduct___productImage___size'
  | 'variants___catalogProduct___productImage___prettySize'
  | 'variants___catalogProduct___productImage___modifiedTime'
  | 'variants___catalogProduct___productImage___accessTime'
  | 'variants___catalogProduct___productImage___changeTime'
  | 'variants___catalogProduct___productImage___birthTime'
  | 'variants___catalogProduct___productImage___root'
  | 'variants___catalogProduct___productImage___dir'
  | 'variants___catalogProduct___productImage___base'
  | 'variants___catalogProduct___productImage___ext'
  | 'variants___catalogProduct___productImage___name'
  | 'variants___catalogProduct___productImage___relativeDirectory'
  | 'variants___catalogProduct___productImage___dev'
  | 'variants___catalogProduct___productImage___mode'
  | 'variants___catalogProduct___productImage___nlink'
  | 'variants___catalogProduct___productImage___uid'
  | 'variants___catalogProduct___productImage___gid'
  | 'variants___catalogProduct___productImage___rdev'
  | 'variants___catalogProduct___productImage___ino'
  | 'variants___catalogProduct___productImage___atimeMs'
  | 'variants___catalogProduct___productImage___mtimeMs'
  | 'variants___catalogProduct___productImage___ctimeMs'
  | 'variants___catalogProduct___productImage___atime'
  | 'variants___catalogProduct___productImage___mtime'
  | 'variants___catalogProduct___productImage___ctime'
  | 'variants___catalogProduct___productImage___birthtime'
  | 'variants___catalogProduct___productImage___birthtimeMs'
  | 'variants___catalogProduct___productImage___blksize'
  | 'variants___catalogProduct___productImage___blocks'
  | 'variants___catalogProduct___productImage___url'
  | 'variants___catalogProduct___productImage___publicURL'
  | 'variants___catalogProduct___productImage___childrenImageSharp'
  | 'variants___catalogProduct___productImage___childrenMdx'
  | 'variants___catalogProduct___productImage___id'
  | 'variants___catalogProduct___productImage___children'
  | 'variants___variantImage___sourceInstanceName'
  | 'variants___variantImage___absolutePath'
  | 'variants___variantImage___relativePath'
  | 'variants___variantImage___extension'
  | 'variants___variantImage___size'
  | 'variants___variantImage___prettySize'
  | 'variants___variantImage___modifiedTime'
  | 'variants___variantImage___accessTime'
  | 'variants___variantImage___changeTime'
  | 'variants___variantImage___birthTime'
  | 'variants___variantImage___root'
  | 'variants___variantImage___dir'
  | 'variants___variantImage___base'
  | 'variants___variantImage___ext'
  | 'variants___variantImage___name'
  | 'variants___variantImage___relativeDirectory'
  | 'variants___variantImage___dev'
  | 'variants___variantImage___mode'
  | 'variants___variantImage___nlink'
  | 'variants___variantImage___uid'
  | 'variants___variantImage___gid'
  | 'variants___variantImage___rdev'
  | 'variants___variantImage___ino'
  | 'variants___variantImage___atimeMs'
  | 'variants___variantImage___mtimeMs'
  | 'variants___variantImage___ctimeMs'
  | 'variants___variantImage___atime'
  | 'variants___variantImage___mtime'
  | 'variants___variantImage___ctime'
  | 'variants___variantImage___birthtime'
  | 'variants___variantImage___birthtimeMs'
  | 'variants___variantImage___blksize'
  | 'variants___variantImage___blocks'
  | 'variants___variantImage___url'
  | 'variants___variantImage___publicURL'
  | 'variants___variantImage___childrenImageSharp'
  | 'variants___variantImage___childrenImageSharp___gatsbyImageData'
  | 'variants___variantImage___childrenImageSharp___id'
  | 'variants___variantImage___childrenImageSharp___children'
  | 'variants___variantImage___childImageSharp___gatsbyImageData'
  | 'variants___variantImage___childImageSharp___id'
  | 'variants___variantImage___childImageSharp___children'
  | 'variants___variantImage___childrenMdx'
  | 'variants___variantImage___childrenMdx___rawBody'
  | 'variants___variantImage___childrenMdx___fileAbsolutePath'
  | 'variants___variantImage___childrenMdx___slug'
  | 'variants___variantImage___childrenMdx___body'
  | 'variants___variantImage___childrenMdx___excerpt'
  | 'variants___variantImage___childrenMdx___headings'
  | 'variants___variantImage___childrenMdx___html'
  | 'variants___variantImage___childrenMdx___mdxAST'
  | 'variants___variantImage___childrenMdx___tableOfContents'
  | 'variants___variantImage___childrenMdx___timeToRead'
  | 'variants___variantImage___childrenMdx___id'
  | 'variants___variantImage___childrenMdx___children'
  | 'variants___variantImage___childMdx___rawBody'
  | 'variants___variantImage___childMdx___fileAbsolutePath'
  | 'variants___variantImage___childMdx___slug'
  | 'variants___variantImage___childMdx___body'
  | 'variants___variantImage___childMdx___excerpt'
  | 'variants___variantImage___childMdx___headings'
  | 'variants___variantImage___childMdx___html'
  | 'variants___variantImage___childMdx___mdxAST'
  | 'variants___variantImage___childMdx___tableOfContents'
  | 'variants___variantImage___childMdx___timeToRead'
  | 'variants___variantImage___childMdx___id'
  | 'variants___variantImage___childMdx___children'
  | 'variants___variantImage___id'
  | 'variants___variantImage___parent___id'
  | 'variants___variantImage___parent___children'
  | 'variants___variantImage___children'
  | 'variants___variantImage___children___id'
  | 'variants___variantImage___children___children'
  | 'variants___variantImage___internal___content'
  | 'variants___variantImage___internal___contentDigest'
  | 'variants___variantImage___internal___description'
  | 'variants___variantImage___internal___fieldOwners'
  | 'variants___variantImage___internal___ignoreType'
  | 'variants___variantImage___internal___mediaType'
  | 'variants___variantImage___internal___owner'
  | 'variants___variantImage___internal___type'
  | 'productImage___sourceInstanceName'
  | 'productImage___absolutePath'
  | 'productImage___relativePath'
  | 'productImage___extension'
  | 'productImage___size'
  | 'productImage___prettySize'
  | 'productImage___modifiedTime'
  | 'productImage___accessTime'
  | 'productImage___changeTime'
  | 'productImage___birthTime'
  | 'productImage___root'
  | 'productImage___dir'
  | 'productImage___base'
  | 'productImage___ext'
  | 'productImage___name'
  | 'productImage___relativeDirectory'
  | 'productImage___dev'
  | 'productImage___mode'
  | 'productImage___nlink'
  | 'productImage___uid'
  | 'productImage___gid'
  | 'productImage___rdev'
  | 'productImage___ino'
  | 'productImage___atimeMs'
  | 'productImage___mtimeMs'
  | 'productImage___ctimeMs'
  | 'productImage___atime'
  | 'productImage___mtime'
  | 'productImage___ctime'
  | 'productImage___birthtime'
  | 'productImage___birthtimeMs'
  | 'productImage___blksize'
  | 'productImage___blocks'
  | 'productImage___url'
  | 'productImage___publicURL'
  | 'productImage___childrenImageSharp'
  | 'productImage___childrenImageSharp___fixed___base64'
  | 'productImage___childrenImageSharp___fixed___tracedSVG'
  | 'productImage___childrenImageSharp___fixed___aspectRatio'
  | 'productImage___childrenImageSharp___fixed___width'
  | 'productImage___childrenImageSharp___fixed___height'
  | 'productImage___childrenImageSharp___fixed___src'
  | 'productImage___childrenImageSharp___fixed___srcSet'
  | 'productImage___childrenImageSharp___fixed___srcWebp'
  | 'productImage___childrenImageSharp___fixed___srcSetWebp'
  | 'productImage___childrenImageSharp___fixed___originalName'
  | 'productImage___childrenImageSharp___fluid___base64'
  | 'productImage___childrenImageSharp___fluid___tracedSVG'
  | 'productImage___childrenImageSharp___fluid___aspectRatio'
  | 'productImage___childrenImageSharp___fluid___src'
  | 'productImage___childrenImageSharp___fluid___srcSet'
  | 'productImage___childrenImageSharp___fluid___srcWebp'
  | 'productImage___childrenImageSharp___fluid___srcSetWebp'
  | 'productImage___childrenImageSharp___fluid___sizes'
  | 'productImage___childrenImageSharp___fluid___originalImg'
  | 'productImage___childrenImageSharp___fluid___originalName'
  | 'productImage___childrenImageSharp___fluid___presentationWidth'
  | 'productImage___childrenImageSharp___fluid___presentationHeight'
  | 'productImage___childrenImageSharp___gatsbyImageData'
  | 'productImage___childrenImageSharp___original___width'
  | 'productImage___childrenImageSharp___original___height'
  | 'productImage___childrenImageSharp___original___src'
  | 'productImage___childrenImageSharp___resize___src'
  | 'productImage___childrenImageSharp___resize___tracedSVG'
  | 'productImage___childrenImageSharp___resize___width'
  | 'productImage___childrenImageSharp___resize___height'
  | 'productImage___childrenImageSharp___resize___aspectRatio'
  | 'productImage___childrenImageSharp___resize___originalName'
  | 'productImage___childrenImageSharp___id'
  | 'productImage___childrenImageSharp___parent___id'
  | 'productImage___childrenImageSharp___parent___children'
  | 'productImage___childrenImageSharp___children'
  | 'productImage___childrenImageSharp___children___id'
  | 'productImage___childrenImageSharp___children___children'
  | 'productImage___childrenImageSharp___internal___content'
  | 'productImage___childrenImageSharp___internal___contentDigest'
  | 'productImage___childrenImageSharp___internal___description'
  | 'productImage___childrenImageSharp___internal___fieldOwners'
  | 'productImage___childrenImageSharp___internal___ignoreType'
  | 'productImage___childrenImageSharp___internal___mediaType'
  | 'productImage___childrenImageSharp___internal___owner'
  | 'productImage___childrenImageSharp___internal___type'
  | 'productImage___childImageSharp___fixed___base64'
  | 'productImage___childImageSharp___fixed___tracedSVG'
  | 'productImage___childImageSharp___fixed___aspectRatio'
  | 'productImage___childImageSharp___fixed___width'
  | 'productImage___childImageSharp___fixed___height'
  | 'productImage___childImageSharp___fixed___src'
  | 'productImage___childImageSharp___fixed___srcSet'
  | 'productImage___childImageSharp___fixed___srcWebp'
  | 'productImage___childImageSharp___fixed___srcSetWebp'
  | 'productImage___childImageSharp___fixed___originalName'
  | 'productImage___childImageSharp___fluid___base64'
  | 'productImage___childImageSharp___fluid___tracedSVG'
  | 'productImage___childImageSharp___fluid___aspectRatio'
  | 'productImage___childImageSharp___fluid___src'
  | 'productImage___childImageSharp___fluid___srcSet'
  | 'productImage___childImageSharp___fluid___srcWebp'
  | 'productImage___childImageSharp___fluid___srcSetWebp'
  | 'productImage___childImageSharp___fluid___sizes'
  | 'productImage___childImageSharp___fluid___originalImg'
  | 'productImage___childImageSharp___fluid___originalName'
  | 'productImage___childImageSharp___fluid___presentationWidth'
  | 'productImage___childImageSharp___fluid___presentationHeight'
  | 'productImage___childImageSharp___gatsbyImageData'
  | 'productImage___childImageSharp___original___width'
  | 'productImage___childImageSharp___original___height'
  | 'productImage___childImageSharp___original___src'
  | 'productImage___childImageSharp___resize___src'
  | 'productImage___childImageSharp___resize___tracedSVG'
  | 'productImage___childImageSharp___resize___width'
  | 'productImage___childImageSharp___resize___height'
  | 'productImage___childImageSharp___resize___aspectRatio'
  | 'productImage___childImageSharp___resize___originalName'
  | 'productImage___childImageSharp___id'
  | 'productImage___childImageSharp___parent___id'
  | 'productImage___childImageSharp___parent___children'
  | 'productImage___childImageSharp___children'
  | 'productImage___childImageSharp___children___id'
  | 'productImage___childImageSharp___children___children'
  | 'productImage___childImageSharp___internal___content'
  | 'productImage___childImageSharp___internal___contentDigest'
  | 'productImage___childImageSharp___internal___description'
  | 'productImage___childImageSharp___internal___fieldOwners'
  | 'productImage___childImageSharp___internal___ignoreType'
  | 'productImage___childImageSharp___internal___mediaType'
  | 'productImage___childImageSharp___internal___owner'
  | 'productImage___childImageSharp___internal___type'
  | 'productImage___childrenMdx'
  | 'productImage___childrenMdx___rawBody'
  | 'productImage___childrenMdx___fileAbsolutePath'
  | 'productImage___childrenMdx___frontmatter___title'
  | 'productImage___childrenMdx___frontmatter___date'
  | 'productImage___childrenMdx___frontmatter___published'
  | 'productImage___childrenMdx___frontmatter___customer'
  | 'productImage___childrenMdx___frontmatter___index'
  | 'productImage___childrenMdx___slug'
  | 'productImage___childrenMdx___body'
  | 'productImage___childrenMdx___excerpt'
  | 'productImage___childrenMdx___headings'
  | 'productImage___childrenMdx___headings___value'
  | 'productImage___childrenMdx___headings___depth'
  | 'productImage___childrenMdx___html'
  | 'productImage___childrenMdx___mdxAST'
  | 'productImage___childrenMdx___tableOfContents'
  | 'productImage___childrenMdx___timeToRead'
  | 'productImage___childrenMdx___wordCount___paragraphs'
  | 'productImage___childrenMdx___wordCount___sentences'
  | 'productImage___childrenMdx___wordCount___words'
  | 'productImage___childrenMdx___id'
  | 'productImage___childrenMdx___parent___id'
  | 'productImage___childrenMdx___parent___children'
  | 'productImage___childrenMdx___children'
  | 'productImage___childrenMdx___children___id'
  | 'productImage___childrenMdx___children___children'
  | 'productImage___childrenMdx___internal___content'
  | 'productImage___childrenMdx___internal___contentDigest'
  | 'productImage___childrenMdx___internal___description'
  | 'productImage___childrenMdx___internal___fieldOwners'
  | 'productImage___childrenMdx___internal___ignoreType'
  | 'productImage___childrenMdx___internal___mediaType'
  | 'productImage___childrenMdx___internal___owner'
  | 'productImage___childrenMdx___internal___type'
  | 'productImage___childMdx___rawBody'
  | 'productImage___childMdx___fileAbsolutePath'
  | 'productImage___childMdx___frontmatter___title'
  | 'productImage___childMdx___frontmatter___date'
  | 'productImage___childMdx___frontmatter___published'
  | 'productImage___childMdx___frontmatter___customer'
  | 'productImage___childMdx___frontmatter___index'
  | 'productImage___childMdx___slug'
  | 'productImage___childMdx___body'
  | 'productImage___childMdx___excerpt'
  | 'productImage___childMdx___headings'
  | 'productImage___childMdx___headings___value'
  | 'productImage___childMdx___headings___depth'
  | 'productImage___childMdx___html'
  | 'productImage___childMdx___mdxAST'
  | 'productImage___childMdx___tableOfContents'
  | 'productImage___childMdx___timeToRead'
  | 'productImage___childMdx___wordCount___paragraphs'
  | 'productImage___childMdx___wordCount___sentences'
  | 'productImage___childMdx___wordCount___words'
  | 'productImage___childMdx___id'
  | 'productImage___childMdx___parent___id'
  | 'productImage___childMdx___parent___children'
  | 'productImage___childMdx___children'
  | 'productImage___childMdx___children___id'
  | 'productImage___childMdx___children___children'
  | 'productImage___childMdx___internal___content'
  | 'productImage___childMdx___internal___contentDigest'
  | 'productImage___childMdx___internal___description'
  | 'productImage___childMdx___internal___fieldOwners'
  | 'productImage___childMdx___internal___ignoreType'
  | 'productImage___childMdx___internal___mediaType'
  | 'productImage___childMdx___internal___owner'
  | 'productImage___childMdx___internal___type'
  | 'productImage___id'
  | 'productImage___parent___id'
  | 'productImage___parent___parent___id'
  | 'productImage___parent___parent___children'
  | 'productImage___parent___children'
  | 'productImage___parent___children___id'
  | 'productImage___parent___children___children'
  | 'productImage___parent___internal___content'
  | 'productImage___parent___internal___contentDigest'
  | 'productImage___parent___internal___description'
  | 'productImage___parent___internal___fieldOwners'
  | 'productImage___parent___internal___ignoreType'
  | 'productImage___parent___internal___mediaType'
  | 'productImage___parent___internal___owner'
  | 'productImage___parent___internal___type'
  | 'productImage___children'
  | 'productImage___children___id'
  | 'productImage___children___parent___id'
  | 'productImage___children___parent___children'
  | 'productImage___children___children'
  | 'productImage___children___children___id'
  | 'productImage___children___children___children'
  | 'productImage___children___internal___content'
  | 'productImage___children___internal___contentDigest'
  | 'productImage___children___internal___description'
  | 'productImage___children___internal___fieldOwners'
  | 'productImage___children___internal___ignoreType'
  | 'productImage___children___internal___mediaType'
  | 'productImage___children___internal___owner'
  | 'productImage___children___internal___type'
  | 'productImage___internal___content'
  | 'productImage___internal___contentDigest'
  | 'productImage___internal___description'
  | 'productImage___internal___fieldOwners'
  | 'productImage___internal___ignoreType'
  | 'productImage___internal___mediaType'
  | 'productImage___internal___owner'
  | 'productImage___internal___type';

export type PrintfulProductGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<PrintfulProductEdge>;
  nodes: Array<PrintfulProduct>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type PrintfulProductSortInput = {
  fields?: Maybe<Array<Maybe<PrintfulProductFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type PrintfulCatalogVariantConnection = {
  totalCount: Scalars['Int'];
  edges: Array<PrintfulCatalogVariantEdge>;
  nodes: Array<PrintfulCatalogVariant>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<PrintfulCatalogVariantGroupConnection>;
};


export type PrintfulCatalogVariantConnectionDistinctArgs = {
  field: PrintfulCatalogVariantFieldsEnum;
};


export type PrintfulCatalogVariantConnectionMaxArgs = {
  field: PrintfulCatalogVariantFieldsEnum;
};


export type PrintfulCatalogVariantConnectionMinArgs = {
  field: PrintfulCatalogVariantFieldsEnum;
};


export type PrintfulCatalogVariantConnectionSumArgs = {
  field: PrintfulCatalogVariantFieldsEnum;
};


export type PrintfulCatalogVariantConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: PrintfulCatalogVariantFieldsEnum;
};

export type PrintfulCatalogVariantEdge = {
  next?: Maybe<PrintfulCatalogVariant>;
  node: PrintfulCatalogVariant;
  previous?: Maybe<PrintfulCatalogVariant>;
};

export type PrintfulCatalogVariantFieldsEnum =
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'name'
  | 'size'
  | 'color'
  | 'color_code'
  | 'image'
  | 'price'
  | 'in_stock'
  | 'availability_regions___US'
  | 'availability_regions___CA'
  | 'availability_regions___MX'
  | 'availability_regions___EU'
  | 'availability_status'
  | 'availability_status___region'
  | 'availability_status___status'
  | 'product_id'
  | 'retail_price'
  | 'variantImage___sourceInstanceName'
  | 'variantImage___absolutePath'
  | 'variantImage___relativePath'
  | 'variantImage___extension'
  | 'variantImage___size'
  | 'variantImage___prettySize'
  | 'variantImage___modifiedTime'
  | 'variantImage___accessTime'
  | 'variantImage___changeTime'
  | 'variantImage___birthTime'
  | 'variantImage___root'
  | 'variantImage___dir'
  | 'variantImage___base'
  | 'variantImage___ext'
  | 'variantImage___name'
  | 'variantImage___relativeDirectory'
  | 'variantImage___dev'
  | 'variantImage___mode'
  | 'variantImage___nlink'
  | 'variantImage___uid'
  | 'variantImage___gid'
  | 'variantImage___rdev'
  | 'variantImage___ino'
  | 'variantImage___atimeMs'
  | 'variantImage___mtimeMs'
  | 'variantImage___ctimeMs'
  | 'variantImage___atime'
  | 'variantImage___mtime'
  | 'variantImage___ctime'
  | 'variantImage___birthtime'
  | 'variantImage___birthtimeMs'
  | 'variantImage___blksize'
  | 'variantImage___blocks'
  | 'variantImage___url'
  | 'variantImage___publicURL'
  | 'variantImage___childrenImageSharp'
  | 'variantImage___childrenImageSharp___fixed___base64'
  | 'variantImage___childrenImageSharp___fixed___tracedSVG'
  | 'variantImage___childrenImageSharp___fixed___aspectRatio'
  | 'variantImage___childrenImageSharp___fixed___width'
  | 'variantImage___childrenImageSharp___fixed___height'
  | 'variantImage___childrenImageSharp___fixed___src'
  | 'variantImage___childrenImageSharp___fixed___srcSet'
  | 'variantImage___childrenImageSharp___fixed___srcWebp'
  | 'variantImage___childrenImageSharp___fixed___srcSetWebp'
  | 'variantImage___childrenImageSharp___fixed___originalName'
  | 'variantImage___childrenImageSharp___fluid___base64'
  | 'variantImage___childrenImageSharp___fluid___tracedSVG'
  | 'variantImage___childrenImageSharp___fluid___aspectRatio'
  | 'variantImage___childrenImageSharp___fluid___src'
  | 'variantImage___childrenImageSharp___fluid___srcSet'
  | 'variantImage___childrenImageSharp___fluid___srcWebp'
  | 'variantImage___childrenImageSharp___fluid___srcSetWebp'
  | 'variantImage___childrenImageSharp___fluid___sizes'
  | 'variantImage___childrenImageSharp___fluid___originalImg'
  | 'variantImage___childrenImageSharp___fluid___originalName'
  | 'variantImage___childrenImageSharp___fluid___presentationWidth'
  | 'variantImage___childrenImageSharp___fluid___presentationHeight'
  | 'variantImage___childrenImageSharp___gatsbyImageData'
  | 'variantImage___childrenImageSharp___original___width'
  | 'variantImage___childrenImageSharp___original___height'
  | 'variantImage___childrenImageSharp___original___src'
  | 'variantImage___childrenImageSharp___resize___src'
  | 'variantImage___childrenImageSharp___resize___tracedSVG'
  | 'variantImage___childrenImageSharp___resize___width'
  | 'variantImage___childrenImageSharp___resize___height'
  | 'variantImage___childrenImageSharp___resize___aspectRatio'
  | 'variantImage___childrenImageSharp___resize___originalName'
  | 'variantImage___childrenImageSharp___id'
  | 'variantImage___childrenImageSharp___parent___id'
  | 'variantImage___childrenImageSharp___parent___children'
  | 'variantImage___childrenImageSharp___children'
  | 'variantImage___childrenImageSharp___children___id'
  | 'variantImage___childrenImageSharp___children___children'
  | 'variantImage___childrenImageSharp___internal___content'
  | 'variantImage___childrenImageSharp___internal___contentDigest'
  | 'variantImage___childrenImageSharp___internal___description'
  | 'variantImage___childrenImageSharp___internal___fieldOwners'
  | 'variantImage___childrenImageSharp___internal___ignoreType'
  | 'variantImage___childrenImageSharp___internal___mediaType'
  | 'variantImage___childrenImageSharp___internal___owner'
  | 'variantImage___childrenImageSharp___internal___type'
  | 'variantImage___childImageSharp___fixed___base64'
  | 'variantImage___childImageSharp___fixed___tracedSVG'
  | 'variantImage___childImageSharp___fixed___aspectRatio'
  | 'variantImage___childImageSharp___fixed___width'
  | 'variantImage___childImageSharp___fixed___height'
  | 'variantImage___childImageSharp___fixed___src'
  | 'variantImage___childImageSharp___fixed___srcSet'
  | 'variantImage___childImageSharp___fixed___srcWebp'
  | 'variantImage___childImageSharp___fixed___srcSetWebp'
  | 'variantImage___childImageSharp___fixed___originalName'
  | 'variantImage___childImageSharp___fluid___base64'
  | 'variantImage___childImageSharp___fluid___tracedSVG'
  | 'variantImage___childImageSharp___fluid___aspectRatio'
  | 'variantImage___childImageSharp___fluid___src'
  | 'variantImage___childImageSharp___fluid___srcSet'
  | 'variantImage___childImageSharp___fluid___srcWebp'
  | 'variantImage___childImageSharp___fluid___srcSetWebp'
  | 'variantImage___childImageSharp___fluid___sizes'
  | 'variantImage___childImageSharp___fluid___originalImg'
  | 'variantImage___childImageSharp___fluid___originalName'
  | 'variantImage___childImageSharp___fluid___presentationWidth'
  | 'variantImage___childImageSharp___fluid___presentationHeight'
  | 'variantImage___childImageSharp___gatsbyImageData'
  | 'variantImage___childImageSharp___original___width'
  | 'variantImage___childImageSharp___original___height'
  | 'variantImage___childImageSharp___original___src'
  | 'variantImage___childImageSharp___resize___src'
  | 'variantImage___childImageSharp___resize___tracedSVG'
  | 'variantImage___childImageSharp___resize___width'
  | 'variantImage___childImageSharp___resize___height'
  | 'variantImage___childImageSharp___resize___aspectRatio'
  | 'variantImage___childImageSharp___resize___originalName'
  | 'variantImage___childImageSharp___id'
  | 'variantImage___childImageSharp___parent___id'
  | 'variantImage___childImageSharp___parent___children'
  | 'variantImage___childImageSharp___children'
  | 'variantImage___childImageSharp___children___id'
  | 'variantImage___childImageSharp___children___children'
  | 'variantImage___childImageSharp___internal___content'
  | 'variantImage___childImageSharp___internal___contentDigest'
  | 'variantImage___childImageSharp___internal___description'
  | 'variantImage___childImageSharp___internal___fieldOwners'
  | 'variantImage___childImageSharp___internal___ignoreType'
  | 'variantImage___childImageSharp___internal___mediaType'
  | 'variantImage___childImageSharp___internal___owner'
  | 'variantImage___childImageSharp___internal___type'
  | 'variantImage___childrenMdx'
  | 'variantImage___childrenMdx___rawBody'
  | 'variantImage___childrenMdx___fileAbsolutePath'
  | 'variantImage___childrenMdx___frontmatter___title'
  | 'variantImage___childrenMdx___frontmatter___date'
  | 'variantImage___childrenMdx___frontmatter___published'
  | 'variantImage___childrenMdx___frontmatter___customer'
  | 'variantImage___childrenMdx___frontmatter___index'
  | 'variantImage___childrenMdx___slug'
  | 'variantImage___childrenMdx___body'
  | 'variantImage___childrenMdx___excerpt'
  | 'variantImage___childrenMdx___headings'
  | 'variantImage___childrenMdx___headings___value'
  | 'variantImage___childrenMdx___headings___depth'
  | 'variantImage___childrenMdx___html'
  | 'variantImage___childrenMdx___mdxAST'
  | 'variantImage___childrenMdx___tableOfContents'
  | 'variantImage___childrenMdx___timeToRead'
  | 'variantImage___childrenMdx___wordCount___paragraphs'
  | 'variantImage___childrenMdx___wordCount___sentences'
  | 'variantImage___childrenMdx___wordCount___words'
  | 'variantImage___childrenMdx___id'
  | 'variantImage___childrenMdx___parent___id'
  | 'variantImage___childrenMdx___parent___children'
  | 'variantImage___childrenMdx___children'
  | 'variantImage___childrenMdx___children___id'
  | 'variantImage___childrenMdx___children___children'
  | 'variantImage___childrenMdx___internal___content'
  | 'variantImage___childrenMdx___internal___contentDigest'
  | 'variantImage___childrenMdx___internal___description'
  | 'variantImage___childrenMdx___internal___fieldOwners'
  | 'variantImage___childrenMdx___internal___ignoreType'
  | 'variantImage___childrenMdx___internal___mediaType'
  | 'variantImage___childrenMdx___internal___owner'
  | 'variantImage___childrenMdx___internal___type'
  | 'variantImage___childMdx___rawBody'
  | 'variantImage___childMdx___fileAbsolutePath'
  | 'variantImage___childMdx___frontmatter___title'
  | 'variantImage___childMdx___frontmatter___date'
  | 'variantImage___childMdx___frontmatter___published'
  | 'variantImage___childMdx___frontmatter___customer'
  | 'variantImage___childMdx___frontmatter___index'
  | 'variantImage___childMdx___slug'
  | 'variantImage___childMdx___body'
  | 'variantImage___childMdx___excerpt'
  | 'variantImage___childMdx___headings'
  | 'variantImage___childMdx___headings___value'
  | 'variantImage___childMdx___headings___depth'
  | 'variantImage___childMdx___html'
  | 'variantImage___childMdx___mdxAST'
  | 'variantImage___childMdx___tableOfContents'
  | 'variantImage___childMdx___timeToRead'
  | 'variantImage___childMdx___wordCount___paragraphs'
  | 'variantImage___childMdx___wordCount___sentences'
  | 'variantImage___childMdx___wordCount___words'
  | 'variantImage___childMdx___id'
  | 'variantImage___childMdx___parent___id'
  | 'variantImage___childMdx___parent___children'
  | 'variantImage___childMdx___children'
  | 'variantImage___childMdx___children___id'
  | 'variantImage___childMdx___children___children'
  | 'variantImage___childMdx___internal___content'
  | 'variantImage___childMdx___internal___contentDigest'
  | 'variantImage___childMdx___internal___description'
  | 'variantImage___childMdx___internal___fieldOwners'
  | 'variantImage___childMdx___internal___ignoreType'
  | 'variantImage___childMdx___internal___mediaType'
  | 'variantImage___childMdx___internal___owner'
  | 'variantImage___childMdx___internal___type'
  | 'variantImage___id'
  | 'variantImage___parent___id'
  | 'variantImage___parent___parent___id'
  | 'variantImage___parent___parent___children'
  | 'variantImage___parent___children'
  | 'variantImage___parent___children___id'
  | 'variantImage___parent___children___children'
  | 'variantImage___parent___internal___content'
  | 'variantImage___parent___internal___contentDigest'
  | 'variantImage___parent___internal___description'
  | 'variantImage___parent___internal___fieldOwners'
  | 'variantImage___parent___internal___ignoreType'
  | 'variantImage___parent___internal___mediaType'
  | 'variantImage___parent___internal___owner'
  | 'variantImage___parent___internal___type'
  | 'variantImage___children'
  | 'variantImage___children___id'
  | 'variantImage___children___parent___id'
  | 'variantImage___children___parent___children'
  | 'variantImage___children___children'
  | 'variantImage___children___children___id'
  | 'variantImage___children___children___children'
  | 'variantImage___children___internal___content'
  | 'variantImage___children___internal___contentDigest'
  | 'variantImage___children___internal___description'
  | 'variantImage___children___internal___fieldOwners'
  | 'variantImage___children___internal___ignoreType'
  | 'variantImage___children___internal___mediaType'
  | 'variantImage___children___internal___owner'
  | 'variantImage___children___internal___type'
  | 'variantImage___internal___content'
  | 'variantImage___internal___contentDigest'
  | 'variantImage___internal___description'
  | 'variantImage___internal___fieldOwners'
  | 'variantImage___internal___ignoreType'
  | 'variantImage___internal___mediaType'
  | 'variantImage___internal___owner'
  | 'variantImage___internal___type';

export type PrintfulCatalogVariantGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<PrintfulCatalogVariantEdge>;
  nodes: Array<PrintfulCatalogVariant>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type PrintfulCatalogVariantSortInput = {
  fields?: Maybe<Array<Maybe<PrintfulCatalogVariantFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type PrintfulVariantConnection = {
  totalCount: Scalars['Int'];
  edges: Array<PrintfulVariantEdge>;
  nodes: Array<PrintfulVariant>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<PrintfulVariantGroupConnection>;
};


export type PrintfulVariantConnectionDistinctArgs = {
  field: PrintfulVariantFieldsEnum;
};


export type PrintfulVariantConnectionMaxArgs = {
  field: PrintfulVariantFieldsEnum;
};


export type PrintfulVariantConnectionMinArgs = {
  field: PrintfulVariantFieldsEnum;
};


export type PrintfulVariantConnectionSumArgs = {
  field: PrintfulVariantFieldsEnum;
};


export type PrintfulVariantConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: PrintfulVariantFieldsEnum;
};

export type PrintfulVariantEdge = {
  next?: Maybe<PrintfulVariant>;
  node: PrintfulVariant;
  previous?: Maybe<PrintfulVariant>;
};

export type PrintfulVariantFieldsEnum =
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'external_id'
  | 'sync_product_id'
  | 'name'
  | 'synced'
  | 'variant_id'
  | 'retail_price'
  | 'sku'
  | 'currency'
  | 'product___variant_id'
  | 'product___product_id'
  | 'product___image'
  | 'product___name'
  | 'files'
  | 'files___id'
  | 'files___type'
  | 'files___hash'
  | 'files___filename'
  | 'files___mime_type'
  | 'files___size'
  | 'files___width'
  | 'files___height'
  | 'files___dpi'
  | 'files___status'
  | 'files___created'
  | 'files___thumbnail_url'
  | 'files___preview_url'
  | 'files___visible'
  | 'options'
  | 'options___id'
  | 'options___value'
  | 'is_ignored'
  | 'slug'
  | 'parentProduct___id'
  | 'parentProduct___parent___id'
  | 'parentProduct___parent___parent___id'
  | 'parentProduct___parent___parent___children'
  | 'parentProduct___parent___children'
  | 'parentProduct___parent___children___id'
  | 'parentProduct___parent___children___children'
  | 'parentProduct___parent___internal___content'
  | 'parentProduct___parent___internal___contentDigest'
  | 'parentProduct___parent___internal___description'
  | 'parentProduct___parent___internal___fieldOwners'
  | 'parentProduct___parent___internal___ignoreType'
  | 'parentProduct___parent___internal___mediaType'
  | 'parentProduct___parent___internal___owner'
  | 'parentProduct___parent___internal___type'
  | 'parentProduct___children'
  | 'parentProduct___children___id'
  | 'parentProduct___children___parent___id'
  | 'parentProduct___children___parent___children'
  | 'parentProduct___children___children'
  | 'parentProduct___children___children___id'
  | 'parentProduct___children___children___children'
  | 'parentProduct___children___internal___content'
  | 'parentProduct___children___internal___contentDigest'
  | 'parentProduct___children___internal___description'
  | 'parentProduct___children___internal___fieldOwners'
  | 'parentProduct___children___internal___ignoreType'
  | 'parentProduct___children___internal___mediaType'
  | 'parentProduct___children___internal___owner'
  | 'parentProduct___children___internal___type'
  | 'parentProduct___internal___content'
  | 'parentProduct___internal___contentDigest'
  | 'parentProduct___internal___description'
  | 'parentProduct___internal___fieldOwners'
  | 'parentProduct___internal___ignoreType'
  | 'parentProduct___internal___mediaType'
  | 'parentProduct___internal___owner'
  | 'parentProduct___internal___type'
  | 'parentProduct___external_id'
  | 'parentProduct___name'
  | 'parentProduct___synced'
  | 'parentProduct___thumbnail_url'
  | 'parentProduct___is_ignored'
  | 'parentProduct___slug'
  | 'parentProduct___variants'
  | 'parentProduct___variants___id'
  | 'parentProduct___variants___parent___id'
  | 'parentProduct___variants___parent___children'
  | 'parentProduct___variants___children'
  | 'parentProduct___variants___children___id'
  | 'parentProduct___variants___children___children'
  | 'parentProduct___variants___internal___content'
  | 'parentProduct___variants___internal___contentDigest'
  | 'parentProduct___variants___internal___description'
  | 'parentProduct___variants___internal___fieldOwners'
  | 'parentProduct___variants___internal___ignoreType'
  | 'parentProduct___variants___internal___mediaType'
  | 'parentProduct___variants___internal___owner'
  | 'parentProduct___variants___internal___type'
  | 'parentProduct___variants___external_id'
  | 'parentProduct___variants___sync_product_id'
  | 'parentProduct___variants___name'
  | 'parentProduct___variants___synced'
  | 'parentProduct___variants___variant_id'
  | 'parentProduct___variants___retail_price'
  | 'parentProduct___variants___sku'
  | 'parentProduct___variants___currency'
  | 'parentProduct___variants___product___variant_id'
  | 'parentProduct___variants___product___product_id'
  | 'parentProduct___variants___product___image'
  | 'parentProduct___variants___product___name'
  | 'parentProduct___variants___files'
  | 'parentProduct___variants___files___id'
  | 'parentProduct___variants___files___type'
  | 'parentProduct___variants___files___hash'
  | 'parentProduct___variants___files___filename'
  | 'parentProduct___variants___files___mime_type'
  | 'parentProduct___variants___files___size'
  | 'parentProduct___variants___files___width'
  | 'parentProduct___variants___files___height'
  | 'parentProduct___variants___files___dpi'
  | 'parentProduct___variants___files___status'
  | 'parentProduct___variants___files___created'
  | 'parentProduct___variants___files___thumbnail_url'
  | 'parentProduct___variants___files___preview_url'
  | 'parentProduct___variants___files___visible'
  | 'parentProduct___variants___options'
  | 'parentProduct___variants___options___id'
  | 'parentProduct___variants___options___value'
  | 'parentProduct___variants___is_ignored'
  | 'parentProduct___variants___slug'
  | 'parentProduct___variants___parentProduct___id'
  | 'parentProduct___variants___parentProduct___children'
  | 'parentProduct___variants___parentProduct___external_id'
  | 'parentProduct___variants___parentProduct___name'
  | 'parentProduct___variants___parentProduct___synced'
  | 'parentProduct___variants___parentProduct___thumbnail_url'
  | 'parentProduct___variants___parentProduct___is_ignored'
  | 'parentProduct___variants___parentProduct___slug'
  | 'parentProduct___variants___parentProduct___variants'
  | 'parentProduct___variants___catalogVariant___id'
  | 'parentProduct___variants___catalogVariant___children'
  | 'parentProduct___variants___catalogVariant___name'
  | 'parentProduct___variants___catalogVariant___size'
  | 'parentProduct___variants___catalogVariant___color'
  | 'parentProduct___variants___catalogVariant___color_code'
  | 'parentProduct___variants___catalogVariant___image'
  | 'parentProduct___variants___catalogVariant___price'
  | 'parentProduct___variants___catalogVariant___in_stock'
  | 'parentProduct___variants___catalogVariant___availability_status'
  | 'parentProduct___variants___catalogVariant___product_id'
  | 'parentProduct___variants___catalogVariant___retail_price'
  | 'parentProduct___variants___catalogProduct___id'
  | 'parentProduct___variants___catalogProduct___children'
  | 'parentProduct___variants___catalogProduct___type'
  | 'parentProduct___variants___catalogProduct___type_name'
  | 'parentProduct___variants___catalogProduct___brand'
  | 'parentProduct___variants___catalogProduct___model'
  | 'parentProduct___variants___catalogProduct___image'
  | 'parentProduct___variants___catalogProduct___variant_count'
  | 'parentProduct___variants___catalogProduct___currency'
  | 'parentProduct___variants___catalogProduct___files'
  | 'parentProduct___variants___catalogProduct___options'
  | 'parentProduct___variants___catalogProduct___is_discontinued'
  | 'parentProduct___variants___catalogProduct___description'
  | 'parentProduct___variants___variantImage___sourceInstanceName'
  | 'parentProduct___variants___variantImage___absolutePath'
  | 'parentProduct___variants___variantImage___relativePath'
  | 'parentProduct___variants___variantImage___extension'
  | 'parentProduct___variants___variantImage___size'
  | 'parentProduct___variants___variantImage___prettySize'
  | 'parentProduct___variants___variantImage___modifiedTime'
  | 'parentProduct___variants___variantImage___accessTime'
  | 'parentProduct___variants___variantImage___changeTime'
  | 'parentProduct___variants___variantImage___birthTime'
  | 'parentProduct___variants___variantImage___root'
  | 'parentProduct___variants___variantImage___dir'
  | 'parentProduct___variants___variantImage___base'
  | 'parentProduct___variants___variantImage___ext'
  | 'parentProduct___variants___variantImage___name'
  | 'parentProduct___variants___variantImage___relativeDirectory'
  | 'parentProduct___variants___variantImage___dev'
  | 'parentProduct___variants___variantImage___mode'
  | 'parentProduct___variants___variantImage___nlink'
  | 'parentProduct___variants___variantImage___uid'
  | 'parentProduct___variants___variantImage___gid'
  | 'parentProduct___variants___variantImage___rdev'
  | 'parentProduct___variants___variantImage___ino'
  | 'parentProduct___variants___variantImage___atimeMs'
  | 'parentProduct___variants___variantImage___mtimeMs'
  | 'parentProduct___variants___variantImage___ctimeMs'
  | 'parentProduct___variants___variantImage___atime'
  | 'parentProduct___variants___variantImage___mtime'
  | 'parentProduct___variants___variantImage___ctime'
  | 'parentProduct___variants___variantImage___birthtime'
  | 'parentProduct___variants___variantImage___birthtimeMs'
  | 'parentProduct___variants___variantImage___blksize'
  | 'parentProduct___variants___variantImage___blocks'
  | 'parentProduct___variants___variantImage___url'
  | 'parentProduct___variants___variantImage___publicURL'
  | 'parentProduct___variants___variantImage___childrenImageSharp'
  | 'parentProduct___variants___variantImage___childrenMdx'
  | 'parentProduct___variants___variantImage___id'
  | 'parentProduct___variants___variantImage___children'
  | 'parentProduct___productImage___sourceInstanceName'
  | 'parentProduct___productImage___absolutePath'
  | 'parentProduct___productImage___relativePath'
  | 'parentProduct___productImage___extension'
  | 'parentProduct___productImage___size'
  | 'parentProduct___productImage___prettySize'
  | 'parentProduct___productImage___modifiedTime'
  | 'parentProduct___productImage___accessTime'
  | 'parentProduct___productImage___changeTime'
  | 'parentProduct___productImage___birthTime'
  | 'parentProduct___productImage___root'
  | 'parentProduct___productImage___dir'
  | 'parentProduct___productImage___base'
  | 'parentProduct___productImage___ext'
  | 'parentProduct___productImage___name'
  | 'parentProduct___productImage___relativeDirectory'
  | 'parentProduct___productImage___dev'
  | 'parentProduct___productImage___mode'
  | 'parentProduct___productImage___nlink'
  | 'parentProduct___productImage___uid'
  | 'parentProduct___productImage___gid'
  | 'parentProduct___productImage___rdev'
  | 'parentProduct___productImage___ino'
  | 'parentProduct___productImage___atimeMs'
  | 'parentProduct___productImage___mtimeMs'
  | 'parentProduct___productImage___ctimeMs'
  | 'parentProduct___productImage___atime'
  | 'parentProduct___productImage___mtime'
  | 'parentProduct___productImage___ctime'
  | 'parentProduct___productImage___birthtime'
  | 'parentProduct___productImage___birthtimeMs'
  | 'parentProduct___productImage___blksize'
  | 'parentProduct___productImage___blocks'
  | 'parentProduct___productImage___url'
  | 'parentProduct___productImage___publicURL'
  | 'parentProduct___productImage___childrenImageSharp'
  | 'parentProduct___productImage___childrenImageSharp___gatsbyImageData'
  | 'parentProduct___productImage___childrenImageSharp___id'
  | 'parentProduct___productImage___childrenImageSharp___children'
  | 'parentProduct___productImage___childImageSharp___gatsbyImageData'
  | 'parentProduct___productImage___childImageSharp___id'
  | 'parentProduct___productImage___childImageSharp___children'
  | 'parentProduct___productImage___childrenMdx'
  | 'parentProduct___productImage___childrenMdx___rawBody'
  | 'parentProduct___productImage___childrenMdx___fileAbsolutePath'
  | 'parentProduct___productImage___childrenMdx___slug'
  | 'parentProduct___productImage___childrenMdx___body'
  | 'parentProduct___productImage___childrenMdx___excerpt'
  | 'parentProduct___productImage___childrenMdx___headings'
  | 'parentProduct___productImage___childrenMdx___html'
  | 'parentProduct___productImage___childrenMdx___mdxAST'
  | 'parentProduct___productImage___childrenMdx___tableOfContents'
  | 'parentProduct___productImage___childrenMdx___timeToRead'
  | 'parentProduct___productImage___childrenMdx___id'
  | 'parentProduct___productImage___childrenMdx___children'
  | 'parentProduct___productImage___childMdx___rawBody'
  | 'parentProduct___productImage___childMdx___fileAbsolutePath'
  | 'parentProduct___productImage___childMdx___slug'
  | 'parentProduct___productImage___childMdx___body'
  | 'parentProduct___productImage___childMdx___excerpt'
  | 'parentProduct___productImage___childMdx___headings'
  | 'parentProduct___productImage___childMdx___html'
  | 'parentProduct___productImage___childMdx___mdxAST'
  | 'parentProduct___productImage___childMdx___tableOfContents'
  | 'parentProduct___productImage___childMdx___timeToRead'
  | 'parentProduct___productImage___childMdx___id'
  | 'parentProduct___productImage___childMdx___children'
  | 'parentProduct___productImage___id'
  | 'parentProduct___productImage___parent___id'
  | 'parentProduct___productImage___parent___children'
  | 'parentProduct___productImage___children'
  | 'parentProduct___productImage___children___id'
  | 'parentProduct___productImage___children___children'
  | 'parentProduct___productImage___internal___content'
  | 'parentProduct___productImage___internal___contentDigest'
  | 'parentProduct___productImage___internal___description'
  | 'parentProduct___productImage___internal___fieldOwners'
  | 'parentProduct___productImage___internal___ignoreType'
  | 'parentProduct___productImage___internal___mediaType'
  | 'parentProduct___productImage___internal___owner'
  | 'parentProduct___productImage___internal___type'
  | 'catalogVariant___id'
  | 'catalogVariant___parent___id'
  | 'catalogVariant___parent___parent___id'
  | 'catalogVariant___parent___parent___children'
  | 'catalogVariant___parent___children'
  | 'catalogVariant___parent___children___id'
  | 'catalogVariant___parent___children___children'
  | 'catalogVariant___parent___internal___content'
  | 'catalogVariant___parent___internal___contentDigest'
  | 'catalogVariant___parent___internal___description'
  | 'catalogVariant___parent___internal___fieldOwners'
  | 'catalogVariant___parent___internal___ignoreType'
  | 'catalogVariant___parent___internal___mediaType'
  | 'catalogVariant___parent___internal___owner'
  | 'catalogVariant___parent___internal___type'
  | 'catalogVariant___children'
  | 'catalogVariant___children___id'
  | 'catalogVariant___children___parent___id'
  | 'catalogVariant___children___parent___children'
  | 'catalogVariant___children___children'
  | 'catalogVariant___children___children___id'
  | 'catalogVariant___children___children___children'
  | 'catalogVariant___children___internal___content'
  | 'catalogVariant___children___internal___contentDigest'
  | 'catalogVariant___children___internal___description'
  | 'catalogVariant___children___internal___fieldOwners'
  | 'catalogVariant___children___internal___ignoreType'
  | 'catalogVariant___children___internal___mediaType'
  | 'catalogVariant___children___internal___owner'
  | 'catalogVariant___children___internal___type'
  | 'catalogVariant___internal___content'
  | 'catalogVariant___internal___contentDigest'
  | 'catalogVariant___internal___description'
  | 'catalogVariant___internal___fieldOwners'
  | 'catalogVariant___internal___ignoreType'
  | 'catalogVariant___internal___mediaType'
  | 'catalogVariant___internal___owner'
  | 'catalogVariant___internal___type'
  | 'catalogVariant___name'
  | 'catalogVariant___size'
  | 'catalogVariant___color'
  | 'catalogVariant___color_code'
  | 'catalogVariant___image'
  | 'catalogVariant___price'
  | 'catalogVariant___in_stock'
  | 'catalogVariant___availability_regions___US'
  | 'catalogVariant___availability_regions___CA'
  | 'catalogVariant___availability_regions___MX'
  | 'catalogVariant___availability_regions___EU'
  | 'catalogVariant___availability_status'
  | 'catalogVariant___availability_status___region'
  | 'catalogVariant___availability_status___status'
  | 'catalogVariant___product_id'
  | 'catalogVariant___retail_price'
  | 'catalogVariant___variantImage___sourceInstanceName'
  | 'catalogVariant___variantImage___absolutePath'
  | 'catalogVariant___variantImage___relativePath'
  | 'catalogVariant___variantImage___extension'
  | 'catalogVariant___variantImage___size'
  | 'catalogVariant___variantImage___prettySize'
  | 'catalogVariant___variantImage___modifiedTime'
  | 'catalogVariant___variantImage___accessTime'
  | 'catalogVariant___variantImage___changeTime'
  | 'catalogVariant___variantImage___birthTime'
  | 'catalogVariant___variantImage___root'
  | 'catalogVariant___variantImage___dir'
  | 'catalogVariant___variantImage___base'
  | 'catalogVariant___variantImage___ext'
  | 'catalogVariant___variantImage___name'
  | 'catalogVariant___variantImage___relativeDirectory'
  | 'catalogVariant___variantImage___dev'
  | 'catalogVariant___variantImage___mode'
  | 'catalogVariant___variantImage___nlink'
  | 'catalogVariant___variantImage___uid'
  | 'catalogVariant___variantImage___gid'
  | 'catalogVariant___variantImage___rdev'
  | 'catalogVariant___variantImage___ino'
  | 'catalogVariant___variantImage___atimeMs'
  | 'catalogVariant___variantImage___mtimeMs'
  | 'catalogVariant___variantImage___ctimeMs'
  | 'catalogVariant___variantImage___atime'
  | 'catalogVariant___variantImage___mtime'
  | 'catalogVariant___variantImage___ctime'
  | 'catalogVariant___variantImage___birthtime'
  | 'catalogVariant___variantImage___birthtimeMs'
  | 'catalogVariant___variantImage___blksize'
  | 'catalogVariant___variantImage___blocks'
  | 'catalogVariant___variantImage___url'
  | 'catalogVariant___variantImage___publicURL'
  | 'catalogVariant___variantImage___childrenImageSharp'
  | 'catalogVariant___variantImage___childrenImageSharp___gatsbyImageData'
  | 'catalogVariant___variantImage___childrenImageSharp___id'
  | 'catalogVariant___variantImage___childrenImageSharp___children'
  | 'catalogVariant___variantImage___childImageSharp___gatsbyImageData'
  | 'catalogVariant___variantImage___childImageSharp___id'
  | 'catalogVariant___variantImage___childImageSharp___children'
  | 'catalogVariant___variantImage___childrenMdx'
  | 'catalogVariant___variantImage___childrenMdx___rawBody'
  | 'catalogVariant___variantImage___childrenMdx___fileAbsolutePath'
  | 'catalogVariant___variantImage___childrenMdx___slug'
  | 'catalogVariant___variantImage___childrenMdx___body'
  | 'catalogVariant___variantImage___childrenMdx___excerpt'
  | 'catalogVariant___variantImage___childrenMdx___headings'
  | 'catalogVariant___variantImage___childrenMdx___html'
  | 'catalogVariant___variantImage___childrenMdx___mdxAST'
  | 'catalogVariant___variantImage___childrenMdx___tableOfContents'
  | 'catalogVariant___variantImage___childrenMdx___timeToRead'
  | 'catalogVariant___variantImage___childrenMdx___id'
  | 'catalogVariant___variantImage___childrenMdx___children'
  | 'catalogVariant___variantImage___childMdx___rawBody'
  | 'catalogVariant___variantImage___childMdx___fileAbsolutePath'
  | 'catalogVariant___variantImage___childMdx___slug'
  | 'catalogVariant___variantImage___childMdx___body'
  | 'catalogVariant___variantImage___childMdx___excerpt'
  | 'catalogVariant___variantImage___childMdx___headings'
  | 'catalogVariant___variantImage___childMdx___html'
  | 'catalogVariant___variantImage___childMdx___mdxAST'
  | 'catalogVariant___variantImage___childMdx___tableOfContents'
  | 'catalogVariant___variantImage___childMdx___timeToRead'
  | 'catalogVariant___variantImage___childMdx___id'
  | 'catalogVariant___variantImage___childMdx___children'
  | 'catalogVariant___variantImage___id'
  | 'catalogVariant___variantImage___parent___id'
  | 'catalogVariant___variantImage___parent___children'
  | 'catalogVariant___variantImage___children'
  | 'catalogVariant___variantImage___children___id'
  | 'catalogVariant___variantImage___children___children'
  | 'catalogVariant___variantImage___internal___content'
  | 'catalogVariant___variantImage___internal___contentDigest'
  | 'catalogVariant___variantImage___internal___description'
  | 'catalogVariant___variantImage___internal___fieldOwners'
  | 'catalogVariant___variantImage___internal___ignoreType'
  | 'catalogVariant___variantImage___internal___mediaType'
  | 'catalogVariant___variantImage___internal___owner'
  | 'catalogVariant___variantImage___internal___type'
  | 'catalogProduct___id'
  | 'catalogProduct___parent___id'
  | 'catalogProduct___parent___parent___id'
  | 'catalogProduct___parent___parent___children'
  | 'catalogProduct___parent___children'
  | 'catalogProduct___parent___children___id'
  | 'catalogProduct___parent___children___children'
  | 'catalogProduct___parent___internal___content'
  | 'catalogProduct___parent___internal___contentDigest'
  | 'catalogProduct___parent___internal___description'
  | 'catalogProduct___parent___internal___fieldOwners'
  | 'catalogProduct___parent___internal___ignoreType'
  | 'catalogProduct___parent___internal___mediaType'
  | 'catalogProduct___parent___internal___owner'
  | 'catalogProduct___parent___internal___type'
  | 'catalogProduct___children'
  | 'catalogProduct___children___id'
  | 'catalogProduct___children___parent___id'
  | 'catalogProduct___children___parent___children'
  | 'catalogProduct___children___children'
  | 'catalogProduct___children___children___id'
  | 'catalogProduct___children___children___children'
  | 'catalogProduct___children___internal___content'
  | 'catalogProduct___children___internal___contentDigest'
  | 'catalogProduct___children___internal___description'
  | 'catalogProduct___children___internal___fieldOwners'
  | 'catalogProduct___children___internal___ignoreType'
  | 'catalogProduct___children___internal___mediaType'
  | 'catalogProduct___children___internal___owner'
  | 'catalogProduct___children___internal___type'
  | 'catalogProduct___internal___content'
  | 'catalogProduct___internal___contentDigest'
  | 'catalogProduct___internal___description'
  | 'catalogProduct___internal___fieldOwners'
  | 'catalogProduct___internal___ignoreType'
  | 'catalogProduct___internal___mediaType'
  | 'catalogProduct___internal___owner'
  | 'catalogProduct___internal___type'
  | 'catalogProduct___type'
  | 'catalogProduct___type_name'
  | 'catalogProduct___brand'
  | 'catalogProduct___model'
  | 'catalogProduct___image'
  | 'catalogProduct___variant_count'
  | 'catalogProduct___currency'
  | 'catalogProduct___files'
  | 'catalogProduct___files___id'
  | 'catalogProduct___files___type'
  | 'catalogProduct___files___title'
  | 'catalogProduct___files___additional_price'
  | 'catalogProduct___options'
  | 'catalogProduct___options___id'
  | 'catalogProduct___options___title'
  | 'catalogProduct___options___type'
  | 'catalogProduct___options___values____FFFFFF'
  | 'catalogProduct___options___values____000000'
  | 'catalogProduct___options___values____96A1A8'
  | 'catalogProduct___options___values____A67843'
  | 'catalogProduct___options___values____FFCC00'
  | 'catalogProduct___options___values____E25C27'
  | 'catalogProduct___options___values____CC3366'
  | 'catalogProduct___options___values____CC3333'
  | 'catalogProduct___options___values____660000'
  | 'catalogProduct___options___values____333366'
  | 'catalogProduct___options___values____005397'
  | 'catalogProduct___options___values____3399FF'
  | 'catalogProduct___options___values____6B5294'
  | 'catalogProduct___options___values____01784E'
  | 'catalogProduct___options___values____7BA35A'
  | 'catalogProduct___options___values___flat'
  | 'catalogProduct___options___values____3d'
  | 'catalogProduct___options___values___both'
  | 'catalogProduct___options___values___white'
  | 'catalogProduct___options___values___black'
  | 'catalogProduct___options___additional_price_breakdown___flat'
  | 'catalogProduct___options___additional_price_breakdown____3d'
  | 'catalogProduct___options___additional_price_breakdown___both'
  | 'catalogProduct___dimensions___front'
  | 'catalogProduct___is_discontinued'
  | 'catalogProduct___description'
  | 'catalogProduct___productImage___sourceInstanceName'
  | 'catalogProduct___productImage___absolutePath'
  | 'catalogProduct___productImage___relativePath'
  | 'catalogProduct___productImage___extension'
  | 'catalogProduct___productImage___size'
  | 'catalogProduct___productImage___prettySize'
  | 'catalogProduct___productImage___modifiedTime'
  | 'catalogProduct___productImage___accessTime'
  | 'catalogProduct___productImage___changeTime'
  | 'catalogProduct___productImage___birthTime'
  | 'catalogProduct___productImage___root'
  | 'catalogProduct___productImage___dir'
  | 'catalogProduct___productImage___base'
  | 'catalogProduct___productImage___ext'
  | 'catalogProduct___productImage___name'
  | 'catalogProduct___productImage___relativeDirectory'
  | 'catalogProduct___productImage___dev'
  | 'catalogProduct___productImage___mode'
  | 'catalogProduct___productImage___nlink'
  | 'catalogProduct___productImage___uid'
  | 'catalogProduct___productImage___gid'
  | 'catalogProduct___productImage___rdev'
  | 'catalogProduct___productImage___ino'
  | 'catalogProduct___productImage___atimeMs'
  | 'catalogProduct___productImage___mtimeMs'
  | 'catalogProduct___productImage___ctimeMs'
  | 'catalogProduct___productImage___atime'
  | 'catalogProduct___productImage___mtime'
  | 'catalogProduct___productImage___ctime'
  | 'catalogProduct___productImage___birthtime'
  | 'catalogProduct___productImage___birthtimeMs'
  | 'catalogProduct___productImage___blksize'
  | 'catalogProduct___productImage___blocks'
  | 'catalogProduct___productImage___url'
  | 'catalogProduct___productImage___publicURL'
  | 'catalogProduct___productImage___childrenImageSharp'
  | 'catalogProduct___productImage___childrenImageSharp___gatsbyImageData'
  | 'catalogProduct___productImage___childrenImageSharp___id'
  | 'catalogProduct___productImage___childrenImageSharp___children'
  | 'catalogProduct___productImage___childImageSharp___gatsbyImageData'
  | 'catalogProduct___productImage___childImageSharp___id'
  | 'catalogProduct___productImage___childImageSharp___children'
  | 'catalogProduct___productImage___childrenMdx'
  | 'catalogProduct___productImage___childrenMdx___rawBody'
  | 'catalogProduct___productImage___childrenMdx___fileAbsolutePath'
  | 'catalogProduct___productImage___childrenMdx___slug'
  | 'catalogProduct___productImage___childrenMdx___body'
  | 'catalogProduct___productImage___childrenMdx___excerpt'
  | 'catalogProduct___productImage___childrenMdx___headings'
  | 'catalogProduct___productImage___childrenMdx___html'
  | 'catalogProduct___productImage___childrenMdx___mdxAST'
  | 'catalogProduct___productImage___childrenMdx___tableOfContents'
  | 'catalogProduct___productImage___childrenMdx___timeToRead'
  | 'catalogProduct___productImage___childrenMdx___id'
  | 'catalogProduct___productImage___childrenMdx___children'
  | 'catalogProduct___productImage___childMdx___rawBody'
  | 'catalogProduct___productImage___childMdx___fileAbsolutePath'
  | 'catalogProduct___productImage___childMdx___slug'
  | 'catalogProduct___productImage___childMdx___body'
  | 'catalogProduct___productImage___childMdx___excerpt'
  | 'catalogProduct___productImage___childMdx___headings'
  | 'catalogProduct___productImage___childMdx___html'
  | 'catalogProduct___productImage___childMdx___mdxAST'
  | 'catalogProduct___productImage___childMdx___tableOfContents'
  | 'catalogProduct___productImage___childMdx___timeToRead'
  | 'catalogProduct___productImage___childMdx___id'
  | 'catalogProduct___productImage___childMdx___children'
  | 'catalogProduct___productImage___id'
  | 'catalogProduct___productImage___parent___id'
  | 'catalogProduct___productImage___parent___children'
  | 'catalogProduct___productImage___children'
  | 'catalogProduct___productImage___children___id'
  | 'catalogProduct___productImage___children___children'
  | 'catalogProduct___productImage___internal___content'
  | 'catalogProduct___productImage___internal___contentDigest'
  | 'catalogProduct___productImage___internal___description'
  | 'catalogProduct___productImage___internal___fieldOwners'
  | 'catalogProduct___productImage___internal___ignoreType'
  | 'catalogProduct___productImage___internal___mediaType'
  | 'catalogProduct___productImage___internal___owner'
  | 'catalogProduct___productImage___internal___type'
  | 'variantImage___sourceInstanceName'
  | 'variantImage___absolutePath'
  | 'variantImage___relativePath'
  | 'variantImage___extension'
  | 'variantImage___size'
  | 'variantImage___prettySize'
  | 'variantImage___modifiedTime'
  | 'variantImage___accessTime'
  | 'variantImage___changeTime'
  | 'variantImage___birthTime'
  | 'variantImage___root'
  | 'variantImage___dir'
  | 'variantImage___base'
  | 'variantImage___ext'
  | 'variantImage___name'
  | 'variantImage___relativeDirectory'
  | 'variantImage___dev'
  | 'variantImage___mode'
  | 'variantImage___nlink'
  | 'variantImage___uid'
  | 'variantImage___gid'
  | 'variantImage___rdev'
  | 'variantImage___ino'
  | 'variantImage___atimeMs'
  | 'variantImage___mtimeMs'
  | 'variantImage___ctimeMs'
  | 'variantImage___atime'
  | 'variantImage___mtime'
  | 'variantImage___ctime'
  | 'variantImage___birthtime'
  | 'variantImage___birthtimeMs'
  | 'variantImage___blksize'
  | 'variantImage___blocks'
  | 'variantImage___url'
  | 'variantImage___publicURL'
  | 'variantImage___childrenImageSharp'
  | 'variantImage___childrenImageSharp___fixed___base64'
  | 'variantImage___childrenImageSharp___fixed___tracedSVG'
  | 'variantImage___childrenImageSharp___fixed___aspectRatio'
  | 'variantImage___childrenImageSharp___fixed___width'
  | 'variantImage___childrenImageSharp___fixed___height'
  | 'variantImage___childrenImageSharp___fixed___src'
  | 'variantImage___childrenImageSharp___fixed___srcSet'
  | 'variantImage___childrenImageSharp___fixed___srcWebp'
  | 'variantImage___childrenImageSharp___fixed___srcSetWebp'
  | 'variantImage___childrenImageSharp___fixed___originalName'
  | 'variantImage___childrenImageSharp___fluid___base64'
  | 'variantImage___childrenImageSharp___fluid___tracedSVG'
  | 'variantImage___childrenImageSharp___fluid___aspectRatio'
  | 'variantImage___childrenImageSharp___fluid___src'
  | 'variantImage___childrenImageSharp___fluid___srcSet'
  | 'variantImage___childrenImageSharp___fluid___srcWebp'
  | 'variantImage___childrenImageSharp___fluid___srcSetWebp'
  | 'variantImage___childrenImageSharp___fluid___sizes'
  | 'variantImage___childrenImageSharp___fluid___originalImg'
  | 'variantImage___childrenImageSharp___fluid___originalName'
  | 'variantImage___childrenImageSharp___fluid___presentationWidth'
  | 'variantImage___childrenImageSharp___fluid___presentationHeight'
  | 'variantImage___childrenImageSharp___gatsbyImageData'
  | 'variantImage___childrenImageSharp___original___width'
  | 'variantImage___childrenImageSharp___original___height'
  | 'variantImage___childrenImageSharp___original___src'
  | 'variantImage___childrenImageSharp___resize___src'
  | 'variantImage___childrenImageSharp___resize___tracedSVG'
  | 'variantImage___childrenImageSharp___resize___width'
  | 'variantImage___childrenImageSharp___resize___height'
  | 'variantImage___childrenImageSharp___resize___aspectRatio'
  | 'variantImage___childrenImageSharp___resize___originalName'
  | 'variantImage___childrenImageSharp___id'
  | 'variantImage___childrenImageSharp___parent___id'
  | 'variantImage___childrenImageSharp___parent___children'
  | 'variantImage___childrenImageSharp___children'
  | 'variantImage___childrenImageSharp___children___id'
  | 'variantImage___childrenImageSharp___children___children'
  | 'variantImage___childrenImageSharp___internal___content'
  | 'variantImage___childrenImageSharp___internal___contentDigest'
  | 'variantImage___childrenImageSharp___internal___description'
  | 'variantImage___childrenImageSharp___internal___fieldOwners'
  | 'variantImage___childrenImageSharp___internal___ignoreType'
  | 'variantImage___childrenImageSharp___internal___mediaType'
  | 'variantImage___childrenImageSharp___internal___owner'
  | 'variantImage___childrenImageSharp___internal___type'
  | 'variantImage___childImageSharp___fixed___base64'
  | 'variantImage___childImageSharp___fixed___tracedSVG'
  | 'variantImage___childImageSharp___fixed___aspectRatio'
  | 'variantImage___childImageSharp___fixed___width'
  | 'variantImage___childImageSharp___fixed___height'
  | 'variantImage___childImageSharp___fixed___src'
  | 'variantImage___childImageSharp___fixed___srcSet'
  | 'variantImage___childImageSharp___fixed___srcWebp'
  | 'variantImage___childImageSharp___fixed___srcSetWebp'
  | 'variantImage___childImageSharp___fixed___originalName'
  | 'variantImage___childImageSharp___fluid___base64'
  | 'variantImage___childImageSharp___fluid___tracedSVG'
  | 'variantImage___childImageSharp___fluid___aspectRatio'
  | 'variantImage___childImageSharp___fluid___src'
  | 'variantImage___childImageSharp___fluid___srcSet'
  | 'variantImage___childImageSharp___fluid___srcWebp'
  | 'variantImage___childImageSharp___fluid___srcSetWebp'
  | 'variantImage___childImageSharp___fluid___sizes'
  | 'variantImage___childImageSharp___fluid___originalImg'
  | 'variantImage___childImageSharp___fluid___originalName'
  | 'variantImage___childImageSharp___fluid___presentationWidth'
  | 'variantImage___childImageSharp___fluid___presentationHeight'
  | 'variantImage___childImageSharp___gatsbyImageData'
  | 'variantImage___childImageSharp___original___width'
  | 'variantImage___childImageSharp___original___height'
  | 'variantImage___childImageSharp___original___src'
  | 'variantImage___childImageSharp___resize___src'
  | 'variantImage___childImageSharp___resize___tracedSVG'
  | 'variantImage___childImageSharp___resize___width'
  | 'variantImage___childImageSharp___resize___height'
  | 'variantImage___childImageSharp___resize___aspectRatio'
  | 'variantImage___childImageSharp___resize___originalName'
  | 'variantImage___childImageSharp___id'
  | 'variantImage___childImageSharp___parent___id'
  | 'variantImage___childImageSharp___parent___children'
  | 'variantImage___childImageSharp___children'
  | 'variantImage___childImageSharp___children___id'
  | 'variantImage___childImageSharp___children___children'
  | 'variantImage___childImageSharp___internal___content'
  | 'variantImage___childImageSharp___internal___contentDigest'
  | 'variantImage___childImageSharp___internal___description'
  | 'variantImage___childImageSharp___internal___fieldOwners'
  | 'variantImage___childImageSharp___internal___ignoreType'
  | 'variantImage___childImageSharp___internal___mediaType'
  | 'variantImage___childImageSharp___internal___owner'
  | 'variantImage___childImageSharp___internal___type'
  | 'variantImage___childrenMdx'
  | 'variantImage___childrenMdx___rawBody'
  | 'variantImage___childrenMdx___fileAbsolutePath'
  | 'variantImage___childrenMdx___frontmatter___title'
  | 'variantImage___childrenMdx___frontmatter___date'
  | 'variantImage___childrenMdx___frontmatter___published'
  | 'variantImage___childrenMdx___frontmatter___customer'
  | 'variantImage___childrenMdx___frontmatter___index'
  | 'variantImage___childrenMdx___slug'
  | 'variantImage___childrenMdx___body'
  | 'variantImage___childrenMdx___excerpt'
  | 'variantImage___childrenMdx___headings'
  | 'variantImage___childrenMdx___headings___value'
  | 'variantImage___childrenMdx___headings___depth'
  | 'variantImage___childrenMdx___html'
  | 'variantImage___childrenMdx___mdxAST'
  | 'variantImage___childrenMdx___tableOfContents'
  | 'variantImage___childrenMdx___timeToRead'
  | 'variantImage___childrenMdx___wordCount___paragraphs'
  | 'variantImage___childrenMdx___wordCount___sentences'
  | 'variantImage___childrenMdx___wordCount___words'
  | 'variantImage___childrenMdx___id'
  | 'variantImage___childrenMdx___parent___id'
  | 'variantImage___childrenMdx___parent___children'
  | 'variantImage___childrenMdx___children'
  | 'variantImage___childrenMdx___children___id'
  | 'variantImage___childrenMdx___children___children'
  | 'variantImage___childrenMdx___internal___content'
  | 'variantImage___childrenMdx___internal___contentDigest'
  | 'variantImage___childrenMdx___internal___description'
  | 'variantImage___childrenMdx___internal___fieldOwners'
  | 'variantImage___childrenMdx___internal___ignoreType'
  | 'variantImage___childrenMdx___internal___mediaType'
  | 'variantImage___childrenMdx___internal___owner'
  | 'variantImage___childrenMdx___internal___type'
  | 'variantImage___childMdx___rawBody'
  | 'variantImage___childMdx___fileAbsolutePath'
  | 'variantImage___childMdx___frontmatter___title'
  | 'variantImage___childMdx___frontmatter___date'
  | 'variantImage___childMdx___frontmatter___published'
  | 'variantImage___childMdx___frontmatter___customer'
  | 'variantImage___childMdx___frontmatter___index'
  | 'variantImage___childMdx___slug'
  | 'variantImage___childMdx___body'
  | 'variantImage___childMdx___excerpt'
  | 'variantImage___childMdx___headings'
  | 'variantImage___childMdx___headings___value'
  | 'variantImage___childMdx___headings___depth'
  | 'variantImage___childMdx___html'
  | 'variantImage___childMdx___mdxAST'
  | 'variantImage___childMdx___tableOfContents'
  | 'variantImage___childMdx___timeToRead'
  | 'variantImage___childMdx___wordCount___paragraphs'
  | 'variantImage___childMdx___wordCount___sentences'
  | 'variantImage___childMdx___wordCount___words'
  | 'variantImage___childMdx___id'
  | 'variantImage___childMdx___parent___id'
  | 'variantImage___childMdx___parent___children'
  | 'variantImage___childMdx___children'
  | 'variantImage___childMdx___children___id'
  | 'variantImage___childMdx___children___children'
  | 'variantImage___childMdx___internal___content'
  | 'variantImage___childMdx___internal___contentDigest'
  | 'variantImage___childMdx___internal___description'
  | 'variantImage___childMdx___internal___fieldOwners'
  | 'variantImage___childMdx___internal___ignoreType'
  | 'variantImage___childMdx___internal___mediaType'
  | 'variantImage___childMdx___internal___owner'
  | 'variantImage___childMdx___internal___type'
  | 'variantImage___id'
  | 'variantImage___parent___id'
  | 'variantImage___parent___parent___id'
  | 'variantImage___parent___parent___children'
  | 'variantImage___parent___children'
  | 'variantImage___parent___children___id'
  | 'variantImage___parent___children___children'
  | 'variantImage___parent___internal___content'
  | 'variantImage___parent___internal___contentDigest'
  | 'variantImage___parent___internal___description'
  | 'variantImage___parent___internal___fieldOwners'
  | 'variantImage___parent___internal___ignoreType'
  | 'variantImage___parent___internal___mediaType'
  | 'variantImage___parent___internal___owner'
  | 'variantImage___parent___internal___type'
  | 'variantImage___children'
  | 'variantImage___children___id'
  | 'variantImage___children___parent___id'
  | 'variantImage___children___parent___children'
  | 'variantImage___children___children'
  | 'variantImage___children___children___id'
  | 'variantImage___children___children___children'
  | 'variantImage___children___internal___content'
  | 'variantImage___children___internal___contentDigest'
  | 'variantImage___children___internal___description'
  | 'variantImage___children___internal___fieldOwners'
  | 'variantImage___children___internal___ignoreType'
  | 'variantImage___children___internal___mediaType'
  | 'variantImage___children___internal___owner'
  | 'variantImage___children___internal___type'
  | 'variantImage___internal___content'
  | 'variantImage___internal___contentDigest'
  | 'variantImage___internal___description'
  | 'variantImage___internal___fieldOwners'
  | 'variantImage___internal___ignoreType'
  | 'variantImage___internal___mediaType'
  | 'variantImage___internal___owner'
  | 'variantImage___internal___type';

export type PrintfulVariantGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<PrintfulVariantEdge>;
  nodes: Array<PrintfulVariant>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type PrintfulVariantSortInput = {
  fields?: Maybe<Array<Maybe<PrintfulVariantFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type PrintfulCatalogProductConnection = {
  totalCount: Scalars['Int'];
  edges: Array<PrintfulCatalogProductEdge>;
  nodes: Array<PrintfulCatalogProduct>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<PrintfulCatalogProductGroupConnection>;
};


export type PrintfulCatalogProductConnectionDistinctArgs = {
  field: PrintfulCatalogProductFieldsEnum;
};


export type PrintfulCatalogProductConnectionMaxArgs = {
  field: PrintfulCatalogProductFieldsEnum;
};


export type PrintfulCatalogProductConnectionMinArgs = {
  field: PrintfulCatalogProductFieldsEnum;
};


export type PrintfulCatalogProductConnectionSumArgs = {
  field: PrintfulCatalogProductFieldsEnum;
};


export type PrintfulCatalogProductConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: PrintfulCatalogProductFieldsEnum;
};

export type PrintfulCatalogProductEdge = {
  next?: Maybe<PrintfulCatalogProduct>;
  node: PrintfulCatalogProduct;
  previous?: Maybe<PrintfulCatalogProduct>;
};

export type PrintfulCatalogProductFieldsEnum =
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'type'
  | 'type_name'
  | 'brand'
  | 'model'
  | 'image'
  | 'variant_count'
  | 'currency'
  | 'files'
  | 'files___id'
  | 'files___type'
  | 'files___title'
  | 'files___additional_price'
  | 'options'
  | 'options___id'
  | 'options___title'
  | 'options___type'
  | 'options___values____FFFFFF'
  | 'options___values____000000'
  | 'options___values____96A1A8'
  | 'options___values____A67843'
  | 'options___values____FFCC00'
  | 'options___values____E25C27'
  | 'options___values____CC3366'
  | 'options___values____CC3333'
  | 'options___values____660000'
  | 'options___values____333366'
  | 'options___values____005397'
  | 'options___values____3399FF'
  | 'options___values____6B5294'
  | 'options___values____01784E'
  | 'options___values____7BA35A'
  | 'options___values___flat'
  | 'options___values____3d'
  | 'options___values___both'
  | 'options___values___white'
  | 'options___values___black'
  | 'options___additional_price_breakdown___flat'
  | 'options___additional_price_breakdown____3d'
  | 'options___additional_price_breakdown___both'
  | 'dimensions___front'
  | 'is_discontinued'
  | 'description'
  | 'productImage___sourceInstanceName'
  | 'productImage___absolutePath'
  | 'productImage___relativePath'
  | 'productImage___extension'
  | 'productImage___size'
  | 'productImage___prettySize'
  | 'productImage___modifiedTime'
  | 'productImage___accessTime'
  | 'productImage___changeTime'
  | 'productImage___birthTime'
  | 'productImage___root'
  | 'productImage___dir'
  | 'productImage___base'
  | 'productImage___ext'
  | 'productImage___name'
  | 'productImage___relativeDirectory'
  | 'productImage___dev'
  | 'productImage___mode'
  | 'productImage___nlink'
  | 'productImage___uid'
  | 'productImage___gid'
  | 'productImage___rdev'
  | 'productImage___ino'
  | 'productImage___atimeMs'
  | 'productImage___mtimeMs'
  | 'productImage___ctimeMs'
  | 'productImage___atime'
  | 'productImage___mtime'
  | 'productImage___ctime'
  | 'productImage___birthtime'
  | 'productImage___birthtimeMs'
  | 'productImage___blksize'
  | 'productImage___blocks'
  | 'productImage___url'
  | 'productImage___publicURL'
  | 'productImage___childrenImageSharp'
  | 'productImage___childrenImageSharp___fixed___base64'
  | 'productImage___childrenImageSharp___fixed___tracedSVG'
  | 'productImage___childrenImageSharp___fixed___aspectRatio'
  | 'productImage___childrenImageSharp___fixed___width'
  | 'productImage___childrenImageSharp___fixed___height'
  | 'productImage___childrenImageSharp___fixed___src'
  | 'productImage___childrenImageSharp___fixed___srcSet'
  | 'productImage___childrenImageSharp___fixed___srcWebp'
  | 'productImage___childrenImageSharp___fixed___srcSetWebp'
  | 'productImage___childrenImageSharp___fixed___originalName'
  | 'productImage___childrenImageSharp___fluid___base64'
  | 'productImage___childrenImageSharp___fluid___tracedSVG'
  | 'productImage___childrenImageSharp___fluid___aspectRatio'
  | 'productImage___childrenImageSharp___fluid___src'
  | 'productImage___childrenImageSharp___fluid___srcSet'
  | 'productImage___childrenImageSharp___fluid___srcWebp'
  | 'productImage___childrenImageSharp___fluid___srcSetWebp'
  | 'productImage___childrenImageSharp___fluid___sizes'
  | 'productImage___childrenImageSharp___fluid___originalImg'
  | 'productImage___childrenImageSharp___fluid___originalName'
  | 'productImage___childrenImageSharp___fluid___presentationWidth'
  | 'productImage___childrenImageSharp___fluid___presentationHeight'
  | 'productImage___childrenImageSharp___gatsbyImageData'
  | 'productImage___childrenImageSharp___original___width'
  | 'productImage___childrenImageSharp___original___height'
  | 'productImage___childrenImageSharp___original___src'
  | 'productImage___childrenImageSharp___resize___src'
  | 'productImage___childrenImageSharp___resize___tracedSVG'
  | 'productImage___childrenImageSharp___resize___width'
  | 'productImage___childrenImageSharp___resize___height'
  | 'productImage___childrenImageSharp___resize___aspectRatio'
  | 'productImage___childrenImageSharp___resize___originalName'
  | 'productImage___childrenImageSharp___id'
  | 'productImage___childrenImageSharp___parent___id'
  | 'productImage___childrenImageSharp___parent___children'
  | 'productImage___childrenImageSharp___children'
  | 'productImage___childrenImageSharp___children___id'
  | 'productImage___childrenImageSharp___children___children'
  | 'productImage___childrenImageSharp___internal___content'
  | 'productImage___childrenImageSharp___internal___contentDigest'
  | 'productImage___childrenImageSharp___internal___description'
  | 'productImage___childrenImageSharp___internal___fieldOwners'
  | 'productImage___childrenImageSharp___internal___ignoreType'
  | 'productImage___childrenImageSharp___internal___mediaType'
  | 'productImage___childrenImageSharp___internal___owner'
  | 'productImage___childrenImageSharp___internal___type'
  | 'productImage___childImageSharp___fixed___base64'
  | 'productImage___childImageSharp___fixed___tracedSVG'
  | 'productImage___childImageSharp___fixed___aspectRatio'
  | 'productImage___childImageSharp___fixed___width'
  | 'productImage___childImageSharp___fixed___height'
  | 'productImage___childImageSharp___fixed___src'
  | 'productImage___childImageSharp___fixed___srcSet'
  | 'productImage___childImageSharp___fixed___srcWebp'
  | 'productImage___childImageSharp___fixed___srcSetWebp'
  | 'productImage___childImageSharp___fixed___originalName'
  | 'productImage___childImageSharp___fluid___base64'
  | 'productImage___childImageSharp___fluid___tracedSVG'
  | 'productImage___childImageSharp___fluid___aspectRatio'
  | 'productImage___childImageSharp___fluid___src'
  | 'productImage___childImageSharp___fluid___srcSet'
  | 'productImage___childImageSharp___fluid___srcWebp'
  | 'productImage___childImageSharp___fluid___srcSetWebp'
  | 'productImage___childImageSharp___fluid___sizes'
  | 'productImage___childImageSharp___fluid___originalImg'
  | 'productImage___childImageSharp___fluid___originalName'
  | 'productImage___childImageSharp___fluid___presentationWidth'
  | 'productImage___childImageSharp___fluid___presentationHeight'
  | 'productImage___childImageSharp___gatsbyImageData'
  | 'productImage___childImageSharp___original___width'
  | 'productImage___childImageSharp___original___height'
  | 'productImage___childImageSharp___original___src'
  | 'productImage___childImageSharp___resize___src'
  | 'productImage___childImageSharp___resize___tracedSVG'
  | 'productImage___childImageSharp___resize___width'
  | 'productImage___childImageSharp___resize___height'
  | 'productImage___childImageSharp___resize___aspectRatio'
  | 'productImage___childImageSharp___resize___originalName'
  | 'productImage___childImageSharp___id'
  | 'productImage___childImageSharp___parent___id'
  | 'productImage___childImageSharp___parent___children'
  | 'productImage___childImageSharp___children'
  | 'productImage___childImageSharp___children___id'
  | 'productImage___childImageSharp___children___children'
  | 'productImage___childImageSharp___internal___content'
  | 'productImage___childImageSharp___internal___contentDigest'
  | 'productImage___childImageSharp___internal___description'
  | 'productImage___childImageSharp___internal___fieldOwners'
  | 'productImage___childImageSharp___internal___ignoreType'
  | 'productImage___childImageSharp___internal___mediaType'
  | 'productImage___childImageSharp___internal___owner'
  | 'productImage___childImageSharp___internal___type'
  | 'productImage___childrenMdx'
  | 'productImage___childrenMdx___rawBody'
  | 'productImage___childrenMdx___fileAbsolutePath'
  | 'productImage___childrenMdx___frontmatter___title'
  | 'productImage___childrenMdx___frontmatter___date'
  | 'productImage___childrenMdx___frontmatter___published'
  | 'productImage___childrenMdx___frontmatter___customer'
  | 'productImage___childrenMdx___frontmatter___index'
  | 'productImage___childrenMdx___slug'
  | 'productImage___childrenMdx___body'
  | 'productImage___childrenMdx___excerpt'
  | 'productImage___childrenMdx___headings'
  | 'productImage___childrenMdx___headings___value'
  | 'productImage___childrenMdx___headings___depth'
  | 'productImage___childrenMdx___html'
  | 'productImage___childrenMdx___mdxAST'
  | 'productImage___childrenMdx___tableOfContents'
  | 'productImage___childrenMdx___timeToRead'
  | 'productImage___childrenMdx___wordCount___paragraphs'
  | 'productImage___childrenMdx___wordCount___sentences'
  | 'productImage___childrenMdx___wordCount___words'
  | 'productImage___childrenMdx___id'
  | 'productImage___childrenMdx___parent___id'
  | 'productImage___childrenMdx___parent___children'
  | 'productImage___childrenMdx___children'
  | 'productImage___childrenMdx___children___id'
  | 'productImage___childrenMdx___children___children'
  | 'productImage___childrenMdx___internal___content'
  | 'productImage___childrenMdx___internal___contentDigest'
  | 'productImage___childrenMdx___internal___description'
  | 'productImage___childrenMdx___internal___fieldOwners'
  | 'productImage___childrenMdx___internal___ignoreType'
  | 'productImage___childrenMdx___internal___mediaType'
  | 'productImage___childrenMdx___internal___owner'
  | 'productImage___childrenMdx___internal___type'
  | 'productImage___childMdx___rawBody'
  | 'productImage___childMdx___fileAbsolutePath'
  | 'productImage___childMdx___frontmatter___title'
  | 'productImage___childMdx___frontmatter___date'
  | 'productImage___childMdx___frontmatter___published'
  | 'productImage___childMdx___frontmatter___customer'
  | 'productImage___childMdx___frontmatter___index'
  | 'productImage___childMdx___slug'
  | 'productImage___childMdx___body'
  | 'productImage___childMdx___excerpt'
  | 'productImage___childMdx___headings'
  | 'productImage___childMdx___headings___value'
  | 'productImage___childMdx___headings___depth'
  | 'productImage___childMdx___html'
  | 'productImage___childMdx___mdxAST'
  | 'productImage___childMdx___tableOfContents'
  | 'productImage___childMdx___timeToRead'
  | 'productImage___childMdx___wordCount___paragraphs'
  | 'productImage___childMdx___wordCount___sentences'
  | 'productImage___childMdx___wordCount___words'
  | 'productImage___childMdx___id'
  | 'productImage___childMdx___parent___id'
  | 'productImage___childMdx___parent___children'
  | 'productImage___childMdx___children'
  | 'productImage___childMdx___children___id'
  | 'productImage___childMdx___children___children'
  | 'productImage___childMdx___internal___content'
  | 'productImage___childMdx___internal___contentDigest'
  | 'productImage___childMdx___internal___description'
  | 'productImage___childMdx___internal___fieldOwners'
  | 'productImage___childMdx___internal___ignoreType'
  | 'productImage___childMdx___internal___mediaType'
  | 'productImage___childMdx___internal___owner'
  | 'productImage___childMdx___internal___type'
  | 'productImage___id'
  | 'productImage___parent___id'
  | 'productImage___parent___parent___id'
  | 'productImage___parent___parent___children'
  | 'productImage___parent___children'
  | 'productImage___parent___children___id'
  | 'productImage___parent___children___children'
  | 'productImage___parent___internal___content'
  | 'productImage___parent___internal___contentDigest'
  | 'productImage___parent___internal___description'
  | 'productImage___parent___internal___fieldOwners'
  | 'productImage___parent___internal___ignoreType'
  | 'productImage___parent___internal___mediaType'
  | 'productImage___parent___internal___owner'
  | 'productImage___parent___internal___type'
  | 'productImage___children'
  | 'productImage___children___id'
  | 'productImage___children___parent___id'
  | 'productImage___children___parent___children'
  | 'productImage___children___children'
  | 'productImage___children___children___id'
  | 'productImage___children___children___children'
  | 'productImage___children___internal___content'
  | 'productImage___children___internal___contentDigest'
  | 'productImage___children___internal___description'
  | 'productImage___children___internal___fieldOwners'
  | 'productImage___children___internal___ignoreType'
  | 'productImage___children___internal___mediaType'
  | 'productImage___children___internal___owner'
  | 'productImage___children___internal___type'
  | 'productImage___internal___content'
  | 'productImage___internal___contentDigest'
  | 'productImage___internal___description'
  | 'productImage___internal___fieldOwners'
  | 'productImage___internal___ignoreType'
  | 'productImage___internal___mediaType'
  | 'productImage___internal___owner'
  | 'productImage___internal___type';

export type PrintfulCatalogProductGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<PrintfulCatalogProductEdge>;
  nodes: Array<PrintfulCatalogProduct>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type PrintfulCatalogProductSortInput = {
  fields?: Maybe<Array<Maybe<PrintfulCatalogProductFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SiteBuildMetadataConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteBuildMetadataEdge>;
  nodes: Array<SiteBuildMetadata>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SiteBuildMetadataGroupConnection>;
};


export type SiteBuildMetadataConnectionDistinctArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


export type SiteBuildMetadataConnectionMaxArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


export type SiteBuildMetadataConnectionMinArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


export type SiteBuildMetadataConnectionSumArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


export type SiteBuildMetadataConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SiteBuildMetadataFieldsEnum;
};

export type SiteBuildMetadataEdge = {
  next?: Maybe<SiteBuildMetadata>;
  node: SiteBuildMetadata;
  previous?: Maybe<SiteBuildMetadata>;
};

export type SiteBuildMetadataFieldsEnum =
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'buildTime';

export type SiteBuildMetadataGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteBuildMetadataEdge>;
  nodes: Array<SiteBuildMetadata>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type SiteBuildMetadataFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  buildTime?: Maybe<DateQueryOperatorInput>;
};

export type SiteBuildMetadataSortInput = {
  fields?: Maybe<Array<Maybe<SiteBuildMetadataFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SitePluginConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SitePluginEdge>;
  nodes: Array<SitePlugin>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SitePluginGroupConnection>;
};


export type SitePluginConnectionDistinctArgs = {
  field: SitePluginFieldsEnum;
};


export type SitePluginConnectionMaxArgs = {
  field: SitePluginFieldsEnum;
};


export type SitePluginConnectionMinArgs = {
  field: SitePluginFieldsEnum;
};


export type SitePluginConnectionSumArgs = {
  field: SitePluginFieldsEnum;
};


export type SitePluginConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SitePluginFieldsEnum;
};

export type SitePluginEdge = {
  next?: Maybe<SitePlugin>;
  node: SitePlugin;
  previous?: Maybe<SitePlugin>;
};

export type SitePluginFieldsEnum =
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'resolve'
  | 'name'
  | 'version'
  | 'pluginOptions___output'
  | 'pluginOptions___createLinkInHead'
  | 'pluginOptions___entryLimit'
  | 'pluginOptions___query'
  | 'pluginOptions___icon'
  | 'pluginOptions___legacy'
  | 'pluginOptions___theme_color_in_head'
  | 'pluginOptions___cache_busting_mode'
  | 'pluginOptions___crossOrigin'
  | 'pluginOptions___include_favicon'
  | 'pluginOptions___cacheDigest'
  | 'pluginOptions___base64Width'
  | 'pluginOptions___stripMetadata'
  | 'pluginOptions___defaultQuality'
  | 'pluginOptions___failOnError'
  | 'pluginOptions___maxWidth'
  | 'pluginOptions___linkImagesToOriginal'
  | 'pluginOptions___showCaptions'
  | 'pluginOptions___markdownCaptions'
  | 'pluginOptions___sizeByPixelDensity'
  | 'pluginOptions___backgroundColor'
  | 'pluginOptions___quality'
  | 'pluginOptions___withWebp'
  | 'pluginOptions___tracedSVG'
  | 'pluginOptions___loading'
  | 'pluginOptions___disableBgImageOnAlpha'
  | 'pluginOptions___disableBgImage'
  | 'pluginOptions___defaultLayouts___blog'
  | 'pluginOptions___defaultLayouts___default'
  | 'pluginOptions___gatsbyRemarkPlugins'
  | 'pluginOptions___gatsbyRemarkPlugins___resolve'
  | 'pluginOptions___extensions'
  | 'pluginOptions___lessBabel'
  | 'pluginOptions___mediaTypes'
  | 'pluginOptions___root'
  | 'pluginOptions___name'
  | 'pluginOptions___path'
  | 'pluginOptions___apiKey'
  | 'pluginOptions___paginationLimit'
  | 'pluginOptions___version'
  | 'pluginOptions___publicApiKey'
  | 'pluginOptions___openCartOnAdd'
  | 'pluginOptions___useSideCart'
  | 'pluginOptions___styles'
  | 'pluginOptions___queries___sm'
  | 'pluginOptions___queries___md'
  | 'pluginOptions___queries___lg'
  | 'pluginOptions___queries___xl'
  | 'pluginOptions___queries____2xl'
  | 'pluginOptions___pathCheck'
  | 'pluginOptions___allExtensions'
  | 'pluginOptions___isTSX'
  | 'pluginOptions___jsxPragma'
  | 'nodeAPIs'
  | 'browserAPIs'
  | 'ssrAPIs'
  | 'pluginFilepath'
  | 'packageJson___name'
  | 'packageJson___description'
  | 'packageJson___version'
  | 'packageJson___main'
  | 'packageJson___author'
  | 'packageJson___license'
  | 'packageJson___dependencies'
  | 'packageJson___dependencies___name'
  | 'packageJson___dependencies___version'
  | 'packageJson___devDependencies'
  | 'packageJson___devDependencies___name'
  | 'packageJson___devDependencies___version'
  | 'packageJson___peerDependencies'
  | 'packageJson___peerDependencies___name'
  | 'packageJson___peerDependencies___version'
  | 'packageJson___keywords';

export type SitePluginGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SitePluginEdge>;
  nodes: Array<SitePlugin>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type SitePluginSortInput = {
  fields?: Maybe<Array<Maybe<SitePluginFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type BlogIndexQueryVariables = Exact<{ [key: string]: never; }>;


export type BlogIndexQuery = { allMdx: (
    Pick<MdxConnection, 'totalCount'>
    & { nodes: Array<(
      Pick<Mdx, 'slug'>
      & { frontmatter?: Maybe<(
        Pick<MdxFrontmatter, 'title' | 'date'>
        & { featuredImage?: Maybe<{ childImageSharp?: Maybe<Pick<ImageSharp, 'gatsbyImageData'>> }> }
      )> }
    )> }
  ) };

export type MainPageQueryVariables = Exact<{ [key: string]: never; }>;


export type MainPageQuery = { allPrintfulProduct: { nodes: Array<(
      Pick<PrintfulProduct, 'id' | 'name' | 'variantOptions' | 'variantModels'>
      & { variants?: Maybe<Array<Maybe<(
        Pick<PrintfulVariant, 'currency' | 'id' | 'name' | 'retail_price'>
        & { catalogVariant?: Maybe<Pick<PrintfulCatalogVariant, 'color' | 'size' | 'retail_price' | 'in_stock'>>, variantImage?: Maybe<{ childImageSharp?: Maybe<Pick<ImageSharp, 'gatsbyImageData'>> }> }
      )>>> }
    )> }, allMdx: (
    Pick<MdxConnection, 'totalCount'>
    & { nodes: Array<{ frontmatter?: Maybe<(
        Pick<MdxFrontmatter, 'title' | 'index' | 'customer' | 'date'>
        & { featuredImage?: Maybe<{ childImageSharp?: Maybe<Pick<ImageSharp, 'gatsbyImageData'>> }> }
      )> }> }
  ) };

export type GatsbyImageSharpFixedFragment = Pick<ImageSharpFixed, 'base64' | 'width' | 'height' | 'src' | 'srcSet'>;

export type GatsbyImageSharpFixed_TracedSvgFragment = Pick<ImageSharpFixed, 'tracedSVG' | 'width' | 'height' | 'src' | 'srcSet'>;

export type GatsbyImageSharpFixed_WithWebpFragment = Pick<ImageSharpFixed, 'base64' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

export type GatsbyImageSharpFixed_WithWebp_TracedSvgFragment = Pick<ImageSharpFixed, 'tracedSVG' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

export type GatsbyImageSharpFixed_NoBase64Fragment = Pick<ImageSharpFixed, 'width' | 'height' | 'src' | 'srcSet'>;

export type GatsbyImageSharpFixed_WithWebp_NoBase64Fragment = Pick<ImageSharpFixed, 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

export type GatsbyImageSharpFluidFragment = Pick<ImageSharpFluid, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

export type GatsbyImageSharpFluidLimitPresentationSizeFragment = { maxHeight: ImageSharpFluid['presentationHeight'], maxWidth: ImageSharpFluid['presentationWidth'] };

export type GatsbyImageSharpFluid_TracedSvgFragment = Pick<ImageSharpFluid, 'tracedSVG' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

export type GatsbyImageSharpFluid_WithWebpFragment = Pick<ImageSharpFluid, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;

export type GatsbyImageSharpFluid_WithWebp_TracedSvgFragment = Pick<ImageSharpFluid, 'tracedSVG' | 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;

export type GatsbyImageSharpFluid_NoBase64Fragment = Pick<ImageSharpFluid, 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

export type GatsbyImageSharpFluid_WithWebp_NoBase64Fragment = Pick<ImageSharpFluid, 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;

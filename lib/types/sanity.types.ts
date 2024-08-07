/**
 * ---------------------------------------------------------------------------------
 * This file has been generated by Sanity TypeGen.
 * Command: `sanity typegen generate`
 *
 * Any modifications made directly to this file will be overwritten the next time
 * the TypeScript definitions are generated. Please make changes to the Sanity
 * schema definitions and/or GROQ queries if you need to update these types.
 *
 * For more information on how to use Sanity TypeGen, visit the official documentation:
 * https://www.sanity.io/docs/sanity-typegen
 * ---------------------------------------------------------------------------------
 */

// Source: schema.json
export type SanityImagePaletteSwatch = {
  _type: 'sanity.imagePaletteSwatch';
  background?: string;
  foreground?: string;
  population?: number;
  title?: string;
};

export type SanityImagePalette = {
  _type: 'sanity.imagePalette';
  darkMuted?: SanityImagePaletteSwatch;
  lightVibrant?: SanityImagePaletteSwatch;
  darkVibrant?: SanityImagePaletteSwatch;
  vibrant?: SanityImagePaletteSwatch;
  dominant?: SanityImagePaletteSwatch;
  lightMuted?: SanityImagePaletteSwatch;
  muted?: SanityImagePaletteSwatch;
};

export type SanityImageDimensions = {
  _type: 'sanity.imageDimensions';
  height?: number;
  width?: number;
  aspectRatio?: number;
};

export type SanityFileAsset = {
  _id: string;
  _type: 'sanity.fileAsset';
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  originalFilename?: string;
  label?: string;
  title?: string;
  description?: string;
  altText?: string;
  sha1hash?: string;
  extension?: string;
  mimeType?: string;
  size?: number;
  assetId?: string;
  uploadId?: string;
  path?: string;
  url?: string;
  source?: SanityAssetSourceData;
};

export type Geopoint = {
  _type: 'geopoint';
  lat?: number;
  lng?: number;
  alt?: number;
};

export type VerticalTabsItem = {
  _type: 'verticalTabsItem';
  title: string;
  content: Array<{
    children?: Array<{
      marks?: Array<string>;
      text?: string;
      _type: 'span';
      _key: string;
    }>;
    style?: 'normal' | 'h2' | 'h3' | 'h4' | 'blockquote' | 'hardBreak';
    listItem?: 'bullet' | 'number';
    markDefs?: Array<{
      href?: string;
      _type: 'link';
      _key: string;
    }>;
    level?: number;
    _type: 'block';
    _key: string;
  }>;
};

export type VerticalTabs = {
  _type: 'verticalTabs';
  tabs: Array<
    {
      _key: string;
    } & VerticalTabsItem
  >;
};

export type Homepage = {
  _id: string;
  _type: 'homepage';
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  metadata?: Metadata;
  title: string;
  pageIntroText: string;
  heroImage?: BrandfolderImage;
  videoUrl?: string;
  contentCards?: ThreeCardSection;
  textSection: Array<{
    children?: Array<{
      marks?: Array<string>;
      text?: string;
      _type: 'span';
      _key: string;
    }>;
    style?: 'normal' | 'h2' | 'h3' | 'h4' | 'blockquote';
    listItem?: 'bullet' | 'number';
    markDefs?: Array<{
      href?: string;
      _type: 'link';
      _key: string;
    }>;
    level?: number;
    _type: 'block';
    _key: string;
  }>;
  content?: Array<
    | ({
        _key: string;
      } & PlainText)
    | ({
        _key: string;
      } & RichText)
    | ({
        _key: string;
      } & TwoColumnRichText)
    | ({
        _key: string;
      } & TwoCardSection)
    | ({
        _key: string;
      } & ThreeCardSection)
    | ({
        _key: string;
      } & FourCardSection)
    | ({
        _key: string;
      } & ImageRow)
    | ({
        _key: string;
      } & HorizontalContentCard)
    | ({
        _key: string;
      } & TwoColumnList)
    | ({
        _key: string;
      } & TwoColumnRichTextAndImage)
    | ({
        _key: string;
      } & FullWidthImage)
    | ({
        _key: string;
      } & VerticalTabs)
    | ({
        _key: string;
      } & PdfDownload)
  >;
};

export type TwoColumnList = {
  _type: 'twoColumnList';
  title?: string;
  items: Array<string>;
  showBackground?: boolean;
};

export type Spacer = {
  _type: 'spacer';
  size: 'spacer-small' | 'spacer-medium' | 'spacer-large';
};

export type SocialMediaAccount = {
  _type: 'socialMediaAccount';
  label: 'Facebook' | 'Twitter' | 'Instagram' | 'LinkedIn';
  href: string;
};

export type IndexHeroes = {
  _id: string;
  _type: 'indexHeroes';
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  indexHeroImages?: {
    featuredLocations?: BrandfolderImage;
    findYourSpace?: BrandfolderImage;
    newsAndReports?: BrandfolderImage;
    caseStudies?: BrandfolderImage;
  };
};

export type NavigationItem = {
  _type: 'navigationItem';
  label?: string;
  link?:
    | {
        _ref: string;
        _type: 'reference';
        _weak?: boolean;
        [internalGroqTypeReferenceTo]?: 'featuredLocations';
      }
    | {
        _ref: string;
        _type: 'reference';
        _weak?: boolean;
        [internalGroqTypeReferenceTo]?: 'existingCustomers';
      }
    | {
        _ref: string;
        _type: 'reference';
        _weak?: boolean;
        [internalGroqTypeReferenceTo]?: 'generalInformation';
      }
    | {
        _ref: string;
        _type: 'reference';
        _weak?: boolean;
        [internalGroqTypeReferenceTo]?: 'twoColumnEditorial';
      };
  subnav?: Array<
    {
      _key: string;
    } & NavigationItem
  >;
};

export type TwoColumnEditorial = {
  _id: string;
  _type: 'twoColumnEditorial';
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  metadata?: Metadata;
  parentLocation?:
    | {
        _ref: string;
        _type: 'reference';
        _weak?: boolean;
        [internalGroqTypeReferenceTo]?: 'existingCustomers';
      }
    | {
        _ref: string;
        _type: 'reference';
        _weak?: boolean;
        [internalGroqTypeReferenceTo]?: 'featuredLocations';
      };
  title: string;
  slug: Slug;
  heroImage?: BrandfolderImage;
  content?: Array<
    | ({
        _key: string;
      } & PlainText)
    | ({
        _key: string;
      } & RichText)
    | ({
        _key: string;
      } & TwoColumnRichText)
    | ({
        _key: string;
      } & TwoCardSection)
    | ({
        _key: string;
      } & ThreeCardSection)
    | ({
        _key: string;
      } & FourCardSection)
    | ({
        _key: string;
      } & ImageRow)
    | ({
        _key: string;
      } & HorizontalContentCard)
    | ({
        _key: string;
      } & TwoColumnList)
    | ({
        _key: string;
      } & TwoColumnRichTextAndImage)
    | ({
        _key: string;
      } & FullWidthImage)
    | ({
        _key: string;
      } & VerticalTabs)
    | ({
        _key: string;
      } & PdfDownload)
  >;
  sideContent?: Array<
    | ({
        _key: string;
      } & ContentCard)
    | ({
        _key: string;
      } & RichText)
    | ({
        _key: string;
      } & LinkList)
  >;
};

export type GeneralInformation = {
  _id: string;
  _type: 'generalInformation';
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  metadata?: Metadata;
  parentLocation?:
    | {
        _ref: string;
        _type: 'reference';
        _weak?: boolean;
        [internalGroqTypeReferenceTo]?: 'existingCustomers';
      }
    | {
        _ref: string;
        _type: 'reference';
        _weak?: boolean;
        [internalGroqTypeReferenceTo]?: 'featuredLocations';
      };
  title: string;
  slug: Slug;
  content?: Array<
    | ({
        _key: string;
      } & PlainText)
    | ({
        _key: string;
      } & RichText)
    | ({
        _key: string;
      } & TwoColumnRichText)
    | ({
        _key: string;
      } & TwoCardSection)
    | ({
        _key: string;
      } & ThreeCardSection)
    | ({
        _key: string;
      } & FourCardSection)
    | ({
        _key: string;
      } & ImageRow)
    | ({
        _key: string;
      } & HorizontalContentCard)
    | ({
        _key: string;
      } & TwoColumnList)
    | ({
        _key: string;
      } & TwoColumnRichTextAndImage)
    | ({
        _key: string;
      } & FullWidthImage)
    | ({
        _key: string;
      } & VerticalTabs)
    | ({
        _key: string;
      } & PdfDownload)
  >;
};

export type ExistingCustomers = {
  _id: string;
  _type: 'existingCustomers';
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  metadata?: Metadata;
  title: string;
  pageIntroText: string;
  heroImage?: BrandfolderImage;
  content?: Array<
    | ({
        _key: string;
      } & PlainText)
    | ({
        _key: string;
      } & RichText)
    | ({
        _key: string;
      } & TwoColumnRichText)
    | ({
        _key: string;
      } & TwoCardSection)
    | ({
        _key: string;
      } & ThreeCardSection)
    | ({
        _key: string;
      } & FourCardSection)
    | ({
        _key: string;
      } & ImageRow)
    | ({
        _key: string;
      } & HorizontalContentCard)
    | ({
        _key: string;
      } & TwoColumnList)
    | ({
        _key: string;
      } & TwoColumnRichTextAndImage)
    | ({
        _key: string;
      } & FullWidthImage)
    | ({
        _key: string;
      } & VerticalTabs)
    | ({
        _key: string;
      } & PdfDownload)
  >;
};

export type Navigation = {
  _id: string;
  _type: 'navigation';
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  title?: string;
  findYourSpace?: Array<
    {
      _key: string;
    } & NavigationItem
  >;
  featuredLocations?: Array<
    {
      _key: string;
    } & NavigationItem
  >;
  whyUs?: Array<
    {
      _key: string;
    } & NavigationItem
  >;
  existingCustomers?: Array<
    {
      _key: string;
    } & NavigationItem
  >;
};

export type Errors = {
  _id: string;
  _type: 'errors';
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  errors?: {
    fourohfour?: string;
    fivehundred?: string;
    fourhundred?: string;
    property?: string;
  };
};

export type Globals = {
  _id: string;
  _type: 'globals';
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  siteName?: string;
  footerLinks?: Array<
    {
      _key: string;
    } & FooterLink
  >;
  socialMedia?: Array<
    {
      _key: string;
    } & SocialMediaAccount
  >;
};

export type PropertyDetails = {
  _id: string;
  _type: 'propertyDetails';
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  terms?: string;
  why_us?: string;
  reasons_list?: {
    reason1_title?: string;
    reason1_description?: string;
    reason2_title?: string;
    reason2_description?: string;
    reason3_title?: string;
    reason3_description?: string;
  };
};

export type FullWidthImage = {
  _type: 'fullWidthImage';
  image?: {
    id?: string;
    url?: string;
    alt_text?: string;
  };
};

export type Footer = {
  _type: 'footer';
  featuredLinks?: Array<
    {
      _key: string;
    } & FooterLink
  >;
};

export type FooterLink = {
  _type: 'footerLink';
  label: string;
  href: string;
};

export type LinkList = {
  _type: 'linkList';
  title?: string;
  items: Array<{
    title: string;
    url: string;
    _key: string;
  }>;
};

export type ImageRow = {
  _type: 'imageRow';
  image?: {
    id?: string;
    url?: string;
    alt_text?: string;
  };
  title: string;
  content: string;
  ctaText: string;
  ctaUrl: string;
  ctaColour?: 'navy' | 'teal' | 'orange' | 'white';
  ctaIcon?: 'phone' | 'email' | 'search';
  cta2text?: string;
  cta2url?: string;
  cta2colour?: 'navy' | 'teal' | 'orange' | 'white';
  cta2icon?: 'phone' | 'email' | 'search';
  dark?: boolean;
  overlayText: boolean;
};

export type PdfDownload = {
  _type: 'pdfDownload';
  pdf?: {
    id?: string;
    name?: string;
    filePath?: string;
    fileSize?: number;
  };
};

export type HorizontalContentCardSection = {
  _type: 'horizontalContentCardSection';
  cards?: Array<
    {
      _key: string;
    } & HorizontalContentCard
  >;
};

export type HorizontalContentCard = {
  _type: 'horizontalContentCard';
  image?: {
    id?: string;
    url?: string;
  };
  title: string;
  content: string;
  linkText: string;
  linkUrl: string;
  ctaType?: 'link' | 'button' | 'clickable';
  swapSides?: boolean;
};

export type ContentCard = {
  _type: 'contentCard';
  image?: {
    id?: string;
    url?: string;
    alt_text?: string;
  };
  isFeatured?: boolean;
  title: string;
  content?: string;
  linkText: string;
  linkUrl: string;
  ctaType?: 'link' | 'button' | 'clickable';
};

export type FourCardSection = {
  _type: 'fourCardSection';
  cards: Array<
    {
      _key: string;
    } & ContentCard
  >;
};

export type ThreeCardSection = {
  _type: 'threeCardSection';
  cards: Array<
    {
      _key: string;
    } & ContentCard
  >;
};

export type TwoCardSection = {
  _type: 'twoCardSection';
  cards: Array<
    {
      _key: string;
    } & ContentCard
  >;
};

export type PlainText = {
  _type: 'plainText';
  title: string;
  body: string;
};

export type TwoColumnRichTextAndImage = {
  _type: 'twoColumnRichTextAndImage';
  richText: Array<{
    children?: Array<{
      marks?: Array<string>;
      text?: string;
      _type: 'span';
      _key: string;
    }>;
    style?: 'normal' | 'h2' | 'h3' | 'h4' | 'blockquote' | 'hardBreak';
    listItem?: 'bullet' | 'number';
    markDefs?: Array<{
      href?: string;
      _type: 'link';
      _key: string;
    }>;
    level?: number;
    _type: 'block';
    _key: string;
  }>;
  image?: {
    id?: string;
    url?: string;
    alt_text?: string;
  };
};

export type TwoColumnRichText = {
  _type: 'twoColumnRichText';
  richText: Array<{
    children?: Array<{
      marks?: Array<string>;
      text?: string;
      _type: 'span';
      _key: string;
    }>;
    style?: 'normal' | 'h2' | 'h3' | 'h4' | 'blockquote' | 'hardBreak';
    listItem?: 'bullet' | 'number';
    markDefs?: Array<{
      href?: string;
      _type: 'link';
      _key: string;
    }>;
    level?: number;
    _type: 'block';
    _key: string;
  }>;
};

export type Hero = {
  _type: 'hero';
  title?: string;
  description?: string;
  backgroundImage?: {
    asset?: {
      _ref: string;
      _type: 'reference';
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: 'sanity.imageAsset';
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    _type: 'image';
  };
};

export type SanityImageCrop = {
  _type: 'sanity.imageCrop';
  top?: number;
  bottom?: number;
  left?: number;
  right?: number;
};

export type SanityImageHotspot = {
  _type: 'sanity.imageHotspot';
  x?: number;
  y?: number;
  height?: number;
  width?: number;
};

export type SanityImageAsset = {
  _id: string;
  _type: 'sanity.imageAsset';
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  originalFilename?: string;
  label?: string;
  title?: string;
  description?: string;
  altText?: string;
  sha1hash?: string;
  extension?: string;
  mimeType?: string;
  size?: number;
  assetId?: string;
  uploadId?: string;
  path?: string;
  url?: string;
  metadata?: SanityImageMetadata;
  source?: SanityAssetSourceData;
};

export type SanityAssetSourceData = {
  _type: 'sanity.assetSourceData';
  name?: string;
  id?: string;
  url?: string;
};

export type SanityImageMetadata = {
  _type: 'sanity.imageMetadata';
  location?: Geopoint;
  dimensions?: SanityImageDimensions;
  palette?: SanityImagePalette;
  lqip?: string;
  blurHash?: string;
  hasAlpha?: boolean;
  isOpaque?: boolean;
};

export type FeaturedProperty = {
  _type: 'featuredProperty';
  address: string;
  description?: string;
  propertyThumbnail: string;
  propertyThumbnailAltText: string;
  propertyUrl: string;
};

export type FeaturedLocationsSub = {
  _id: string;
  _type: 'featuredLocationsSub';
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  metadata?: Metadata;
  parentLocation?: {
    _ref: string;
    _type: 'reference';
    _weak?: boolean;
    [internalGroqTypeReferenceTo]?: 'featuredLocations';
  };
  title: string;
  slug: Slug;
  pageIntroText: string;
  heroImage?: BrandfolderImage;
  textArea: RichText;
  contactUsCTATitle: string;
  contactUsCTADescription: string;
  content?: Array<
    | ({
        _key: string;
      } & PlainText)
    | ({
        _key: string;
      } & RichText)
    | ({
        _key: string;
      } & TwoColumnRichText)
    | ({
        _key: string;
      } & TwoCardSection)
    | ({
        _key: string;
      } & ThreeCardSection)
    | ({
        _key: string;
      } & FourCardSection)
    | ({
        _key: string;
      } & ImageRow)
    | ({
        _key: string;
      } & HorizontalContentCard)
    | ({
        _key: string;
      } & TwoColumnList)
    | ({
        _key: string;
      } & TwoColumnRichTextAndImage)
    | ({
        _key: string;
      } & FullWidthImage)
    | ({
        _key: string;
      } & VerticalTabs)
    | ({
        _key: string;
      } & PdfDownload)
  >;
};

export type FeaturedLocations = {
  _id: string;
  _type: 'featuredLocations';
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  metadata?: Metadata;
  name: string;
  slug: Slug;
  showInNav?: boolean;
  keystoneSearchTerm: string;
  radius?: 0 | 0.25 | 0.5 | 1 | 3 | 5 | 10 | 15 | 20 | 25 | 50;
  textArea: RichText;
  contactUsCTATitle: string;
  contactUsCTADescription: string;
  featuredProperties: Array<
    {
      _key: string;
    } & FeaturedProperty
  >;
  locationImage?: BrandfolderImage;
  contentCardHeading?: string;
  contentCards: Array<
    {
      _key: string;
    } & ContentCard
  >;
  composableContentHeading?: string;
  content?: Array<
    | ({
        _key: string;
      } & PlainText)
    | ({
        _key: string;
      } & RichText)
    | ({
        _key: string;
      } & TwoColumnRichText)
    | ({
        _key: string;
      } & TwoCardSection)
    | ({
        _key: string;
      } & ThreeCardSection)
    | ({
        _key: string;
      } & FourCardSection)
    | ({
        _key: string;
      } & ImageRow)
    | ({
        _key: string;
      } & HorizontalContentCard)
    | ({
        _key: string;
      } & TwoColumnList)
    | ({
        _key: string;
      } & TwoColumnRichTextAndImage)
    | ({
        _key: string;
      } & FullWidthImage)
    | ({
        _key: string;
      } & VerticalTabs)
    | ({
        _key: string;
      } & PdfDownload)
  >;
  cardData?: {
    description: string;
    thumbnailImage: BrandfolderImage;
  };
};

export type RichText = {
  _type: 'richText';
  richText: Array<{
    children?: Array<{
      marks?: Array<string>;
      text?: string;
      _type: 'span';
      _key: string;
    }>;
    style?: 'normal' | 'h2' | 'h3' | 'h4' | 'blockquote' | 'hardBreak';
    listItem?: 'bullet' | 'number';
    markDefs?: Array<{
      href?: string;
      _type: 'link';
      _key: string;
    }>;
    level?: number;
    _type: 'block';
    _key: string;
  }>;
};

export type Slug = {
  _type: 'slug';
  current: string;
  source?: string;
};

export type Metadata = {
  _type: 'metadata';
  title?: string;
  description?: string;
};

export type ComposableContent = Array<
  | ({
      _key: string;
    } & PlainText)
  | ({
      _key: string;
    } & RichText)
  | ({
      _key: string;
    } & TwoColumnRichText)
  | ({
      _key: string;
    } & TwoCardSection)
  | ({
      _key: string;
    } & ThreeCardSection)
  | ({
      _key: string;
    } & FourCardSection)
  | ({
      _key: string;
    } & ImageRow)
  | ({
      _key: string;
    } & HorizontalContentCard)
  | ({
      _key: string;
    } & TwoColumnList)
  | ({
      _key: string;
    } & TwoColumnRichTextAndImage)
  | ({
      _key: string;
    } & FullWidthImage)
  | ({
      _key: string;
    } & VerticalTabs)
  | ({
      _key: string;
    } & PdfDownload)
>;

export type BrandfolderPdf = {
  _type: 'brandfolderPdf';
  id?: string;
  url?: string;
};

export type BrandfolderImage = {
  _type: 'brandfolderImage';
  id?: string;
  url?: string;
  alt_text?: string;
  width?: number;
  height?: number;
};

export type AllSanitySchemaTypes =
  | SanityImagePaletteSwatch
  | SanityImagePalette
  | SanityImageDimensions
  | SanityFileAsset
  | Geopoint
  | VerticalTabsItem
  | VerticalTabs
  | Homepage
  | TwoColumnList
  | Spacer
  | SocialMediaAccount
  | IndexHeroes
  | NavigationItem
  | TwoColumnEditorial
  | GeneralInformation
  | ExistingCustomers
  | Navigation
  | Errors
  | Globals
  | PropertyDetails
  | FullWidthImage
  | Footer
  | FooterLink
  | LinkList
  | ImageRow
  | PdfDownload
  | HorizontalContentCardSection
  | HorizontalContentCard
  | ContentCard
  | FourCardSection
  | ThreeCardSection
  | TwoCardSection
  | PlainText
  | TwoColumnRichTextAndImage
  | TwoColumnRichText
  | Hero
  | SanityImageCrop
  | SanityImageHotspot
  | SanityImageAsset
  | SanityAssetSourceData
  | SanityImageMetadata
  | FeaturedProperty
  | FeaturedLocationsSub
  | FeaturedLocations
  | RichText
  | Slug
  | Metadata
  | ComposableContent
  | BrandfolderPdf
  | BrandfolderImage;
export declare const internalGroqTypeReferenceTo: unique symbol;

type ColorAttribute = {
  name: "Color";
  options: Color[];
};
type SelectedColorAttribute = {
  name: "Color";
  option: Color;
};

type Attribute = ColorAttribute;
type SelectedAttribute = SelectedColorAttribute;

type Specification = {
  category: string;
  name: string;
  value: string;
};

type Collection = {
  id: number;
  name: string;
  slug: string;
  description: string;
};
type Product = {
  id: number;
  name: string;
  price: number;
  vin: string;
  description: string;
  specifications: Specification[];
  collection: Collection;
  images: {
    src: string;
    alt: string;
    width: number;
    height: number;
    metaData: {
      attributes?: SelectedAttribute[];
    };
  }[];
  rating: {
    value: number;
    max: number;
  };
  attributes: Attribute[];
  variants: {
    id: number;
    attributes: SelectedColorAttribute[];
  }[];

  deliveryNote?: string;
  about: {
    iconSrc: string;
    title: string;
  }[];
  details: {
    title: string;
    content: string;
  }[];
};

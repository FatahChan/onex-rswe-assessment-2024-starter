type RGB = `rgb(${number}, ${number}, ${number})`;
type RGBA = `rgba(${number}, ${number}, ${number}, ${number})`;
type HEX = `#${string}`;
type ColorName =
  | "black"
  | "white"
  | "gray"
  | "silver"
  | "maroon"
  | "red"
  | "purple"
  | "fushsia"
  | "green"
  | "lime"
  | "olive"
  | "yellow"
  | "navy"
  | "blue"
  | "teal"
  | "aqua";
type Color = RGB | RGBA | HEX | ColorName;

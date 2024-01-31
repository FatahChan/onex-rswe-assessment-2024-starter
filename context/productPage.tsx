"use client";
import {
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  createContext,
  useEffect,
  useState,
} from "react";
type ProductPageContextType = {
  selectedAttribues: SelectedAttribute[];
  setSelectedAttribues: Dispatch<SetStateAction<SelectedAttribute[]>>;
};
export const ProductPageContext = createContext<ProductPageContextType>({
  selectedAttribues: [],
  setSelectedAttribues: () => {},
});

function ProductPageProvider({ children }: PropsWithChildren) {
  const [selectedAttribues, setSelectedAttribues] = useState<
    SelectedAttribute[]
  >([]);
  return (
    <ProductPageContext.Provider
      value={{ selectedAttribues, setSelectedAttribues }}
    >
      {children}
    </ProductPageContext.Provider>
  );
}

export default ProductPageProvider;

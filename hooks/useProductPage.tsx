import { useContext } from "react";
import { ProductPageContext } from "@/context/productPage";

function useProductPage() {
  const context = useContext(ProductPageContext);
  if (context === undefined) {
    throw new Error("useProductPage must be used within a ProductPageProvider");
  }
  return context;
}

export default useProductPage;

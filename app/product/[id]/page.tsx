import ProductPageProvider from "@/context/productPage";

import ProductSectionCarousel from "@/components/productSectionCarousel";
import ProductSectionSpecification from "@/components/productSectionSpecification";
import ProdcutSectionSidebar from "@/components/productSectionSidebar";
import ProductSectionAboutProduct from "@/components/productSectionAboutProduct";
import products from "@/data/products"; // TODO: fetch products from API

export async function generateStaticParams() {
  // TODO: fetch products from API to generate static pages
  // sql: select id from products
  return [{ id: "1" }];
}

async function ProductPage({ params: { id } }: { params: { id: string } }) {
  const product: Product | undefined = products.find(
    (p) => p.id === Number(id)
  );
  if (!product) {
    return <div>Product not found</div>;
  }
  const { specifications, images } = product;
  return (
    <ProductPageProvider>
      <div className="max-w-[1340px] m-auto flex flex-col gap-20 my-8 text-body2">
        <div>
          <div className="flex flex-row gap-10 justify-center">
            <ProductSectionCarousel images={images} className="w-8/12" />
            <ProdcutSectionSidebar {...product} className="w-4/12" />
          </div>
        </div>
        <ProductSectionAboutProduct aboutProduct={product.about} />
        <ProductSectionSpecification Specifications={specifications} />
      </div>
    </ProductPageProvider>
  );
}

export default ProductPage;

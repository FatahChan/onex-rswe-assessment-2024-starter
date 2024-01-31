import Image from "next/image";
interface ProductSectionAboutProductProps {
  aboutProduct: Product["about"];
}
function ProductSectionAboutProduct({
  aboutProduct,
}: ProductSectionAboutProductProps) {
  return (
    <div>
      <h4 className="text-h4 font-semibold mb-16">About this Car</h4>
      <div className="flex items-center justify-center gap-32">
        {aboutProduct.map((item) => (
          <span key={item.title} className="flex gap-5">
            <Image
              src={item.iconSrc}
              alt="gas station"
              width="20"
              height="20"
              className="object-contain w-8 h-8"
            />
            <p className="text-body1">{item.title}</p>
          </span>
        ))}
      </div>
    </div>
  );
}

export default ProductSectionAboutProduct;

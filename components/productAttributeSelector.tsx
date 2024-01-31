"use client";

import useProductPage from "@/hooks/useProductPage";
import { SwatchGroup, SwatchGroupItem } from "./ui/swatch";

type ProductVariantSelectorProps = {
  attributes: Product["attributes"];
  variants: Product["variants"];
};

function VariantSelector({ attribute }: { attribute: Attribute }) {
  const { selectedAttribues, setSelectedAttribues } = useProductPage();
  const handleChange = (value: SelectedAttribute["option"]) => {
    const index = selectedAttribues.findIndex((a) => a.name === attribute.name);
    if (index === -1) {
      setSelectedAttribues([
        ...selectedAttribues,
        { name: attribute.name, option: value },
      ]);
    } else {
      setSelectedAttribues([
        ...selectedAttribues.slice(0, index),
        { name: attribute.name, option: value },
        ...selectedAttribues.slice(index + 1),
      ]);
    }
  };
  return (
    <div>
      <SwatchGroup
        defaultValue={attribute.options[0]}
        onValueChange={handleChange}
      >
        {attribute.options.map((option) => (
          <SwatchGroupItem key={option} value={option}>
            {option}
          </SwatchGroupItem>
        ))}
      </SwatchGroup>
    </div>
  );
}
function ProductVariantSelector({
  attributes,
  variants,
}: ProductVariantSelectorProps) {
  return (
    <div className="flex flex-col gap-6">
      {attributes.map((attribute) => (
        <div key={attribute.name} className="flex flex-col gap-6">
          <h2 className="text-h2 font-semibold">{attribute.name}</h2>
          <VariantSelector attribute={attribute} />
        </div>
      ))}
    </div>
  );
}

export default ProductVariantSelector;

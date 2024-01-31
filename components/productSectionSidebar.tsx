import React from "react";
import { Button } from "./ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import ProductVariantSelector from "./productAttributeSelector";
import Rating from "./ui/rating";
import { Badge } from "./ui/badge";
import ProductOrderButton from "./productOrderButton";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface ProductSideProps {
  id: Product["id"];
  name: Product["name"];
  price: Product["price"];
  vin: Product["vin"];
  attributes: Product["attributes"];
  variants: Product["variants"];
  collection: Product["collection"];
  deliveryNote?: Product["deliveryNote"];
  details?: Product["details"];
  className?: string;
}

function ProdcutSectionSidebar({
  id,
  name,
  price,
  vin,
  variants,
  attributes,
  collection,
  deliveryNote,
  details,
  className,
}: ProductSideProps) {
  // TODO: Add currency formatting based on nav selection
  const SGD = Intl.NumberFormat("en-SG", {
    style: "currency",
    currency: "SGD",
  });
  return (
    <div className={cn("flex flex-col gap-6 items-start", className)}>
      <Badge className="oveline uppercase bg-cyan-200 text-blue-700">New</Badge>
      <h1 className="text-h4 font-semibold">{name}</h1>
      <p>
        <span className="text-gray-400 font-semibold">VIN</span> {vin}
      </p>

      <Rating max={5} value={5} color="#FFB400" />

      <h5 className="text-h5">{SGD.format(price)}</h5>
      <hr className="w-full" />

      <ProductVariantSelector attributes={attributes} variants={variants} />
      <ProductOrderButton productId={id} />

      {deliveryNote ? (
        <p className="text-gray-400 self-center">{deliveryNote}</p>
      ) : null}

      <div className="flex flex-col gap-6 justify-center items-start">
        <h5 className="text-h5">{collection.description}</h5>
        <Button variant={"link"} className="p-0 text-blue-700 underline">
          <Link href={`/collection/${collection.slug}`}>
            View the {collection.name} collection
          </Link>
        </Button>
      </div>
      {details ? (
        <Accordion type="single" collapsible className="w-full text-subtitle2">
          {details?.map((detail) => (
            <AccordionItem value={detail.title} key={detail.title}>
              <AccordionTrigger className="text-subtitle2 font-semibold">
                {detail.title}
              </AccordionTrigger>
              <AccordionContent className="text-subtitle2 font-normal">
                {detail.content}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      ) : null}
    </div>
  );
}

export default ProdcutSectionSidebar;

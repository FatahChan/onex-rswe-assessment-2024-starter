"use client";
import { type CarouselApi } from "@/components/ui/carousel";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import { useCallback, useEffect, useMemo, useState } from "react";
import { cn } from "@/lib/utils";
import useProductPage from "@/hooks/useProductPage";
import Image from "next/image";

type ProductSectionCarouselProps = {
  images: Product["images"];
  className?: string;
};
function ProductSectionCarousel({
  images,
  className,
}: ProductSectionCarouselProps) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const { selectedAttribues } = useProductPage();
  const [mainApi, setMainApi] = useState<CarouselApi>();
  const [thumbsApi, setThumbsApi] = useState<CarouselApi>();

  const filteredImages = useMemo(() => {
    return images.filter((image) => {
      if (!image.metaData.attributes) return true;
      return selectedAttribues.every((selectedAttribute) => {
        const attribute = image.metaData.attributes?.find(
          (a) => a.name === selectedAttribute.name
        );
        if (!attribute) return false;
        return attribute.option === selectedAttribute.option;
      });
    });
  }, [selectedAttribues, images]);
  const onThumbsClick = useCallback(
    (index: number) => {
      if (!mainApi) return;
      mainApi.scrollTo(index);
    },
    [mainApi]
  );
  const onSelect = useCallback(() => {
    if (!mainApi || !thumbsApi) return;
    setSelectedIndex(mainApi.selectedScrollSnap());
    thumbsApi.scrollTo(mainApi.selectedScrollSnap());
  }, [mainApi, thumbsApi]);

  useEffect(() => {
    if (!mainApi) return;
    onSelect();
    mainApi.on("select", onSelect);
    mainApi.on("reInit", onSelect);
  }, [mainApi, onSelect]);

  return (
    <div className={cn("mx-12 relative", className)}>
      <Carousel
        opts={{
          loop: true,
        }}
        setApi={setMainApi}
      >
        <CarouselContent>
          {filteredImages.map((image) => (
            <CarouselItem key={image.src} className="pl-0">
              <div className="h-[43rem] flex justify-center items-center">
                <Image
                  src={image.src}
                  width={image.width}
                  height={image.height}
                  sizes="80vw"
                  alt="product image"
                  className="object-cover w-full h-full"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      <div className="w-6/12 m-auto mt-4">
        <Carousel
          opts={{
            containScroll: "keepSnaps",
            dragFree: true,
            loop: true,
          }}
          setApi={setThumbsApi}
        >
          <CarouselContent>
            {filteredImages.map((image, i) => (
              <CarouselItem key={image.src} className="pl-2 basis-1/5">
                <button
                  className={cn("w-full rounded-sm")}
                  onClick={() => onThumbsClick(i)}
                >
                  <div className="h-14">
                    <Image
                      src={image.src}
                      width={image.width}
                      height={image.height}
                      sizes="10vw"
                      alt="product image"
                      className={cn("opacity-50 object-cover w-full h-full", {
                        "opacity-100": selectedIndex === i,
                      })}
                    />
                  </div>
                </button>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </div>
  );
}

export default ProductSectionCarousel;

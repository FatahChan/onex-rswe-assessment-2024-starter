"use client";

import * as React from "react";
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";

import { cn } from "@/lib/utils";

const SwatchGroup = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root>
>(({ className, ...props }, ref) => {
  return (
    <RadioGroupPrimitive.Root
      className={cn("flex gap-2", className)}
      {...props}
      ref={ref}
    />
  );
});
SwatchGroup.displayName = RadioGroupPrimitive.Root.displayName;

const SwatchGroupItem = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item>
>(({ className, ...props }, ref) => {
  return (
    <RadioGroupPrimitive.Item
      ref={ref}
      className={cn(
        "aspect-square h-8 w-8 rounded-full border border-gray-400 text-primary ring-offset-background focus:outline-none focus-visible:ring-5 focus-visible:ring-offset-5 disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      {...props}
      style={{
        backgroundColor: props.value,
      }}
    >
      <RadioGroupPrimitive.Indicator className="flex items-center justify-center relative -z-10">
        <div className="absolute border-2 border-green-400 w-10 h-10 rounded-full "></div>
      </RadioGroupPrimitive.Indicator>
      <span className="sr-only">{props.value}</span>
    </RadioGroupPrimitive.Item>
  );
});
SwatchGroupItem.displayName = RadioGroupPrimitive.Item.displayName;

export { SwatchGroup, SwatchGroupItem };

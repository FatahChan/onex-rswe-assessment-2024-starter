"use client";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";
interface ProductOrderButtonProps {
  className?: string;
  productId: Product["id"];
}
function ProductOrderButton({ className, productId }: ProductOrderButtonProps) {
  const router = useRouter();
  const handleClick = () => {
    router.push(`/app/product/${productId}/order`);
  };
  return (
    <Button
      className={cn(
        "w-full text-subtitle2 text-cyan-200 bg-blue-700",
        className
      )}
    >
      Order Now
    </Button>
  );
}

export default ProductOrderButton;

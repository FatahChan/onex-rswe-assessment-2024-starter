import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex justify-center items-center h-16 w-full">
      <Button variant={"link"} asChild>
        <Link href="/product/1">Click here to go to product page</Link>
      </Button>
    </div>
  );
}

import { cn } from "@/lib/utils";
import React from "react";
import { Table, TableBody, TableRow, TableCell } from "./ui/table";

interface ProductSectionSpecificationProps {
  Specifications: Specification[];
}

function ProductSectionSpecification({
  Specifications,
}: ProductSectionSpecificationProps) {
  const specificationsGroupbyCategory =
    Specifications?.reduce((acc, cur) => {
      if (acc[cur.category]) {
        acc[cur.category].push(cur);
      } else {
        acc[cur.category] = [cur];
      }
      return acc;
    }, {} as Record<Specification["category"], Specification[]>) ?? {};
  return (
    <div>
      <h4 className="text-h4 font-semibold mb-16">Specification</h4>
      <div className="grid grid-cols-3 grid-rows-2 gap-x-40 gap-y-7">
        {Object.keys(specificationsGroupbyCategory).map((category, i) => {
          let className = "";
          switch (i % 4) {
            case 0:
              className = "col-start-1 row-span-2";
              break;
            case 1:
              className = "col-start-2 row-span-2";
              break;
            default:
              className = "col-start-3";
              break;
          }
          return (
            <div key={category} className={cn(className)}>
              <h6 className="text-left mb-6 text-h6">{category}</h6>
              <Table>
                <TableBody>
                  {specificationsGroupbyCategory[category].map((spec) => {
                    return (
                      <TableRow key={spec.name} className="border-0 p-0">
                        <TableCell className="text-left px-0 py-2">
                          {spec.name}
                        </TableCell>
                        <TableCell className="text-left px-0 py-2">
                          {spec.value}
                        </TableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ProductSectionSpecification;

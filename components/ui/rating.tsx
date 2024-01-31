import { Star } from "lucide-react";
import React from "react";

// interface ButtonProps
//   extends React.

interface RatingProps extends React.SVGAttributes<HTMLOrSVGElement> {
  value: number;
  max: number;
  color?: Color;
  className?: string;
}
function Rating({
  value = 1,
  max = 5,
  color = "yellow",
  className,
  ...props
}: RatingProps) {
  return (
    <div className="flex">
      {Array.from({ length: max }, (_, i) => (
        <Star
          key={i}
          fill={i + 1 <= value ? color : "currentColor"}
          strokeWidth={0}
        />
      ))}
    </div>
  );
}

export default Rating;

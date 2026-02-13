import { useRef, useEffect } from "react";
import katex from "katex";

interface MathDecorationProps {
  formula: string;
  className?: string;
  fontSize?: string;
}

export default function MathDecoration({
  formula,
  className = "",
  fontSize = "4rem",
}: MathDecorationProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current) {
      katex.render(formula, ref.current, {
        throwOnError: false,
        displayMode: true,
      });
    }
  }, [formula]);

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className={`math-decoration pointer-events-none select-none ${className}`}
      style={{ fontSize }}
    />
  );
}

import { useEffect, useRef, useState } from "react";
import { useInView, animate } from "framer-motion";

interface Props {
  to: number;
  decimals?: number;
  duration?: number;
}

export default function AnimatedCounter({
  to,
  decimals = 0,
  duration = 1.5,
}: Props) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    if (!isInView) return;
    const controls = animate(0, to, {
      duration,
      ease: "easeOut",
      onUpdate: (v) => setDisplay(v.toFixed(decimals)),
    });
    return controls.stop;
  }, [isInView, to, decimals, duration]);

  return <span ref={ref}>{display}</span>;
}

import { motion } from "framer-motion";
import { ReactNode } from "react";
import { cn } from "../../lib/utils";

interface BlurInProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
}

export function BlurIn({ children, className, delay = 0, duration = 0.6 }: BlurInProps) {
  return (
    <motion.div
      initial={{ opacity: 0, filter: "blur(10px)", y: 20 }}
      animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
      transition={{ duration, delay, ease: "easeOut" }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}
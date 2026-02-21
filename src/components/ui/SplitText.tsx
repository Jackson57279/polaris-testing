import { motion } from "framer-motion";
import { cn } from "../../lib/utils";

interface SplitTextProps {
  text: string;
  className?: string;
  delay?: number;
  duration?: number;
  staggerDelay?: number;
}

export function SplitText({ 
  text, 
  className, 
  delay = 0, 
  duration = 0.6,
  staggerDelay = 0.08 
}: SplitTextProps) {
  const words = text.split(" ");

  return (
    <span className={cn("inline-block", className)}>
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden mr-[0.25em] last:mr-0">
          <motion.span
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration,
              delay: delay + i * staggerDelay,
              ease: [0.2, 0.65, 0.3, 0.9],
            }}
            className="inline-block"
          >
            {word}
          </motion.span>
        </span>
      ))}
    </span>
  );
}
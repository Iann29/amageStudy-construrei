import React from 'react';
import { motion, Variants } from 'framer-motion';

interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  y?: number;
  x?: number;
  className?: string;
  once?: boolean;
  threshold?: number;
}

const FadeIn: React.FC<FadeInProps> = ({
  children,
  delay = 0,
  duration = 0.5,
  y = 20,
  x = 0,
  className = '',
  once = true,
  threshold = 0.1,
}) => {
  const variants: Variants = {
    hidden: { 
      opacity: 0, 
      y: y,
      x: x 
    },
    visible: { 
      opacity: 1, 
      y: 0, 
      x: 0,
      transition: {
        duration,
        delay,
        ease: [0.25, 0.1, 0.25, 1]
      }
    }
  };

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ 
        once,
        amount: threshold 
      }}
      variants={variants}
    >
      {children}
    </motion.div>
  );
};

export default FadeIn;

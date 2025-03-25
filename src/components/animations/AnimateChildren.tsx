import React from 'react';
import { motion, Variants } from 'framer-motion';

interface AnimateChildrenProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  staggerChildren?: number;
  once?: boolean;
  threshold?: number;
}

const AnimateChildren: React.FC<AnimateChildrenProps> = ({
  children,
  className = '',
  delay = 0,
  staggerChildren = 0.1,
  once = true,
  threshold = 0.1,
}) => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: delay,
        staggerChildren: staggerChildren,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  // Clone children and add motion variants
  const enhancedChildren = React.Children.map(children, (child) => {
    // Skip if child is not a valid element
    if (!React.isValidElement(child)) return child;
    
    return (
      <motion.div variants={itemVariants}>
        {child}
      </motion.div>
    );
  });

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ 
        once,
        amount: threshold 
      }}
      variants={containerVariants}
    >
      {enhancedChildren}
    </motion.div>
  );
};

export default AnimateChildren;

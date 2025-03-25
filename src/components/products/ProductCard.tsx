import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Product } from '../../types/product';
import Button from '../common/Button';

interface ProductCardProps {
  product: Product;
  delay?: number;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, delay = 0 }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <motion.div 
      className="group relative bg-white rounded-xl overflow-hidden transform transition-all duration-500"
      style={{
        boxShadow: "rgba(0, 0, 0, 0.05) 0px 10px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px"
      }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.5, delay }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      {/* Card header with diagonal stripe */}
      <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-primary-400 via-accent-400 to-primary-600 z-10" />
      
      {/* Product image with parallax effect */}
      <div className="relative h-52 overflow-hidden">
        <Link to={`/produtos/${product.id}`} className="block h-full">
          <motion.div 
            className="relative h-full"
            whileHover={{ scale: 1.08 }}
            transition={{ duration: 0.5, ease: [0.19, 1, 0.22, 1] }}
          >
            <motion.img 
              src={product.imageUrl} 
              alt={product.name} 
              className="w-full h-full object-cover"
              style={{filter: isHovered ? 'brightness(1.05)' : 'brightness(1)'}}
              transition={{ duration: 0.3 }}
            />
            
            {/* Category badge - positioned at top left with pill shape */}
            {product.category && (
              <div className="absolute top-3 left-3 z-20">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary-100 text-primary-800 backdrop-blur-sm bg-opacity-80">
                  <span className="w-2 h-2 rounded-full bg-primary-500 mr-2" />
                  {product.category}
                </span>
              </div>
            )}
            
            {/* Availability badge */}
            {!product.inStock && (
              <motion.div 
                className="absolute top-3 right-3 z-20 px-3 py-1 rounded-full text-xs font-medium bg-danger-100 text-danger-700 backdrop-blur-sm bg-opacity-80"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: delay + 0.2 }}
              >
                <span className="flex items-center">
                  <svg className="w-3 h-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  Esgotado
                </span>
              </motion.div>
            )}
          </motion.div>
        </Link>
        
        {/* Hover effect - reveal details */}
        <AnimatePresence>
          {isHovered && product.inStock && (
            <motion.div 
              className="absolute inset-0 bg-gradient-to-t from-secondary-900 to-transparent flex items-end justify-center p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <Link to={`/produtos/${product.id}`} className="text-white font-medium">
                Ver detalhes completos →
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      
      {/* Card content */}
      <div className="p-4 relative">
        {/* Dynamic product name with hover effect */}
        <Link to={`/produtos/${product.id}`}>
          <h3 className="text-lg font-medium text-secondary-800 group-hover:text-primary-600 transition-colors duration-300 relative inline-block">
            {product.name}
            <motion.span 
              className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-primary-500 group-hover:w-full"
              transition={{ duration: 0.3, ease: "easeInOut" }}
              style={{ width: isHovered ? '100%' : '0%' }}
            />
          </h3>
        </Link>
        
        {/* Ratings with animated stars */}
        {product.rating !== undefined && (
          <div className="flex items-center mt-2">
            <div className="flex">
              {Array.from({ length: 5 }).map((_, i) => {
                // Calculate fill percentage for this star
                const fillPercent = Math.max(0, Math.min(100, (product.rating! - i) * 100));
                
                return (
                  <div key={i} className="relative w-4 h-4 mr-0.5">
                    {/* Background star (empty) */}
                    <svg className="w-4 h-4 text-secondary-300 absolute" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    
                    {/* Foreground star (filled) with clip path based on rating */}
                    <svg 
                      className="w-4 h-4 text-accent-400 absolute" 
                      fill="currentColor" 
                      viewBox="0 0 20 20"
                      style={{ 
                        clipPath: `inset(0 ${100 - fillPercent}% 0 0)`,
                        transition: 'clip-path 0.3s ease'
                      }}
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </div>
                );
              })}
              <span className="ml-1 text-xs text-secondary-500">
                ({product.rating.toFixed(1)})
              </span>
            </div>
          </div>
        )}
        
        {/* Price display with decorative element */}
        <div className="flex justify-between items-center mt-4">
          <div className="relative">
            <motion.span 
              className="text-xl font-bold text-primary-700"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: delay + 0.3 }}
            >
              R$ {product.price.toFixed(2)}
            </motion.span>
            <div className="absolute -bottom-1.5 -left-1 w-12 h-1.5 bg-accent-200/50 -rotate-1 rounded-full" />
          </div>
          
          {/* Add to cart button with micro-interaction */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: delay + 0.4 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              variant="primary"
              size="sm"
              onClick={() => {
                console.log('Produto adicionado:', product.id);
              }}
              className="rounded-full relative overflow-hidden"
            >
              <span className="flex items-center relative z-10">
                <svg className="w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                Adicionar
              </span>
              <motion.div 
                className="absolute inset-0 bg-primary-400"
                initial={{ x: "-100%" }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
                style={{ opacity: 0.2 }}
              />
            </Button>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Product } from '../../types/product';
import { FaShoppingCart, FaEye, FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';

interface ProductCardProps {
  product: Product;
  delay?: number;
  showAddToCart?: boolean;
  showQuickView?: boolean;
}

const ProductCard: React.FC<ProductCardProps> = ({ 
  product, 
  delay = 0, 
  showAddToCart = true,
  showQuickView = true 
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [showQuickViewModal, setShowQuickViewModal] = useState(false);
  
  // Função para renderizar estrelas de avaliação
  const renderRating = (rating: number = 0) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating - fullStars >= 0.5;
    
    for (let i = 1; i <= 5; i++) {
      if (i <= fullStars) {
        stars.push(<FaStar key={i} className="text-yellow-400" />);
      } else if (i === fullStars + 1 && hasHalfStar) {
        stars.push(<FaStarHalfAlt key={i} className="text-yellow-400" />);
      } else {
        stars.push(<FaRegStar key={i} className="text-gray-300" />);
      }
    }
    
    return (
      <div className="flex items-center">
        <div className="flex">{stars}</div>
        {product.reviewCount && (
          <span className="text-xs text-gray-500 ml-1">({product.reviewCount})</span>
        )}
      </div>
    );
  };
  
  // Formatar preço
  const formatPrice = (price: number) => `R$ ${price.toFixed(2).replace('.', ',')}`;
  
  // Calcular desconto
  const getDiscount = () => {
    if (!product.originalPrice || product.originalPrice <= product.price) return null;
    const discount = ((product.originalPrice - product.price) / product.originalPrice) * 100;
    return `-${Math.round(discount)}%`;
  };
  
  const discount = getDiscount();

  return (
    <div 
      className="relative h-full rounded-lg overflow-hidden bg-white shadow-sm hover:shadow-lg transition-shadow duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Área da imagem */}
      <div className="relative pt-[100%]">
        {/* Imagem com transição suave */}
        <img 
          src={product.imageUrl} 
          alt={product.name}
          className="absolute top-0 left-0 w-full h-full object-contain p-3 transition-transform duration-300 ease-out"
          style={{ transform: isHovered ? 'scale(1.05)' : 'scale(1)' }}
        />
        
        {/* Tag de desconto ou destaque */}
        {(discount || product.tag) && (
          <div className="absolute top-2 right-2 z-10">
            <span className={`inline-block px-2 py-1 text-xs font-bold rounded-full shadow-sm ${
              discount 
                ? 'bg-red-500 text-white' 
                : product.tag === 'Mais Vendido' 
                  ? 'bg-primary-500 text-white' 
                  : 'bg-blue-500 text-white'
            }`}>
              {discount || product.tag}
            </span>
          </div>
        )}
        
        {/* Indicador de esgotado */}
        {!product.inStock && (
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center z-10">
            <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium shadow">
              Esgotado
            </span>
          </div>
        )}
        
        {/* Botão de visualização rápida */}
        {showQuickView && product.inStock && (
          <AnimatePresence>
            {isHovered && (
              <motion.div 
                className="absolute bottom-0 left-0 right-0 flex justify-center items-center p-3 bg-gradient-to-t from-black/70 to-transparent z-10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.2 }}
              >
                <button
                  onClick={() => setShowQuickViewModal(true)}
                  className="bg-white text-gray-800 hover:bg-gray-100 px-4 py-2 rounded-full text-sm font-medium shadow-md flex items-center transition-colors"
                >
                  <FaEye className="mr-2" /> Visualização Rápida
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        )}
      </div>
      
      {/* Informações do produto */}
      <div className="p-4 flex flex-col h-[calc(100%-100%)]">
        {/* Nome do produto com link */}
        <Link to={`/produtos/${product.id}`} className="block">
          <h3 className="text-gray-800 font-medium text-base line-clamp-2 mb-1 hover:text-primary-600 transition-colors min-h-[2.5rem]">
            {product.name}
          </h3>
        </Link>
        
        {/* Avaliações */}
        {product.rating ? (
          <div className="mb-2">
            {renderRating(product.rating)}
          </div>
        ) : (
          <div className="mb-2" />
        )}
        
        {/* Área de preço */}
        <div className="mt-auto pt-2">
          <div className="flex items-baseline mb-3">
            <span className="text-lg font-bold text-gray-800">
              {formatPrice(product.price)}
              {product.unit && (
                <span className="text-xs font-normal text-gray-500 ml-1">{product.unit}</span>
              )}
            </span>
            
            {product.originalPrice && (
              <span className="ml-2 text-xs text-gray-500 line-through">
                {formatPrice(product.originalPrice)}
              </span>
            )}
          </div>
          
          {/* Botões de ação */}
          <div className="flex gap-2">
            <Link to={`/produtos/${product.id}`} className="flex-1">
              <button className="w-full py-2 px-3 border border-gray-300 text-gray-700 rounded hover:bg-gray-50 text-sm transition-colors">
                Detalhes
              </button>
            </Link>
            
            {showAddToCart && product.inStock && (
              <button
                onClick={() => console.log('Produto adicionado:', product.id)}
                className="flex-1 py-2 px-3 bg-primary-500 hover:bg-primary-600 text-white rounded text-sm transition-colors flex items-center justify-center"
              >
                <FaShoppingCart className="mr-1 text-xs" />
                Comprar
              </button>
            )}
          </div>
        </div>
      </div>
      
      {/* Modal de visualização rápida */}
      <AnimatePresence>
        {showQuickViewModal && (
          <div className="fixed inset-0 bg-black/60 flex items-center justify-center p-4 z-50" onClick={() => setShowQuickViewModal(false)}>
            <motion.div
              className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-auto"
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Cabeçalho */}
              <div className="flex justify-between items-center p-4 border-b">
                <h3 className="text-xl font-bold text-gray-800">{product.name}</h3>
                <button 
                  onClick={() => setShowQuickViewModal(false)}
                  className="text-gray-500 hover:text-gray-700 p-1"
                >
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              {/* Conteúdo */}
              <div className="p-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Imagem */}
                  <div className="aspect-square bg-gray-50 rounded flex items-center justify-center p-4">
                    <img 
                      src={product.imageUrl} 
                      alt={product.name} 
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>
                  
                  {/* Detalhes */}
                  <div className="flex flex-col">
                    {/* Preço e avaliações */}
                    <div>
                      <div className="flex items-baseline mb-3">
                        <span className="text-2xl font-bold text-gray-800">
                          {formatPrice(product.price)}
                          {product.unit && (
                            <span className="text-sm font-medium text-gray-500 ml-1">
                              {product.unit}
                            </span>
                          )}
                        </span>
                        
                        {product.originalPrice && (
                          <span className="ml-2 text-sm text-gray-500 line-through">
                            {formatPrice(product.originalPrice)}
                          </span>
                        )}
                      </div>
                      
                      {product.rating && (
                        <div className="mb-4">
                          {renderRating(product.rating)}
                        </div>
                      )}
                    </div>
                    
                    {/* Disponibilidade */}
                    <div className="mb-4">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        product.inStock 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-red-100 text-red-800'
                      }`}>
                        {product.inStock ? 'Em estoque' : 'Esgotado'}
                      </span>
                    </div>
                    
                    {/* Descrição */}
                    {product.description && (
                      <div className="mb-6">
                        <h4 className="text-sm font-semibold text-gray-700 mb-2">Descrição</h4>
                        <p className="text-gray-600 text-sm">{product.description}</p>
                      </div>
                    )}
                    
                    {/* Botões de ação */}
                    <div className="mt-auto space-y-3">
                      {product.inStock ? (
                        <button
                          onClick={() => {
                            console.log('Produto adicionado:', product.id);
                            setShowQuickViewModal(false);
                          }}
                          className="w-full py-2 bg-primary-500 hover:bg-primary-600 text-white rounded transition-colors flex items-center justify-center"
                        >
                          <FaShoppingCart className="mr-2" />
                          Adicionar ao Carrinho
                        </button>
                      ) : (
                        <button
                          disabled
                          className="w-full py-2 bg-gray-300 text-gray-500 rounded cursor-not-allowed flex items-center justify-center"
                        >
                          Produto Esgotado
                        </button>
                      )}
                      
                      <Link to={`/produtos/${product.id}`} className="block w-full">
                        <button className="w-full py-2 border border-gray-300 text-gray-700 hover:bg-gray-50 rounded transition-colors">
                          Ver Detalhes Completos
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ProductCard;

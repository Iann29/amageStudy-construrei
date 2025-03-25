import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaStar, FaChevronRight, FaArrowRight } from 'react-icons/fa';
import getImageUrl from '../../utils/debugImages';

// Tipos
interface ProductItem {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviews: number;
  img: string;
  tag?: string;
  unit?: string;
}

// Dados dos produtos
const bestSellers: ProductItem[] = [
  { id: '1', name: 'Cimento Super Forte 50kg - Marca Líder', price: 49.90, originalPrice: 55.00, rating: 4.5, reviews: 120, img: getImageUrl('/images/products/cimento-forte.jpg'), tag: 'Mais Vendido' },
  { id: '2', name: 'Kit Chuveiro Moderno Cromado Ducha Luxo', price: 289.90, originalPrice: 350.00, rating: 4.8, reviews: 85, img: getImageUrl('/images/products/chuveiro-moderno.jpg'), tag: '-17%' },
  { id: '3', name: 'Furadeira de Impacto Pro 750W 220V', price: 450.00, rating: 4.7, reviews: 210, img: getImageUrl('/images/products/furadeira-pro.jpg') },
  { id: '4', name: 'Tinta Premium Acrílica Branco Neve 18L', price: 320.00, rating: 4.6, reviews: 150, img: getImageUrl('/images/products/tinta-premium.jpg') },
  { id: '5', name: 'Porcelanato Calacatta Gold Polido 80x80cm', price: 119.90, unit: '/m²', rating: 4.9, reviews: 95, img: getImageUrl('/images/products/porcelanato-calacatta.jpg'), tag: 'Premium' },
  { id: '6', name: 'Caixa d\'Água Fortlev 1000L', price: 499.00, originalPrice: 549.00, rating: 4.4, reviews: 112, img: getImageUrl('/images/products/caixa-fortlev.jpg'), tag: '-9%' },
  { id: '7', name: 'Argamassa ACIII Cinza 20kg', price: 25.50, rating: 4.3, reviews: 180, img: getImageUrl('/images/products/argamassa-ac3.jpg') },
  { id: '8', name: 'Conjunto Vaso Sanitário + Caixa Acoplada Smart', price: 699.00, originalPrice: 780.00, rating: 4.6, reviews: 77, img: getImageUrl('/images/products/vaso-smart.jpg'), tag: '-10%' },
];

const BestSellersSection: React.FC = () => {
  return (
    <section className="py-16 md:py-20">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-secondary-800 mb-4">Produtos Mais Vendidos</h2>
          <p className="text-lg text-secondary-600 max-w-3xl mx-auto">
            Qualidade e preço justo para sua obra. Confira nossos produtos mais populares.
          </p>
        </motion.div>

        {/* Slider de Produtos */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="product-swiper">
            {bestSellers.map((product) => (
              <div key={product.id} className="h-full">
                <div
                  className="bg-white rounded-lg border border-gray-100 shadow-card overflow-hidden h-full flex flex-col"
                >
                  
                  {/* Imagem do produto com marca d'água */}
                  <div className="relative h-52 bg-white p-4 flex items-center justify-center">
                    <img src={product.img} alt={product.name} className="max-h-full max-w-full object-contain" />
                    
                    {/* Tag de promoção ou destaque */}
                    {product.tag && (
                      <div className={`absolute top-2 right-2 py-1 px-3 rounded-md text-xs font-bold ${
                        product.tag === 'Mais Vendido' 
                          ? 'bg-primary-500 text-white' 
                          : product.tag.startsWith('-') 
                            ? 'bg-warning-500 text-white' 
                            : 'bg-accent-600 text-white'
                      }`}>
                        {product.tag}
                      </div>
                    )}
                  </div>
                  
                  <div className="p-4 flex-grow flex flex-col justify-between">
                    {/* Nome e avaliação */}
                    <div>
                      <h3 className="font-medium text-secondary-800 line-clamp-2 mb-2 min-h-[2.5rem]">{product.name}</h3>
                      
                      <div className="flex items-center mb-3">
                        <div className="flex text-warning-500">
                          {[...Array(5)].map((_, i) => (
                            <FaStar key={i} className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'text-warning-500' : 'text-gray-300'}`} />
                          ))}
                        </div>
                        <span className="text-xs text-secondary-500 ml-1">
                          ({product.reviews})
                        </span>
                      </div>
                    </div>
                    
                    {/* Preço e CTA */}
                    <div>
                      <div className="flex items-baseline mb-3">
                        {product.originalPrice && (
                          <span className="text-secondary-400 line-through text-sm mr-2">
                            R$ {product.originalPrice.toFixed(2).replace('.', ',')}
                          </span>
                        )}
                        <span className="text-xl font-bold text-primary-700">
                          R$ {product.price.toFixed(2).replace('.', ',')}
                          {product.unit && <span className="text-sm font-normal">{product.unit}</span>}
                        </span>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <Link to={`/produtos/${product.id}`}>
                          <button className="text-primary-600 hover:text-primary-700 text-sm font-medium underline-offset-2 hover:underline flex items-center transition-colors">
                            Ver detalhes
                            <FaChevronRight className="ml-1 text-xs" />
                          </button>
                        </Link>
                        <button className="bg-primary-500 hover:bg-primary-600 text-white p-2 rounded-md shadow-button hover:shadow-md transition-all">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
        
        {/* Chamada para Ação - Catálogo Completo */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Link to="/produtos">
            <button className="inline-flex items-center px-8 py-3 bg-secondary-700 hover:bg-secondary-800 text-white font-medium rounded-lg shadow-md transition-all duration-300 hover:shadow-lg">
              Ver Catálogo Completo
              <FaArrowRight className="ml-2" />
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default BestSellersSection;

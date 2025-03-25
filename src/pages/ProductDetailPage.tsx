import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Button from '../components/common/Button';
import { Product } from '../types/product';
import FadeIn from '../components/animations/FadeIn';
import AnimateChildren from '../components/animations/AnimateChildren';
import ScaleIn from '../components/animations/ScaleIn';

// Dados de exemplo para demonstração
const dummyProducts: Product[] = [
  {
    id: '1',
    name: 'Furadeira de Impacto 750W',
    price: 299.90,
    imageUrl: 'https://placehold.co/600x400/e5e7eb/a3a3a3?text=Furadeira',
    description: 'Furadeira de impacto profissional com potência de 750W, ideal para trabalhos em alvenaria e madeira. Acompanha maleta com brocas para diversos tipos de materiais e possui ajuste de velocidade para maior controle durante o uso.',
    category: 'Ferramentas',
    inStock: true,
    rating: 4.5
  },
  {
    id: '2',
    name: 'Conjunto de Chaves de Fenda',
    price: 89.90,
    imageUrl: 'https://placehold.co/600x400/e5e7eb/a3a3a3?text=Chaves',
    description: 'Kit com 12 chaves de fenda de diversos tamanhos para diferentes tipos de parafusos. Fabricadas em aço cromo-vanádio com cabos emborrachados para melhor aderência e conforto durante o uso.',
    category: 'Ferramentas',
    inStock: true,
    rating: 4.2
  },
  {
    id: '3',
    name: 'Lâmpada LED 9W',
    price: 15.90,
    imageUrl: 'https://placehold.co/600x400/e5e7eb/a3a3a3?text=Lâmpada',
    description: 'Lâmpada LED de baixo consumo, 9W, equivalente a 60W, luz branca. Proporciona economia de energia com alta luminosidade e durabilidade garantida de até 25.000 horas de uso.',
    category: 'Material Elétrico',
    inStock: true,
    rating: 4.8
  },
  {
    id: '4',
    name: 'Tomada Dupla 10A',
    price: 12.50,
    imageUrl: 'https://placehold.co/600x400/e5e7eb/a3a3a3?text=Tomada',
    description: 'Tomada dupla com amperagem de 10A, padrão brasileiro. Produzida com material antichamas e contatos de latão para melhor condutividade elétrica.',
    category: 'Material Elétrico',
    inStock: false,
    rating: 4.0
  },
  {
    id: '5',
    name: 'Torneira para Banheiro',
    price: 79.90,
    imageUrl: 'https://placehold.co/600x400/e5e7eb/a3a3a3?text=Torneira',
    description: 'Torneira para banheiro com acabamento cromado. Fabricada em metal com sistema de abertura de 1/4 de volta, proporciona economia de água e maior durabilidade.',
    category: 'Material Hidráulico',
    inStock: true,
    rating: 4.6
  }
];

const ProductDetailPage: React.FC = () => {
  const { productId } = useParams<{ productId: string }>();
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);
  
  // Buscar o produto pelo ID
  const product = dummyProducts.find(p => p.id === productId);
  
  if (!product) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <FadeIn>
          <div className="bg-white p-10 rounded-lg shadow-md max-w-md mx-auto">
            <motion.div 
              className="text-5xl mb-6 text-red-500"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              ⚠️
            </motion.div>
            <h2 className="text-2xl font-bold mb-4">Produto não encontrado</h2>
            <p className="mb-6 text-gray-600">O produto que você está procurando não existe ou foi removido.</p>
            <Link to="/produtos">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button variant="primary">Ver outros produtos</Button>
              </motion.div>
            </Link>
          </div>
        </FadeIn>
      </div>
    );
  }

  // Produtos relacionados (da mesma categoria)
  const relatedProducts = dummyProducts
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  // Mock de imagens adicionais para o produto
  const productImages = [
    product.imageUrl,
    product.imageUrl.replace('text=', 'text=Detalhe+'),
    product.imageUrl.replace('text=', 'text=Vista+'),
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Navegação de Migalhas de Pão */}
      <FadeIn delay={0.1}>
        <div className="flex items-center text-sm text-gray-500 mb-6 flex-wrap">
          <Link to="/" className="hover:text-blue-600 transition-colors">
            <span className="flex items-center">
              <svg className="w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              Início
            </span>
          </Link>
          <svg className="w-3 h-3 mx-2 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
          <Link to="/produtos" className="hover:text-blue-600 transition-colors">Produtos</Link>
          <svg className="w-3 h-3 mx-2 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
          <Link to={`/produtos?category=${product.category}`} className="hover:text-blue-600 transition-colors">
            {product.category}
          </Link>
          <svg className="w-3 h-3 mx-2 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
          <span className="text-gray-700 font-medium truncate">{product.name}</span>
        </div>
      </FadeIn>
      
      {/* Seção de Detalhes do Produto */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {/* Imagem do Produto */}
        <FadeIn delay={0.2}>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <motion.div
              className="relative overflow-hidden rounded-md"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <motion.img 
                key={activeImage}
                src={productImages[activeImage]} 
                alt={product.name} 
                className="w-full h-auto object-contain rounded-md"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
              
              {!product.inStock && (
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                  <motion.div 
                    className="bg-red-500 text-white px-6 py-3 rounded-lg font-bold text-lg"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    PRODUTO ESGOTADO
                  </motion.div>
                </div>
              )}
            </motion.div>
            
            <div className="grid grid-cols-3 gap-2 mt-4">
              {productImages.map((img, index) => (
                <motion.div
                  key={index}
                  className={`border-2 rounded cursor-pointer overflow-hidden ${
                    index === activeImage ? 'border-blue-500' : 'border-gray-200'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setActiveImage(index)}
                >
                  <img 
                    src={img} 
                    alt={`${product.name} - vista ${index + 1}`} 
                    className="w-full h-20 object-cover"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </FadeIn>
        
        {/* Informações do Produto */}
        <FadeIn delay={0.3} y={20}>
          <div>
            <motion.h1 
              className="text-3xl font-bold mb-2"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {product.name}
            </motion.h1>
            
            {product.category && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.1 }}
              >
                <Link 
                  to={`/produtos?category=${product.category}`} 
                  className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full hover:bg-blue-200 transition-colors mb-4"
                >
                  {product.category}
                </Link>
              </motion.div>
            )}
            
            <motion.div 
              className="flex items-center mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              {Array.from({ length: 5 }).map((_, index) => (
                <svg 
                  key={index} 
                  className={`w-5 h-5 ${index < Math.floor(product.rating || 0) 
                    ? 'text-yellow-400' 
                    : index < (product.rating || 0) 
                      ? 'text-yellow-300' 
                      : 'text-gray-300'}`}
                  fill="currentColor" 
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
              <span className="text-gray-500 ml-2">({product.rating})</span>
            </motion.div>
            
            <motion.p 
              className="text-3xl font-bold text-blue-700 mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              R$ {product.price.toFixed(2)}
            </motion.p>
            
            <motion.div
              className="bg-gray-50 p-4 rounded-lg mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <p className="text-gray-700 leading-relaxed">
                {product.description}
              </p>
            </motion.div>
            
            <motion.div 
              className="mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <div className="flex items-center mb-4">
                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                  product.inStock 
                    ? 'bg-green-100 text-green-800' 
                    : 'bg-red-100 text-red-800'
                }`}>
                  <span className={`w-2 h-2 rounded-full mr-1 ${product.inStock ? 'bg-green-500' : 'bg-red-500'}`}></span>
                  {product.inStock ? 'Em estoque' : 'Fora de estoque'}
                </span>
              </div>
              
              <div className="flex items-center space-x-4">
                <motion.div 
                  className="flex items-center border border-gray-300 rounded-md overflow-hidden"
                  whileHover={{ borderColor: '#3b82f6' }}
                >
                  <motion.button 
                    className="px-3 py-1 border-r border-gray-300 bg-gray-100 hover:bg-gray-200 transition-colors"
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setQuantity(prev => (prev > 1 ? prev - 1 : 1))}
                    disabled={!product.inStock}
                  >
                    -
                  </motion.button>
                  <span className="px-4 py-1 font-medium">{quantity}</span>
                  <motion.button 
                    className="px-3 py-1 border-l border-gray-300 bg-gray-100 hover:bg-gray-200 transition-colors"
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setQuantity(prev => prev + 1)}
                    disabled={!product.inStock}
                  >
                    +
                  </motion.button>
                </motion.div>
                
                <motion.div 
                  className="flex-1"
                  whileHover={{ scale: product.inStock ? 1.02 : 1 }}
                  whileTap={product.inStock ? { scale: 0.98 } : {}}
                >
                  <Button 
                    variant="primary" 
                    className="w-full flex items-center justify-center"
                    disabled={!product.inStock}
                  >
                    <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    Adicionar ao Carrinho
                  </Button>
                </motion.div>
              </div>
            </motion.div>
            
            <AnimateChildren staggerChildren={0.1} delay={0.6}>
              <div className="border-t border-gray-200 pt-4">
                <div className="flex items-center text-gray-500 mb-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                  </svg>
                  <span>Pague em até 12x no cartão</span>
                </div>
                <div className="flex items-center text-gray-500 mb-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                  </svg>
                  <span>Frete grátis para compras acima de R$ 300,00</span>
                </div>
                <div className="flex items-center text-gray-500">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  <span>Garantia de 12 meses diretamente com o fabricante</span>
                </div>
              </div>
            </AnimateChildren>
          </div>
        </FadeIn>
      </div>
      
      {/* Produtos Relacionados */}
      <ScaleIn delay={0.4}>
        <section className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold">Produtos Relacionados</h2>
            <Link to={`/produtos?category=${product.category}`} className="text-blue-600 hover:text-blue-800 font-medium hover:underline">
              Ver Mais
            </Link>
          </div>
          
          <AnimateChildren staggerChildren={0.1} delay={0.2}>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((relatedProduct) => (
                <Link 
                  key={relatedProduct.id} 
                  to={`/produtos/${relatedProduct.id}`}
                  className="no-underline"
                >
                  <motion.div 
                    className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300"
                    whileHover={{ y: -5 }}
                  >
                    <div className="h-48 overflow-hidden">
                      <motion.img 
                        src={relatedProduct.imageUrl} 
                        alt={relatedProduct.name} 
                        className="w-full h-full object-cover"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="text-lg font-medium mb-1 text-gray-900 hover:text-blue-600 transition-colors">
                        {relatedProduct.name}
                      </h3>
                      <p className="text-gray-500 text-sm mb-2">{relatedProduct.category}</p>
                      <div className="flex justify-between items-center mt-2">
                        <span className="font-bold text-blue-700">R$ {relatedProduct.price.toFixed(2)}</span>
                        <div className="flex items-center text-sm text-gray-500">
                          <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                          <span className="ml-1">{relatedProduct.rating}</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </Link>
              ))}
            </div>
          </AnimateChildren>
        </section>
      </ScaleIn>
    </div>
  );
};

export default ProductDetailPage;

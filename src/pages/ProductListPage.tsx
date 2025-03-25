import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ProductCard from '../components/products/ProductCard';
import ProductFilter, { FilterOptions } from '../components/products/ProductFilter';
import { Product } from '../types/product';
import FadeIn from '../components/animations/FadeIn';
import AnimateChildren from '../components/animations/AnimateChildren';

// Dados de exemplo para demonstração
const dummyProducts: Product[] = [
  {
    id: '1',
    name: 'Furadeira de Impacto 750W',
    price: 299.90,
    imageUrl: 'https://placehold.co/300x200/e5e7eb/a3a3a3?text=Furadeira',
    description: 'Furadeira de impacto profissional com potência de 750W, ideal para trabalhos em alvenaria e madeira.',
    category: 'Ferramentas',
    inStock: true,
    rating: 4.5
  },
  {
    id: '2',
    name: 'Conjunto de Chaves de Fenda',
    price: 89.90,
    imageUrl: 'https://placehold.co/300x200/e5e7eb/a3a3a3?text=Chaves',
    description: 'Kit com 12 chaves de fenda de diversos tamanhos para diferentes tipos de parafusos.',
    category: 'Ferramentas',
    inStock: true,
    rating: 4.2
  },
  {
    id: '3',
    name: 'Lâmpada LED 9W',
    price: 15.90,
    imageUrl: 'https://placehold.co/300x200/e5e7eb/a3a3a3?text=Lâmpada',
    description: 'Lâmpada LED de baixo consumo, 9W, equivalente a 60W, luz branca.',
    category: 'Material Elétrico',
    inStock: true,
    rating: 4.8
  },
  {
    id: '4',
    name: 'Tomada Dupla 10A',
    price: 12.50,
    imageUrl: 'https://placehold.co/300x200/e5e7eb/a3a3a3?text=Tomada',
    description: 'Tomada dupla com amperagem de 10A, padrão brasileiro.',
    category: 'Material Elétrico',
    inStock: false,
    rating: 4.0
  },
  {
    id: '5',
    name: 'Torneira para Banheiro',
    price: 79.90,
    imageUrl: 'https://placehold.co/300x200/e5e7eb/a3a3a3?text=Torneira',
    description: 'Torneira para banheiro com acabamento cromado.',
    category: 'Material Hidráulico',
    inStock: true,
    rating: 4.6
  },
  {
    id: '6',
    name: 'Tubo PVC 100mm (6 metros)',
    price: 86.90,
    imageUrl: 'https://placehold.co/300x200/e5e7eb/a3a3a3?text=Tubo+PVC',
    description: 'Tubo de PVC para esgoto, 100mm de diâmetro, barra com 6 metros.',
    category: 'Material Hidráulico',
    inStock: true,
    rating: 4.3
  },
  {
    id: '7',
    name: 'Tinta Acrílica 18L',
    price: 289.90,
    imageUrl: 'https://placehold.co/300x200/e5e7eb/a3a3a3?text=Tinta',
    description: 'Tinta acrílica premium para paredes internas e externas, lata de 18 litros.',
    category: 'Tintas e Acessórios',
    inStock: true,
    rating: 4.7
  },
  {
    id: '8',
    name: 'Rolo para Pintura 23cm',
    price: 24.90,
    imageUrl: 'https://placehold.co/300x200/e5e7eb/a3a3a3?text=Rolo',
    description: 'Rolo para pintura em lã de carneiro, largura de 23cm com cabo.',
    category: 'Tintas e Acessórios',
    inStock: true,
    rating: 4.1
  }
];

const ProductListPage: React.FC = () => {
  const [filters, setFilters] = useState<FilterOptions>({
    category: '',
    minPrice: 0,
    maxPrice: 1000,
    inStock: false
  });
  
  const [isFiltersVisible, setIsFiltersVisible] = useState(false);

  const categories = Array.from(new Set(dummyProducts.map(product => product.category || '')));

  // Função para filtrar os produtos
  const filteredProducts = dummyProducts.filter(product => {
    // Verificar categoria
    if (filters.category && product.category !== filters.category) {
      return false;
    }
    
    // Verificar preço
    if (product.price < filters.minPrice || product.price > filters.maxPrice) {
      return false;
    }
    
    // Verificar estoque
    if (filters.inStock && !product.inStock) {
      return false;
    }
    
    return true;
  });

  const handleFilterChange = (newFilters: FilterOptions) => {
    setFilters(newFilters);
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <FadeIn delay={0.1}>
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-3">Nossos Produtos</h1>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Encontre todos os materiais que você precisa para sua construção ou reforma.
            Produtos de qualidade com os melhores preços.
          </p>
        </div>
      </FadeIn>
      
      {/* Mobile filter toggle */}
      <motion.div 
        className="lg:hidden mb-6 flex justify-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <button
          className="flex items-center bg-blue-600 text-white px-4 py-2 rounded-md shadow-md"
          onClick={() => setIsFiltersVisible(!isFiltersVisible)}
        >
          <svg 
            className="w-5 h-5 mr-2" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" 
            />
          </svg>
          {isFiltersVisible ? 'Ocultar Filtros' : 'Mostrar Filtros'}
        </button>
      </motion.div>
      
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Sidebar com filtros */}
        <motion.div 
          className={`w-full lg:w-1/4 ${isFiltersVisible ? 'block' : 'hidden'} lg:block`}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
            <FadeIn>
              <ProductFilter 
                onFilterChange={handleFilterChange} 
                categories={categories as string[]}
              />
            </FadeIn>
          </div>
        </motion.div>
        
        {/* Lista de produtos */}
        <div className="w-full lg:w-3/4">
          {filteredProducts.length === 0 ? (
            <FadeIn>
              <div className="text-center py-16 bg-gray-50 rounded-lg shadow-inner">
                <svg className="w-16 h-16 text-gray-400 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M12 14a3 3 0 100-6 3 3 0 000 6zM21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <h3 className="text-xl font-medium text-gray-600 mb-2">Nenhum produto encontrado</h3>
                <p className="text-gray-500 max-w-md mx-auto">
                  Não encontramos produtos que correspondam aos filtros aplicados.
                  Tente ajustar ou remover alguns filtros para ver mais resultados.
                </p>
              </div>
            </FadeIn>
          ) : (
            <AnimateChildren delay={0.3} staggerChildren={0.1}>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map((product, index) => (
                  <ProductCard 
                    key={product.id} 
                    product={product}
                    delay={index * 0.05}
                  />
                ))}
              </div>
              <div className="mt-12 text-center">
                <p className="text-gray-600 mb-4">Mostrando {filteredProducts.length} de {dummyProducts.length} produtos</p>
                <motion.button
                  className="bg-blue-600 text-white px-6 py-2 rounded-full shadow-md font-medium"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Carregar mais produtos
                </motion.button>
              </div>
            </AnimateChildren>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductListPage;

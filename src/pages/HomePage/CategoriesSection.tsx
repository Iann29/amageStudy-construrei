import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaChevronRight, FaArrowRight, FaTools, FaBolt, FaFaucet, FaPaintRoller, FaBuilding, FaWarehouse } from 'react-icons/fa';

// Tipos
interface CategoryItem {
  name: string;
  icon: React.ElementType;
  link: string;
  img: string;
}

// Dados das categorias
const featuredCategories: CategoryItem[] = [
  { name: 'Materiais Básicos', icon: FaWarehouse, link: '/produtos/basicos', img: '/images/materialbasico.webp' },
  { name: 'Elétrica', icon: FaBolt, link: '/produtos/eletrica', img: '/images/eletrica.webp' },
  { name: 'Hidráulica', icon: FaFaucet, link: '/produtos/hidraulica', img: '/images/hidraulica.webp' },
  { name: 'Ferramentas', icon: FaTools, link: '/produtos/ferramentas', img: '/images/ferramentas.webp' },
  { name: 'Acabamentos', icon: FaPaintRoller, link: '/produtos/acabamentos', img: '/images/acabamentos.webp' },
  { name: 'Estrutural', icon: FaBuilding, link: '/produtos/estrutural', img: '/images/estrutural.webp' },
];

const CategoriesSection: React.FC = () => {
  return (
    <section className="py-16 md:py-20 bg-secondary-50">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12 md:mb-14"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-secondary-800 mb-4">Categorias de Produtos</h2>
          <p className="text-lg text-secondary-600 max-w-3xl mx-auto">
            Oferecemos tudo o que você precisa para sua construção ou reforma. Navegue por nossas categorias principais.
          </p>
        </motion.div>
        
        {/* Grid de Categorias com Visual mais Robusto */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {featuredCategories.map((category, index) => (
            <motion.div
              key={category.link}
              className="group"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 * index }}
              whileHover={{ y: -5 }}
            >
              <Link to={category.link} className="block">
                <div className="bg-white rounded-lg overflow-hidden shadow-card border border-gray-100 transition-all duration-300 group-hover:shadow-lg h-full flex flex-col">
                  {/* Imagem da categoria com overlay para dar destaque ao ícone */}
                  <div className="relative h-36 bg-secondary-100 overflow-hidden">
                    {category.img && (
                      <img 
                        src={category.img} 
                        alt={category.name} 
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-secondary-900/70 to-secondary-900/20 flex items-center justify-center">
                      <category.icon className="text-white text-4xl mb-2 drop-shadow-md" />
                    </div>
                  </div>
                  
                  {/* Nome da categoria */}
                  <div className="p-4 text-center flex-grow flex flex-col justify-between">
                    <h3 className="font-semibold text-secondary-800 group-hover:text-primary-500 transition-colors">
                      {category.name}
                    </h3>
                    <div className="mt-2 text-primary-500 text-sm font-medium flex items-center justify-center">
                      <span>Ver produtos</span>
                      <FaChevronRight className="ml-1 text-xs transition-transform duration-300 group-hover:translate-x-1" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Chamada para Ação */}
        <motion.div 
          className="text-center mt-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <Link to="/produtos">
            <button className="inline-flex items-center px-6 py-3 bg-primary-500 hover:bg-primary-600 text-white font-medium rounded-lg shadow-button transition-all duration-300 hover:shadow-lg">
              Ver todas as categorias
              <FaArrowRight className="ml-2" />
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default CategoriesSection;

import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface ProductFilterProps {
  onFilterChange: (filters: FilterOptions) => void;
  categories: string[];
}

export interface FilterOptions {
  category: string;
  minPrice: number;
  maxPrice: number;
  inStock: boolean;
}

const ProductFilter: React.FC<ProductFilterProps> = ({ onFilterChange, categories }) => {
  const [filters, setFilters] = useState<FilterOptions>({
    category: '',
    minPrice: 0,
    maxPrice: 1000,
    inStock: false
  });

  // Estado para controlar qual seção de filtro está expandida (em telas menores)
  const [expandedSection, setExpandedSection] = useState<string | null>('category');

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    
    const newValue = type === 'checkbox' 
      ? (e.target as HTMLInputElement).checked 
      : type === 'number' 
        ? Number(value) 
        : value;
    
    const updatedFilters = {
      ...filters,
      [name]: newValue
    };
    
    setFilters(updatedFilters);
    onFilterChange(updatedFilters);
  };

  // Animação para cada seção
  const sectionVariants = {
    collapsed: { height: 0, opacity: 0, overflow: 'hidden' },
    expanded: { height: 'auto', opacity: 1, transition: { duration: 0.3 } }
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <motion.div 
        className="border-b border-gray-200 p-4"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <h2 className="text-xl font-semibold text-gray-800 flex items-center">
          <svg className="w-5 h-5 mr-2 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
          </svg>
          Filtros
        </h2>
      </motion.div>
      
      {/* Categoria */}
      <div className="border-b border-gray-200">
        <motion.button
          className="w-full p-4 text-left flex justify-between items-center focus:outline-none"
          onClick={() => toggleSection('category')}
          whileHover={{ backgroundColor: 'rgba(0,0,0,0.01)' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
        >
          <span className="font-medium text-gray-700">Categoria</span>
          <svg 
            className={`w-5 h-5 text-gray-500 transform transition-transform ${expandedSection === 'category' ? 'rotate-180' : ''}`}
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </motion.button>
        
        <motion.div
          variants={sectionVariants}
          initial="collapsed"
          animate={expandedSection === 'category' ? 'expanded' : 'collapsed'}
          className="px-4 pb-4"
        >
          <select
            id="category"
            name="category"
            value={filters.category}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="">Todas as categorias</option>
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
          
          {filters.category && (
            <motion.div 
              className="mt-2 flex"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
            >
              <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-1 rounded-full flex items-center">
                {filters.category}
                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    const updatedFilters = {
                      ...filters,
                      category: ''
                    };
                    setFilters(updatedFilters);
                    onFilterChange(updatedFilters);
                  }}
                  className="ml-1 text-sm"
                >
                  ×
                </button>
              </span>
            </motion.div>
          )}
        </motion.div>
      </div>

      {/* Preço */}
      <div className="border-b border-gray-200">
        <motion.button
          className="w-full p-4 text-left flex justify-between items-center focus:outline-none"
          onClick={() => toggleSection('price')}
          whileHover={{ backgroundColor: 'rgba(0,0,0,0.01)' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <span className="font-medium text-gray-700">Faixa de Preço</span>
          <svg 
            className={`w-5 h-5 text-gray-500 transform transition-transform ${expandedSection === 'price' ? 'rotate-180' : ''}`} 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </motion.button>
        
        <motion.div
          variants={sectionVariants}
          initial="collapsed"
          animate={expandedSection === 'price' ? 'expanded' : 'collapsed'}
          className="px-4 pb-4"
        >
          <div className="flex items-center space-x-2">
            <div className="relative flex-1">
              <span className="absolute left-3 top-2 text-gray-500">R$</span>
              <input
                type="number"
                name="minPrice"
                value={filters.minPrice}
                onChange={handleChange}
                className="w-full p-2 pl-8 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                min="0"
                placeholder="Min"
              />
            </div>
            <span className="text-gray-500">-</span>
            <div className="relative flex-1">
              <span className="absolute left-3 top-2 text-gray-500">R$</span>
              <input
                type="number"
                name="maxPrice"
                value={filters.maxPrice}
                onChange={handleChange}
                className="w-full p-2 pl-8 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                min="0"
                placeholder="Max"
              />
            </div>
          </div>
          
          <motion.div 
            className="mt-4 relative pt-1"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <div className="overflow-hidden h-2 text-xs flex rounded bg-gray-200">
              <div 
                style={{ 
                  width: `${Math.min(100, (filters.maxPrice / 1000) * 100)}%`,
                  marginLeft: `${Math.min(100, (filters.minPrice / 1000) * 100)}%` 
                }} 
                className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Em Estoque */}
      <div className="border-b border-gray-200">
        <motion.div
          className="p-4 flex items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <input
            id="inStock"
            name="inStock"
            type="checkbox"
            checked={filters.inStock}
            onChange={handleChange}
            className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
          />
          <label htmlFor="inStock" className="ml-2 text-sm text-gray-700">
            Apenas produtos em estoque
          </label>
        </motion.div>
      </div>
      
      {/* Botões */}
      <motion.div 
        className="p-4"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <motion.button
          className="w-full bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium py-2 px-4 rounded-md transition-colors flex items-center justify-center"
          onClick={() => {
            const resetFilters = {
              category: '',
              minPrice: 0,
              maxPrice: 1000,
              inStock: false
            };
            setFilters(resetFilters);
            onFilterChange(resetFilters);
          }}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
          </svg>
          Limpar Filtros
        </motion.button>
      </motion.div>
    </div>
  );
};

export default ProductFilter;

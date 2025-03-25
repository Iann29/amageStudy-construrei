import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTools, FaHardHat, FaShoppingCart, FaUserCircle, FaSearch, FaPhone, FaMapMarkerAlt, FaClock, FaChevronDown } from 'react-icons/fa';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Fecha o menu mobile quando a rota muda
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { path: '/', label: 'Início' },
    { path: '/produtos', label: 'Produtos' },
    { path: '/sobre', label: 'Sobre' },
    { path: '/contato', label: 'Contato' },
  ];

  // Categorias para o mega menu
  const topCategories = [
    { name: 'Materiais Básicos', path: '/produtos/materiais-basicos' },
    { name: 'Ferramentas', path: '/produtos/ferramentas' },
    { name: 'Hidráulica', path: '/produtos/hidraulica' },
    { name: 'Elétrica', path: '/produtos/eletrica' },
    { name: 'Acabamentos', path: '/produtos/acabamentos' },
    { name: 'Ferragens', path: '/produtos/ferragens' },
  ];

  return (
    <>
      {/* Topbar com informações de contato e login - estilo industrial */}
      <div className="bg-secondary-900 text-white py-2">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center space-x-5 text-sm">
            <div className="flex items-center">
              <FaPhone className="mr-2 text-primary-400" />
              <span className="font-medium">(11) 4321-1234</span>
            </div>
            <div className="flex items-center">
              <FaClock className="mr-2 text-primary-400" />
              <span>Seg - Sex: 8h às 18h • Sáb: 8h às 13h</span>
            </div>
            <div className="hidden lg:flex items-center">
              <FaMapMarkerAlt className="mr-2 text-primary-400" />
              <span>Av. Construção, 1000 - São Paulo</span>
            </div>
          </div>
          <div className="flex items-center space-x-5 text-sm">
            <Link to="/minha-conta" className="flex items-center hover:text-primary-400 transition-colors">
              <FaUserCircle className="mr-2" />
              <span className="font-medium">Minha Conta</span>
            </Link>
            <div className="hidden md:block bg-primary-500 px-3 py-0.5 rounded text-white text-xs font-bold">
              -15% NA PRIMEIRA COMPRA
            </div>
          </div>
        </div>
      </div>
      
      {/* Header principal com navegação */}
      <header className={`sticky top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white shadow-lg py-2' 
          : 'bg-gradient-to-r from-secondary-800 to-secondary-900 py-3'
      }`}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            {/* Logo com efeito de capacete de construção */}
            <Link to="/" className="relative z-50">
              <motion.div 
                className="flex items-center"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <motion.div
                  whileHover={{ rotate: [0, -10, 10, -5, 0], scale: 1.05 }}
                  transition={{ duration: 0.5 }}
                  className="flex items-center"
                >
                  <div className={`mr-2 ${isScrolled ? 'text-primary-500' : 'text-primary-400'}`}>
                    <FaHardHat className="text-3xl drop-shadow-md" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-2xl font-bold tracking-tight">
                      <span className="text-primary-500">C</span>
                      <span className={isScrolled ? 'text-secondary-800' : 'text-white'}>onstrurei</span>
                    </span>
                    <span className={`text-xs -mt-1 ${isScrolled ? 'text-secondary-600' : 'text-primary-300'}`}>
                      Materiais de Construção
                    </span>
                  </div>
                </motion.div>
              </motion.div>
            </Link>
            
            {/* Barra de pesquisa com estilo industrial */}
            <div className="hidden md:flex flex-1 max-w-xl mx-8">
              <div className="relative w-full">
                <input
                  type="text"
                  placeholder="O que você procura hoje?"
                  className="w-full py-2.5 pl-4 pr-12 rounded-lg border-2 border-secondary-200 focus:border-primary-500 focus:ring-1 focus:ring-primary-500 outline-none text-secondary-700 shadow-inner bg-white/95"
                />
                <button className="absolute right-1.5 top-1/2 transform -translate-y-1/2 bg-primary-500 hover:bg-primary-600 text-white p-2 rounded-md transition-colors">
                  <FaSearch />
                </button>
              </div>
            </div>
            
            {/* Ícones de carrinho e conta para telas menores */}
            <div className="hidden sm:flex md:hidden items-center space-x-4">
              <Link to="/carrinho" className="text-2xl relative">
                <FaShoppingCart className={isScrolled ? 'text-secondary-700' : 'text-white'} />
                <span className="absolute -top-2 -right-2 bg-primary-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">3</span>
              </Link>
              <Link to="/minha-conta" className="text-2xl">
                <FaUserCircle className={isScrolled ? 'text-secondary-700' : 'text-white'} />
              </Link>
            </div>
            
            {/* Menu Desktop e ícones */}
            <nav className="hidden md:flex items-center space-x-6">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 + 0.3 }}
                >
                  <Link 
                    to={link.path} 
                    className={`font-medium text-base relative group ${
                      location.pathname === link.path 
                        ? (isScrolled ? 'text-primary-600' : 'text-primary-300') 
                        : (isScrolled ? 'text-secondary-700 hover:text-primary-600' : 'text-white/90 hover:text-white')
                    }`}
                  >
                    {link.label}
                    <motion.span 
                      className={`absolute left-0 -bottom-1 h-[3px] ${
                        isScrolled ? 'bg-primary-500' : 'bg-primary-400'
                      } rounded-full w-0 group-hover:w-full transition-all duration-300 ${
                        location.pathname === link.path ? 'w-full' : ''
                      }`}
                    />
                  </Link>
                </motion.div>
              ))}
              
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: navLinks.length * 0.1 + 0.3 }}
                className="flex items-center space-x-1"
              >
                <Link 
                  to="/carrinho" 
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 ${
                    isScrolled 
                      ? 'bg-primary-500 text-white hover:bg-primary-600 shadow-md' 
                      : 'bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm'
                  }`}
                >
                  <FaShoppingCart className="text-lg" />
                  <span className="font-medium">Carrinho</span>
                  <span className="flex items-center justify-center ml-1 bg-white/20 text-white rounded-full w-5 h-5 text-xs font-bold">3</span>
                </Link>
              </motion.div>
            </nav>
            
            {/* Botão do Menu Mobile */}
            <motion.button
              className="md:hidden relative z-50 w-10 h-10 flex flex-col justify-center items-center"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Menu"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <span className={`block w-6 h-0.5 transition-all duration-300 ease-out ${isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : '-translate-y-1'} ${isScrolled ? 'bg-secondary-700' : 'bg-white'}`}></span>
              <span className={`block w-6 h-0.5 transition-all duration-300 ease-out ${isMobileMenuOpen ? 'opacity-0' : 'opacity-100'} ${isScrolled ? 'bg-secondary-700' : 'bg-white'}`}></span>
              <span className={`block w-6 h-0.5 transition-all duration-300 ease-out ${isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : 'translate-y-1'} ${isScrolled ? 'bg-secondary-700' : 'bg-white'}`}></span>
            </motion.button>
          </div>
        </div>
        
        {/* Categorias Navigation Bar - estilo industrial */}
        <div className={`border-t ${isScrolled ? 'border-secondary-100 bg-white' : 'border-secondary-700 bg-secondary-800'} mt-2 transition-all duration-300`}>
          <div className="container mx-auto px-4">
            <div className="hidden md:flex items-center overflow-x-auto py-2">
              <div className="flex items-center text-primary-500 font-semibold px-4 py-1 rounded-lg bg-secondary-100 mr-4">
                <FaTools className="mr-2" />
                <span>CATEGORIAS</span>
                <FaChevronDown className="ml-1 text-xs" />
              </div>
              
              <div className="flex space-x-1">
                {topCategories.map((category, index) => (
                  <Link 
                    key={category.path}
                    to={category.path}
                    className={`px-3 py-1 rounded-lg transition-all duration-200 ${
                      isScrolled 
                        ? 'text-secondary-600 hover:text-primary-500 hover:bg-secondary-50' 
                        : 'text-secondary-200 hover:text-white hover:bg-secondary-700'
                    } ${index === 0 ? 'bg-secondary-700 text-white font-medium' : ''}`}
                  >
                    {category.name}
                  </Link>
                ))}
                <Link 
                  to="/produtos"
                  className={`px-3 py-1 rounded-lg transition-all duration-200 ${
                    isScrolled 
                      ? 'text-primary-600 hover:bg-secondary-50' 
                      : 'text-primary-400 hover:bg-secondary-700'
                  } font-medium`}
                >
                  Ver todas
                </Link>
              </div>
            </div>
          </div>
        </div>
        
        {/* Menu Mobile */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden fixed inset-0 z-40 bg-gradient-to-b from-secondary-800 to-secondary-900 pt-20 pb-6 px-4 overflow-y-auto"
            >
              <div className="flex flex-col space-y-6">
                {/* Barra de pesquisa mobile */}
                <div className="relative w-full">
                  <input
                    type="text"
                    placeholder="O que você procura hoje?"
                    className="w-full py-3 pl-4 pr-12 rounded-lg border-2 border-secondary-700 bg-secondary-700/30 focus:border-primary-500 focus:ring-1 focus:ring-primary-500 outline-none text-white placeholder-white/60"
                  />
                  <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-primary-500 hover:bg-primary-600 text-white p-2 rounded-md transition-colors">
                    <FaSearch />
                  </button>
                </div>
                
                {/* Links de navegação mobile */}
                <nav className="flex flex-col space-y-3">
                  {navLinks.map((link) => (
                    <Link
                      key={link.path}
                      to={link.path}
                      className={`py-3 px-2 border-b border-secondary-700 text-lg font-medium ${
                        location.pathname === link.path
                          ? 'text-primary-400'
                          : 'text-white'
                      }`}
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>
                
                {/* Categorias mobile */}
                <div className="mt-4">
                  <h3 className="text-primary-400 font-semibold mb-3 flex items-center">
                    <FaTools className="mr-2" />
                    CATEGORIAS
                  </h3>
                  <div className="grid grid-cols-2 gap-2">
                    {topCategories.map((category) => (
                      <Link
                        key={category.path}
                        to={category.path}
                        className="bg-secondary-700/50 text-white py-2 px-3 rounded-lg text-sm hover:bg-secondary-700"
                      >
                        {category.name}
                      </Link>
                    ))}
                  </div>
                </div>
                
                {/* Contato mobile */}
                <div className="mt-4 bg-secondary-700/30 p-4 rounded-lg">
                  <h3 className="text-primary-400 font-semibold mb-2">Contato</h3>
                  <div className="flex items-center text-white mb-2">
                    <FaPhone className="mr-2 text-primary-400" />
                    <span>(11) 4321-1234</span>
                  </div>
                  <div className="flex items-center text-white">
                    <FaMapMarkerAlt className="mr-2 text-primary-400" />
                    <span>Av. Construção, 1000 - São Paulo</span>
                  </div>
                </div>
                
                {/* Botões de ação mobile */}
                <div className="grid grid-cols-2 gap-3 mt-4">
                  <Link
                    to="/minha-conta"
                    className="bg-secondary-700 text-white py-3 rounded-lg text-center font-medium"
                  >
                    Minha Conta
                  </Link>
                  <Link
                    to="/carrinho"
                    className="bg-primary-500 text-white py-3 rounded-lg text-center font-medium flex items-center justify-center"
                  >
                    <FaShoppingCart className="mr-2" />
                    Carrinho (3)
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
};

export default Header;

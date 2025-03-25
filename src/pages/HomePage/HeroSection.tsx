import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Button from '../../components/common/Button';
import { FaSearch, FaTools, FaHammer, FaShieldAlt, FaHardHat } from 'react-icons/fa';
import { MdLocalShipping } from "react-icons/md";
import { BiSupport } from "react-icons/bi";
import getImageUrl from '../../utils/debugImages';

const HeroSection: React.FC = () => {
  return (
    <motion.section
      className="relative min-h-[60vh] md:min-h-[75vh] flex items-center justify-center text-center overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration:.8 }}
    >
      {/* Background com imagem mais impactante de construção */}
      <div className="absolute inset-0 z-0">
         <img src={getImageUrl('/hero/construction-site-hero.jpg')} alt="Obra em Construção" className="w-full h-full object-cover"/>
         {/* Overlay com gradiente que usa os novos tons da marca */}
         <div className="absolute inset-0 bg-gradient-to-t from-secondary-900/90 via-secondary-800/70 to-secondary-700/50"></div>
      </div>

      {/* Banner superior com credibilidade */}
      <div className="absolute top-0 left-0 right-0 bg-primary-500 text-white py-2 z-10">
        <div className="container mx-auto px-4">
          <div className="flex justify-center items-center text-sm md:text-base font-medium">
            <FaHardHat className="mr-2" /> 
            <span className="mr-2">ENTREGA PARA TODO BRASIL</span>
            <span className="mx-2 text-white/50">|</span>
            <span className="mr-2">MAIS DE 20.000 PRODUTOS</span>
            <span className="mx-2 text-white/50">|</span>
            <span>COMPRA 100% SEGURA</span>
          </div>
        </div>
      </div>

      {/* Conteúdo Hero */}
      <motion.div
        className="relative z-10 container mx-auto px-4 text-white pt-16"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        {/* Headline mais forte e objetiva */}
        <motion.h1 
          className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight shadow-text"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <span className="text-primary-400">MATERIAIS DE CONSTRUÇÃO</span><br />
          <span className="text-white">Com Entrega Garantida</span>
        </motion.h1>
        
        {/* Subtítulo mais direto e atraente */}
        <motion.p 
          className="text-lg md:text-xl mb-10 max-w-3xl mx-auto font-light opacity-90"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          Da fundação ao acabamento, entregamos tudo para sua obra com rapidez, qualidade e melhor preço.
        </motion.p>

        {/* Barra de Busca com Estilo Industrial */}
        <motion.div 
          className="max-w-3xl mx-auto mb-10"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div className="relative">
            <input
              type="text"
              placeholder="Encontre cimento, tijolos, ferramentas e muito mais..."
              className="w-full py-4 px-6 pr-16 rounded-lg border-2 border-gray-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-300 outline-none text-gray-900 text-lg shadow-lg placeholder-gray-500"
            />
            {/* Botão de busca com cor primária */}
            <button className="absolute right-2.5 top-1/2 -translate-y-1/2 bg-primary-500 hover:bg-primary-600 text-white rounded-md p-3 transition-colors shadow-button">
              <FaSearch size={20} />
            </button>
          </div>
        </motion.div>

        {/* Botões CTA mais chamativos */}
        <motion.div 
          className="flex flex-wrap justify-center gap-4 md:gap-6"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
        >
          <Link to="/produtos">
            <Button variant="primary" size="lg" className="bg-primary-500 hover:bg-primary-600 text-white font-semibold px-8 py-3 rounded-lg shadow-button transform hover:scale-105 transition duration-300 flex items-center">
              <FaTools className="mr-2" />
              <span>Ver Produtos</span>
            </Button>
          </Link>
          <Link to="/servicos/orcamento">
            <Button variant="outline" size="lg" className="border-2 border-white text-white bg-white/5 hover:bg-white/15 font-semibold px-8 py-3 rounded-lg transition duration-300 flex items-center">
              <FaHammer className="mr-2" />
              <span>Orçamento Online</span>
            </Button>
          </Link>
        </motion.div>
        
        {/* Selos de garantia */}
        <motion.div 
          className="flex flex-wrap justify-center gap-4 md:gap-8 mt-10 text-center text-white/90 text-sm"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
        >
          <div className="flex flex-col items-center">
            <FaShieldAlt className="text-2xl mb-2 text-primary-400" />
            <span>Garantia de Qualidade</span>
          </div>
          <div className="flex flex-col items-center">
            <MdLocalShipping className="text-2xl mb-2 text-primary-400" />
            <span>Entregas Rápidas</span>
          </div>
          <div className="flex flex-col items-center">
            <BiSupport className="text-2xl mb-2 text-primary-400" />
            <span>Suporte Especializado</span>
          </div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default HeroSection;

import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Button from '../components/common/Button';
import { FaTools, FaBolt, FaFaucet, FaPaintRoller, FaBuilding, FaWarehouse, FaSearch, FaStar, FaChevronRight, FaTruckMoving, FaShieldAlt, FaHeadset, FaWhatsapp, FaArrowRight, FaHardHat, FaHammer } from 'react-icons/fa';
import { MdOutlineCategory, MdOutlinePriceCheck, MdLocalShipping } from "react-icons/md";
import { BiSupport } from "react-icons/bi";

// Importando o utilitário de imagens (assegure que funcione)
import getImageUrl from '../utils/debugImages';

// Importando estilos específicos se houver (ou use apenas Tailwind)
import '../styles/home.css'; 

// --- Dados Fictícios (mantidos) ---
const featuredCategories = [
  { name: 'Materiais Básicos', icon: FaWarehouse, link: '/produtos/basicos', img: getImageUrl('/images/categories/cat-basicos.jpg') },
  { name: 'Elétrica', icon: FaBolt, link: '/produtos/eletrica', img: getImageUrl('/images/categories/cat-eletrica.jpg') },
  { name: 'Hidráulica', icon: FaFaucet, link: '/produtos/hidraulica', img: getImageUrl('/images/categories/cat-hidraulica.jpg') },
  { name: 'Ferramentas', icon: FaTools, link: '/produtos/ferramentas', img: getImageUrl('/images/categories/cat-ferramentas.jpg') },
  { name: 'Acabamentos', icon: FaPaintRoller, link: '/produtos/acabamentos', img: getImageUrl('/images/categories/cat-acabamentos.jpg') },
  { name: 'Estrutural', icon: FaBuilding, link: '/produtos/estrutural', img: getImageUrl('/images/categories/cat-estrutural.jpg') },
];

const bestSellers = [
  { id: '1', name: 'Cimento Super Forte 50kg - Marca Líder', price: 49.90, originalPrice: 55.00, rating: 4.5, reviews: 120, img: getImageUrl('/images/products/cimento-forte.jpg'), tag: 'Mais Vendido' },
  { id: '2', name: 'Kit Chuveiro Moderno Cromado Ducha Luxo', price: 289.90, originalPrice: 350.00, rating: 4.8, reviews: 85, img: getImageUrl('/images/products/chuveiro-moderno.jpg'), tag: '-17%' },
  { id: '3', name: 'Furadeira de Impacto Pro 750W 220V', price: 450.00, rating: 4.7, reviews: 210, img: getImageUrl('/images/products/furadeira-pro.jpg') },
  { id: '4', name: 'Tinta Premium Acrílica Branco Neve 18L', price: 320.00, rating: 4.6, reviews: 150, img: getImageUrl('/images/products/tinta-premium.jpg') },
  { id: '5', name: 'Porcelanato Calacatta Gold Polido 80x80cm', price: 119.90, unit: '/m²', rating: 4.9, reviews: 95, img: getImageUrl('/images/products/porcelanato-calacatta.jpg'), tag: 'Premium' },
  { id: '6', name: 'Caixa d\'Água Fortlev 1000L', price: 499.00, originalPrice: 549.00, rating: 4.4, reviews: 112, img: getImageUrl('/images/products/caixa-fortlev.jpg'), tag: '-9%' },
  { id: '7', name: 'Argamassa ACIII Cinza 20kg', price: 25.50, rating: 4.3, reviews: 180, img: getImageUrl('/images/products/argamassa-ac3.jpg') },
  { id: '8', name: 'Conjunto Vaso Sanitário + Caixa Acoplada Smart', price: 699.00, originalPrice: 780.00, rating: 4.6, reviews: 77, img: getImageUrl('/images/products/vaso-smart.jpg'), tag: '-10%' },
];

const HomePage: React.FC = () => {

  return (
    <div className="bg-gray-50 text-gray-800">

      {/* --- Hero Section Refinada com foco em Materiais de Construção --- */}
      <motion.section
        className="relative min-h-[60vh] md:min-h-[75vh] flex items-center justify-center text-center overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
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

      {/* --- Barra de Benefícios Mais Elegante --- */}
      <section className="bg-white py-5 border-b border-gray-200 shadow-sm">
        <div className="container mx-auto px-4">
          {/* Usar um grid que se adapta melhor em telas médias */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-y-3 gap-x-6 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Itens com ícones maiores e texto mais alinhado */}
            <motion.div 
              className="flex items-center justify-center gap-2 p-2 text-sm text-gray-700 font-medium"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <FaTruckMoving className="text-primary-500 flex-shrink-0" size={24} />
              <span>Entrega Rápida</span>
            </motion.div>
            <motion.div 
              className="flex items-center justify-center gap-2 p-2 text-sm text-gray-700 font-medium"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <MdOutlinePriceCheck className="text-primary-500 flex-shrink-0" size={26} />
              <span>Melhor Preço</span>
            </motion.div>
            <motion.div 
              className="flex items-center justify-center gap-2 p-2 text-sm text-gray-700 font-medium"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <FaShieldAlt className="text-primary-500 flex-shrink-0" size={22} />
              <span>Compra Segura</span>
            </motion.div>
            <motion.div 
              className="flex items-center justify-center gap-2 p-2 text-sm text-gray-700 font-medium"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <MdOutlineCategory className="text-primary-500 flex-shrink-0" size={24} />
              <span>+10.000 Produtos</span>
            </motion.div>
            <motion.div 
              className="flex items-center justify-center gap-2 p-2 text-sm text-gray-700 font-medium col-span-2 md:col-span-1 lg:col-span-1"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <FaHeadset className="text-primary-500 flex-shrink-0" size={22} />
              <span>Suporte Especializado</span>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* --- Categorias - Cards com Visual de Construção --- */}
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

      {/* --- Produtos Mais Vendidos com Estilo de Loja de Construção --- */}
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

          {/* CTA para todos os produtos */}
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
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

      {/* --- Seção de Confiança e Credibilidade --- */}
      <section className="py-16 md:py-20 bg-secondary-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              className="order-2 md:order-1"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-secondary-800 mb-6">Por que escolher a Construrei?</h2>
              
              <div className="space-y-5">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center mr-4">
                    <FaTruckMoving className="text-primary-600 text-xl" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-secondary-800 mb-2">Entrega Garantida</h3>
                    <p className="text-secondary-600">Entregamos seus materiais no prazo combinado, garantindo o cronograma da sua obra.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center mr-4">
                    <FaShieldAlt className="text-primary-600 text-xl" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-secondary-800 mb-2">Produtos de Qualidade</h3>
                    <p className="text-secondary-600">Trabalhamos apenas com as melhores marcas do mercado para garantir a qualidade da sua obra.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center mr-4">
                    <FaHeadset className="text-primary-600 text-xl" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-secondary-800 mb-2">Atendimento Especializado</h3>
                    <p className="text-secondary-600">Nossa equipe é formada por profissionais com conhecimento técnico para melhor orientar sua compra.</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <Link to="/sobre">
                  <button className="inline-flex items-center px-6 py-3 border-2 border-primary-500 text-primary-600 hover:bg-primary-500 hover:text-white font-medium rounded-lg transition-colors duration-300">
                    Conheça nossa história
                    <FaChevronRight className="ml-2 text-sm" />
                  </button>
                </Link>
              </div>
            </motion.div>
            
            <motion.div
              className="order-1 md:order-2"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <div className="relative">
                <img 
                  src={getImageUrl('/images/about/construrei-team.jpg')} 
                  alt="Equipe Construrei" 
                  className="rounded-lg shadow-lg w-full max-w-lg mx-auto"
                />
                <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-lg">
                  <div className="flex items-center">
                    <div className="mr-4">
                      <FaStar className="text-warning-500 text-3xl" />
                    </div>
                    <div>
                      <p className="text-lg font-bold text-secondary-800">4.8/5</p>
                      <p className="text-sm text-secondary-600">Mais de 2.000 avaliações</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- CTA Final com Fundo de Construção --- */}
      <section className="relative py-20 overflow-hidden">
        {/* Background com imagem de construção */}
        <div className="absolute inset-0 z-0">
          <img src={getImageUrl('/images/cta-bg-construction.jpg')} alt="Construção" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-secondary-900/80"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            className="max-w-3xl mx-auto text-center text-white"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Pronto para iniciar sua construção?</h2>
            <p className="text-lg text-white/80 mb-10">
              Desde o alicerce até o acabamento, a Construrei tem tudo que você precisa para construir seus sonhos.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6">
              {/* Botão WhatsApp */}
              <a 
                href="https://wa.me/5511999999999" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center bg-green-600 hover:bg-green-700 text-white font-semibold px-8 py-3 rounded-lg shadow-lg transition-all duration-300 w-full sm:w-auto justify-center"
              >
                <FaWhatsapp className="mr-2 text-xl" />
                <span>Fale no WhatsApp</span>
              </a>
              
              {/* Botão Orçamento */}
              <Link to="/orcamento">
                <button className="bg-primary-500 hover:bg-primary-600 text-white font-semibold px-8 py-3 rounded-lg shadow-button transition-all duration-300 hover:shadow-lg w-full sm:w-auto">
                  Solicitar Orçamento
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

    </div> 
  );
};

export default HomePage;
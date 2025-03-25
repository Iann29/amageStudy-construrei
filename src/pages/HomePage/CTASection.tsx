import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';
import getImageUrl from '../../utils/debugImages';

const CTASection: React.FC = () => {
  return (
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
  );
};

export default CTASection;

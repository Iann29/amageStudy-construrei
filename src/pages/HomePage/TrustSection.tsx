import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaTruckMoving, FaShieldAlt, FaHeadset, FaChevronRight, FaStar } from 'react-icons/fa';
import getImageUrl from '../../utils/debugImages';

const TrustSection: React.FC = () => {
  return (
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
  );
};

export default TrustSection;

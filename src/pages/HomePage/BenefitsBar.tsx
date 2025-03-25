import React from 'react';
import { motion } from 'framer-motion';
import { FaHeadset } from 'react-icons/fa';
import { MdOutlinePriceCheck, MdLocalShipping, MdOutlineCategory } from "react-icons/md";

const BenefitsBar: React.FC = () => {
  return (
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
            className="flex items-center justify-center gap-2 p-2 text-sm text-gray-700 font-medium col-span-2 md:col-span-1 lg:col-span-1"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <MdLocalShipping className="text-primary-500 flex-shrink-0" size={24} />
            <span>Entrega para Todo Brasil</span>
          </motion.div>
          <motion.div 
            className="flex items-center justify-center gap-2 p-2 text-sm text-gray-700 font-medium"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <MdOutlinePriceCheck className="text-primary-500 flex-shrink-0" size={24} />
            <span>Menor Preço Garantido</span>
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
  );
};

export default BenefitsBar;
